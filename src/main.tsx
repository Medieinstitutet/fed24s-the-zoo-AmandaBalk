import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { router } from './Router.tsx'
import { RouterProvider } from 'react-router-dom'
import { AnimalsProvider } from './context/AnimalContext.tsx'
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AnimalsProvider>
    <RouterProvider router={router}/>
    </AnimalsProvider>
  </StrictMode>,
)
