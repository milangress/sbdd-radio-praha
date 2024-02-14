<script>
	import Cursor from "./Cursor.svelte";
	import { onDestroy } from "svelte";

	export let room;

	// Get initial values for presence and others
	let myPresence = room.getPresence();
	let others = room.getOthers();
	// Subscribe to further changes
	const unsubscribeMyPresence = room.subscribe("myPresence", (presence) => {
		myPresence = presence;
	});
	const unsubscribeOthers = room.subscribe("others", (otherUsers) => {
		others = otherUsers.others;
	});
	// Unsubscribe when unmounting
	onDestroy(() => {
		unsubscribeMyPresence();
		unsubscribeOthers();
	});
	// Update cursor presence to current pointer location
	function handlePointerMove(event) {
		event.preventDefault();
		room.updatePresence({
			cursor: {
				x: Math.round(event.clientX),
				y: Math.round(event.clientY),
			},
		});
	}
	// When the pointer leaves the page, set cursor presence to null
	function handlePointerLeave() {
		room.updatePresence({
			cursor: null,
		});
	}


</script>

<main on:pointerleave={handlePointerLeave} on:pointermove={handlePointerMove}>
	<!-- Show the current user's cursor location -->
<!--	<div class="text">-->
<!--		{myPresence.cursor-->
<!--			? `${myPresence.cursor.x} × ${myPresence.cursor.y}`-->
<!--			: "Move your cursor to broadcast its position to other people in the room."}-->
<!--	</div>-->

	<!-- When others connected, iterate through others and show their cursors -->
	{#if others}
		{#each [...others] as { userId, presence } (userId)}
			{#if presence?.cursor}
				<Cursor color="#000" x={presence.cursor.x} y={presence.cursor.y} />
			{/if}
		{/each}
	{/if}
</main>

<style>
    main {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        place-content: center;
        place-items: center;
        touch-action: none;
				z-index: -1;
    }

    .text {
        max-width: 380px;
        margin: 0 16px;
        text-align: center;
    }
</style>
