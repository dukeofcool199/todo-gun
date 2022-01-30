
import Login from '../pages/Login.svelte';
import Home from './../pages/Home.svelte'
import OtherPage from "./../pages/OtherPage.svelte"


export default {
	'/': Home,
	'/other': OtherPage,
	'/login': Login,
};
