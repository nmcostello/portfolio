<script>
	import github from '$lib/images/github.svg';
</script>

<div class="corner">
	<a href="https://github.com/nmcostello/portfolio">
		<img src={github} alt="GitHub" />
	</a>
</div>

<style>
	.corner {
		width: 3em;
		height: 3em;
		top: 0;
		right: 0;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
