import 's/globals.scss'
import LayoutBase from 'layout/Base'
import LayoutHeader from 'layout/Header'
import LayoutFooter from 'layout/Footer'

function App({ Component, pageProps }) {
  return (

    <LayoutBase>
      <LayoutHeader />
        <Component {...pageProps} />
      <LayoutFooter />
    </LayoutBase>
  )
}

export default App
