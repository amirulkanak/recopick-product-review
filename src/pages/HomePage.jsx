import BlogSection from '../components/BlogSection';
import Cta from '../components/Cta';
import LatestQuerySection from '../components/LatestQuerySection';
import Header from './../components/Header';

const HomePage = () => {
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
