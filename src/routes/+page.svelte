<script>
	import About from './About.svelte';
	import Projects from './Projects.svelte';

	let showAbout = false;
	let showProjects = false;

	function toggleAbout() {
		showAbout = !showAbout;
		showProjects = false;
	}
	function toggleProjects() {
		showProjects = !showProjects;
		showAbout = false;
	}
</script>

<svelte:head>
	<title>noah costello</title>
	<meta name="description" content="personal site" />
</svelte:head>

<section>
	<h1>noah costello</h1>
</section>
<section>
	<ul>
		<li><a href="#" on:click|preventDefault={toggleAbout}>about</a></li>
		<li><a href="#" on:click|preventDefault={toggleProjects}>projects</a></li>
		<li><a href="https://github.com/nmcostello" target="_blank">github</a></li>
		<li><a href="https://linkedin.com/in/noah-costello" target="_blank">linkedin</a></li>
	</ul>
	{#if showAbout}
		<About />
	{/if}
	{#if showProjects}
		<Projects />
	{/if}
</section>

<style>
	section {
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		margin: 0;
		padding: 0;
	}

	h1 {
		align-items: left;
		justify-content: left;
	}

	li {
		list-style-type: none;
	}

	ul li {
		font-size: 1.5em;
		margin-bottom: 0.5em;
	}
</style>
