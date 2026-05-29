import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
<<<<<<< HEAD
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
=======

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
>>>>>>> c35557581e1e15227bbe74e58fa8df71f267adc6
    </BrowserRouter>
  
  </StrictMode>,
)
