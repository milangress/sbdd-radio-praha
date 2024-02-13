<script>
	export let programm
	let {time, host, title_of_segment, description} = programm

	let randomOffset = Math.random() * 600
</script>

<div style='--offset:{randomOffset};'>
	<h2> {title_of_segment} <span>{time}</span></h2>
	<p> {description} </p>
	<p> {host} </p>
</div>

<style>
	div {
		width: fit-content;
			max-width: 50ch;
			border-radius: 50px;
			filter: url(#glitch);
			/*background-color: rgba(255, 255, 255, 0.5);*/
			margin-left: calc(var(--offset) * 1px);
	}
	div:hover > *{
		/*filter: url(#motion-blur);*/
      filter: url(#blobs);
			color: yellow;
	}
</style>
