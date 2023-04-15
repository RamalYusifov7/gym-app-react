import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ThemeProvider } from '@mui/material'
import { theme } from './theme'
import { GlobalProvider } from './context/GlobalContext'
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </GlobalProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
