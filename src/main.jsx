import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LojaProvider from './context/LojaProvider.jsx'

// O LojaProvider envolve o App: assim todos os componentes acessam o contexto global
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LojaProvider>
      <App />
    </LojaProvider>
  </StrictMode>,
)
