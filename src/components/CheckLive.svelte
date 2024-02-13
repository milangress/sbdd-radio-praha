<script>
import {pollLiveStatus, status, isLive} from '$lib/pollLiveStatus.js'

pollLiveStatus()
</script>

{#if $isLive}
	{#await $isLive}
		<p>Checking if live...</p>
	{:then}
		<p>We are Live turn on the Sound!</p>
	{:catch error}
		<p>Error: {error.message}</p>
	{/await}
{:else}
	<p>Radio currently offline we stream on the 14.02.2024 between 13:00 - 17:00</p>
{/if}


<!--<p>Status: {$status.status} {$isLive}</p>-->

