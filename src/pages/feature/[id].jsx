import AboutComponent from '@/components/About';
import BannerComponent from '@/components/Banner';
import ClientComponent from '@/components/Clients';
import DownloadComponent from '@/components/Download';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PricingComponent from '@/components/Pricing';
import WhyComponent from '@/components/WhyUs';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Features() {
  const [data, setData] = useState();
  const {query}=useRouter()
  console.log(query)
  

  const heading = linksInfo.filter((link)=> link.title.replace(/,|&/g, "").split(' ').join('-').toLocaleLowerCase()===query.id)[0]?.title
  const description = linksInfo.filter((link)=> link.title.replace(/,|&/g, "").split(' ').join('-').toLocaleLowerCase()===query.id)[0]?.description

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
        
        heading={"No wasted journeys or fuel, send your field team to the right place every time."}
        description={`Ensuring we keep your field team workers going to the right customer address, Klipboard automatically works out the correct geo coordinates based on the address details you enter and plots your customer's location on a map. These location details are then available for your field team workers on their Klipboard mobile app when assigned a job, therefore seamlessly enabling access to directions.`}
        />
        <WhyComponent />
        <PricingComponent />
        <DownloadComponent />
        <Footer/>
      </main>
    </>
  );
}

const linksInfo=[
  {
    title: 'Performance Dashboard',
    description: 'Get total oversight in your field service business and monitor your job activity, financial performance, business operations and your team all in real time.'
  },
  {
    title: 'Job Scheduling & Dispatch Board',
    description: 'Intuitive scheduling out in the field enabling management of jobs and dispatch to your team. Combine with a built in calendar for instantly viewing your next job & those upcoming.'
  },
  {
    title: 'Live GPS & Job Tracking',
    description: 'Track your field team, anticipate availability and monitor the progress of jobs from start to finish. Ensure efficiency and profitability whilst offering a superior customer experience.'
  },
  {
    title: 'Job Scheduling & Calendar',
    description: 'Intuitive scheduling out in the field enabling management of jobs and dispatch to your team. Combine with a built in calendar for instantly viewing your next job & those upcoming.'
  },
  {
    title: 'Job Details & Intelligent Routing',
    description: 'Our mobile app is always by your team’s side and gives them everything for a job at their fingertips instantly. Client details, job history, documents, assets, routing & more!'
  },
  {
    title: 'Job Forms & Image',
    description: 'Capture crucial job information with custom forms and configure rules for mandatory and order of completion on the job. You can then ensure quality and compliant service every time.'
  },
  {
    title: 'Client & Report Management',
    description: 'Customer details at your team’s fingertips. You can enable your mobile workforce the ability to access customer information and also update or add records out in the field.'
  },
  {
    title: 'Quoting & Estimates',
    description: 'Professional Quoting & Estimates software is a great way to win more business and increase your revenue. We provide a simple and efficient way to create Quotes and get online acceptance.'
  },
  {
    title: 'Purchase Order & Inventory Management',
    description: 'Manage your inventory items whilst monitoring stock levels and stock locations. With our Purchase Order management you can track deliveries, costs, margins and more!'
  },
  {
    title: 'Timesheet Management',
    description: 'Empower your team to easily track their travel and job hours. With accurate time capture per job and reporting features, you can make more informed decisions about your business operations.'
  },
  {
    title: 'Client Portal',
    description: 'Enhance customer experience and reduce your operational admin, give your customer’s a 24/7 self serve portal & a real time view on their jobs.'
  },
  // {
  //   title: 'Communications & Customer Experience',
  //   description: ''
  // },
  {
    title: 'Asset Servicing Reminders',
    description: 'Increase your recurring revenue with service reminders. Transform your reminder service by automatically sending service reminders to your customers when their assets are due servicing.'
  },
 
]