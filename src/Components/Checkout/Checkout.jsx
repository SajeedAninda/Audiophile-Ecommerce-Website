import React, { useState } from 'react'
import { IoReturnUpBack } from 'react-icons/io5'
import checkoutImg from '../../assets/images/checkout/icon-cash-on-delivery.svg'
import { useNavigate } from 'react-router-dom'
import CheckoutSummary from './CheckoutSummary'

const Checkout = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('eMoney')
  let navigate = useNavigate()

  return (
    <div className='bg-[#f1f1f180] pt-10 pb-24'>
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

        <div className='mainDiv flex gap-10 justify-between items-start mt-6'>
          <div className='formDiv w-[65%] bg-white rounded-xl py-12 px-12'>
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
                      id='name'
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
                      id='email'
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
                    id='phone'
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
                    id='address'
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
                    id='zip'
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
                    id='city'
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
                    id='country'
                    name='country'
                    className='mt-2 w-full px-4 py-4 rounded-lg border border-[#0000003f] placeholder:text-[#00000080] placeholder:font-bold placeholder:text-[13px] text-[#191919] text-[13px] font-bold focus:outline-none focus:border focus:border-[#d87d4a]'
                    placeholder='United States'
                  />
                </div>
              </div>
            </div>

            {/* PAYMENT DETAILS */}
            <div className='paymentDetails mt-6'>
              <p className='text-[#d87d4a] text-[14px] font-bold uppercase mt-3'>
                Payment Details
              </p>
              <div className='flex justify-between gap-10 mt-3'>
                <div className='flex-1'>
                  <p className='text-[#191919] text-[13px] font-bold'>
                    Payment Methods
                  </p>
                </div>

                <div className='flex-1'>
                  <div className='mt-3'>
                    {/* E-Money */}
                    <div
                      className={`flex items-center gap-3 border py-4 px-3 rounded-lg cursor-pointer ${
                        selectedPaymentMethod === 'eMoney'
                          ? 'border-[#d87d4a]'
                          : 'border-[#0000003f]'
                      }`}
                      onClick={() => setSelectedPaymentMethod('eMoney')}
                    >
                      <input
                        id='eMoney'
                        name='paymentMethod'
                        type='radio'
                        className='w-5 h-5 accent-[#d87d4a]'
                        checked={selectedPaymentMethod === 'eMoney'}
                        onChange={() => setSelectedPaymentMethod('eMoney')}
                      />
                      <label
                        htmlFor='eMoney'
                        className='text-[#191919] text-[13px] font-bold cursor-pointer'
                      >
                        E-Money
                      </label>
                    </div>

                    {/* Cash On Delivery */}
                    <div
                      className={`flex items-center gap-3 mt-3 border py-4 px-3 rounded-lg cursor-pointer ${
                        selectedPaymentMethod === 'cashOnDelivery'
                          ? 'border-[#d87d4a]'
                          : 'border-[#0000003f]'
                      }`}
                      onClick={() => setSelectedPaymentMethod('cashOnDelivery')}
                    >
                      <input
                        id='cashOnDelivery'
                        name='paymentMethod'
                        type='radio'
                        className='w-5 h-5 accent-[#d87d4a]'
                        checked={selectedPaymentMethod === 'cashOnDelivery'}
                        onChange={() =>
                          setSelectedPaymentMethod('cashOnDelivery')
                        }
                      />
                      <label
                        htmlFor='cashOnDelivery'
                        className='text-[#191919] text-[13px] font-bold cursor-pointer'
                      >
                        Cash On Delivery
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {selectedPaymentMethod === 'eMoney' && (
                <div className='conditionalDiv mt-10 flex justify-between items-center gap-6'>
                  {/* e-MoneyNumber & e-MoneyPin  */}
                  <div className='flex-1'>
                    <label
                      htmlFor='eMoneyNumber'
                      className='text-[#191919] text-[13px] font-bold'
                    >
                      E-Money Number
                    </label>
                    <br />
                    <input
                      name='eMoneyNumber'
                      id='eMoneyNumber'
                      type='number'
                      className='mt-2 w-full px-4 py-4 rounded-lg border border-[#0000003f] placeholder:text-[#00000080] placeholder:font-bold placeholder:text-[13px] text-[#191919] text-[13px] font-bold focus:outline-none focus:border focus:border-[#d87d4a]'
                      placeholder='736151729'
                    />
                  </div>

                  <div className='flex-1'>
                    <label
                      htmlFor='eMoneyPin'
                      className='text-[#191919] text-[13px] font-bold'
                    >
                      E-Money Pin
                    </label>
                    <br />
                    <input
                      name='eMoneyPin'
                      id='eMoneyPin'
                      type='number'
                      className='mt-2 w-full px-4 py-4 rounded-lg border border-[#0000003f] placeholder:text-[#00000080] placeholder:font-bold placeholder:text-[13px] text-[#191919] text-[13px] font-bold focus:outline-none focus:border focus:border-[#d87d4a]'
                      placeholder='9917'
                    />
                  </div>
                </div>
              )}

              {selectedPaymentMethod === 'cashOnDelivery' && (
                <div className='conditionalDiv2 mt-10 flex justify-between items-center gap-4'>
                  <img src={checkoutImg} alt='' />
                  <p className='text-[16px] font-semibold text-[#00000080]'>
                    The ‘Cash on Delivery’ option enables you to pay in cash
                    when our delivery courier arrives at your residence. Just
                    make sure your address is correct so that your order will
                    not be cancelled.
                  </p>
                </div>
              )}
            </div>
          </div>

          <CheckoutSummary></CheckoutSummary>
        </div>
      </div>
    </div>
  )
}

export default Checkout
