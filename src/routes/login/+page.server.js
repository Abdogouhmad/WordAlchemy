import { fail, redirect } from '@sveltejs/kit';
import bcrypt from 'bcrypt';

import { prisma } from '../../lib/server/prisma';

export const load = async () => {
  // todo
};

export const actions = {
  login: async ({ cookies, request }) => {
    const data = await request.formData();

    const email = data.get('email');
    const password = data.get('password');

    if (
      typeof email !== 'string' ||
      typeof password !== 'string' ||
      !email ||
      !password
    ) {
      return fail(400, { invalidFormat: true });
    }

    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user) {
      return fail(400, { credentials: true });
    }

    if (!user.verified) {
      return fail(400, { verification: true });
    }

    const userPassword = await bcrypt.compare(password, user.password);

    if (!userPassword) {
      return fail(400, { credentials: true });
    }

    const session = crypto.randomUUID();

    // generate new auth token just in case
    const authenticatedUser = await prisma.user.update({
      where: { email: user.email },
      data: { session }
    });

    console.log('authenticatedUser.session -->', authenticatedUser.session);

    cookies.set('session', session, {
      // send cookie for every page
      path: '/',
      // server side only cookie so you can't use `document.cookie`
      httpOnly: true,
      // only requests from same site can send cookies
      // https://developer.mozilla.org/en-US/docs/Glossary/CSRF
      sameSite: 'strict',
      // only sent over HTTPS in production
      // secure: process.env.NODE_ENV === 'production',

      secure: false,

      // set cookie to expire after a month
      maxAge: 60 * 60 * 24 * 30
    });

    // redirect the user
    throw redirect(302, '/dashboard');
  }
};
