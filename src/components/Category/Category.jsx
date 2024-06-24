import React from 'react'
import Image1 from '../../assets/category/earphone.png'
import Image2 from '../../assets/category/watch.png'
import Image3 from '../../assets/category/macbook.png'
const Category = () => {
  return (
   <div className='py-8'> 
    <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 
        lg:grid-cols-4 gap-8'>
            {/*first cols*/}
            <div className='py-10 pl-5 bg-gradient-to-br from-black/90
            to-black/70 text-white rounded-3xl relative h-[320px]
            flex items-end'>
                <div>
                    <div className='mn-4'>
                        <p className='mn-[2px] text-gray-400'>Enjoy</p>
                        <p className='text-2xl font-semibold mb-[2px]'>With</p>
                        <p className='text-4xl xl:text-5xl font-bold
                        opacity-20 mb-2'>Earphone</p>
                        <button className='bg-primary text-white
                         cursor-pointer hover:scale-105
                          duration-300 py-2 px-8 rounded-full 
                          relative z-10' >
                        Browse
                           
                          </button>
                    </div>
                </div>
                <img src={Image1} alt='' className='w-[320px] absolute
                bottom-0'/>
            </div>
            {/*Second cols*/}
            <div className='py-10 pl-5 bg-gradient-to-br from-brandYellow
            to-brandYellow/70 text-white rounded-3xl relative h-[320px]
            flex items-end'>
                <div>
                    <div className='mn-4'>
                        <p className='mn-[2px] text-white'>Enjoy</p>
                        <p className='text-2xl font-semibold mb-[2px]'>With</p>
                        <p className='text-4xl xl:text-4xl font-bold
                        opacity-60 mb-2'>Smartwatch</p>
                        <button className='bg-white text-brandYellow
                         cursor-pointer hover:scale-105
                          duration-300 py-2 px-8 rounded-full 
                          relative z-10' >
                        Browse
                           
                          </button>
                    </div>
                </div>
                <img src={Image2} alt='' className='w-[320px] absolute
                -right-4 lg:top-[40px]'/>
            </div>

            {/*Third cols*/}
            <div className=' col-span-2 py-10 pl-5 bg-gradient-to-br from-primary
            to-primary/90 text-white rounded-3xl relative h-[320px]
            flex items-end'>
                <div>
                    <div className='mn-4'>
                        <p className='mn-[2px] text-black'>Enjoy</p>
                        <p className='text-2xl font-semibold mb-[2px]'>With</p>
                        <p className='text-4xl xl:text-5xl font-bold
                        opacity-20 mb-2'>Laptop</p>
                        <button className='bg-white text-primary
                         cursor-pointer hover:scale-105
                          duration-300 py-2 px-8 rounded-full 
                          relative z-10' >
                        Browse
                           
                          </button>
                    </div>
                </div>
                <img src={Image3} alt='' className='w-[320px] absolute
                -right-0.5 lg:top-[20px]'/>
            </div>
        </div>
    </div>
   </div>
  )
}

export default Category