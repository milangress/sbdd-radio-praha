<script>
	import {radioCoID, isLive} from '$lib/pollLiveStatus.js';
	import { onMount } from 'svelte';
	const streamUrl = `https://streaming.radio.co/${radioCoID}/listen`;

	let audioPlayer

	onMount(() => {
		audioPlayer.addEventListener('timeupdate',function() {
			console.log('timeupdate');
		});
		window.setTimeout(() => {
			audioPlayer.play();
		}, 1000);
	})

</script>

{#if $isLive}
	<div class="audio-player">
		<audio bind:this={audioPlayer} controls="controls" autoplay="autoplay" src="{streamUrl}">
			Your browser does not support the audio element.
			<a href="{streamUrl}">Open In new window</a>
		</audio>
	</div>
{:else}
	<p>---</p>
{/if}

<!--<a href="{streamUrl}">Open In new window</a>-->
