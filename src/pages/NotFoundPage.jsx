import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  document.title = 'Not Found | Recopick';
  window.scrollTo(0, 0);
  return (
    <section
      data-aos="fade-in"
      className="bg-gradient-to-r from-violet-500/20 to-purple-500/30">
      <div className="flex flex-col gap-6 items-center justify-center h-screen">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-red-700 to-orange-400 bg-clip-text text-transparent">
          404
        </h1>
        <p className="text-2xl text-clr-shark">Page Not Found</p>
        <Link to="/" className="btn bg-clr-eminence-500 hover:bg-eminence-700">
          {' '}
          Home
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
