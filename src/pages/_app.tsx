import Layout from "../Layout"
import Global from "../styles/globals"
import '../styles/style.css'

function MyApp({ Component, pageProps }) {
  return (
    
  <Layout>
    <Component {...pageProps} />
    <Global/>
  </Layout>
  )
}

export default MyApp
