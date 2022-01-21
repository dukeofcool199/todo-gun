<script lang="ts">
	import Gun from 'gun';

	let todos = ['hello more', 'stuff'];
	let newItem = '';

	const gun = Gun(['http://localhost:8765/gun']);

	function addToList() {
		todos.push('');
		console.log(todos);
		todos[todos.length - 1] = '';
	}

	export let name: string;
</script>

<template >

<h1>Hello {name}!</h1>
<h2>welcome to your todo list!</h2>
<ul>
	{#each todos as todo, i}
		<input bind:value={todos[i]} />
	{/each}
</ul>
<br />
	<button on:click={addToList}> add item to list </button>


</template>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
