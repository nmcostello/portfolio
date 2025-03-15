<script>
	import posthog from 'posthog-js';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { Nav } from '$lib/components';

	let { children } = $props();

	onMount(() => {
		if (browser) {
			posthog.init('phc_EiT51RAnRRYtiUjy30lEdlRxP54srubyMR6Gon20UXv', {
				api_host: 'https://us.i.posthog.com',
				person_profiles: 'identified_only' // or 'always' to create profiles for anonymous users as well
			});
		}
		return;
	});
</script>

<Nav />

{@render children()}
