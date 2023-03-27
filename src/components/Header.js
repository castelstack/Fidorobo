import { currentUser } from '@/store';
import { useAtomValue } from 'jotai';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Industries, { Features, FeaturesMobile, IndustriesMobile } from './Industries';
import { Logo } from './Logo';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(0);
  const { query, reload } = useRouter();
  const user = useAtomValue(currentUser);

  useEffect(() => {
    // reload()
  }, [query.id]);

  return (
    <header className='bg-tag-brand relative'>
      <div className='py-[20px] wrapper px-4 flex items-center justify-between'>
        <Logo />

        <nav className='flex gap-[50px] items-center max-md:hidden'>
          <div className='dropdown dropdown-hover dropdown-right'>
            <label tabIndex={1} className='text-white m-1 py-2'>
              Features
            </label>
            <div
              tabIndex={1}
              className='dropdown-content card card-compact w-[80vw]   shadow bg-transparent mt-4 text-primary-content'
            >
              <div className='card-body !mt-8 !bg-white rounded-lg'>
                <Features />
              </div>
            </div>
          </div>
          <div className='dropdown dropdown-hover dropdown-left'>
            <label tabIndex={0} className='text-white m-1 py-2'>
              Industries
            </label>
            <div
              tabIndex={0}
              className='dropdown-content card card-compact w-[25vw] max-md:w-[50vw] shadow bg-transparent mt-4 text-primary-content'
            >
              <div className='card-body !mt-8 !bg-white rounded-lg'>
                <Industries />
              </div>
            </div>
          </div>
          <Link href='/pricing' className='text-white m-1 py-2 text-base'>
            Pricing
          </Link>
          {!user ? (
            <Link href={'/signup'} className='btn-primary'>
              Sign up
            </Link>
          ) : (
            <Link href={'/pricing'} className='btn-primary'>
              Upgrade
            </Link>
          )}
        </nav>

        <button
          type='button'
          className='flex md:hidden'
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
              />
            </svg>
          )}
        </button>
      </div>
   {open&& <MobileHeader setOpen={setOpen} open={open} user={user} />}
    </header>
  );
};

export default Header;

const MobileHeader = ({ setOpen, open, user }) => {
  const [openInd, setOpenInd] = useState(false);
  const [openFeatures, setOpenFeatures] = useState(false);
  // useEffect(() => {
  //   // Prevent page scrolling
  //   function preventScroll(e) {
  //     e.preventDefault();
  //   }

  //   // Add the event listener when the component mounts
  //   document.addEventListener('scroll', preventScroll, { passive: false });

  //   // Remove the event listener when the component unmounts
  //   return () => {
  //     document.removeEventListener('scroll', preventScroll);
  //   };
  // }, []);

  return (
    <div className={`fixed top-0 w-full bg-white/40 h-full ${open ? 'transUp' : 'hidden'}`}>
      <div className={`bg-tag-brand p-4 ${open ? 'transDown' : 'hidden'}`}>
        <button
          type='button'
          className='flex md:hidden ml-auto'
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
              />
            </svg>
          )}
        </button>
        <nav className='flex flex-col gap-4 items-start '>
          <p
            className='text-white text-base'
            onClick={() => setOpenInd(!openInd)}
          >
            Industries
          </p>
          {openInd && (
            <div className=' w-full bg-transparent'>
              <div className='border-t border-white p-2'>
                <IndustriesMobile />
              </div>
            </div>
          )}
          <p
            className='text-white text-base'
            onClick={() => setOpenFeatures(!openFeatures)}
          >
            Features
          </p>
          {openFeatures && (
            <div className=' w-full bg-transparent'>
              <div className='border-t border-white p-2'>
                <FeaturesMobile />
              </div>
            </div>
          )}

          {!user ? (
            <Link href={'/signup'} className='btn-primary'>
              Sign up
            </Link>
          ) : (
            <Link href={'/pricing'} className='btn-primary'>
              Upgrade
            </Link>
          )}
        </nav>
      </div>
    </div>
  );
};
