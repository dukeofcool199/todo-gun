<script lang="ts">
	export let defaultValue = '';
	export let placeHolder = 'please enter a value';
	export let label = 'testing label';

	export let currentValue = defaultValue;
</script>

<template>
	<label class="pb-2" for="input">{label}</label>
	<input
		id="input"
		class="border border-2 border-black"
		placeholder={placeHolder}
		bind:value={currentValue}
	/>
</template>
