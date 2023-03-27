import { currentUser } from '@/store';
import axios from 'axios';
import { Formik } from 'formik';
import { useAtomValue, useSetAtom } from 'jotai';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import * as Yup from 'yup';

export const BASE_URL = 'https://api.fieldrobo.io/api/v1';
// export const BASE_URL = 'http://52.221.226.148:5001/api/v1';

export const SigninForm = () => {
  const { addToast } = useToasts();
  const [loading, setLoading] = useState(false);
  const setUser = useSetAtom(currentUser);
  const user = useAtomValue(currentUser);
  const route = useRouter();
  // console.log(user, 'user1');

  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      validationSchema={Yup.object({
        username: Yup.string().required(),
        password: Yup.string().min(6).required(),
      })}
      onSubmit={async (values, { resetForm }) => {
        setLoading(true);
        axios
          .post(`${BASE_URL}/admin/login`, {
            ...values,
          })
          .then(function (res) {
            addToast(`signed in successfully!`, {
              appearance: 'success',
              autoDismiss: true,
            });
            console.log(res);
            setUser({ ...res.data.admin });
            route.push('/pricing');
            resetForm();
          })
          .catch(function (error) {
            addToast(error.message, {
              appearance: 'error',
              autoDismiss: true,
            });
          })
          .finally(() => setLoading(false));
      }}
    >
      {(formik) => (
        <form
          onSubmit={formik.handleSubmit}
          className='md:min-w-[35vw] min-w-[80vw] flex-col flex gap-4'
        >
          <h1 className='font-extrabold text-3xl mb-2 text-gray-900'>
            Sign in
            <br />
            <span className='text-center text-gray-800 font-thin text-base'>
              Fill the form to create a new company account
            </span>
          </h1>

          <div className='flex flex-col'>
            <label htmlFor='username' className='label'>
              username
            </label>
            <input
              id='username'
              type='text'
              className='input-style'
              {...formik.getFieldProps('username')}
            />
            {formik.touched.username && formik.errors.username ? (
              <p className='error'>{formik.errors.username}</p>
            ) : null}
          </div>
          <div className='flex flex-col'>
            <label htmlFor='password' className='label'>
              password
            </label>
            <input
              id='password'
              type='password'
              className='input-style'
              {...formik.getFieldProps('password')}
            />
            {formik.touched.password && formik.errors.password ? (
              <p className='error'>{formik.errors.password}</p>
            ) : null}
          </div>

          <button
            type='submit'
            disabled={loading}
            className='btn-sec hover:!opacity-none w-full mt-4 flex items-center !justify-center gap-2'
          >
            {loading ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6 animate-spin'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99'
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
                  d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75'
                />
              </svg>
            )}
            Sign in
          </button>
          <p className='text-base text-gray-900 mt-2'>
            Don't have an account?{' '}
            <Link className='text-purple-800' href='/signup'>
              sign up
            </Link>
          </p>
        </form>
      )}
    </Formik>
  );
};
