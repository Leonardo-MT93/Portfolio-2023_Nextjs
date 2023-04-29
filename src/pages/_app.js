import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import en from '../translation/en.json'
import es from '../translation/es.json'

const messages = {
  en,
  es
}

function getDirection(locale){
  return "ltr"
}

//Nueva configuracion de fonts en Nextjs13
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
  display: "swap",
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const {locale} = useRouter();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" hrefLang="x-default"/>
        <link rel="icon" href="/favicon.ico" hrefLang="es"/>
        <link rel="icon" href="/favicon.ico" hrefLang="en"/>
      </Head>
      <main
        className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}
      >
        
        <AnimatePresence mode="wait">
          <IntlProvider locale={locale} messages={messages[locale]}>
          <NavBar />
          <Component key={router.asPath} {...pageProps} dir={getDirection(locale)}/>
          <Footer />
          </IntlProvider>
         
        </AnimatePresence>

        
      </main>
    </>
  );
}
