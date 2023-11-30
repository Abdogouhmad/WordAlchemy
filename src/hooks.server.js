// src/hooks.server.js
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';
import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit';
import { redirect, error } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

async function supabase({ event, resolve }) {
	event.locals.supabase = createSupabaseServerClient({
		supabaseUrl: PUBLIC_SUPABASE_URL,
		supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
		event
	});

	/**
	 * a little helper that is written for convenience so that instead
	 * of calling `const { data: { session } } = await supabase.auth.getSession()`
	 * you just call this `await getSession()`
	 */
	event.locals.getSession = async () => {
		const {
			data: { session }
		} = await event.locals.supabase.auth.getSession();
		return session;
	};

	return resolve(event, {
		filterSerializedResponseHeaders(name) {
			return name === 'content-range';
		}
	});
}

async function authorization({ event, resolve }) {
	// protect requests to all routes that start with /protected-routes
	if (event.url.pathname.startsWith('/protected/')) {
		const session = await event.locals.getSession();
		if (!session) {
			// the user is not signed in
			console.log('Not signed in');
			throw redirect(303, '/');
		}
	} else if (event.url.pathname.startsWith('/auth/update')) {
		const session = await event.locals.getSession();
		if (!session) {
			// the user is not signed in
			console.log('not signed in');
			throw redirect(303, '/');
		}
	}

	return resolve(event);
}

export const handle = sequence(supabase, authorization);
