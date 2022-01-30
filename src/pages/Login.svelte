<script lang="ts" charset="utf-8">
	import TextInputForm from '../components/TextInputForm.svelte';

	export let userName: string;

	export let password = 'poop';
</script>

<template>
	<p>content of username: {userName}</p>
	<TextInputForm bind:currentValue={userName} />
	<TextInputForm bind:currentValue={password} />
</template>
