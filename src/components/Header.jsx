import SwiperComponent from './swiperSlider/SwiperComponent';
import { motion } from 'framer-motion';

const Header = () => {
  const gradientAnimation = {
    animate: {
      backgroundPosition: ['0% 50%', '100% 50%'],
      transition: {
        duration: 10,
        repeat: Infinity,
        repeatType: 'loop',
      },
    },
  };

  return (
    <header className="pb-16 mt-16">
      <section className="max-width-wrapper">
        <div className="flex flex-col items-center space-y-8">
          <motion.h1
            className="text-center text-2xl sm:text-4xl sm:leading-[3.5rem] lg:text-[4.5rem] lg:leading-[5rem] font-bold"
            style={{
              backgroundImage:
                'linear-gradient(45deg, #4E65FF, #92EFFD, #C33764, #1D2671, #09203F, #00fffb, #0060ff, #7a00ff, #ff00f7, #ff006e, #ff0001)',
              backgroundSize: '200% 200%',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
            {...gradientAnimation}>
            Know better, choose better.
          </motion.h1>
          <p className="max-w-xl text-pretty lg:text-lg font-semibold text-center">
            Reviews by people like you.
          </p>
          <p className="text-clr-primary-text text-sm lg:text-base font-semibold text-center">
            Post your Query and Collect others Recommendation!
          </p>
        </div>
      </section>

      {/* Slider */}
      <section className="mt-12 max-width-wrapper">
        <div className="rounded-xl overflow-clip">
          <SwiperComponent />
        </div>
      </section>
    </header>
  );
};

export default Header;
