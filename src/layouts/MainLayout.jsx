import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const MainLayout = () => {
  const location = useLocation();
  useEffect(() => {
    Aos.init({ duration: 1000, easing: 'ease-in-out' });
  }, []);

  useEffect(() => {
    Aos.refresh();
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />
      {/* Dynamic children component from router */}
      <Outlet />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
