import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import recopickLogo from '../assets/icons/logo-recopick.png';
import { LiaAlignLeftSolid } from 'react-icons/lia';
import useAuth from '../hooks/useAuth';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, logOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      className={`${
        scrolled ? 'backdrop-blur-2xl' : ''
      } sticky top-0 z-50 bg-gradient-to-r from-violet-500/20 to-purple-500/30`}>
      <nav className="max-width-wrapper relative flex items-center justify-between py-8 ">
        {/* Logo */}
        <NavLink to={'/'} className="w-60">
          <img className="p-1" src={recopickLogo} alt="Recopick Logo" />
        </NavLink>

        <div>
          <button
            onClick={() => setOpen(!open)}
            className={`absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] focus:ring-2 lg:hidden shadow-btn border border-clr-accent bg-clr-neutral`}>
            <LiaAlignLeftSolid className="text-4xl" />
          </button>

          {/* mobile menu overlay */}
          {open && (
            <div
              onClick={() => setOpen(false)}
              className="fixed inset-0 h-screen top-0 bg-transparent z-10"
            />
          )}

          <div
            className={`absolute right-4 z-20 top-full w-full max-w-[250px] rounded-lg bg-clr-accent lg:bg-transparent px-6 py-5 lg:px-0 lg:py-0 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none ${
              !open && 'hidden'
            } `}>
            {/* Links */}
            <ul className="text-base pc:text-[1.125rem] font-normal flex flex-col lg:flex-row items-center justify-between gap-4">
              <NavLink to={'/'} onClick={() => setOpen(false)}>
                Home
              </NavLink>
              <NavLink to={'/queries'} onClick={() => setOpen(false)}>
                Queries
              </NavLink>
              {user && (
                <NavLink to={'/recommendations'} onClick={() => setOpen(false)}>
                  Recommendations For Me
                </NavLink>
              )}
              {user && (
                <NavLink to={'/my-queries'} onClick={() => setOpen(false)}>
                  My Queries
                </NavLink>
              )}
              {user && (
                <NavLink
                  to={'/my-recommendations'}
                  onClick={() => setOpen(false)}>
                  My recommendations
                </NavLink>
              )}

              {user && (
                <div className="h-[42px] w-[42px] rounded-full border">
                  <img
                    src={user.photoURL}
                    alt={user.displayName}
                    className="h-full w-full rounded-full object-cover object-center"
                  />
                </div>
              )}

              {user && (
                <button
                  onClick={() => {
                    logOut(), setOpen(false);
                  }}
                  className="btn">
                  Logout
                </button>
              )}

              {!user && (
                <NavLink
                  to={'/login'}
                  onClick={() => setOpen(false)}
                  className="btn">
                  Login
                </NavLink>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
