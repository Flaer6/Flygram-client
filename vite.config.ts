import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tailwindcss(),
		VitePWA({
			includeAssets: ['**/*.png', '**/*.jpg'],
			registerType: 'prompt',
			injectRegister: false,

			pwaAssets: {
				disabled: false,
				config: true,
			},

			manifest: {
				name: 'FlyGram',
				short_name: 'FlyGram',
				description: 'Best Messanger',
				theme_color: '#1f1d2b',
				background_color: '#1f1d2b',
				display: 'standalone',
				orientation: 'portrait',
				icons: [
					{
						src: '/favicons/192x192.png',
						sizes: '192x192',
						type: 'image/png',
					},
					{
						src: '/favicons/512x512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any',
					},
					{
						src: '/favicons/192x192.jpg',
						sizes: '192x192',
						type: 'image/jpg',
						purpose: 'maskable',
					},
					{
						src: '/favicons/512x512.jpg',
						sizes: '512x512',
						type: 'image/jpg',
						purpose: 'maskable',
					},
				],
			},

			workbox: {
				globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
				cleanupOutdatedCaches: true,
				clientsClaim: true,
			},

			devOptions: {
				enabled: true,
				navigateFallback: 'index.html',
				suppressWarnings: true,
				type: 'module',
			},
		}),
	],
})
