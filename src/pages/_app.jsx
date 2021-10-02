import { ChakraProvider} from "@chakra-ui/react"
import HandleCart from "../hooks/HandleCart"

function MyApp({ Component, pageProps }) {
  return(
    <ChakraProvider resetCSS>
      <HandleCart>
        <Component {...pageProps} />
      </HandleCart>
    </ChakraProvider>
  )
}

export default MyApp
