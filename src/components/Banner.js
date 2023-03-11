import aboutImg from '@/assets/heroimage.png';
import herobg from '@/assets/bg-hero.png';
import Image from 'next/image';

const BannerComponent = () => {
  return (
    <section className='bg-tag-brandLight'>

    <main className='hero md:h-[90vh] h-full  grid place-content-center'>
      <div className='wrapper px-4 grid grid-cols-2 max-md:grid-cols-1 max-md:justify-items-center gap-4 items-center justify-between pt-20 pb-40'>
        <div className='flex flex-col  text-black items-start gap-6'>
          <h2 className='banner-text text-5xl max-lg:text-4xl max-md:text-4xl  text-white'>
            Explore your world with field robo
          </h2>
          <p className='text-base  text-white max-md:w-[95%]'>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <button type='button' className='btn-primary'>
            Get started
          </button>
        </div>

        <Image
          src={aboutImg}
          alt='About Field Robo'
          className='max-w-[450px] max-md:max-w-[350px]  max-md:mt-12  justify-self-center'
        />
      </div>
    </main>
    </section>
  );
};

export default BannerComponent;
