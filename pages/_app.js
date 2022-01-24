import '../styles/globals.css'
import Cabecera from './components/Cabecera'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Cabecera />
    <Component {...pageProps} />
    
    </>
    )
}

export default MyApp
