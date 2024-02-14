<script>
	import '../app.css'
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit"

	inject({ mode: dev ? 'development' : 'production' });
	injectSpeedInsights();

</script>

<div class="bg"></div>
<div class="logo-bg"></div>
<slot />
