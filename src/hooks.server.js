import { redirect } from '@sveltejs/kit';
import { prisma } from './lib/server/prisma';

async function authenticateUser(event) {
  const { cookies } = event;

  const session = cookies.get('session');

  if (!session) {
    return null;
  }

  const user = await prisma.user.findUnique({
    where: { session }
  });

  if (user && session && user?.session === session) {
    return user;
  }

  return null;
}

export async function handle({ event, resolve }) {
  // Stage 1
  event.locals.user = await authenticateUser(event);

  if (event.url.pathname.startsWith('/dashboard')) {
    if (!event.locals.user) {
      throw redirect(303, '/');
    }
    if (event.url.pathname.startsWith('/dashboard/admins')) {
      if (event.locals.user.roleId !== 1) {
        throw redirect(303, '/dashboard');
      }
    }
  }

  const response = await resolve(event); // Stage 2

  // Stage 3

  return response;
}
