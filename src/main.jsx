import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*por el tema del enrutador debemos embolver toda la app en el enrutador */}
    <BrowserRouter>
    <App />
    </BrowserRouter>
    
  </React.StrictMode>,
)
