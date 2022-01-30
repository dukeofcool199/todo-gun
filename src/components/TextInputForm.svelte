<script lang="ts">
	export let defaultValue = '';
	export let placeHolder = 'please enter a value';
	export let label = 'testing label';

	let currentValue = defaultValue;
</script>

<template>
	<h1>LOGIN FORM MOTHER FUCKER</h1>
	<label class="pb-4" for="input">{label}</label>
	<input
		id="input"
		class="border border-2"
		placeholder={placeHolder}
		value={defaultValue}
	/>
</template>
