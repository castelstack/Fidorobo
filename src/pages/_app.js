import '@/styles/globals.css';
import { Provider } from 'jotai';
import { DM_Sans } from 'next/font/google';
import { ToastProvider } from 'react-toast-notifications';

const dmsans = DM_Sans({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${dmsans.style.fontFamily};
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
