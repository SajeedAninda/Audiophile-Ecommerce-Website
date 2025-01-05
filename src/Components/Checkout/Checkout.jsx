import React from 'react'
import { IoReturnUpBack } from 'react-icons/io5'

const Checkout = () => {
  return (
    <div className='bg-[#f1f1f180] pt-10'>
      <div className='w-[100%] lg:w-[1130px] mx-auto'>
        <button
          onClick={() => {
            navigate(-1)
          }}
          className='bg-[#d87d4a] px-8 py-3 hover:bg-[#db956c] text-white font-bold uppercase text-[13px]  transition-colors duration-300 ease-in-out flex items-center gap-3'
        >
          <IoReturnUpBack className='text-white text-[25px] font-bold' />
          Go Back
        </button>

        <div className='mainDiv flex gap-10 justify-between items-center mt-6'>
          <div className='formDiv w-[75%] bg-white rounded-xl py-8 px-12'>
            <h2 className='uppercase text-[#191919] font-bold text-[28px]'>
              Checkout
            </h2>

            {/* BILLING DETAILS  */}
            <div>
              <div className='billingDetails mt-6'>
                <p className='text-[#d87d4a] text-[14px] font-bold uppercase'>
                  Billing Details
                </p>
                <div className='mt-3 flex justify-between items-center gap-6'>
                  {/* NAME & EMAIL  */}
                  <div className='flex-1'>
                    <label
                      htmlFor='name'
                      className='text-[#191919] text-[13px] font-bold'
                    >
                      Name
                    </label>
                    <br />
                    <input
                      name='name'
                      type='text'
                      className='mt-2 w-full px-4 py-4 rounded-lg border border-[#0000003f] placeholder:text-[#00000080] placeholder:font-bold placeholder:text-[13px] text-[#191919] text-[13px] font-bold focus:outline-none focus:border focus:border-[#d87d4a]'
                      placeholder='Alexei Ward'
                    />
                  </div>

                  <div className='flex-1'>
                    <label
                      htmlFor='email'
                      className='text-[#191919] text-[13px] font-bold'
                    >
                      Email
                    </label>
                    <br />
                    <input
                      type='email'
                      name='email'
                      className='mt-2 w-full px-4 py-4 rounded-lg border border-[#0000003f] placeholder:text-[#00000080] placeholder:font-bold placeholder:text-[13px] text-[#191919] text-[13px] font-bold focus:outline-none focus:border focus:border-[#d87d4a]'
                      placeholder='alexei@mail.com'
                    />
                  </div>
                </div>

                <div className='flex-1 mt-3 w-[50%]'>
                  {/* TELEPHONE  */}
                  <label
                    htmlFor='phone'
                    className='text-[#191919] text-[13px] font-bold'
                  >
                    Phone Number
                  </label>
                  <br />
                  <input
                    name='phone'
                    type='tel'
                    className='mt-2 w-full px-4 py-4 rounded-lg border border-[#0000003f] placeholder:text-[#00000080] placeholder:font-bold placeholder:text-[13px] text-[#191919] text-[13px] font-bold focus:outline-none focus:border focus:border-[#d87d4a]'
                    placeholder='+1 202-555-8262'
                  />
                </div>
              </div>
            </div>

            {/* SHIPPING INFO  */}
            <div className='shippingInfo mt-6'>
              <p className='text-[#d87d4a] text-[14px] font-bold uppercase'>
                Shipping Info
              </p>
              <div className='mt-3'>
                {/* ADDRESS  */}
                <div className='flex-1'>
                  <label
                    htmlFor='address'
                    className='text-[#191919] text-[13px] font-bold'
                  >
                    Address
                  </label>
                  <br />
                  <input
                    type='text'
                    name='address'
                    className='mt-2 w-full px-4 py-4 rounded-lg border border-[#0000003f] placeholder:text-[#00000080] placeholder:font-bold placeholder:text-[13px] text-[#191919] text-[13px] font-bold focus:outline-none focus:border focus:border-[#d87d4a]'
                    placeholder='1192 Faxton Street'
                  />
                </div>
              </div>

              <div className='mt-3 flex justify-between items-center gap-6'>
                {/* ZIP CODE & CITY  */}
                <div className='flex-1'>
                  <label
                    htmlFor='zip'
                    className='text-[#191919] text-[13px] font-bold'
                  >
                    Zip Code
                  </label>
                  <br />
                  <input
                    name='zip'
                    type='text'
                    className='mt-2 w-full px-4 py-4 rounded-lg border border-[#0000003f] placeholder:text-[#00000080] placeholder:font-bold placeholder:text-[13px] text-[#191919] text-[13px] font-bold focus:outline-none focus:border focus:border-[#d87d4a]'
                    placeholder='20001'
                  />
                </div>

                <div className='flex-1'>
                  <label
                    htmlFor='city'
                    className='text-[#191919] text-[13px] font-bold'
                  >
                    City
                  </label>
                  <br />
                  <input
                    type='text'
                    name='city'
                    className='mt-2 w-full px-4 py-4 rounded-lg border border-[#0000003f] placeholder:text-[#00000080] placeholder:font-bold placeholder:text-[13px] text-[#191919] text-[13px] font-bold focus:outline-none focus:border focus:border-[#d87d4a]'
                    placeholder='Austin'
                  />
                </div>
              </div>

              <div className='mt-3'>
                {/* COUNTRY  */}
                <div className='flex-1 w-[50%]'>
                  <label
                    htmlFor='country'
                    className='text-[#191919] text-[13px] font-bold'
                  >
                    Country
                  </label>
                  <br />
                  <input
                    type='text'
                    name='country'
                    className='mt-2 w-full px-4 py-4 rounded-lg border border-[#0000003f] placeholder:text-[#00000080] placeholder:font-bold placeholder:text-[13px] text-[#191919] text-[13px] font-bold focus:outline-none focus:border focus:border-[#d87d4a]'
                    placeholder='United States'
                  />
                </div>
              </div>
            </div>

            {/* PAYMENT DETAILS  */}
            <div>
              <div className='paymentDetails mt-6'>
                <p className='text-[#d87d4a] text-[14px] font-bold uppercase'>
                  Payment Methods
                </p>
                <div className='mt-3 flex justify-between gap-6'>
                  <div className='flex-1'>
                    <p className='text-[#191919] text-[13px] font-bold'>
                      Payment Method
                    </p>
                  </div>

                  <div className='flex-1'>
                    <div className='flex items-center gap-3  border border-[#0000003f] focus:outline-none focus:ring-2 focus:ring-[#d87d4a] py-4 px-3 rounded-lg'>
                      <input
                        id='eMoney'
                        name='paymentMethod'
                        type='radio'
                        className='w-5 h-5 accent-[#d87d4a]'
                      />
                      <label
                        htmlFor='eMoney'
                        className='text-[#191919] text-[13px] font-bold'
                      >
                        E-Money
                      </label>
                    </div>

                    <div className='flex items-center gap-3 mt-3 border border-[#0000003f] focus:outline-none focus:ring-2 focus:ring-[#d87d4a] py-4 px-3 rounded-lg'>
                      <input
                        id='cashOnDelivery'
                        name='paymentMethod'
                        type='radio'
                        className='w-5 h-5 accent-[#d87d4a]'
                      />
                      <label
                        htmlFor='cashOnDelivery'
                        className='text-[#191919] text-[13px] font-bold'
                      >
                        Cash On Delivery
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
