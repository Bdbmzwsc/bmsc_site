import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../compoents/Navbar'
import {indna} from '../config';


function MyApp({ Component, pageProps }: AppProps) {
  return <div><Navbar title="Bdbmzwsc's site" config={indna}/><Component {...pageProps} /></div>
}

export default MyApp
