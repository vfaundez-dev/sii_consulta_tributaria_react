import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SiiDataProvider } from './context/SiiDataProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SiiDataProvider>
      <App />
    </SiiDataProvider>
  </StrictMode>,
)
