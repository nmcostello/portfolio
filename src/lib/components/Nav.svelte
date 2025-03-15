<script>
	import { page } from '$app/state';

	// we need the derived here because svelte wouldn't
	// update this after the initial page load
	let path = $derived(page.url.pathname);
</script>

<nav class="topnav">
	<a class={path === '/' ? 'active' : ''} href="/">Home</a>
	<a class={path === '/about' ? 'active' : ''} href="/about">About</a>
	<a class={path === '/blog' ? 'active' : ''} href="/blog">Blog</a>
	<a class={path === '/background' ? 'active' : ''} href="/background">Background</a>
	<a class={path === '/projects' ? 'active' : ''} href="/projects">Projects</a>

	<p>{page.url.pathname}</p>
</nav>

<style>
	/* Add a black background color to the top navigation */
	.topnav {
		text-align: center;
		background-color: #333;
		overflow: hidden;
	}

	/* Style the links inside the navigation bar */
	.topnav a {
		margin: auto;
		float: left;
		color: #f2f2f2;
		text-align: center;
		padding: 14px 16px;
		text-decoration: none;
		font-size: 17px;
	}

	/* Change the color of links on hover */
	.topnav a:hover {
		background-color: #ddd;
		color: black;
	}

	/* Add a color to the active/current link */
	.topnav a.active {
		background-color: #04aa6d;
		color: white;
	}
</style>
