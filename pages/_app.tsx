import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { persistor, store } from '@/redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ToastContainer />
      <Component {...pageProps} />
    </PersistGate>
  </Provider>
}
