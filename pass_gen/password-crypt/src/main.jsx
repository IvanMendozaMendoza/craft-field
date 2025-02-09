import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'
import styled from 'styled-components'

const Main = styled.main`
  font-family: sans-serif;
  margin: 0 auto;
`

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main>
      <App />
    </Main>
  </StrictMode>,
)
