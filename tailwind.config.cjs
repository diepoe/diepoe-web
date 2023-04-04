/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				bluescreen: "#0827F5"
			},
			typography: {
				DEFAULT: {
					css: {
						'--tw-prose-invert-bullets': '#ffffff',
					}
				}
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
