import clientImg from '@/assets/client.png';
import Image from 'next/image';

const ClientComponent = () => {
  return (
    <section className='h-[90vh]  grid place-content-center'>
      <div className='wrapper px-4 grid grid-cols-2 max-md:grid-cols-1 max-md:justify-items-center gap-4 items-center justify-between'>
        <Image
          src={clientImg}
          alt='client Field Robo'
          className='max-w-[550px] max-md:max-w-[350px]  max-md:mt-12  justify-self-center max-md:order-last'
        />
        <div className='flex flex-col  text-black items-start gap-6'>
          <h2 className='header-text capitalize'>client portal</h2>
          <p className='text-[18px] max-md:text-base max-md:w-[95%] font-normal text-gray-800'>
            Enhance customer experience and reduce your operational admin, give
            your customer’s a 24/7 self serve portal & a real time view on their
            jobs.
          </p>
          <p className='text-[18px] max-md:text-base max-md:w-[95%] font-normal text-gray-800'>
            Successfully run your business with a single software platform. With
            features for office and field, Field Robo's cloud-based Job and
            Field Service Management software gives you everything you need to
            manage operations and grow your business.
          </p>
          <button type='button' className='btn-sec mt-4'>
            Get started
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientComponent;
