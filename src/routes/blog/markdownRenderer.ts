<script lang="ts">
	export let markdown: string = '';

	function convertMarkdownToHtml(markdown: string): string {
		// This is a simple markdown converter
		// In a real application, you'd use a proper markdown library like marked
		
		// Convert headings
		let html = markdown
			.replace(/^# (.*$)/gm, '<h1>$1</h1>')
			.replace(/^## (.*$)/gm, '<h2>$1</h2>')
			.replace(/^### (.*$)/gm, '<h3>$1</h3>')
			.replace(/^#### (.*$)/gm, '<h4>$1</h4>');
		
		// Convert paragraphs (but not within code blocks)
		html = html.replace(/^\s*(\n)?(.+)/gm, function(m) {
			return /\<(\/)?(h\d|ul|ol|li|blockquote|pre|img|code)/.test(m) ? m : '<p>' + m + '</p>';
		});
		
		// Convert lists
		html = html.replace(/^\s*\n\* (.*)/gm, '<ul>\n<li>$1</li>\n</ul>');
		html = html.replace(/^\s*\n- (.*)/gm, '<ul>\n<li>$1</li>\n</ul>');
		html = html.replace(/^\s*\n(\d+)\. (.*)/gm, '<ol>\n<li>$2</li>\n</ol>');
		html = html.replace(/<\/ul>\s*\n<ul>/g, '');
		html = html.replace(/<\/ol>\s*\n<ol>/g, '');
		
		// Convert bold and italic
		html = html.replace(/\*\*(.*)\*\*/gm, '<strong>$1</strong>');
		html = html.replace(/\*(.*)\*/gm, '<em>$1</em>');
		
		// Convert code blocks
		html = html.replace(/```([\s\S]*?)```/g, function(match, code) {
			return '<pre><code>' + code.trim() + '</code></pre>';
		});
		
		// Convert inline code (after code blocks to avoid conflicts)
		html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
		
		// Convert links
		html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
		
		// Convert line breaks (but not within pre/code tags)
		html = html.replace(/([^>])\n([^<])/g, '$1<br>$2');
		
		return html;
	}
</script>

<div class="markdown-content">
	{@html convertMarkdownToHtml(markdown)}
</div>

<style>
	.markdown-content :global(h1),
	.markdown-content :global(h2),
	.markdown-content :global(h3),
	.markdown-content :global(h4) {
		margin-top: 1.5em;
		margin-bottom: 0.5em;
	}

	.markdown-content :global(h1) {
		font-size: 2rem;
	}

	.markdown-content :global(h2) {
		font-size: 1.5rem;
	}

	.markdown-content :global(h3) {
		font-size: 1.3rem;
	}

	.markdown-content :global(h4) {
		font-size: 1.1rem;
	}

	.markdown-content :global(p) {
		margin-bottom: 1em;
		line-height: 1.7;
	}

	.markdown-content :global(ul),
	.markdown-content :global(ol) {
		margin-bottom: 1em;
		padding-left: 2em;
	}

	.markdown-content :global(li) {
		margin-bottom: 0.5em;
	}

	.markdown-content :global(a) {
		color: var(--color-theme-1);
		text-decoration: none;
	}

	.markdown-content :global(a:hover) {
		text-decoration: underline;
	}

	.markdown-content :global(code) {
		background-color: #f3f3f3;
		padding: 2px 4px;
		border-radius: 3px;
		font-family: var(--font-mono);
		font-size: 0.9em;
	}

	.markdown-content :global(pre) {
		background-color: #f3f3f3;
		padding: 1em;
		border-radius: 5px;
		overflow-x: auto;
		margin-bottom: 1.5em;
	}

	.markdown-content :global(pre code) {
		background-color: transparent;
		padding: 0;
		border-radius: 0;
		font-size: 0.95em;
	}

	.markdown-content :global(blockquote) {
		border-left: 4px solid var(--color-theme-1);
		padding-left: 1em;
		margin-left: 0;
		margin-right: 0;
		font-style: italic;
	}

	.markdown-content :global(hr) {
		border: none;
		border-top: 2px solid #eee;
		margin: 2em 0;
	}
</style>