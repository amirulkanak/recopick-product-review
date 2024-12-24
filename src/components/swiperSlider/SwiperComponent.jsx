import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import slideImage1 from '../../assets/images/banner1.jpg';
import slideImage2 from '../../assets/images/banner2.jpg';
import slideImage3 from '../../assets/images/banner3.jpg';
import slideImage4 from '../../assets/images/banner4.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SwiperComponent = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={30}
      slidesPerView={1}
      centeredSlides={true}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: true }}
      pagination={{ clickable: true, dynamicBullets: true }}
      navigation={false}>
      <SwiperSlide>
        <div className="max-h-[42rem] relative">
          <div className="absolute inset-0 flex flex-col items-start justify-start bg-clr-primary-text bg-opacity-40">
            <div className="ml-2 mt-2 md:ml-5 md:mt-5 lg:ml-10 lg:mt-10 mb-6 flex flex-col items-center justify-center">
              <h2 className="text-transparent bg-gradient-to-l from-red-500 to-white bg-clip-text font-medium text-2xl md:text-3xl lg:text-5xl">
                Take Photo and Post
              </h2>
              <p className="mt-2 lg:mt-4 text-md lg:text-xl text-white">
                Know other's opinion
              </p>
            </div>
          </div>
          <img
            src={slideImage1}
            alt="Slide 1"
            className="object-center object-cover"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="max-h-[42rem] relative">
          <div className="absolute inset-0 flex flex-col items-start justify-start bg-clr-primary-text bg-opacity-35">
            <div className="ml-2 mt-2 md:ml-5 md:mt-5 lg:ml-10 lg:mt-10 mb-6 flex flex-col items-center justify-center">
              <h2 className="text-transparent bg-gradient-to-l from-violet-500 to-white bg-clip-text font-medium text-2xl md:text-3xl lg:text-5xl">
                Give Your Review
              </h2>
              <p className="mt-2 lg:mt-4 text-md lg:text-xl text-white">
                Help others to choose better
              </p>
            </div>
          </div>
          <img
            src={slideImage2}
            alt="Slide 2"
            className="w-full h-full object-center object-cover"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="max-h-[42rem] relative">
          <div className="absolute inset-0 flex flex-col items-start justify-start bg-clr-primary-text bg-opacity-50">
            <div className="ml-2 mt-2 md:ml-5 md:mt-5 lg:ml-10 lg:mt-10 mb-6 flex flex-col items-center justify-center">
              <h2 className="text-transparent mix-blend-normal bg-gradient-to-r from-red-800 to-red-600 bg-clip-text font-medium text-2xl md:text-3xl lg:text-5xl">
                Update and Collect Review
              </h2>
              <p className="mt-2 lg:mt-4 text-md lg:text-xl text-white">
                Know the best product
              </p>
            </div>
          </div>
          <img
            src={slideImage3}
            alt="Slide 1"
            className="w-full h-full object-center object-cover mix-blend-overlay"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="max-h-[42rem] relative">
          <div className="absolute inset-0 flex flex-col items-start justify-start bg-clr-primary-text bg-opacity-35">
            <div className="ml-2 mt-2 md:ml-5 md:mt-5 lg:ml-10 lg:mt-10 mb-6 flex flex-col items-center justify-center">
              <h2 className="text-transparent bg-gradient-to-r from-fuchsia-400 to-fuchsia-300 bg-clip-text font-medium text-2xl md:text-3xl lg:text-5xl">
                Check Your Reviews
              </h2>
              <p className="mt-2 lg:mt-4 text-md lg:text-xl text-white">
                Get the best product
              </p>
            </div>
          </div>
          <img
            src={slideImage4}
            alt="Slide 1"
            className="w-full h-full object-center object-cover mix-blend-overlay"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
