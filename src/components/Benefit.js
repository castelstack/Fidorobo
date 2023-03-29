const Benefit = () => {
  return (
    <section id='pricing' className=' bg-tag-brandLight py-32'>
      <main className='wrapper px-4'>
        <section className='flex flex-col items-center w-full text-black gap-4'>
          <h2 className='header-text text-center mb-4'>
            Klipboard can help deliver benefits to your industry
          </h2>
          <div className='grid grid-cols-2 max-md:grid-cols-1 gap-6'>
            {benefitInfo.map((text) => (
              <p className='grid grid-cols-max-fr !text-base font-medium'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={2.5}
                  stroke='currentColor'
                  className='w-6 h-6 text-tag-brand'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5'
                  />
                </svg>
               {text}
              </p>
            ))}
          </div>
        </section>
      </main>
    </section>
  );
};

export default Benefit;

const benefitInfo = [
 `Manage your team of Pest Controllers, create schedules and setup recurring jobs for aftercare programs for your customers`,
  `Our Excel Designer allows you to design the output of your final forms or reports as you wish and make sure they are directly in line with your company brand`,
  `Quote your clients, get approval, convert to a job for your Pest Controllers and invoice upon completion.`,
  `Improve customer service by keeping your customers informed through the use of automated email notifications, calendar reminders and the ability to email reports with customers easily and efficiently`,
  `Eliminate the risk of forms being lost, damaged or destroyed by utilising our secure cloud storage and comprehensive management features on our web admin dashboard`,
  `Real time tracking of your mobile workforce on a GPS map along with their current status`,
 `Access Pest Controllers documentation, manuals and service history all through a single job management software system`,
  `Time tracking of your installers hours and labour costs`,
];
