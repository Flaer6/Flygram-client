import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { Router } from './components/router/Router'
import './index.css'

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false,
		},
	},
})

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<Toaster
				position='top-right'
				toastOptions={{
					style: {
						background: '#1f1d2b',
						color: '#fff',
						border: '1px solid rgba(255,255,255,0.1)',
					},
				}}
			/>
			<Router />
		</QueryClientProvider>
	</StrictMode>,
)
