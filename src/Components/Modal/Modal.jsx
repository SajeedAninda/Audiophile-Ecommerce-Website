import React from "react";

const Modal = ({ cartItems, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div
        className="bg-white rounded-lg p-5 w-[90%] lg:w-[500px]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="text-black bg-gray-200 px-3 py-1 rounded mb-4"
          aria-label="Close modal"
        >
          Close
        </button>
        <h2 className="text-lg font-bold mb-4">Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li
                key={item.slug}
                className="flex justify-between items-center mb-4"
              >
                <div>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                </div>
                <div>
                  <p className="font-bold">{item.name}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ${ (item.price * item.quantity).toFixed(2) }</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Modal;
