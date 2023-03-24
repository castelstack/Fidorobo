import axios from 'axios';
import { Formik } from 'formik';
import Link from 'next/link';
import { useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import * as Yup from 'yup';

export const SignupForm = () => {
  const { addToast } = useToasts();
  const [loading, setLoading] = useState(false)
  const industries = [
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
    <Formik
      initialValues={{
        name: '',
        username: '',
        password: '',
        industry: '',
        phone: '',
        email: '',
      }}
      validationSchema={Yup.object({
        name: Yup.string().required(),
        username: Yup.string().required(),
        password: Yup.string().min(6).required(),
        industry: Yup.string().required(),
        phone: Yup.string().required(),
        email: Yup.string().email().required(),
      })}
      onSubmit={async (values, { resetForm }) => {
        setLoading(true);
        axios
          .post('http://52.221.226.148:5001/api/v1/company', {
            ...values,
          })
          .then(function () {
            addToast(`${values.name} was created successfully!`, {
              appearance: 'success',
              autoDismiss: true,
            });
            resetForm()
          })
          .catch(function (error) {
            console.log(error)
            addToast(error.response.data.message, {
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
            Sign up
            <br />
            <span className='text-center text-gray-800 font-thin text-base'>
              Fill the form to create a new company account
            </span>
          </h1>
          <div className='flex flex-col'>
            <label htmlFor='firstName' className='label'>
              Company Name
            </label>
            <input
              id='name'
              type='text'
              className='input-style'
              {...formik.getFieldProps('name')}
            />
            {formik.touched.name && formik.errors.name ? (
              <p className='error'>{formik.errors.name}</p>
            ) : null}
          </div>
          <section className='grid md:grid-cols-2 grid-cols-1 gap-2 justify-start'>
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
              <label htmlFor='phone' className='label'>
                phone
              </label>
              <input
                id='phone'
                type='tel'
                className='input-style'
                {...formik.getFieldProps('phone')}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <p className='error'>{formik.errors.phone}</p>
              ) : null}
            </div>
          </section>
          <div className='flex flex-col'>
            <label htmlFor='email' className='label'>
              email
            </label>
            <input
              id='email'
              type='email'
              className='input-style'
              {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className='error'>{formik.errors.email}</p>
            ) : null}
          </div>

          <div className='flex flex-col'>
            <label htmlFor='password' className='label'>
              industry
            </label>
            <select
              label='industry'
              className='input-style'
              {...formik.getFieldProps('industry')}
              name='industry'
            >
              <option value=''>Select an industry</option>
              {industries.map((industry) => (
                <option value={industry.title}>{industry.title}</option>
              ))}
            </select>
            {formik.touched.industry && formik.errors.industry ? (
              <p className='error'>{formik.errors.industry}</p>
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
                  d='M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            )}
            Create
          </button>
          <p className='text-base text-gray-900 mt-2'>Already have an account? <Link className='text-purple-800' href='/signin'>sign in</Link></p>
        
        </form>
      )}
    </Formik>
  );
};
