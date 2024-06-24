import React, { useState } from 'react';

const ProductCard = ({ data, addToCart, removeFromCart }) => {
  const [products, setProducts] = useState(data.map(product => ({ ...product, quantity: 0 })));

  const handleAddToCart = (product) => {
    addToCart(product);
    setProducts(products.map(p => {
      if (p.id === product.id) {
        return { ...p, quantity: p.quantity + 1 };
      }
      return p;
    }));
  };

  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
    setProducts(products.map(p => {
      if (p.id === product.id && p.quantity > 0) {
        return { ...p, quantity: p.quantity - 1 };
      }
      return p;
    }));
  };

  return (
    <div className='mb-10'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center'>
        {products && products.map((item) => (
          <div className='group relative' key={item.id}>
            <div className='relative'>
              <img
                data-aos='zoom-in'
                data-aos-once='true'
                src={item.img}
                alt=''
                className='h-[180px] w-[260px] object-cover rounded-md'
              />
              <div className='hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200'>
                <button
                  className='bg-primary text-white cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10'
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
              <div className='leading-7'>
                <h2 className='font-semibold'>{item.title}</h2>
                <h2 className='font-bold'>${item.price}</h2>
              </div>
            </div>
            <div className='absolute bottom-2 right-2 flex items-center'>
              <button
                className='bg-red-500 text-white px-2 py-1 rounded-l'
                onClick={() => handleRemoveFromCart(item)}
              >
                -
              </button>
              <div className='bg-white text-black px-2 py-1'>
                {item.quantity}
              </div>
              <button
                className='bg-green-500 text-white px-2 py-1 rounded-r'
                onClick={() => handleAddToCart(item)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
