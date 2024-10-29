<script lang="ts">
	export let label = 'Button';
	export let clickHandler: (event: MouseEvent) => void;

	let animationFrame: number;

	function handleMouseEnter(e: MouseEvent): void {
		const button = e.currentTarget as HTMLButtonElement;
		const rect = button.getBoundingClientRect();
		const x = e.clientX - rect.left; // x-coordinate within the button
		const y = e.clientY - rect.top; // y-coordinate within the button

		// Define an array of pastel colors
		const colors = ['#FF6961', '#019563', '#FFB347']; // Pastel Red, Yellow, Green, Orange
		// Randomly select a color
		const color = colors[Math.floor(Math.random() * colors.length)];

		let startTime: number | null = null;
		const maxSize = Math.sqrt(rect.width ** 2 + rect.height ** 2) * 2;

		function animate(timestamp: number): void {
			if (startTime === null) startTime = timestamp;
			const elapsed = timestamp - startTime;
			const size = Math.min(elapsed * 0.3, maxSize); // Adjust speed by changing multiplier

			// Create a radial gradient that expands from the mouse position
			button.style.backgroundImage = `radial-gradient(circle at ${x}px ${y}px, ${color} ${size}px, var(--button-color) ${size}px)`;

			if (size < maxSize) {
				animationFrame = requestAnimationFrame(animate);
			} else {
				cancelAnimationFrame(animationFrame);
			}
		}

		animationFrame = requestAnimationFrame(animate);
	}

	function handleMouseLeave(e: MouseEvent): void {
		const button = e.currentTarget as HTMLButtonElement;
		// Cancel the animation frame
		cancelAnimationFrame(animationFrame);
		// Reset the background
		button.style.backgroundImage = '';
	}
</script>

<button on:mouseenter={handleMouseEnter} on:mouseleave={handleMouseLeave} on:click={clickHandler}>
	{label}
</button>

<style>
	button {
		position: relative;
		overflow: hidden;
		background-color: var(--button-color);
		color: var(--button-text);
		border: none;
		padding: 15px 30px;
		font-size: 18px;
		cursor: pointer;
		margin: 10px;
		font-family: var(--font-mono);
	}
</style>
