import downloadImg from '@/assets/download.png';
import Image from 'next/image';

const DownloadComponent = () => {
  return (
    <section>
      <main className='wrapper px-2 h-[90vh] grid place-content-center'>
        <div className='flex flex-col items-center text-black gap-4 mb-12'>
          <h2 className='header-text text-center'>
            Get started with our mobile app
          </h2>
          <p className='text-base text-center max-md:w-[85%] w-[50%]'>
            With a suite of features and functionalities, geared towards making
            it easy for you
          </p>
        </div>

        <div className='rounded-3xl bg-[#F0F0F0] md:p-12 p-4 grid place-center md:mx-8 mx-2 max-md:mx-1'>
          <div className='grid grid-cols-2 max-md:grid-cols-1 max-md:justify-items-center max-md:justify-center gap-4 items-center justify-between'>
            <div className='flex flex-col max-md:items-center text-black items-start gap-6'>
              <h2 className='header-text !text-xl md:!text-2xl max-md:text-center'>
                Download field robo mobile app to get started
              </h2>
              <p className='text-base max-md:text-center max-md:w-[85%]'>
                A better way to say “It’s on me”
              </p>
              <div className='flex flex-wrap max-md:px-auto max-md:w-full max-md:justify-center gap-6'>
                <button
                  type='button'
                  className='border border-gray-600 rounded-md py-2 px-4 flex gap-2 items-center'
                >
                  <svg
                    role='img'
                    viewBox='0 0 24 24'
                    id='icon'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <title>Apple</title>
                    <path d='M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701' />
                  </svg>

                  <p className='text-[7px] text-left leading-none'>
                    get on
                    <br />
                    <span className='text-base  leading-tight'>
                      Apple store
                    </span>
                  </p>
                </button>
                <button
                  type='button'
                  className='border border-gray-600 rounded-md py-2 px-4 flex gap-2 items-center'
                >
                  <svg
                    role='img'
                    viewBox='0 0 24 24'
                    id='icon'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <title>Google Play</title>
                    <path d='M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z' />
                  </svg>

                  <p className='text-[7px] text-left leading-none'>
                    get on
                    <br />
                    <span className='text-base  leading-tight'>Google app</span>
                  </p>
                </button>
              </div>
            </div>

            <Image
              src={downloadImg}
              alt='About Field Robo'
              className='max-w-[390px]  max-md:max-w-[300px]  max-md:mt-12  justify-self-center'
            />
          </div>
        </div>
      </main>
    </section>
  );
};

export default DownloadComponent;
