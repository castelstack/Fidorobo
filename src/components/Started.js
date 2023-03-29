import { currentUser } from '@/store';
import { useAtomValue } from 'jotai';
import Link from 'next/link';

const Started = () => {
  const user = useAtomValue(currentUser);
  return (
    <main className='wrapper started md:px-4 px-2 !my-16 bg-tag-brand grid place-content-center h-[50vh] md:rounded-xl'>
      <div className='w-[75%] max-md:w-full flex flex-col gap-6 items-center mx-auto'>
        <span className='text-xs font-extrabold uppercase text-white'>
          Field Robo
        </span>
        <h2 className='header-text capitalize !text-white text-center'>
          Revolutionize your business with streamlined operations, an empowered
          team, and exceptional customer satisfaction.
        </h2>
        <>
          {!user ? (
            <Link href='/signup' className='btn-primary mt-auto'>
              Get started
            </Link>
          ) : (
            <a href={item.route} className='btn-primary mt-auto '>
              Choose
            </a>
          )}
        </>
      </div>
    </main>
  );
};

export default Started;
