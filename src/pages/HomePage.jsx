import BlogSection from '../components/BlogSection';
import Cta from '../components/Cta';
import LatestQuerySection from '../components/LatestQuerySection';
import Header from './../components/Header';

const HomePage = () => {
  window.scrollTo(0, 0);
  document.title = 'Home | Recopick';
  return (
    <>
      <Header />
      <LatestQuerySection />
      <BlogSection />
      <Cta />
    </>
  );
};

export default HomePage;
