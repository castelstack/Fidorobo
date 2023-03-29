import BannerComponent from '@/components/Banner';
import DownloadComponent from '@/components/Download';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import InfoComponent from '@/components/InfoCon';
import Started from '@/components/Started';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Features() {
  // const [data, setData] = useState();
  const { query } = useRouter();
  console.log(query);

  // const heading = linksInfo.filter(
  //   (link) =>
  //     link.title
  //       .replace(/,|&/g, '')
  //       .split(' ')
  //       .join('-')
  //       .toLocaleLowerCase()
  //       .replace(/--/g, '-') === query.id
  // )[0]?.title;
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

      <main className='bg-white h-full grid grid-cols-1'>
        <Header />
        <BannerComponent
          type={'feature'}
          heading={info?.title}
          description={info?.description}
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
        {/* <WhyComponent /> */}
        {/* <PricingComponent /> */}
        <DownloadComponent />
        <Footer />
      </main>
    </>
  );
}

const linksInfo = [
  {
    title: 'Performance Dashboard',
    description:
      'Get total oversight in your field service business and monitor your job activity, financial performance, business operations and your team all in real time.',
    infoOne: {
      title: 'The beating heart of your business.',
      text: [
        `Field Robo's interactive dashboard showing statistical graphs and financial performance indicators ensures you know what is happening in your business in realtime. For instant visibility, our top line view of jobs and the various stages of the job cycle is presented prominently. With a click of a button you can drill down into each job status and gain a granular view of what is happening at any given moment.`,
        'Monitor purchases for jobs, new business sales and cashflows ensuring you get instant insight on the financial health of your business. Keep track of team performance and the revenue they generate therefore allowing you to identify opportunities within your team',
      ],
    },
    infoTwo: {
      title: 'Gain insight on each customer.',
      text: [
        'Within our Customer CRM, we offer a range of live stats for jobs, finances and planned maintenance. This ensures you can gain an instant view of what is happening for your client and streamline communication with them or your team. Reports can be exported to Excel for each job management status allowing for granular view of what is happening in your business immediately and also the ability to analyse for trends.',
        `A customisable Job Progress Status dashboard for each of your customer's specific needs is also available. Perfect for those longer projects as it allows you to see the status of a specific job, ensuring jobs of a compliance nature reach completion.`,
      ],
    },
  },
  {
    title: 'Job Scheduling & Dispatch Board',
    description:
      'Intuitive scheduling out in the field enabling management of jobs and dispatch to your team. Combine with a built in calendar for instantly viewing your next job & those upcoming.',
    infoOne: {
      title: 'Drag. Drop. Done.',
      text: [
        `Field Robo's drag and drop Scheduler and Dispatch Board helps your field service business track and optimise the allocation of jobs to your field team. Your field service business can plan efficiently and confidently for today, tomorrow, next week and beyond whilst automatically communicating with your customer via SMS and email telling them when you will arrive.`,
        `Our intelligent schedule optimisation, streamlines the process for dispatching jobs to your team. Simply point-and-click to create a job or re-allocated to a different date or time, or to a different team member by simply dragging and dropping.`,
      ],
    },
    infoTwo: {
      title:
        'Pick the right field worker or field team for the job based on skills, location & more.',
      text: [
        `Visibility of customer information, history, who previously completed a customer's jobs and more, will allow you to decide who is right for that specific job. Field Robo also allows you categorise team members by job role and the skills they perform, whilst also highlighting who is located closest to the job request - ensuring optimum travel distances and better allocation of jobs to your team.`,
        `Create and manage custom categories that can then be assigned to jobs. Jobs can be categorise for specific job types, special tools or equipment needed and more. We know how important it is for flexibility as each job in a field service business comes with its own specific needs and requirements. We ensure your field worker turns up to each job with everything they need to get started.`,
      ],
    },
    infoThree: {
      title: 'Need to send a team to a customer job?',
      text: [
        `No problem! With Field Robo's Teams functionality, your dispatchers can allocate a job to multiple field team workers. With Teams you can allocate a job to the lead field team worker but if required you can add Support Team Members to the job when scheduling and dispatching.`,
        `We run smart background algorithms and work out who is available to be selected as a Team Member for that specific job, making it much easier for managing jobs that require multiple people. Field Robo's Teams feature is perfect for project work, installations or jobs that simply require multiple people to know where they have to be and what they have to do.`,
      ],
    },
  },
  {
    title: 'Live GPS & Job Tracking',
    description:
      'Track your field team, anticipate availability and monitor the progress of jobs from start to finish. Ensure efficiency and profitability whilst offering a superior customer experience.',
    infoOne: {
      title:
        'Gain visibility of your field teams, communicate directly and create savings through reduced fuel costs.',
      text: [
        'Field Robo GPS Tracking is fully integrated into our Field Service Management software. Never switch between multiple applications again. You can track live GPS location on a map view, when they have arrived, started the job and more.',
        'With more visibility you can allocate jobs to a team member located closest and cut down on excessive journeys and route your team more efficiently. Our range of map filters ensures you can find the information you need quickly. For fast efficient communication, click on a field team workers location and send them a notification message instantly which they will receive on the Field Robo mobile app - communicating those important updates in real time.',
      ],
    },
    infoTwo: {
      title: `Don't work blindly, understand availability and optimise.`,
      text: [
        `If they’re in the middle of their current job and still won’t be available for sometime, we give you this visibility in realtime. The live status feed ensures you can see when they are en-route, arrived, started and completed your customer's jobs. Field Robo allows you to see where each field team worker is in their current the job cycle.`,
        `This level of visibility allows for you to adjust jobs accordingly, or assign a nearby field worker to a new last minute job.`,
      ],
    },
  },
  {
    title: 'Job Scheduling & Calendar',
    description:
      'Intuitive scheduling out in the field enabling management of jobs and dispatch to your team. Combine with a built in calendar for instantly viewing your next job & those upcoming.',
    infoOne: {
      title: 'Fast and efficient team scheduling from the field.',
      text: [
        `The Field Robo mobile app gives you instant visibility of the information you need on an intuitive scheduler so you can make fast and accurate scheduling decisions in the field`,
        `When you receive a new job request, you can easily see your own availability or compare team member schedules with team view. This is a side-by-side view enabling the ability to see team member's availability on the app easily so that you can see quickly who’s free to do that job.`,
        `Once you have found an available time slot, simply choose it by tapping and to immediately start scheduling a new job. Select a job category, forms, documents and assets to be added to the job, ensuring your are adding all the information required for completion of the job.`,
      ],
    },
    infoTwo: {
      title: `Your field team will always be up to date & know their next job.
      `,
      text: [
        `The Field Robo mobile app is also your team’s source for their most up-to-date job schedule. If you make a change to their schedule they will be alerted with a notification.`,
        `Scheduled jobs deployed to your field team members will be displayed on their Field Robo mobile app through on an intuitive calendar and scrolling timeline. You can be confident your team knows when their next job is due and that they can instantly access all the information they require.`,
        `You team can plan for today, tomorrow, and beyond with agility and confidence.

      `,
      ],
    },
  },
  {
    title: 'Job Details & Intelligent Routing',
    description:
      'Our mobile app is always by your team’s side and gives them everything for a job at their fingertips instantly. Client details, job history, documents, assets, routing & more!',
    infoOne: {
      title: 'Instant view of the job at hand.',
      text: [
        'When your field team worker is notified of a job on the mobile app, they have the immediate ability to view the client contact, address details, job notes, forms, assets, documents and more that are associated with the job!',
      ],
    },
    infoTwo: {
      title: 'World renowned routing technology embedded.',
      text: [
        `Empower your field team worker with the location of their next job. No time is wasted entering postcodes or addresses, instead with one simple tap on the visual map your field team worker has immediate access to directions and the most efficient route.`,
        `The Field Robo app utilises and integrates with the leading routing technology for job management. Harnessing the power of Google or Apple map technology, you can be assured your field worker has reliable routing technology at their fingertips. Their route will be calculated based on their current GPS location and the location of the next job. Efficient and simple to use, the journey to the next job at hand will be hassle free.`,
      ],
    },
  },
  {
    title: 'Job Forms & Image',
    description:
      'Capture crucial job information with custom forms and configure rules for mandatory and order of completion on the job. You can then ensure quality and compliant service every time.',
    infoOne: {
      title: 'User friendly for speediness in the field.',
      text: [
        `Custom forms or reports can be created by using our unique Mobile Form Builder and can be attached to a job for field team workers to complete easily from the mobile app during a job. These can be for assessments, audit reports, maintenance records, inspections, surveys or just about any process you can imagine.`,
        `Workflow forms are displayed in a mobile user friendly manner on the mobile app for your field team workers, ensuring they can be completed quickly and efficiently. Components such as mandatory fields, text fields, image and signature capture, dropdown lists, tabs, yes / no toggles and much more makes the capture of data in the field much more efficient. Formatting and output of the data is taken care of when synced back to the office by the automated templates setup through our intuitive PDF Designer.`,
      ],
    },
    infoTwo: {
      title: 'An image says a thousand words.',
      text: [
        `As proof of work or just general compliance, images can be captured on the mobile app along with any captions you need to associate with the image. Simply open up the camera or choose an image from your camera roll for attachment within the workflow form associated with the job you are completing.`,
      ],
    },
  },
  {
    title: 'Client & Report Management',
    description:
      'Customer details at your team’s fingertips. You can enable your mobile workforce the ability to access customer information and also update or add records out in the field.',
    infoOne: {
      title: 'Empower your team in the field with more insight on the client.',
      text: [
        `Field Robo keeps tracks of all your customer information, so you and your team can deliver a customer experience that is personalised. Quickly and easily find client information using search to access a client’s full record at your fingertips immediately.`,
        `See past quotes, jobs, invoices and notes associated with each of your clients, giving you and your team the insight they need. No need for your field team to call the office to ask for client details to be sent over to enable them to do their job, causing unnecessary delays and poor customer experience.`,
      ],
    },
    infoTwo: {
      title: 'Manage your clients information in the field easily.',
      text: [
        `We offer the flexibility to give field team workers permission to manage clients directly from the mobile app, offering the ability to create or edit and view important information. At the tap of a button your field team worker can view notes in a chronological timeline, and add any new notes along with editing any existing client details ensuring your client records are always up to date.`,
        `You can also add notes and attachments to individual jobs you complete for a client, so whether you’re attaching photos of completed work or a job contract, you’ll always have access to a client’s complete and detailed history, in the office and out in the field.`,
      ],
    },
  },
  {
    title: 'Quoting & Estimates',
    description:
      'Professional Quoting & Estimates software is a great way to win more business and increase your revenue. We provide a simple and efficient way to create Quotes and get online acceptance.',
    infoOne: {
      title: 'Real time insight on all Quotes and enquiries with our dashboard',
      text: [
        `Field Robo's real-time dashboard helps to streamline your field service operations by centralising all quotes and is perfect for for forecasting revenues and opportunities. Our field service quoting software also lets you review the status of your quotes that have been sent via email on Field Robo, giving you insight on potential wins.`,
        `You can simply filter down to Quotes awaiting approval and easily monitor if the quote email has been opened and the engagement rate. These insight can help you determine if their is a requirement to send a follow-up email to prompt your customer.`,
      ],
    },
    infoTwo: {
      title: 'Clients can quickly and easily accept Quotes online',
      text: [
        'When you send your clients a quote they can easily approve it in your client portal, making it faster for you to win more business. Use automated notifications alerting your client when they have quotes requiring approval and be notified instantly when they accept. This gives your customer an Uber like experience whilst also minimising admin.',
      ],
    },
  },
  {
    title: 'Purchase Order & Inventory Management',
    description:
      'Manage your inventory items whilst monitoring stock levels and stock locations. With our Purchase Order management you can track deliveries, costs, margins and more!',
    infoOne: {
      title: '',
      text: '',
      text1: '',
    },
    infoTwo: {
      title: '',
      text: '',
      text1: '',
    },
  },
  {
    title: 'Timesheet Management',
    description:
      'Empower your team to easily track their travel and job hours. With accurate time capture per job and reporting features, you can make more informed decisions about your business operations.',
    infoOne: {
      title: `Keep track of your team's hours & labour cost in real time.`,
      text: `Our Timesheet Management feature allows your field team workers using the Field Robo mobile app to clock in by starting a timer and when they clock out, Field Robo updates both the job and the field team worker’s timesheet to reflect the time spent working and travelling. Easy to start, easy to stop, and you get a clear picture of time spent traveling to each job along with the associated costs that are automatically added to an invoice.`,
      text1: `Timesheet information can then be used to evaluate how efficient field workers are and which field workers take longer than others to complete similar types of jobs. Timesheet data can be filtered to your exact search queries and can be exported in to an Excel report with a simple click of a button!`,
    },
    infoTwo: {
      title: 'Time tracking with live visibility.',
      text: `Empowering your team with easy submission of hours in the field using our mobile app, enables administrators to easily view your team’s logged hours as they happen. Field Robo allows you to see where each field team worker is in their current the job cycle.`,
      text1: `Having a live view of time tracking gives the better visibility for job planning. For example if they’re in the middle of their current job and still won’t be available for sometime, you will be able to see this and therefore adjust schedules if required. The live time tracking and status feed ensures you can see when they are en-route, arrived, started and completed your customer's jobs along with the corresponding timesheet.`,
    },
  },
  {
    title: 'Client Portal',
    description:
      'Enhance customer experience and reduce your operational admin, give your customer’s a 24/7 self serve portal & a real time view on their jobs.',
    infoOne: {
      title: 'Streamline communication with your client.',
      text: 'Endless phone calls and emails get in the way of getting the job done, that’s why Field Robo has created an easy to access self-service Client Portal. The Client Portal is a self-serve, online experience giving your clients the ability to accept quotes, raise work requests and view information on the jobs you have completed — all in one place.',
      text1:
        'Your Client Portal can display your company branding or even an advert about a new product or service, so you’ll look professional and impress them every time they login. Your clients can easily access your Client Portal via a secure email link or you can add a login button on your website or social media channels.',
    },
    infoTwo: {
      title: 'Action work quickly & book more jobs with ease.',
      text: [
        `No more back and forth with your client, they can submit a request for more work directly from your client portal. When a client submits a new work request, Field Robo can send chosen team members in your business an email alert. Simply review any new work requests on your Field Robo dashboard, and in a couple of clicks convert them into a quote or job.`,
      ],
    },
  },
  // {
  //   title: 'Communications & Customer Experience',
  //   description: ''
  // },
  {
    title: 'Asset Servicing Reminders',
    description:
      'Increase your recurring revenue with service reminders. Transform your reminder service by automatically sending service reminders to your customers when their assets are due servicing.',
    infoOne: {
      title:
        'Help your customers stay on top of their asset servicing appointments.',
      text: [
        `Field Robo allows you to automatically record when your client's assets are due a service. Our automated servicing reminders eliminate the need to chase customers to schedule servicing jobs for planned maintenance on their assets. Automated asset service reminders increase job revenues from your existing customer base by providing an effortless booking experience. Reminders are sent before the service is due ensuring an opportunity is never missed.`,
        `Your will notice an increase in your team's efficiency, enabling them to focus on other high-value tasks within your business and importantly more revenue from recurring service jobs. Ultimately you can stay ahead of your competition and never miss a customer asset service again.`,
      ],
    },
    infoTwo: {
      title: '',
      text: '',
      text1: '',
    },
  },
];
