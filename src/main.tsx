import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { routerConfigs } from './router-config'
import { GlobalStyle } from './styles/globalStyles'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={routerConfigs}/>
    <GlobalStyle />
  </React.StrictMode>,
)
