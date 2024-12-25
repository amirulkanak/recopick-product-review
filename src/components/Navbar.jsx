import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import recopickLogo from '../assets/icons/logo-recopick.png';
import { LiaAlignLeftSolid } from 'react-icons/lia';
import useAuth from '../hooks/useAuth';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, logOut } = useAuth();

  return (
    <section className="bg-gradient-to-r from-violet-500/20 to-purple-500/30">
      <nav className="max-width-wrapper relative flex items-center justify-between py-8 ">
        {/* Logo */}
        <NavLink to={'/'} className="w-60">
          <img
            className="bg-clr-primary/10 rounded-lg p-1"
            src={recopickLogo}
            alt="Recopick Logo"
          />
        </NavLink>

        <div>
          <button
            onClick={() => setOpen(!open)}
            className={`absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] focus:ring-2 lg:hidden shadow-btn border border-clr-accent bg-clr-neutral`}>
            <LiaAlignLeftSolid className="text-4xl" />
          </button>

          <div
            className={`absolute right-4 z-20 top-full w-full max-w-[250px] rounded-lg bg-clr-accent lg:bg-transparent px-6 py-5 lg:px-0 lg:py-0 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none ${
              !open && 'hidden'
            } `}>
            {/* Links */}
            <ul className="text-base pc:text-[1.125rem] font-normal flex flex-col lg:flex-row items-center justify-between gap-4">
              <NavLink to={'/'} className="">
                Home
              </NavLink>
              <NavLink to={'/queries'}>Queries</NavLink>
              {user && (
                <NavLink to={'/recommendations'}>
                  Recommendations For Me
                </NavLink>
              )}
              {user && <NavLink to={'/my-queries'}>My Queries</NavLink>}
              {user && (
                <NavLink to={'/my-recommendations'}>My recommendations</NavLink>
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
                <button onClick={logOut} className="btn">
                  Logout
                </button>
              )}

              {!user && (
                <NavLink to={'/login'} className="btn">
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
