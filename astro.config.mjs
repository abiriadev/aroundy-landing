import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/static'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), icon()],
	output: 'static',
	adapter: vercel({
		imageService: true,
	}),
})
