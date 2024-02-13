import { onMount } from 'svelte';
import { writable } from "svelte/store";

const radioCoID = 's14040ab73';

export let status = writable("online");
export let isLive = writable(true);


async function getLiveStatus() {
	const url = `https://public.radio.co/stations/${radioCoID}/status`
	const response = await fetch(url)
	const resStatus = await response.json();
	console.log('fetch', resStatus)
	status.set(resStatus)
	if (resStatus.status === 'offline') {
		isLive.set(false)
	} else {
		isLive.set(true)
	}
}

export function pollLiveStatus(ms = 10000) {
	onMount(async () => {
		const interval = setInterval(await getLiveStatus, ms);
		await getLiveStatus()
		return () => clearInterval(interval);
	});
}
