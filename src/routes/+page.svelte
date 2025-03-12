<div class="main-container">
	<h1>Hello, I'm Noah.</h1>
	<div class="grid-container">
		<a href="/about" class="grid-item">About</a>
		<a href="/two" class="grid-item">Background</a>
		<a href="/three" class="grid-item">Projects</a>
		<a href="/four" class="grid-item">Blog</a>
	</div>
</div>

<style>
	.main-container {
		margin: 0;
		padding: 20px;
		min-height: 100vh; /* Full viewport height */
		display: flex;
		flex-direction: column; /* Stack elements vertically */
		align-items: center; /* Center horizontally */
		background-color: #2d2926; /* Warmer charcoal background with brown undertones */
		color: #f5f5f0; /* Warmer off-white text */
	}

	h1 {
		margin-bottom: 30px;
	}

	.grid-container {
		display: grid;
		grid-template-columns: 1fr 1fr; /* Two columns */
		grid-gap: 20px; /* Space between grid items */
		width: 80%; /* Control the width of the grid */
	}

	.grid-item {
		background-color: #3d3936; /* Slightly lighter warm charcoal */
		color: #f5f5f0; /* Warm off-white text */
		padding: 20px;
		text-align: center;
		border-radius: 8px;
		font-weight: bold;
		cursor: pointer;
		transition: all 0.3s ease;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
		text-decoration: none;
		display: block;
	}

	.grid-item:hover {
		background-color: #4d4946; /* Even lighter warm tone on hover */
		transform: translateY(-5px);
		box-shadow: 0 6px 10px rgba(0, 0, 0, 0.4);
	}
</style>
