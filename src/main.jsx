import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import AuthContext from './context/authContext'
import TaskContext from './context/TaskContext'

createRoot(document.getElementById('root')).render(
  
    <StrictMode>
        <AuthContext>
        <TaskContext>
        <App/>
        </TaskContext>
        </AuthContext>
    </StrictMode>
)
