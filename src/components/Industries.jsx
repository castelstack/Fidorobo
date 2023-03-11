const Industries = () => {
  return (
    <div className='p-4'>
      <h6 className='text-gray-900 text-base font-bold border-b border-gray-400 pb-2 mb-4'>
        Industries
      </h6>

      <div className=' flex flex-wrap justify-between gap-3'>
        {new Array(30).fill(0).map((i) => (
          <a className='text-gray-900 whitespace-nowrap cursor-pointer hover:text-tag-brand'>
            Building one
          </a>
        ))}
      </div>
    </div>
  );
};

export default Industries;

export const Features = () => {
  return (
    <div className='p-4'>
      <h6 className='text-gray-900 text-base font-bold border-b border-gray-400 pb-2 mb-4'>
        Features
      </h6>
      <div className='grid grid-cols-2 justify-between gap-6 mt-4'>
        <div className='flex flex-col gap-4'>
          <main className='flex gap-3 items-start'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6 text-tag-brand bg-tag-brand/10 rounded-full p-1'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
              />
            </svg>

            <div className='flex flex-col gap-1 text-sm'>
            <a className='text-gray-900 font-medium whitespace-nowrap cursor-pointer '>
                Building one
              </a>
              {new Array(3).fill(0).map((i) => (
                <a className='text-gray-900 whitespace-nowrap cursor-pointer hover:text-tag-brand'>
                  Building one
                </a>
              ))}
            </div>
          </main>
        </div>
        <div className='flex flex-col gap-4'>
          <main className='flex gap-3 items-start'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6 text-tag-brand bg-tag-brand/10 rounded-full p-1'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
              />
            </svg>

            <div className='flex flex-col gap-1 text-sm'>
              <a className='text-gray-900 font-medium whitespace-nowrap cursor-pointer '>
                Building one
              </a>
              {new Array(3).fill(0).map((i) => (
                <a className='text-gray-900 whitespace-nowrap cursor-pointer hover:text-tag-brand'>
                  Building one
                </a>
              ))}
            </div>
          </main>
        </div>
        <div className='flex flex-col gap-4'>
          <main className='flex gap-3 items-start'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6 text-tag-brand bg-tag-brand/10 rounded-full p-1'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
              />
            </svg>

            <div className='flex flex-col gap-1 text-sm'>
            <a className='text-gray-900 font-medium whitespace-nowrap cursor-pointer '>
                 Building one
              </a>
              {new Array(3).fill(0).map((i) => (
                <a className='text-gray-900 whitespace-nowrap cursor-pointer hover:text-tag-brand'>
                  Building one
                </a>
              ))}
            </div>
          </main>
        </div>
        <div className='flex flex-col gap-4'>
          <main className='flex gap-3 items-start'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6 text-tag-brand bg-tag-brand/10 rounded-full p-1'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
              />
            </svg>

            <div className='flex flex-col gap-1 text-sm'>
            <a className='text-gray-900 font-medium whitespace-nowrap cursor-pointer '>
                Building one
              </a>
              {new Array(3).fill(0).map((i) => (
                <a className='text-gray-900 whitespace-nowrap cursor-pointer hover:text-tag-brand'>
                  Building one
                </a>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export const IndustriesMobile = () => {
  return (
    <div className=''>
      <div className=' flex flex-wrap gap-3'>
        {new Array(30).fill(0).map((i) => (
          <a className='text-white whitespace-nowrap cursor-pointer hover:text-tag-brand'>
            Building one
          </a>
        ))}
      </div>
    </div>
  );
};
export const FeaturesMobile = () => {
  return (
    <div className=''>
      <div className=' flex flex-wrap gap-3'>
        {new Array(30).fill(0).map((i) => (
          <a className='text-white whitespace-nowrap cursor-pointer hover:text-tag-brand'>
            Building one
          </a>
        ))}
      </div>
    </div>
  );
};
