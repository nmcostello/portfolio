<script lang="ts">
	import AnimatedButton from './AnimatedButton.svelte';

	// Define the content sections
	const contents: { [key: string]: string } = {
		about: `
		<p>
			hey! i'm noah. i'm a passionate developer with an interest in system design, ui/ux design,
			infrastructure, and a bunch of other tech. i believe in creating clean, efficient, and
			user-friendly applications. when i'm not coding, i enjoy spending time lifting, cooking, biking,
			and exploring new technologies. feel free to connect with me on linkedin and github.
		</p>
      `,
		projects: `
        <p>under construction 🏗️ ... come back later</p>
      `,
		contact: `
        <h2>Contact Us</h2>
        <p>You can reach us at <a href="mailto:info@example.com">info@example.com</a>.</p>
      `
	};
	// State variable to track current content
	let currentContent = '';

	const buttons = [
		{
			label: 'about',
			action: () => (currentContent = contents.about)
		},
		{
			label: 'projects',
			action: () => (currentContent = contents.projects)
		},
		{
			label: 'github',
			action: () => (window.location.href = 'https://github.com/nmcostello')
		},
		{
			label: 'linkedin',
			action: () => (window.location.href = 'https://linkedin.com/in/noah-costello')
		},
		{
			label: 'contact',
			action: () => (window.location.href = 'mailto:contact.unhidden242@passmail.net')
		}
	];
</script>

<div>
	{#each buttons as { label, action }}
		<AnimatedButton {label} clickHandler={action} />
	{/each}
</div>

{#if currentContent}
	<div class="content-box">
		{@html currentContent}
	</div>
{/if}

<style>
	.content-box {
		background-color: #ffffff;
		border-radius: 25px; /* Heavy corner rounding */
		padding: 40px;
		margin: 40px auto;
		max-width: 800px;
	}
</style>
