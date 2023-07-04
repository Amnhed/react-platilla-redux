import React from 'react'
import ReactDOM from 'react-dom/client'
import { MainApp } from './MainApp'
import './styles.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './auth/context/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <MainApp />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
