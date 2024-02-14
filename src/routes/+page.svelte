<script>
	import CheckLive from '../components/CheckLive.svelte';

	import { createClient } from "partyworks-client";
	import { onDestroy, onMount } from "svelte";
	import ProgrammingTable from '../components/ProgrammingTable.svelte';
	import SvgFilter from '../components/SvgFilter.svelte';
	// import App from "../components/App.svelte";

	let room
	let roomId = "sveltekit-live-cursors";


	onMount(() => {
		const client = createClient({
			host: "localhost:1999",
			throttle: 16
		});


		room = client.enter(roomId, {initialPresence: {cursor: null}});
	});

	onDestroy(() => {
		room?.leave();
	});
</script>
<svelte:head>
	<title>Radio Kutululu</title>
	<meta name="description" content="14.02.2024 13:00 till 17:00 live from National Gallery of Prague’s Trade Fair Palace by the Sandberg Design Department" />
	<script defer type="module" src="https://unpkg.com/playhtml@latest/dist/init.es.js"></script>
</svelte:head>

<div class="wrapper">
	<header>
			<h1>Radio &nbsp;&nbsp;&nbsp; rKutululu</h1>
	<CheckLive></CheckLive>
	</header>
	<ProgrammingTable></ProgrammingTable>
	<div class="smol-breakout-grid">
	<p>Welcome to our special broadcast on Radio Kutululu, where today we're diving into an extraordinary journey—a journey that took us, a group from the Sandberg Institute, to the heart of Prague. A city known for its breathtaking architecture, rich history, and cultural depth, Prague became more than just a destination; it turned into a playground for our research.</p>
	<p>In this broadcast, we'll unfold the story of how we, as designers and artists, immersed ourselves in the city’s essence through a series of meticulously crafted workshops, walking trips, and activities. Each step we took was designed to intertwine our diverse practices with the fabric of Prague, allowing us to explore and understand the city from perspectives as unique as each of us.</p>
	<p>From the cobblestone streets that whisper tales of the past to the contemporary pulse of its bustling squares, we embarked on a quest not just to see Prague but to experience it through our own practices. We've experimented, we've discovered, and we've been inspired. Join us as we share the highlights, the insights, and the unexpected turns of our journey.</p>
	</div>
</div>
<SvgFilter></SvgFilter>

<style>
	#headline {
			user-select: none;
			padding: 0.5rem;
			position: absolute;
	}
header {
		min-height: 60vh;
}
.wrapper {
		text-align: center;
		width: 100%;
    position: absolute;
    margin-top: 5rem;
}
</style>
