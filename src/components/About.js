import aboutImg from '@/assets/about.png';
import Image from 'next/image';

const AboutComponent = ({heading, description}) => {
  return (
    <section className='bg-tag-brandLight h-[90vh] py-32 grid place-content-center'>
      <div className='wrapper px-4 grid grid-cols-2 max-md:grid-cols-1  gap-4 items-center justify-between my-auto'>
        <div className='flex flex-col text-gray-900 items-start gap-6'>
          <h2 className='header-text'>{heading}</h2>
          <p className='text-[18px] max-md:text-base  max-md:w-[95%] text-gray-800'>
            {description}
          </p>
          <button type='button' className='btn-sec mt-4'>
            Get started
          </button>
        </div>

        <Image
          src={aboutImg}
          alt='About Field Robo'
          className='max-w-[550px] max-md:max-w-[350px]  max-md:mt-12  justify-self-center'
        />
      </div>
    </section>
  );
};

export default AboutComponent;
