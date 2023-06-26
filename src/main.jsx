import React from 'react'
import ReactDOM from 'react-dom/client'
import { MainApp } from './MainApp'
import './styles.css'
import { UsersPage } from './pages/UsersPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UsersPage />
  </React.StrictMode>,
)
