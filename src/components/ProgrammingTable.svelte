<script>
	import { onMount } from "svelte";
	import ProgrammingEntry from './ProgrammingEntry.svelte';

	const url = '/api/programm'
	let data = getData()
	async function getData() {
		const response = await fetch(url);
		const data = await response.json();
		console.log(data);
		return data;
	}
</script>

{#await data}
	Loading Programming...
{:then programming}
	<h1>Programm</h1>
	{#each programming as programm}
		<ProgrammingEntry programm="{programm}" />
	{/each}
{:catch someError}
	System error: {someError.message}.
{/await}
