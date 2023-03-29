
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PricingComponent from '@/components/Pricing';
import Started from '@/components/Started';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='bg-white h-full'>
        <Header />
      
        <PricingComponent />
        <Started/>
        <Footer />
      </main>
    </>
  );
}
