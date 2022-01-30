<script lang="ts">
	import Router from 'svelte-spa-router';
	import routes from './router/routes';
	import { link } from 'svelte-spa-router';
	import TextInputForm from './components/TextInputForm.svelte';
	import Login from './pages/Login.svelte';

	let user = '';
	let pass = '';
</script>

<template>
	<Login bind:userName={user} />

	<p>content of user: {user}</p>

	<div class="m-auto">
		<div>
			<Router {routes} />
		</div>
	</div>
</template>
