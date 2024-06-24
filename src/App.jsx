import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Category from './components/Category/Category';
import Category2 from './components/Category/Category2';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';
import Products from './components/Products/Products';
import Heading from './components/Shared/Heading';
import Blogs from './components/Blogs/Blogs';
import Partners from './components/Partners/Partners';
import Footer from './components/Footer/Footer.jsx';
import Popup from './components/Popup/Popup.jsx';
import Cart from './components/Cart/Cart.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import headphone from './assets/category/headphone.png';
import watch from './assets/category/smartwatch2-removebg-preview.png';

const BannerData = {
  discount: '30% OFF',
  title: 'Fine Smile',
  date: '10 Jan to 28 Jan',
  image: headphone,
  title2: 'Air Solo Bass',
  title3: 'Biggest Sale Till Date',
  bgColor: '#f42c37'
};

const BannerData2 = {
  discount: '30% OFF',
  title: 'Happy Hours',
  date: '10 Jan to 28 Jan',
  image: watch,
  title2: 'Smart Watch',
  title3: 'Biggest Sale Till Date',
  bgColor: '#22c55e'
};

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === productId);
      if (existingProduct.quantity > 1) {
        return prevCart.map(item =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
      return prevCart.filter(item => item.id !== productId);
    });
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-sine',
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
      <Navbar handleOrderPopup={handleOrderPopup} handleCartToggle={handleCartToggle} cartItemCount={cart.length} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData} />
      <Products addToCart={addToCart} removeFromCart={removeFromCart} />
      <Heading />
      <Banner data={BannerData2} />
      <Blogs />
      <Partners />
      <Footer />
      {orderPopup && (
        <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
      )}
      {isCartOpen && (
        <Cart cart={cart} handleCartToggle={handleCartToggle} removeFromCart={removeFromCart} />
      )}
    </div>
  );
};

export default App;
