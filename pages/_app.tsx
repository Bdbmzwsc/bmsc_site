import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../compoents/Navbar'


function MyApp({ Component, pageProps }: AppProps) {
  return <div><Navbar title="Bdbmzwsc's site"/><Component {...pageProps} /></div>
}

export default MyApp
