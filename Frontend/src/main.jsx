import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/authcontext.jsx'
import { PortfoiloContextProvider } from './context/portfoiloContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>
    <PortfoiloContextProvider>
    <AuthProvider>
      
      <App />
      </AuthProvider>
      </PortfoiloContextProvider>
    </BrowserRouter>
  
  </StrictMode>,
)
