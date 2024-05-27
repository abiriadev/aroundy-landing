/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	],
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#ecfdf7',
					100: '#d1fae9',
					200: '#a8f2d7',
					300: '#6fe6c2',
					400: '#36d1a7',
					500: '#12b890',
					600: '#079475',
					700: '#057760',
					800: '#075e4e',
					900: '#074d41',
				},
			},
		},
	},
	plugins: [],
}
