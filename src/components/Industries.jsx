import Link from 'next/link';

const Industries = () => {
  const links = [
    {
      title: 'Aircon servicing',
      route: '/aircon-servicing',
    },
    {
      title: 'Cleaning',
      route: '/cleaning',
    },
    {
      title: 'Pest control',
      route: '/pest-control',
    },
  ];
  return (
    <div className='p-4'>
      <h6 className='text-gray-800 text-base font-bold border-b border-gray-300 pb-1 mb-5'>
        Industries
      </h6>

      <div className=' grid grid-cols-1 justify-between gap-3'>
        {links.map((link, i) => (
          <Link
            href={`/industry/${link.route.replace(/,|&/g, '')
            .split(' ')
            .join('-')
            .toLocaleLowerCase()}`}
            key={i}
            className='text-gray-900 font-thin  cursor-pointer hover:text-tag-brand border-b border-gray-200 pb-2'
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Industries;

export const Features = () => {
  const links = [
    {
      title:'Organised office icon Organised Office',
      subs: [
        'Performance Dashboard',
        'Job Scheduling & Dispatch Board',
        'Live GPS & Job Tracking',
      ],
    },
    {
      title:'Organised office icon Connected Mobile Workers',
      subs: [
        'Job Scheduling & Calendar',
        'Job Details & Intelligent Routing',
        'Job Forms & Image',
        'Client & Report Management'
      ],
    },
    {
      title:'Simple Accounting iconSimple Accounting',
      subs: [
        'Quoting & Estimates',
        'Purchase Order & Inventory Management',
        'Timesheet Management'
      ],
    },
    {
      title:'Impressed Customers iconImpressed Customers',
      subs: [
        'Client Portal',
        // 'Communications & Customer Experience',
        'Asset Servicing Reminders',
      ],
    },
  ];
  return (
    <div className='p-4'>
      <h6 className='text-gray-800 text-base font-bold border-b border-gray-300 pb-1 mb-5'>
        Features
      </h6>
      <div className='grid md:grid-cols-2 grid-cols-1 justify-between gap-6 mt-4'>
     {links.map( (link)=>  <div className='flex flex-col gap-4 '>
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

            <div className='flex flex-col gap-3 text-sm w-[270px]'>
              <h3 className='text-gray-900 text-base font-bold  cursor-pointer '>
                {link.title}
              </h3>
              {link.subs.map((sub, i) => (
                <Link href={`/feature/${sub.replace(/,|&/g, "").split(' ').join('-').toLocaleLowerCase()}`} key={i}  className='font-thin inline word-break text-gray-900 cursor-pointer hover:text-tag-brand'>
               {sub}
                </Link>
              ))}
            </div>
          </main>
        </div>)}
        {/* <div className='flex flex-col gap-4'>
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
        </div> */}
      </div>
    </div>
  );
};

export const IndustriesMobile = () => {
  const links = [
    {
      title: 'Aircon servicing',
      route: '/aircon-servicing',
    },
    {
      title: 'Cleaning',
      route: '/cleaning',
    },
    {
      title: 'Pest control',
      route: '/pest-control',
    },
  ];
  return (
    <div className=''>
      <div className=' flex flex-col gap-3'>
      {links.map((link, i) => (
          <Link
            href={`/industry/${link.route.replace(/,|&/g, '')
            .split(' ')
            .join('-')
            .toLocaleLowerCase()}`}
            key={i}
            className='text-gray-200 font-thin  cursor-pointer   pb-2'
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
export const FeaturesMobile = () => {
  const links = [
    {
      title:'Organised office icon Organised Office',
      subs: [
        'Performance Dashboard',
        'Job Scheduling & Dispatch Board',
        'Live GPS & Job Tracking',
      ],
    },
    {
      title:'Organised office icon Connected Mobile Workers',
      subs: [
        'Job Scheduling & Calendar',
        'Job Details & Intelligent Routing',
        'Job Forms & Image',
        'Client & Report Management'
      ],
    },
    {
      title:'Simple Accounting iconSimple Accounting',
      subs: [
        'Quoting & Estimates',
        'Purchase Order & Inventory Management',
        'Timesheet Management'
      ],
    },
    {
      title:'Impressed Customers iconImpressed Customers',
      subs: [
        'Client Portal',
        // 'Communications & Customer Experience',
        'Asset Servicing Reminders',
      ],
    },
  ];
  return (
    <div className=''>
      <div className=' flex flex-wrap gap-6'>
      {links.map( (link)=>  <div className='flex flex-col gap-4 '>
          <main className='flex gap-3 items-start'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6 text-white bg-tag-brand/10 rounded-full p-1'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
              />
            </svg>

            <div className='flex flex-col gap-3 text-sm w-[270px]'>
              <h3 className='text-gray-200 text-base font-bold  cursor-pointer pb-1 border-gray-200/20 border-b '>
                {link.title}
              </h3>
              {link.subs.map((sub, i) => (
                <Link href={`/feature/${sub.replace(/,|&/g, "").split(' ').join('-').toLocaleLowerCase()}`} key={i}  className='font-thin inline word-break text-gray-200 cursor-pointer'>
               {sub}
                </Link>
              ))}
            </div>
          </main>
        </div>)}
      </div>
    </div>
  );
};
