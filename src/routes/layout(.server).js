import { building } from '$app/environment';
import { setupMyDatabase } from '$lib/server/database';

if (!building) {
	export const ssr =false;
	setupMyDatabase();
}

export function load() {
	// ...
}