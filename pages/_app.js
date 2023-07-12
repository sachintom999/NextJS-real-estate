import { ChakraProvider } from "@chakra-ui/react"
import Layout from "../components/Layout"
import "../styles/globals.css"
import nprogress from "nprogress"
import router from "next/router"

function MyApp({ Component, pageProps }) {
  nprogress.configure({ showSpinner: false })

  router.events.on("routeChangeStart", () => {
    nprogress.start()
  })

  router.events.on("routeChangeComplete", () => {
    nprogress.done()
  })

  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
