import React from 'react'
import Logo from '../Logo'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <section className='relative overflow-hidden py-10 bg-gray-400 border border-t-2 border-t-black'>
      <div className='relative z-10 mx-auto max-w-7xl px-4'>
        {/* z index => Placing things behind a div if z = -ve or in front if z = +ve */}
        <div className='-m-6 flex flex-wrap'>
         {/* https://tailwindcss.com/docs/margin */}
          <div className='w-full p-6 md:w-1/2 lg:w-5/12'>
            <div className='flex h-full flex-col justify-between'>
              <div className='mb-4 inline-flex items-center'>
                <Logo width="100px" />
              </div>

              <div>
                <p className='text-sm text-gray-600'>
                  &copy; Copyright 2024. All rights Reserved by KSD Blog.

                </p>
              </div>
            </div>
          </div>

          <div className='w-full p-6 md:w-1/2 lg:w-2/12'>
            <div className='h-full'>
              <h3 className='tracking-wide mb-9 text-xs font-semibold uppercase text-gray-500'>
                Company
              </h3>
              <ul>
                <li className='mb-4'>
                  <Link
                  className='text-base font-medium text-gray-900 hover:text-gray-700'
                  to="/"
                  >
                    Features
                  </Link>
                </li>

                <li className='mb-4'>
                  <Link
                  className='text-base font-medium text-gray-900 hover:text-gray-700'
                  to="/"
                  >
                    Pricing
                  </Link>
                </li>

                <li className='mb-4'>
                  <Link
                  className='text-base font-medium text-gray-900 hover:text-gray-700'
                  to="/"
                  >
                    Affiliate Program
                  </Link>
                </li>

                <li className='mb-4'>
                  <Link
                  className='text-base font-medium text-gray-900 hover:text-gray-700'
                  to="/"
                  >
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className='w-full p-6 md:w-1/2 lg:w-2/12'>
            <div className='h-full'>
              <h3 className='tracking-wide mb-9 text-xs font-semibold uppercase text-gray-500'>
                Support
              </h3>
              <ul>
                <li className='mb-4'>
                  <Link
                    className='text-base font-medium text-gray-900 hover:text-gray-700'
                    to="/"
                    >
                      Account
                    </Link>
                </li>

                <li className='mb-4'>
                  <Link
                    className='text-base font-medium text-gray-900 hover:text-gray-700'
                    to="/"
                    >
                      Help
                    </Link>
                </li>

                <li className='mb-4'>
                  <Link
                    className='text-base font-medium text-gray-900 hover:text-gray-700'
                    to="/"
                    >
                      Contact Us
                    </Link>
                </li>

                <li>
                  <Link
                    className='text-base font-medium text-gray-900 hover:text-gray-700'
                    to="/"
                    >
                      Customer Support
                    </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className='w-full p-6 md:w-1/2 lg:w-3/12'>
            <div className='h-full'>
              <h3 className='tracking-wide mb-9 text-xs font-semibold uppercase text-gray-500'>
                Legals
              </h3>
              <ul>
                <li className='mb-4'>
                  <Link
                    className='text-base font-medium text-gray-900 hover:text-gray-700'
                    to="/"
                    >
                      Terms &amp; Conditions
                    </Link>
                </li>

                <li className='mb-4'>
                  <Link
                    className='text-base font-medium text-gray-900 hover:text-gray-700'
                    to="/"
                    >
                      Privacy Policy
                    </Link>
                </li>

                <li className='mb-4'>
                  <Link
                    className='text-base font-medium text-gray-900 hover:text-gray-700'
                    to="/"
                    >
                      Licensing
                    </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer

// 🛑🛑 Just go to Logo.jsx to enter the code there