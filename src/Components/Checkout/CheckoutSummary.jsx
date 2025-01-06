import React, { useContext } from 'react';
import { CartContext } from '../ContextAPI/CartProvider';

const CheckoutSummary = () => {
    const { cartItems } = useContext(CartContext); // Only need cartItems here

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className='w-[35%] bg-white rounded-xl py-12 px-6'>
            <h3 className='text-[#191919] uppercase font-bold text-[18px]'>
                Summary
            </h3>

            {cartItems.length === 0 ? (
                <p className='text-[#191919] font-bold text-center text-[18px]'>
                    Your cart is empty.
                </p>
            ) : (
                <div className='mt-5'>
                    {cartItems.map((item) => (
                        <div key={item.slug} className='flex justify-between items-start mb-4'>
                            <div className='flex gap-4 items-center'>
                                <img src={item.image} className='w-16 h-16 object-cover rounded' alt={item.name} />
                                <div>
                                    <p className='font-bold text-[15px] text-[#191919]'>
                                        {item.name}
                                    </p>
                                    <p className='text-[#00000080] text-[14px] mt-1 font-semibold'>
                                        ${item.price.toFixed(2)}
                                    </p>
                                </div>
                            </div>

                            <div className='quantity'>
                                <p className='text-[#00000080] mt-1 font-bold'>
                                    x{item.quantity}
                                </p>
                            </div>
                        </div>
                    ))}

                    <div className='mt-8 flex justify-between gap-4 items-center'>
                        <p className='text-[17px] font-semibold text-[#00000080] uppercase'>
                            Total:
                        </p>
                        <h3 className='text-[#191919] font-bold text-[18px]'>$ {totalPrice.toFixed(2)}</h3> {/* toFixed added here */}
                    </div>

                    <div className='mt-3 flex justify-between gap-4 items-center'>
                        <p className='text-[17px] font-semibold text-[#00000080] uppercase'>
                            Shipping:
                        </p>
                        <h3 className='text-[#191919] font-bold text-[18px]'>$ 50.00</h3> {/* toFixed added here */}
                    </div>

                    <div className='mt-3 flex justify-between gap-4 items-center'>
                        <p className='text-[17px] font-semibold text-[#00000080] uppercase'>
                            Vat(Included):
                        </p>
                        <h3 className='text-[#191919] font-bold text-[18px]'>$ {((totalPrice / 100) * 15).toFixed(2)}</h3> {/* toFixed added here */}
                    </div>

                    <div className='mt-10 flex justify-between gap-4 items-center'>
                        <p className='text-[17px] font-semibold text-[#00000080] uppercase'>
                            Grand Total:
                        </p>
                        <h3 className='text-[#d87d4a] font-bold text-[18px]'>
                            $ {(totalPrice + 50 + (totalPrice / 100) * 15).toFixed(2)}
                        </h3>
                    </div>

                    <div className='mt-8 w-full flex items-center justify-center text-center'>
                        {/* Removed button from here */}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CheckoutSummary;
