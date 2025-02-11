import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import LeadsPage from './leads/presentation/page/leadsPage'

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 900000,
      },
    },
  })
  return (
    <QueryClientProvider client={queryClient}>
      <LeadsPage />
    </QueryClientProvider>
  )
}

export default App
