import '@/styles/globals.css';
import { Provider } from 'jotai';
import { ToastProvider } from 'react-toast-notifications';
import localFont from 'next/font/local'

// Font files can be colocated inside of `pages`

const DM_Sans = localFont({
  src: [
    {
      path: './DMSans-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './DMSans-Italic.woff',
      weight: '400',
      style: 'italic',
    },
    {
      path: './DMSans-Medium.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: './DMSans-Bold.woff',
      weight: '700',
      style: 'italic',
    },
  ],
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${DM_Sans.style.fontFamily};
        }
      `}</style>
      <Provider>
        <ToastProvider>
          <Component {...pageProps} />
        </ToastProvider>
      </Provider>
    </>
  );
}
