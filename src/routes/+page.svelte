<div class="main-container">
	<h1>Hello, welcome to my website.</h1>
	<div class="grid-container">
		<div class="grid-item">One</div>
		<div class="grid-item">Two</div>
		<div class="grid-item">Three</div>
		<div class="grid-item">Four</div>
	</div>
</div>

<style>
	.main-container {
		margin: 0;
		padding: 20px;
		height: 100vh; /* Full viewport height */
		display: flex;
		flex-direction: column;
		align-items: center; /* Center vertically */
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
		background-color: #f0f0f0;
		padding: 20px;
		text-align: center;
		border-radius: 5px;
	}
</style>
