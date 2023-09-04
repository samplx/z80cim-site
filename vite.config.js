import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],

	test: {
		environment: 'jsdom',
		css: true,
		coverage: {
			reporter: [
				'text',
				'json-summary'
			]
		}
	}
});
