/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				bluescreen: "#0827F5",
        bodgray: "#aaaaaa"
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						'--tw-prose-bullets': theme('colors.white'),
						'--tw-prose-invert-bullets': theme('colors.white'),
						'--tw-prose-counters': theme('colors.white'),
						'--tw-prose-invert-counters': theme('colors.white'),
						'--tw-prose-quote-borders': theme('colors.white'),
						'--tw-prose-invert-quote-borders': theme('colors.slate.50'),
          }
				}
			}),
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
