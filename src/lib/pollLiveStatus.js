import { onMount } from 'svelte';

const radioCoID = 's14040ab73';


function getLiveStatus() {
	const url = `https://public.radio.co/stations/${radioCoID}/status`
	const result = fetch(url)
	console.log('fetch', result)
	return result
}

export function pollLiveStatus(ms = 10000) {
	onMount(() => {
		const interval = setInterval(getLiveStatus, ms);
		getLiveStatus()

		return () => clearInterval(interval);
	});
}
