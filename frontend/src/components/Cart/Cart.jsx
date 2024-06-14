import React from 'react';

const Cart = ({ cart, handleCartToggle, removeFromCart }) => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
      <div className='bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg w-3/4 md:w-1/2 lg:w-1/3'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-2xl font-semibold'>Shopping Cart</h2>
          <button className='text-xl font-bold' onClick={handleCartToggle}>X</button>
        </div>
        {cart.length > 0 ? (
          <div>
            {cart.map(item => (
              <div key={item.id} className='flex justify-between items-center mb-4'>
                <div>
                  <h3 className='text-lg font-semibold'>{item.title}</h3>
                  <p className='text-sm text-gray-500'>Quantity: {item.quantity}</p>
                </div>
                <div className='flex items-center'>
                  <p className='text-lg font-semibold'>${item.price * item.quantity}</p>
                  <button className='ml-4 bg-red-500 text-white px-2 py-1 rounded' onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))}
            <div className='flex justify-between items-center mt-4'>
              <h3 className='text-lg font-semibold'>Total</h3>
              <p className='text-lg font-semibold'>${cart.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
            </div>
          </div>
        ) : (
          <p className='text-center'>Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
