import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Router.tsx'


import "bootstrap/scss/bootstrap.scss"
import "bootstrap/dist/js/bootstrap.bundle.min.js"


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
