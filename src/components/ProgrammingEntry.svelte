<script>
	export let programm
	let {time, host, title_of_segment, description} = programm

	let randomOffset = Math.random() * 600
	let randomRotate = Math.random() * 5 - 2.5
	if (window.innerWidth < 800) {
		randomOffset = Math.random() * 100
	}
</script>

<div style='--offset:{randomOffset};--rotate:{randomRotate}'>
	<h2> {title_of_segment} <span>{time}</span></h2>
	{#if description}
	<p> {description} </p>
	{/if}
	{#if host}
	<p> Hosted by: {host} </p>
	{/if}
</div>

<style>
	div {
		width: fit-content;
			max-width: 50ch;
			/*border-radius: 50px;*/
			filter: url(#glitch);
			/*background-color: rgba(255, 255, 255, 0.5);*/
			margin-left: calc(var(--offset) * 1px);
			transform: rotate(calc(var(--rotate) * 1deg));
			border-top: 3px solid black;
	}
	div:hover > *{
		/*filter: url(#motion-blur);*/
      filter: url(#blobs);
			color: yellow;
	}

  @media (prefers-reduced-motion) {
		div {
			filter: none;
		}
		div:hover > *{
				filter: none;
		}
  }
</style>
