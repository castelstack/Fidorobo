import Link from 'next/link';
import { useState } from 'react';
import Industries, { Features, IndustriesMobile } from './Industries';
import { Logo } from './Logo';

const Header = () => {
  const [open, setOpen] = useState(false);
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
              className='dropdown-content card card-compact w-[30vw] max-md:w-[50vw] shadow bg-transparent mt-4 text-primary-content'
            >
              <div className='card-body !mt-8 !bg-white rounded-lg'>
                <Features />
              </div>
            </div>
          </div>
          <div className='dropdown dropdown-hover dropdown-right'>
            <label tabIndex={0} className='text-white m-1 py-2'>
            Industries
            </label>
            <div
              tabIndex={0}
              className='dropdown-content card card-compact w-[45vw] max-md:w-[50vw] shadow bg-transparent mt-4 text-primary-content'
            >
              <div className='card-body !mt-8 !bg-white rounded-lg'>
                <Industries />
              </div>
            </div>
          </div>
          <a href='#pricing'  className='text-white m-1 py-2 text-base'>
            Pricing
            </a>
          <button className='btn-primary'>Sign up</button>
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
      {open && <MobileHeader setOpen={setOpen} open={open}/>}
    </header>
  );
};

export default Header;

const MobileHeader = ({setOpen,open}) => {
    const [openInd, setOpenInd] = useState(false);
  return (
    <div className='fixed top-0 w-full bg-white/40 h-full transition-all ease-in duration-300'>

    <div className=' bg-tag-brand p-4'>
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
          <p className='text-white text-base' onClick={()=>setOpenInd(!openInd)}>
              Industries
            </p>
            {openInd&& <div
            
            className=' w-full bg-transparent'
          >
            <div className='border-t border-white p-2'>
              <IndustriesMobile />
            </div>
          </div>}
         
          <Link href='/' className='capitalize'>
            Pricing
          </Link>
          <Link href='/' className='capitalize'>
            Pricing
          </Link>
          <button className='btn-primary '>Sign up</button>
        </nav>
    </div>
    </div>
  );
};
