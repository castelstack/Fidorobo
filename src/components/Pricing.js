import { currentUser } from '@/store';
import { useAtomValue } from 'jotai';
import Link from 'next/link';

const PricingComponent = () => {
  const user = useAtomValue(currentUser);

  const PricingData = [
    {
      title: 'Startup',
      list: [
        'Job scheduling',
        'contract management ',
        'invoice management ',
        'quotation management ',
        'live tracking of staff ',
        'customer sign on acceptance ',
        ' Timesheet of staff ',
        ' Limited to 10 users',
      ],
      price: '$20 per week ',
      setupfee: '$1000 setup fee ',
      status: true,
      route: `https://smitiv.recurly.com/subscribe/startup?email=${user?.email}`
    },
    {
      title: 'SME',
      list: [
        'Job scheduling',
        'contract management ',
        'invoice management ',
        'quotation management ',
        'live tracking of staff ',
        'customer sign on acceptance ',
        ' Timesheet of staff ',
        ' Limited to 30 users',
      ],
      price: '$60 per week ',
      setupfee: '$1000 setup fee ',
      status: false,
      route: `https://smitiv.recurly.com/subscribe/sme?email=${user?.email}`
    },
    {
      title: 'Large SME',
      list: [
        'Job scheduling',
        'contract management ',
        'invoice management ',
        'quotation management ',
        'live tracking of staff ',
        'customer sign on acceptance ',
        ' Timesheet of staff ',
        ' Limited to 50 users',
      ],
      price: '$100 per week ',
      status: true,
      route: `https://smitiv.recurly.com/subscribe/large-sme?email=${user?.email}`
    },
    {
      title: 'Corporation',
      list: [
        'Job scheduling',
        'contract management ',
        'invoice management ',
        'quotation management ',
        'live tracking of staff ',
        'customer sign on acceptance ',
        ' Timesheet of staff ',
        ' Limited to 100 users',
      ],
      price: '$200 per week ',
      status: true,
      route: `https://smitiv.recurly.com/subscribe/corporation?email=${user?.email}`
    },
    {
      title: 'Large Corporation',
      list: [
        'Job scheduling',
        'contract management ',
        'invoice management ',
        'quotation management ',
        'live tracking of staff ',
        'customer sign on acceptance ',
        ' Timesheet of staff ',
        ' Limited to 300 users',
      ],
      price: '$400 per week ',
      status: false,
      route: `https://smitiv.recurly.com/subscribe/large-corporation?email=${user?.email}`
    },
    {
      title: 'Unicorn',
      list: [
        'Job scheduling',
        'contract management ',
        'invoice management ',
        'quotation management ',
        'live tracking of staff ',
        'customer sign on acceptance ',
        ' Timesheet of staff ',
        ' Limited to 1000 users',
      ],
      price: '$500 per week ',
      status: true,
      route: `https://smitiv.recurly.com/subscribe/unicorn?email=${user?.email}`
    },
  ];
  
  return (
    <section id='pricing' className=' bg-tag-brandLight py-32'>
      <main className='wrapper px-4'>
        <div className='flex flex-col items-center w-full text-black gap-4'>
          <h2 className='header-text text-center'>Field Robo pricing</h2>
          <p className='text-[18px] max-md:text-base text-center max-md:w-[95%] w-[50%]'>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley
          </p>
        </div>
        <div className='grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-8 mt-20'>
          {PricingData.map((item, i) => (
            <>
              {item.status ? (
                <div
                  key={i}
                  className={`rounded-md p-8   shadow-md ${
                    item.status
                      ? 'bg-white !text-black'
                      : 'bg-tag-brand !text-white'
                  } w-full flex flex-col`}
                >
                  <span className='text-sm'>{item.title}</span>

                  <h5 className=' text-xl font-bold my-4'>{item.price}</h5>
                  {/* {item.setupfee ? (
                    <p className='text-sm text-tag-brand'>{item.setupfee}</p>
                  ) : (
                    <p className='text-sm text-white py-2'></p>
                  )} */}

                  <p className='mb-6 mt-2 !text-sm'>
                    It offers a reliable and cost-effective hosting solution
                    with all the essentials you need to get started.
                  </p>

                  <div className='flex flex-col gap-2 my-8'>
                    {item.list.map((item, i) => (
                      <div className='flex justify-start '>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={1.5}
                          stroke='currentColor'
                          className='w-6 h-6 text-tag-brand mr-1'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                          />
                        </svg>
                        <p className='!text-sm'>{item}</p>
                      </div>
                    ))}
                  </div>
                  {item.status ? (
                    <>
                      {!user ? (
                        <Link href='/signup' className='btn-sec mt-auto w-full'>
                          Choose
                        </Link>
                      ) : (
                        <a
                          href={item.route}
                          className='btn-sec mt-auto !w-full '
                        >
                          Choose
                        </a>
                      )}
                    </>
                  ) : (
                    <>
                      {!user ? (
                        <Link
                          href='/signup'
                          className='btn-primary mt-auto w-full'
                        >
                          Choose
                        </Link>
                      ) : (
                        <a
                          href={item.route}
                          className='btn-primary mt-auto !w-full'
                        >
                          Choose
                        </a>
                      )}
                    </>
                  )}
                </div>
              ) : (
                <div
                  key={i}
                  className={`rounded-md p-8  even:!text-white shadow-md ${
                    item.status
                      ? 'bg-white !text-black'
                      : 'bg-tag-brand !text-white'
                  }`}
                >
                  <span className='text-sm text-white'>{item.title}</span>

                  <h5 className=' text-xl font-bold my-4'>{item.price}</h5>
                  {/* {item.setupfee ? (
                    <p className='text-sm text-white'>{item.setupfee}</p>
                  ) : (
                    <p className='text-sm text-white py-2'></p>
                  )} */}

                  <p className='mb-6 mt-2 !text-sm'>
                    It offers a reliable and cost-effective hosting solution
                    with all the essentials you need to get started.
                  </p>

                  <div className='flex flex-col gap-2 my-8 w-full'>
                    {item.list.map((item, i) => (
                      <div className='flex justify-start '>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={1.5}
                          stroke='currentColor'
                          className='w-6 h-6 text-white mr-1'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                          />
                        </svg>
                        <p className='!text-sm'>{item}</p>
                      </div>
                    ))}
                  </div>
                  {item.status ? (
                    <>
                      {!user ? (
                        <Link href='/signup' className='btn-sec mt-auto '>
                          Choose
                        </Link>
                      ) : (
                        <a href={item.route} className='btn-sec mt-auto '>
                          Choose
                        </a>
                      )}
                    </>
                  ) : (
                    <>
                      {!user ? (
                        <Link href='/signup' className='btn-primary mt-auto '>
                          Choose
                        </Link>
                      ) : (
                        <a href={item.route} className='btn-primary mt-auto '>
                          Choose
                        </a>
                      )}
                    </>
                  )}
                </div>
              )}
            </>
          ))}
        </div>
      </main>
    </section>
  );
};

export default PricingComponent;
