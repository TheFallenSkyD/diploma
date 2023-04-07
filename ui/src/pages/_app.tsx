import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Provider } from 'react-redux'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { store } from '@/services'

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: 'rgb(10, 25, 41)',
      paper: 'rgb(0, 30, 60)',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgb(10, 25, 41)',
          border: '2px solid rgba(194, 224, 255, 0.08)',
          color: '#B2BAC2',
          fontWeight: 400,
          textTransform: 'none',

          '&:hover': {
            color: 'white',
            backgroundColor: 'rgb(0, 30, 60)',
          },
        },
      },
      defaultProps: {
        variant: 'contained',
      },
    },
  },
  shape: {
    borderRadius: 10,
  },
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  )
}
