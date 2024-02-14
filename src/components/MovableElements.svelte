<script>
	import hand from '$lib/assets/hand.png';
	import logo from '$lib/assets/logo.gif';
</script>
<div can-move id="move-hand">
	<img src="{hand}" alt="a sketched hand with little faces as fingers"/>
</div>

<div can-move id="move-logo">
	<img src="{logo}" alt="logo"/>
</div>

<style>
	div {
		position: absolute;
			z-index: 50;
			user-select: none;
	}
	img{
			pointer-events: none;
	}
	#move-hand {
      mix-blend-mode: multiply;
	}
	#move-hand > img {
			max-width: 300px;
	}
	#move-logo {
			mix-blend-mode: difference;
	}
	#move-logo > img {
			max-width: 300px;
	}
</style>
