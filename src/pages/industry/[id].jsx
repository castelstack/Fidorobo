import AboutComponent from '@/components/About';
import BannerComponent from '@/components/Banner';
import DownloadComponent from '@/components/Download';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PricingComponent from '@/components/Pricing';
import WhyComponent from '@/components/WhyUs';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Industries() {
  const { query } = useRouter();

  const heading = linksInfo.filter(
    (link) =>
      link.title
        .replace(/,|&/g, '')
        .split(' ')
        .join('-')
        .toLocaleLowerCase() === query.id
  )[0]?.title;
  const description = linksInfo.filter(
    (link) =>
      link.title
        .replace(/,|&/g, '')
        .split(' ')
        .join('-')
        .toLocaleLowerCase() === query.id
  )[0]?.description;

  return (
    <>
      <Head>
        <title>{heading}</title>
        <meta name='description' content={description} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='bg-white h-full'>
        <Header />
        <BannerComponent
          type={'feature'}
          heading={heading}
          description={description}
        />
        <AboutComponent
          heading={
            'No wasted journeys or fuel, send your field team to the right place every time.'
          }
          description={`Ensuring we keep your field team workers going to the right customer address, Klipboard automatically works out the correct geo coordinates based on the address details you enter and plots your customer's location on a map. These location details are then available for your field team workers on their Klipboard mobile app when assigned a job, therefore seamlessly enabling access to directions.`}
        />
        <WhyComponent />
        <PricingComponent />
        <DownloadComponent />
        <Footer />
      </main>
    </>
  );
}

const linksInfo = [
  {
    title: 'Aircon servicing',
    description:
      'Get total oversight in your field service business and monitor your job activity, financial performance, business operations and your team all in real time.',
  },
  {
    title: 'Cleaning',
    description:
      'Intuitive scheduling out in the field enabling management of jobs and dispatch to your team. Combine with a built in calendar for instantly viewing your next job & those upcoming.',
  },
  {
    title: 'Pest control',
    description:
      'Track your field team, anticipate availability and monitor the progress of jobs from start to finish. Ensure efficiency and profitability whilst offering a superior customer experience.',
  },
 
];
