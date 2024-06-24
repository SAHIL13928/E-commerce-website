import React from 'react';

const Popup = ({ orderPopup, handleOrderPopup, cart }) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ${
        orderPopup ? 'block' : 'hidden'
      }`}
    >
      <div className='bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-80 max-h-96 overflow-y-auto'>
        <h2 className='text-2xl font-bold mb-4'>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((product, index) => (
              <li key={index} className='flex justify-between items-center mb-2'>
                <div>
                  <h3 className='font-semibold'>{product.title}</h3>
                  <p>${product.price}</p>
                </div>
                <div>
                  <button
                    className='bg-red-500 text-white px-2 py-1 rounded-full'
                    onClick={() => handleRemoveFromCart(product.id)}
                  >
                    -
                  </button>
                  <span className='mx-2'>{product.count}</span>
                  <button
                    className='bg-green-500 text-white px-2 py-1 rounded-full'
                    onClick={() => handleAddToCart(product)}
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
        <button
          onClick={handleOrderPopup}
          className='mt-4 bg-primary text-white px-4 py-2 rounded'
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
