import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import  NavBar from '../src/components/NavBar'
import  Footer from '../src/components/Footer'
import NProgress from "nprogress"
import {useEffect, createContext, useState} from 'react'
import Head from 'next/head'
import Router from "next/router"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export const FormContext = createContext();
function MyApp({ Component, pageProps }) {
  const [isFormVisible, setIsFormVisible] = useState(false)
  const [email, setEmail] = useState(false)
  NProgress.configure({showSpinner: false})
  useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    Router.events.on("routeChangeStart", handleRouteStart);
    Router.events.on("routeChangeComplete", handleRouteDone);
    Router.events.on("routeChangeError", handleRouteDone);

    return () => {
      Router.events.off("routeChangeStart", handleRouteStart);
      Router.events.off("routeChangeComplete", handleRouteDone);
      Router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className='d-flex flex-column justify-content-between vh-100'>
        <FormContext.Provider value={{isFormVisible, setIsFormVisible, email, setEmail}}>
        <NavBar />
        <Component {...pageProps} />
        <Footer/>
        </FormContext.Provider>
      </div>
    </>
  )
}

export default MyApp
