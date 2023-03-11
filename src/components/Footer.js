import Link from "next/link";


const Footer = () => {
  return (
    <footer className=' wrapper px-4 flex flex-col gap-4  py-12 border-t  border-white/10'>
      <div className='flex flex-col md:flex-row justify-between md:gap-4 gap-6 '>
        <div className='flex flex-col items-start gap-4 '>
         
          <h1 className='text-xl font-bold text-black'>Fieldrobo</h1>
          <p className="mb-3 text-black w-[80%]">Lorem Ipsum has been the industry's standard dummy</p>
          <p className='font-light max-md:hidden !text-center !text-sm !text-gray-600'>
          @fieldrobo {new Date().getFullYear()} All right reserved.
        </p>
        </div>
        {/* access */}
        <div className='flex flex-col'>
          <h1 className='text-base text-black font-bold mb-2'>Products</h1>
          <Link href='/privacy-and-policy' className='capitalize mb-1 text-sm font-light text-black'>
          about us
          </Link>
          <Link href='/privacy-and-policy' className='capitalize mb-1 text-sm font-light text-black'>
          client portal
          </Link>
          <Link href='/privacy-and-policy' className='capitalize mb-1 text-sm font-light text-black'>
          help center
          </Link>
          <Link href='/privacy-and-policy' className='capitalize mb-1 text-sm font-light text-black'>
          customer suport
          </Link>
        </div>
        {/* contacts */}
        <div className='flex flex-col'>
          <h1 className='text-base text-black font-bold mb-2'>Resources</h1>
          <a className='capitalize mb-1 text-sm font-light text-black' href='mailto:support@tournest.io'>
          Case study
          </a>
          <a className='capitalize mb-1 text-sm font-light text-black' href='mailto:support@tournest.io'>
          trade talk
          </a>
          <a className='capitalize mb-1 text-sm font-light text-black' href='mailto:support@tournest.io'>
          field service glossary
          </a>
        
        </div>

        {/* socials */}
        <div className='flex flex-col'>
          <h1 className='text-base text-black font-bold mb-2'>Socials</h1>
          <div className={"flex gap-6 "}>
            <a
              href='https://twitter.com/TOURNEST0?t=UhQzu1med1uYThkyQNt22Q&s=09'
              target='_blank'
              rel='noreferrer'
            >
              <svg
                role='img'
                fill='#000'
                viewBox='0 0 24 24'
                width='20'
                height='20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Twitter</title>
                <path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' />
              </svg>
            </a>

            <a href='' target='_blank' rel='noreferrer'>
              <svg
                role='img'
                fill='#000'
                width='20'
                height='20'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Facebook</title>
                <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
              </svg>
            </a>

            <a
              href='https://vm.tiktok.com/ZMNa73QoA/'
              target='_blank'
              rel='noreferrer'
            >
              <svg
                role='img'
                fill='#000'
                width='20'
                height='20'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>TikTok</title>
                <path d='M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z' />
              </svg>
            </a>

            <a
              href='https://discord.gg/74HFX3PC'
              target='_blank'
              rel='noreferrer'
            >
              <svg
                role='img'
                fill='#000'
                width='20'
                height='20'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Discord</title>
                <path d='M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z' />
              </svg>
            </a>

            <a
              href='https://instagram.com/tournest.community'
              target='_blank'
              rel='noreferrer'
            >
              <svg
                role='img'
                fill='#000'
                width='20'
                height='20'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Instagram</title>
                <path d='M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z' />
              </svg>
            </a>

            <a
              href='https://t.me/+2emunoC4F_85YzJk'
              target='_blank'
              rel='noreferrer'
            >
              <svg
                role='img'
                fill='#000'
                width='20'
                height='20'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Telegram</title>
                <path d='M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z' />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <p className='font-light max-md:inline hidden !text-center !text-sm !text-gray-600 mt-6'>
          @fieldrobo {new Date().getFullYear()} All right reserved.
        </p>
      {/* <div className='flex justify-center w-full py-6 border-t  border-white/10'>
        <a className='text-sm font-light text-black !text-center !text-sm !text-gray-600'>
          @fieldrobo {new Date().getFullYear()} All right reserved.
        </a>
      </div> */}
    </footer>
  );
};

export default Footer;
