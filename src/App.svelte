<script lang="ts">
	import Router from 'svelte-spa-router';
	import routes from './router/routes';
	import { link } from 'svelte-spa-router';
	import TextInputForm from './components/TextInputForm.svelte';
</script>

<template>
	<h1 class="bg-red-500">Simple TODO APP </h1>

	<TextInputForm placeHolder="more stuff" />
	<Router {routes} />

	<a href="/other" use:link> hello there</a>

	<p> built with love with Gun.js and svelte.js</p>
</template>
