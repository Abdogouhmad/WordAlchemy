export async function load({ cookies }) {
	console.log('your session is -> ', cookies.get());
}
