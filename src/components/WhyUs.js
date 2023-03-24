import clientImg from '@/assets/client.png';
import Image from 'next/image';

const WhyComponent = () => {
  return (
    <section className='h-[90vh]  grid place-content-center'>
      <div className='wrapper px-4 grid grid-cols-2 max-md:grid-cols-1 max-md:justify-items-center gap-4 items-center justify-between'>
        <Image
          src={clientImg}
          alt='client Field Robo'
          className='max-w-[550px] max-md:max-w-[350px]  max-md:mt-12  justify-self-center max-md:order-last'
        />
        <div className='flex flex-col  text-black items-start gap-6'>
          <h2 className='header-text capitalize'>Why Us?</h2>
          <p className='text-[18px] max-md:text-base max-md:w-[95%] font-extralight text-gray-800'>
            The Field Robo mobile app is also your team’s source for their most
            up-to-date job schedule. If you make a change to their schedule they
            will be alerted with a notification. Scheduled jobs deployed to your
            field team members will be displayed on their Field Robo mobile app
            through on an intuitive calendar and scrolling timeline. You can be
            confident your team knows when their next job is due and that they
            can instantly access all the information they require. 
          </p>
          <p className='text-[18px] max-md:text-base max-md:w-[95%] font-extralight text-gray-800 mt-4'>You team can
            plan for today, tomorrow, and beyond with agility and confidence.</p>
          <button type='button' className='btn-sec mt-4'>
            Get started
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyComponent;
