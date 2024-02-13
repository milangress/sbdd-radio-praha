import {pollLiveStatus} from '../lib/pollLiveStatus.js'

let poll = pollLiveStatus()

<template>
	<p>{poll}</p>

</template>
