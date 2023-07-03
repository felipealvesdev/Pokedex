import MainContent from '@/Components/MainContent'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <MainContent>
            <Component {...pageProps} />
          </MainContent>
}
