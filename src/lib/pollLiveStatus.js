import { onMount } from 'svelte';

const radioCoID = '123456';


function getLiveStatus() {
	const url = `https://public.radio.co/stations/${radioCoID}/status`
	return fetch(url)
}

export function pollLiveStatus(ms = 10000) {
	onMount(() => {
		const interval = setInterval(getLiveStatus, ms);
		getLiveStatus()

		return () => clearInterval(interval);
	});
}
