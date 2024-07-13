import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import ProviderWrapper from './components/ProviderWrapper.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ProviderWrapper>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        <App />
      </ProviderWrapper>
    </Router>
  </React.StrictMode>,
)
