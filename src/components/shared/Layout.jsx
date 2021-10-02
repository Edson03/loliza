import Head from 'next/head'
import { Navbar } from '../navbar/Navbar'
import { Footer } from '../footer/Footer'

const Layout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>Loliza Ateliê</title>
                <meta name="description" content="Loliza Ateliê" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar/>

            {children}

            <Footer/>
        </div>
    )
}

export { Layout }