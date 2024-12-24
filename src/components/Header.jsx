import SwiperComponent from './swiperSlider/SwiperComponent';
const Header = () => {
  return (
    <header className="pb-16 mt-16">
      <section className="max-width-wrapper">
        <div className="flex flex-col items-center space-y-8">
          <h1 className="text-center text-2xl sm:text-4xl sm:leading-[3.5rem] lg:text-[4.5rem] lg:leading-[5rem] font-bold">
            Know better, choose better.
          </h1>
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
