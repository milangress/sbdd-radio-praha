<script>
	import '../app.css'
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit"

	inject({ mode: dev ? 'development' : 'production' });
	injectSpeedInsights();

</script>

<svelte:head>
	<title>Radio Kutululu</title>
	<meta name="description" content="14.02.2024 13:00 till 17:00 live from National Gallery of Prague’s Trade Fair Palace by the Sandberg Design Department" />
	<html lang="en" />
</svelte:head>

<slot />
