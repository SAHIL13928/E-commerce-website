import React from 'react'
import Image4 from '../../assets/category/gaming.png'
import Image5 from '../../assets/category/vr.png'
import Image6 from '../../assets/category/speaker.png'

const category2 = () => {
  return (
    <div className='py-8'>
        <div className='container'>
            <div  className='grid grid-cols-1 sm:grid-cols-2 
        lg:grid-cols-4 gap-8'>
            {/*fourth cols*/}
            <div className=' col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-100
            to-gray-400 text-black rounded-3xl relative h-[320px]
            flex items-end'>
                <div>
                    <div className='mn-4'>
                        <p className='mn-[2px] text-gray-400'>Enjoy</p>
                        <p className='text-2xl font-semibold mb-[2px]'>With</p>
                        <p className='text-4xl xl:text-5xl font-bold
                        opacity-20 mb-2'>Gaming</p>
                        <button className='bg-primary text-white
                         cursor-pointer hover:scale-105
                          duration-300 py-2 px-8 rounded-full 
                          relative z-10' >
                        Browse
                           
                          </button>
                    </div>
                </div>
                
        <img src={Image4} alt='' className='w-[250px] absolute
                -right-0.5 lg:top-[40px] '/>
            </div>
            {/*fifth cols*/}
            <div className='  py-10 pl-5 bg-gradient-to-br from-brandGreen
            to-brandGreen text-black rounded-3xl relative h-[320px]
            flex items-end'>
                <div>
                    <div className='mn-4'>
                        <p className='mn-[2px] text-white'>Enjoy</p>
                        <p className='text-2xl font-semibold mb-[2px]'>With</p>
                        <p className='text-4xl xl:text-5xl font-bold
                        opacity-20 mb-2'>Vr</p>
                        <button className='bg-white text-brandGreen
                         cursor-pointer hover:scale-105
                          duration-300 py-2 px-8 rounded-full 
                          relative z-10' >
                        Browse
                           
                          </button>
                    </div>
                </div>
                
        <img src={Image5} alt='' className='w-[200px] absolute
                -right-1 lg:top-[100px] '/>
            </div>
            {/*sixth cols*/}
            <div className='  py-10 pl-5 bg-gradient-to-br from-brandBlue
            to-brandBlue text-black rounded-3xl relative h-[320px]
            flex items-end'>
                <div>
                    <div className='mn-4'>
                        <p className='mn-[2px] text-gray-400'>Enjoy</p>
                        <p className='text-2xl font-semibold mb-[2px]'>With</p>
                        <p className='text-4xl xl:text-5xl font-bold
                        opacity-20 mb-2'>Speaker</p>
                        <button className='bg-white text-brandBlue
                         cursor-pointer hover:scale-105
                          duration-300 py-2 px-8 rounded-full 
                          relative z-10' >
                        Browse
                           
                          </button>
                    </div>
                </div>
                
        <img src={Image6} alt='' className='w-[200px] absolute
                -right-1 lg:top-[40px] '/>
            </div>

            </div>
        </div>
        
    </div>     
  )
}

export default category2