import aboutImg from '@/assets/heroimage.png';
import Image from 'next/image';
import { useAtomValue } from 'jotai';
import { currentUser } from '@/store';
import Link from 'next/link';

const BannerComponent = ({heading, description, ...props}) => {
  const user = useAtomValue(currentUser)
  return (
    <section className='bg-tag-brandLight'>

    <main className='hero md:h-[90vh] h-full  grid place-content-center'>
      <div className='wrapper px-4 grid grid-cols-2 max-md:grid-cols-1 max-md:justify-items-center gap-4 items-center justify-between pt-20 pb-40'>
        <div className='flex flex-col  description-black items-start gap-6'>
          <span className='text-xs font-extrabold uppercase text-white'>{props.type}</span>
          <h2 className='banner-text text-5xl max-lg:text-4xl max-md:text-4xl  text-white'>
            {heading}
          </h2>
          <p className='text-2xl max-md:text-base font-extralight  text-white max-md:w-[95%]'>
           {description}
          </p>
          <Link href={user? '/pricing' : '/signup'} type='button' className='btn-primary'>
            Get started
          </Link>
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
