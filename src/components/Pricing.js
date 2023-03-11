const PricingComponent = () => {
  return (
    <section id='pricing' className=' bg-tag-brandLight py-32'>
      <main className='wrapper px-4'>
        <div className='flex flex-col  text-black gap-4'>
          <h2 className='header-text '>Field Robo pricing</h2>
          <p className='text-base  max-md:w-[85%] w-[50%]'>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley
          </p>
        </div>
        <div className='grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-8 mt-12'>
          {PricingData.map((item, i) => (
            <>
              {item.status ? (
                <div
                  key={i}
                  className={`rounded-md p-8   shadow-md ${
                    item.status
                      ? 'bg-white !text-black'
                      : 'bg-tag-brand !text-white'
                  }`}
                >
                  <span className='text-sm'>{item.title}</span>

                  <h5 className=' text-xl font-bold mt-4'>{item.price}</h5>
                  {item.setupfee ? (
                    <p className='text-sm text-tag-brand'>{item.setupfee}</p>
                  ) : (
                    <p className='text-sm text-white py-2'></p>
                  )}

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
                    <button className='btn-sec mt-auto w-full'>Choose</button>
                  ) : (
                    <button className='btn-primary mt-auto w-full'>
                      Choose
                    </button>
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

                  <h5 className=' text-xl font-bold mt-4'>{item.price}</h5>
                  {item.setupfee ? (
                    <p className='text-sm text-white'>{item.setupfee}</p>
                  ) : (
                    <p className='text-sm text-white py-2'></p>
                  )}

                  <p className='mb-6 mt-2 !text-sm'>
                    It offers a reliable and cost-effective hosting solution
                    with all the essentials you need to get started.
                  </p>

                  <div className='flex flex-col gap-2 my-8 '>
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
                    <button className='btn-sec mt-auto w-full'>Choose</button>
                  ) : (
                    <button className='btn-primary mt-auto w-full'>
                      Choose
                    </button>
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
    price: '$1000 per year ',
    setupfee: '$1000 setup fee ',
    status: true,
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
    price: '$3000 per year ',
    setupfee: '$1000 setup fee ',
    status: false,
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
    price: '$5000 per year ',
    status: true,
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
    price: '$10,000 per year ',
    status: true,
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
    price: '$20,000 per year ',
    status: false,
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
    price: '$25,000 per year ',
    status: true,
  },
];
