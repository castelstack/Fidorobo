import BannerComponent from '@/components/Banner';
import Benefit from '@/components/Benefit';
import DownloadComponent from '@/components/Download';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import InfoComponent from '@/components/InfoCon';
import Started from '@/components/Started';
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
        .toLocaleLowerCase()
        .replace(/--/g, '-') === query.id
  )[0]?.title;
  const description = linksInfo.filter(
    (link) =>
      link.title
        .replace(/,|&/g, '')
        .split(' ')
        .join('-')
        .toLocaleLowerCase()
        .replace(/--/g, '-') === query.id
  )[0]?.description;

  const info = linksInfo.filter(
    (link) =>
      link.title
        .replace(/,|&/g, '')
        .split(' ')
        .join('-')
        .toLocaleLowerCase()
        .replace(/--/g, '-') === query.id
  )[0];

  return (
    <>
      <Head>
        <title>{info?.title}</title>
        <meta name='description' content={info?.description} />
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
        <InfoComponent info={info?.infoOne} />
        <Started />
        <InfoComponent info={info?.infoTwo} />
        {info?.infoThree && (
          <>
            <Started />
            <InfoComponent info={info?.infoThree} />
          </>
        )}
        {query.id === 'pest-control' && <Benefit />}
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
    infoOne: {
      title: 'Aircon Servicing Software',
      text: [
        'Efficient job scheduling and having complete oversight of the workforce and their jobs is key for Facilities Management businesses. Successful Facilities Management businesses have to manage on-going maintenance whilst being able to respond quickly should they receive a reactive job',
        `Klipboard's job management software empowers both your team in the field and the office. Significantly improve the efficiency of your job planning and dispatching of jobs on our Drag and Drop scheduler. Your engineers utilising the mobile app will have access to the most up to date information for each job and everything they need to complete the work - forms, documentation, asset registers, parts inventory and more!`,
      ],
    },
    infoTwo: {
      title: 'Intelligent Scheduling',
      text: [
        'Schedule jobs with ease by using our Drag and Drop scheduler and dispatch your Pest Controllers. Avoid scheduling mistakes, customer no-shows and wasted journeys by utilising our intelligent scheduling features and automated customer SMS and Email communication. Instantly see which field team members can respond to a call out and swiftly assign them to take action on their Klipboard mobile app.',
        `Easily create recurring pest control jobs with our planned maintenance features. Klipboard allows you to create planned preventative maintenance schedules and our extensive Asset Management web and mobile app capabilities allow for simplified asset surveying. You can get total visibility via our intuitive Asset Management Dashboard of all your customer assets that you manage on planned maintenance programmes.`,
      ],
    },
  },
  {
    title: 'Cleaning',
    description:
      'Intuitive scheduling out in the field enabling management of jobs and dispatch to your team. Combine with a built in calendar for instantly viewing your next job & those upcoming.',
    infoOne: {
      title: 'Cleaning Job Management Software',
      text: [
        `No matter what manufactured products you provide, install and maintain for your customers, you need a job management software platform that will help you achieve profitability and growth. Equipment Manufacturers responsible for customer installation, commissioning and maintenance of their customer business critical equipment must ensure that their processes are managed as efficiently and proactively as possible.`,
        `Klipboard enables efficient scheduling of jobs with our Drag and Drop scheduler. Dispatch planned our reactive jobs instantly to team members for completion using the Klipboard mobile app. Your team member out on the job can easily access all the information they need via the app. Asset details, directions to the job, customer details, associated PDF documents such as manuals or drawings and importantly any paperwork that needs completion such as Risk Assessments, Equipment Job Service Sheets, or anything you require!`,
      ],
    },
    infoTwo: {
      title: 'Intelligent Scheduling',
      text: [
        'Schedule jobs with ease by using our Drag and Drop scheduler and dispatch your Pest Controllers. Avoid scheduling mistakes, customer no-shows and wasted journeys by utilising our intelligent scheduling features and automated customer SMS and Email communication. Instantly see which field team members can respond to a call out and swiftly assign them to take action on their Klipboard mobile app.',
        `Easily create recurring pest control jobs with our planned maintenance features. Klipboard allows you to create planned preventative maintenance schedules and our extensive Asset Management web and mobile app capabilities allow for simplified asset surveying. You can get total visibility via our intuitive Asset Management Dashboard of all your customer assets that you manage on planned maintenance programmes.`,
      ],
    },
  },
  {
    title: 'Pest control',
    description:
      'Track your field team, anticipate availability and monitor the progress of jobs from start to finish. Ensure efficiency and profitability whilst offering a superior customer experience.',
    infoOne: {
      title: 'Pest Control Job Management Software',
      text: [
        `There’s a lot to manage in a Pest Control business. You have to efficiently manage your schedule during seasonal busy periods, quickly respond to callouts, produce reports and audits, as well as handling constant customer communications.`,

        `This is why many turn to Klipboard to help them simplify their scheduling, planned maintenance, recurring jobs, quoting, invoicing, reporting and more - an all in one job management software platform.`,
        `Jobs are allocated to your Pest Controllers in the field and accessed on the Klipboard mobile app. This ensures they have everything they need at their fingertips - job schedules, routes, customer information, documents, inventory, time-sheets, along with any custom or industry standard forms.`,
      ],
    },
    infoTwo: {
      title: 'Intelligent Scheduling',
      text: [
        'Schedule jobs with ease by using our Drag and Drop scheduler and dispatch your Pest Controllers. Avoid scheduling mistakes, customer no-shows and wasted journeys by utilising our intelligent scheduling features and automated customer SMS and Email communication. Instantly see which field team members can respond to a call out and swiftly assign them to take action on their Klipboard mobile app.',
        `Easily create recurring pest control jobs with our planned maintenance features. Klipboard allows you to create planned preventative maintenance schedules and our extensive Asset Management web and mobile app capabilities allow for simplified asset surveying. You can get total visibility via our intuitive Asset Management Dashboard of all your customer assets that you manage on planned maintenance programmes.`,
      ],
    },
  },
];
