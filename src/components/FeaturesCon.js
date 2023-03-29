import aboutImg from '@/assets/about.png';
import Image from 'next/image';

const FeatureComponent = ({ info }) => {
  return (
    <section className='bg-tag-brandLight py-32 grid grid-cols-1 gap-8'>
      <div className='wrapper px-4 grid grid-cols-1 max-md:grid-cols-1  gap-4 items-center justify-between my-auto'>
        <div className='flex flex-col text-gray-900 items-start gap-6'>
          <h2 className='header-text'>{info?.title}</h2>
          {info?.text.map((text) => (
            <p className='text-[18px] max-md:text-base  max-md:w-[95%] mb-3 text-gray-800'>
              {text}
            </p>
          ))}
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

export default FeatureComponent;
