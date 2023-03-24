import aboutImg from '@/assets/heroimage.png';
import { Logo } from '@/components/Logo';
import { SigninForm } from '@/containers/signinForm';
import { SignupForm } from '@/containers/signup';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Signup() {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Sign in</title>
        <meta
          name='description'
          content='Sign in and get vast control of your staff'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='h-full min-h-screen relative grid md:grid-cols-2 grid-cols-1'>
        <button type="button" onClick={()=> router.back()} className='absolute top-4 right-4 text-gray-900'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-8 h-8'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
        </button>
        <div className='grid place-content-center gap-2 bg-tag-brand max-md:hidden px-4'>
          <div className='mx-auto flex flex-col items-center'>
            <Logo />
            <p className='text-center text-white w-[85%] text-base'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
              excepturi tempora et
            </p>
          </div>
          <Image
            src={aboutImg}
            alt='About Field Robo'
            className='max-w-[450px] max-md:max-w-[350px] max-sm:max-w-[300px]  max-md:mt-12 mx-4  justify-self-center'
          />
        </div>
        <div className='bg-white grid items-center justify-center px-4 gap-2'>
          <SigninForm />
        </div>
      </main>
    </>
  );
}
