import React from 'react'
import { FaMobileAlt } from 'react-icons/fa'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow } from 'react-icons/fa6'

const FooterLinks=[
    {
        Title: 'Home',
        link:'/#',
    },
    {
        Title: 'About',
        link:'/#about',
    },
    {
        Title: 'Contact',
        link:'/#contact',
    },
    {
        Title: 'Blog',
        link:'/#blog',
    }
]

const Footer = () => {
  return (
    <div className='dark:bg-gray-950'>
        <div className='container'>
            <div className='grid md:grid-cols-3 pb-20 pt-5'>
            {/*company details*/}
            <div>
                <a href="#" 
    className='text-primary'
    font-semibold tracking-widest
    text-2xl uppercase 
    sm:text-3xl
                >
                    Eshop
                </a>
                <p className='text-gray-600 dark:text-white/70 lg:pr-24 pt-3 '>
                    Eshop: Your one-stop online destination for the latest in tech gadgets and accessories.</p>
                <p className='text-gray-500 mt-4'>Made By Sahil Kumar</p>
                <a href='https://github.com/SAHIL13928'
                target='_blank'
                className='inline-block bg-primary text-white
                py-2 px-4 mt-4 text-sm rounded-full '/>
                </div>
                {/*Footer Links*/}
                <div className='col-span-2 grid grid-cols-2
                sm:grid-cols-3 md:pl-10'>
                    <div className='py-8 px-4'>
                        <h1 className='text-xl font-bold sm:text-left mb-3'>IMPORTANT LINKS</h1>
                        <ul className='space-y-3'>
                            {
                                FooterLinks.map(
                                    (data,index) => (
                                        <li key={index}>
                                            <a 
                                            href={data.link}
                                            className='text-gray-600 dark:text-gray-400 hover:text-gray-400
                                            hover:dark:text-white
                                            duration-300'>
                                                {data.Title}
                                            </a>

                                        </li>
                                    )
                                )
                            }
                        </ul>
                    </div>
                    {/*Second col*/}
                    <div className='py-8 px-4'>
                        <h1 className='text-xl font-bold sm:text-left mb-3'>QUICK LINKS</h1>
                        <ul className='space-y-3'>
                            {
                                FooterLinks.map(
                                    (data,index) => (
                                        <li key={index}>
                                            <a 
                                            href={data.link}
                                            className='text-gray-600 dark:text-gray-400 hover:text-gray-400
                                            hover:dark:text-white
                                            duration-300'>
                                                {data.Title}
                                            </a>

                                        </li>
                                    )
                                )
                            }
                        </ul>
                    </div>
                    {/*COMPANY ADDRESS*/}
                    <div className='py-8 px-4 col-span-2 sm:col-auto'>
                    <h1 className='text-xl font-bold sm:text-left mb-3'>ADDRESS LINKS</h1>
                      <div className='flex items-center gap-3'>
                        <FaLocationArrow/>
                        <p>Noida, Uttar Pradesh</p>
                        <p>India</p>
                        </div>
                        <div className='flex items-center gap-3 mt-6'>
                            <FaMobileAlt/>
                            <p>+91-9873066246</p>
                            </div>
                            {/*social links*/}

                            <div className='flex items-center gap-3 mt-6'>
                                <a 
                                href='https://www.instagram.com/_sahil13'
                                >
                                  <FaInstagram className='text-3xl
                                  hover:text-primary duration-300'/>
                                </a>
                                <a 
                                href=''
                                >
                                  <FaFacebook className='text-3xl
                                  hover:text-primary duration-300'/>
                                </a>
                                <a 
                                href='https://www.linkedin.com/in/sahil-kumar-4073bb263/'
                                >
                                  <FaLinkedin className='text-3xl
                                  hover:text-primary duration-300'/>
                                </a>
                     
                        

                      </div>
                    </div>
                </div>
                

            </div>
        </div>
    </div>
  )
}

export default Footer