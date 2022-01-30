<script lang="ts" charset="utf-8">
	import { onMount } from 'svelte';
	import gun from '../util/gun';

	let isLoggedIn: boolean;

	onMount(() => {
		isLoggedIn = gun.user().is;
	});
</script>

<template>
	{#if isLoggedIn}
		<p> user is logged in</p>
	{/if}
</template>
