import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'
import { ThemeProvider } from 'styled-components'
import { CyclesContextProvider } from './contexts/CycleContexts'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}
