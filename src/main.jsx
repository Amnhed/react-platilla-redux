import React from 'react'
import ReactDOM from 'react-dom/client'
import { MainApp } from './MainApp'
import './styles.css'
import { UsersPage } from './pages/UsersPage'
import { LoginPage } from './auth/pages/LoginPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoginPage />
  </React.StrictMode>,
)
