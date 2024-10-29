<script>
	import About from './About.svelte';
	import Projects from './Projects.svelte';
	import AnimatedButton from './AnimatedButton.svelte';

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

	const buttons = [
		{
			label: 'about',
			action: () => toggleAbout()
		},
		{
			label: 'projects',
			action: () => toggleProjects()
		},
		{
			label: 'github',
			action: () => (window.location.href = 'https://github.com/nmcostello')
		},
		{
			label: 'linkedin',
			action: () => (window.location.href = 'https://linkedin.com/in/noah-costello')
		}
	];
</script>

<div>
	{#each buttons as { label, action }}
		<AnimatedButton {label} clickHandler={action} />
	{/each}
</div>

{#if showAbout}
	<About />
{/if}
{#if showProjects}
	<Projects />
{/if}
