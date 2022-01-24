import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ListaPrototipos from './components/ListaPrototipos'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>PVG Términus</title>
        <meta name="description" content="Términus App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>
          Prototipos LAR
        </h1>
        <br/>
        <ListaPrototipos />        
      </main>

      <footer className={styles.footer}>
        <h3>Pie de página</h3>
      </footer>
    </div>
  )
}
