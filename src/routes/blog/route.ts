<script lang="ts">
	import { onMount } from 'svelte';
	import AnimatedButton from '../AnimatedButton.svelte';
	import type { BlogPost } from './types';
	import { posts as postsStore, getAllPosts } from './store';

	let posts: BlogPost[] = [];
	let loading = true;
	
	onMount(async () => {
		// Simulate API call delay
		setTimeout(() => {
			posts = getAllPosts();
			loading = false;
		}, 300);
	});

	const navigateTo = (slug: string) => {
		window.location.href = `/blog/${slug}`;
	};
</script>

<svelte:head>
	<title>noah costello | blog</title>
	<meta name="description" content="Personal blog by Noah Costello" />
</svelte:head>

<div class="blog-container">
	<div class="blog-header">
		<h2>blog</h2>
		<p class="blog-description">
			thoughts, guides, and reflections on system design, infrastructure, and development.
		</p>
	</div>

	{#if loading}
		<div class="loading">
			<p>Loading posts...</p>
		</div>
	{:else}
		<div class="posts-grid">
			{#each posts as post}
				<div class="post-card" on:click={() => navigateTo(post.slug)} on:keydown={(e) => {
					if (e.key === 'Enter') navigateTo(post.slug);
				}} tabindex="0">
					<h3>{post.title}</h3>
					<div class="post-date">{new Date(post.date).toLocaleDateString('en-US', {
						year: 'numeric',
						month: 'short',
						day: 'numeric'
					})}</div>
					<p class="post-excerpt">{post.excerpt}</p>
					<div class="read-more">
						<AnimatedButton label="read more" clickHandler={() => navigateTo(post.slug)} />
					</div>
				</div>
			{/each}
		</div>
	{/if}

	<div class="back-button">
		<AnimatedButton label="back to home" clickHandler={() => (window.location.href = '/')} />
	</div>
</div>

<style>
	.blog-container {
		max-width: 1000px;
		margin: 0 auto;
		padding: 20px;
	}

	.blog-header {
		text-align: center;
		margin-bottom: 40px;
	}

	.blog-header h2 {
		font-size: 2rem;
		margin-bottom: 10px;
	}

	.blog-description {
		color: var(--color-text);
		font-size: 1.1rem;
	}

	.loading {
		text-align: center;
		margin: 50px 0;
		font-family: var(--font-mono);
	}

	.posts-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 30px;
		margin-bottom: 40px;
	}

	.post-card {
		background-color: #ffffff;
		border-radius: 25px;
		padding: 25px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
		transition: transform 0.3s ease, box-shadow 0.3s ease;
		cursor: pointer;
	}

	.post-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
	}

	.post-card h3 {
		font-size: 1.3rem;
		margin-top: 0;
		margin-bottom: 10px;
	}

	.post-date {
		font-family: var(--font-mono);
		font-size: 0.9rem;
		color: #666;
		margin-bottom: 15px;
	}

	.post-excerpt {
		margin-bottom: 20px;
		line-height: 1.5;
	}

	.read-more {
		text-align: center;
	}

	.back-button {
		text-align: center;
		margin-top: 30px;
	}

	@media (max-width: 768px) {
		.posts-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
