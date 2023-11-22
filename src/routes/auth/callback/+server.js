/** @type {import('./$types').RequestHandler} */
import { redirect } from '@sveltejs/kit'

export const GET = async ({ url, locals: { supabase } }) => {
  const code = url.searchParams.get('code')

  if (code) {
    await supabase.auth.exchangeCodeForSession(code)
  }

  throw redirect(303, 'https://word-alchemy-git-login-div-styl.vercel.app/protected/Dashboard/')
}