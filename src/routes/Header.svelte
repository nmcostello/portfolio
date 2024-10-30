<script>
	import github from '$lib/images/github.svg';
</script>

<div class="header">
	<h1>noah costello</h1>
	<a class="github-link" href="https://github.com/nmcostello/portfolio">
		<img src={github} alt="GitHub" />
	</a>
</div>

<style>
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1em;
	}

	.github-link img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
