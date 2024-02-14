<script>
	import hand from '$lib/assets/hand.png';
	import logo from '$lib/assets/logo.png';
	import dragon from '$lib/assets/dragon.png';
	import hexer from '$lib/assets/hexer.png';
</script>
<div can-move id="move-hand">
	<img src="{hand}" alt="a sketched hand with little faces as fingers"/>
</div>

<div can-move id="move-logo">
	<img src="{logo}" alt="logo"/>
</div>

<div can-move id="move-dragon">
	<img src="{dragon}" alt="dragon"/>
</div>

<div can-move id="move-hexer">
	<img src="{hexer}" alt="hexer"/>
</div>

<style>
	div {
		position: absolute;
			z-index: 50;
			user-select: none;
			animation: blendIn 1s;
      animation-delay: 3s;
      animation-fill-mode: both;
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
			mix-blend-mode: color-burn;
	}
	#move-logo > img {
			max-width: 300px;
	}
	#move-dragon {
			mix-blend-mode: color-burn;
	}
	#move-dragon > img {
			max-width: 300px;
			max-height: 90vh;
	}
	#move-hexer {
			mix-blend-mode: hard-light;
	}
	#move-hexer > img {
			max-width: 400px;
	}
  @keyframes blendIn {
      from {opacity: 0;}
      to {opacity: 1;}
  }

</style>
