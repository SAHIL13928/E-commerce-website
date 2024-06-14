import React from 'react'
import Heading from '../Shared/Heading'
import Img1 from '../../assets/blogs/blog-1.jpg'
import Img2 from '../../assets/blogs/blog-2.jpg'
import Img3 from '../../assets/blogs/blog-3.jpg'

const BlogData = [
      {
        title: 'How to choose the perfect smartwatch',
        subtitle: 'Choosing the perfect smartwatch involves considering your specific needs, such as fitness tracking, compatibility with your smartphone, and battery life. Additionally, evaluate features like design, display quality, and available apps to ensure it fits seamlessly into your lifestyle.',
        published: 'Jan 20, 2024 by Dilshad' ,
        image: Img1,
      },
      {
        title: 'How to choose the perfect gadget',
        subtitle: 'Choosing the perfect gadget requires balancing your specific needs, budget, and desired features to find the ideal device for your lifestyle.',
        published: 'Jan 20, 2024 by Dilshad' ,
        image: Img2,
      },
      {
        title: 'How to choose the perfect vr headset',
        subtitle: 'Choosing the perfect VR headset involves considering factors like resolution, field of view, comfort, compatibility with your devices, and the type of VR experiences you want to enjoy.',
        published: 'Jan 20, 2024 by Dilshad' ,
        image: Img3,
      }
]

const Blogs = () => {
    return (
      <div className='my-12'>
        <div className='container'>
          {/*Header Section*/}
          <Heading title='Blogs' subtitle='Explore Blogs' />
  
          {/*Blog Section*/}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6
           gap-y-8 sm:gap-4 md:gap-7'>
            {/*Blog Items*/}
            {BlogData.map((data) => (
              <div key={data.id} className='bg-white 
              dark:bg-gray-900'>
                {/*Image Section*/}
                <div 
                data-aos='zoom-in'
                data-aos-once='true'>
                  <img src={data.image} alt=''
                  className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500' />
                </div>
                {/*Content Section*/}
                <div>
                  <p
                  data-aos='zoom-out'
                  data-aos-duration='500'
                  data-aos-once='true'  
                  className='text-xs text-gray-500'>{data.published}</p>
                  <p
                  data-aos='zoom-out'
                  data-aos-duration='500'
                  data-aos-once='true'  
                  className='font-bold line-clamp-1'>{data.title}</p>
                  <p
                  data-aos='zoom-out'
                  data-aos-duration='500'
                  data-aos-once='true'  
                  className='line-clamp-2 text-sm text-gray-600
                  dark:text-gray-400'>
                    {data.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Blogs;