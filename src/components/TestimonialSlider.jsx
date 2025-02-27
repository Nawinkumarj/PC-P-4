import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { assets } from "../assets/assets";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// Import required modules
import { EffectCards } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        rtl={true}
      >

        <SwiperSlide>
          <div className='testimonialSlider'>
            <div className='testiBorder'></div>
           <img src={assets.testimonial1} alt="" className='testiBG' />
           <img src="https://images.pexels.com/photos/27843963/pexels-photo-27843963/free-photo-of-a-girl-standing-in-a-park-with-a-mirror.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='testiProfile' />
           <h1 className='quotation'>&#10078;</h1>
           <div className='testiContent'>
            <img src={assets.testimonial2} alt="" />
            <div className='testiContentText'>
              <h2>Person Name</h2>
              <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
              <div className='startContainer flex-center'>
                <img src={assets.starIcon} alt=""/>
                <img src={assets.starIcon} alt=""/>
                <img src={assets.starIcon} alt=""/>
                <img src={assets.starIcon} alt=""/>
                <img src={assets.starIcon} alt=""/>
              </div>
            </div>  
           </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='testimonialSlider'>
          <div className='testiBorder'></div>
          <img src={assets.testimonial1} alt="" className='testiBG' />
           <img src="https://images.pexels.com/photos/27843963/pexels-photo-27843963/free-photo-of-a-girl-standing-in-a-park-with-a-mirror.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='testiProfile' />
           <h1 className='quotation'>&#10078;</h1>
           <div className='testiContent'>
            <img src={assets.testimonial2} alt="" />
            <div className='testiContentText'>
              <h2>Person Name</h2>
              <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
              <div className='startContainer flex-center'>
                <img src={assets.starIcon} alt=""/>
                <img src={assets.starIcon} alt=""/>
                <img src={assets.starIcon} alt=""/>
                <img src={assets.starIcon} alt=""/>
                <img src={assets.starIcon} alt=""/>
              </div>
            </div>  
           </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='testimonialSlider'>
          <div className='testiBorder'></div>
          <img src={assets.testimonial1} alt="" className='testiBG' />
           <img src="https://images.pexels.com/photos/27843963/pexels-photo-27843963/free-photo-of-a-girl-standing-in-a-park-with-a-mirror.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='testiProfile' />
           <h1 className='quotation'>&#10078;</h1>
           <div className='testiContent'>
            <img src={assets.testimonial2} alt="" />
            <div className='testiContentText'>
              <h2>Person Name</h2>
              <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
              <div className='startContainer flex-center'>
                <img src={assets.starIcon} alt=""/>
                <img src={assets.starIcon} alt=""/>
                <img src={assets.starIcon} alt=""/>
                <img src={assets.starIcon} alt=""/>
                <img src={assets.starIcon} alt=""/>
              </div>
            </div>  
           </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='testimonialSlider'>
          <div className='testiBorder'></div>
          <img src={assets.testimonial1} alt="" className='testiBG' />
           <img src="https://images.pexels.com/photos/27843963/pexels-photo-27843963/free-photo-of-a-girl-standing-in-a-park-with-a-mirror.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='testiProfile' />
           <h1 className='quotation'>&#10078;</h1>
           <div className='testiContent'>
            <img src={assets.testimonial2} alt="" />
            <div className='testiContentText'>
              <h2>Person Name</h2>
              <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
              <div className='startContainer flex-center'>
                <img src={assets.starIcon} alt=""/>
                <img src={assets.starIcon} alt=""/>
                <img src={assets.starIcon} alt=""/>
                <img src={assets.starIcon} alt=""/>
                <img src={assets.starIcon} alt=""/>
              </div>
            </div>  
           </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='testimonialSlider'>
          <div className='testiBorder'></div>
          <img src={assets.testimonial1} alt="" className='testiBG' />
           <img src="https://images.pexels.com/photos/27843963/pexels-photo-27843963/free-photo-of-a-girl-standing-in-a-park-with-a-mirror.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='testiProfile' />
           <h1 className='quotation'>&#10078;</h1>
           <div className='testiContent'>
            <img src={assets.testimonial2} alt="" />
            <div className='testiContentText'>
              <h2>Person Name</h2>
              <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
              <div className='startContainer flex-center'>
                <img src={assets.starIcon} alt=""/>
                <img src={assets.starIcon} alt=""/>
                <img src={assets.starIcon} alt=""/>
                <img src={assets.starIcon} alt=""/>
                <img src={assets.starIcon} alt=""/>
              </div>
            </div>  
           </div>
          </div>
        </SwiperSlide>
      
      </Swiper>
    </>
  );
}
