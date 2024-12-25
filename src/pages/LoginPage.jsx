import { useState } from 'react';
import { validateEmail } from '../utils/validator';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import InputBox from './../components/ui/InputBox';
import useAuth from './../hooks/useAuth';
import notify from '../utils/notify';
import LoadingSpinner from './../components/LoadingSpinner';

const LoginPage = () => {
  document.title = 'Login | Recopick';
  window.scrollTo(0, 0);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [gloading, setGLoading] = useState(false);
  const { loginWithGooglePopup, setUser, logIn } = useAuth();
  const { state } = useLocation();
  const navigate = useNavigate();

  // Login with Google
  const handleLoginWithGoogle = () => {
    setGLoading(true);
    loginWithGooglePopup()
      .then((result) => {
        setUser(result.user);
        setGLoading(false);
        notify.success(`Welcome ${result.user.displayName}`);
        navigate(state ? state : '/');
      })
      .catch((error) => {
        setGLoading(false);
        setError(
          'Failed to login with Google. Please try again. ' + error.message
        );
      });
  };

  // Form submit handler
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    const formData = Object.fromEntries(new FormData(event.target));

    if (!validateEmail(formData.email)) {
      setError('Invalid email. Please check email address.');
      setLoading(false);
      return;
    }

    if (!formData.password) {
      setError('Password is required');
      setLoading(false);
    }

    logIn(formData.email, formData.password)
      .then((result) => {
        setUser(result.user);
        setLoading(false);
        notify.success(`Welcome ${result.user.displayName}`);
        navigate(state ? state : '/');
      })
      .catch((error) => {
        setLoading(false);
        notify.error('Error');
        setError(
          'Failed to login with Google. Please try again. ' + error.message
        );
      });
  };
  return (
    <section className="bg-clr-neutral py-20 lg:py-[120px]">
      <div className="max-width-wrapper">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg shadow-xl bg-white px-10 py-16 text-center sm:px-12 md:px-[60px]">
              <div className="mb-10 text-center md:mb-16">
                <h2 className="text-3xl font-light">Login</h2>
                <p className="text-base mt-2">Please Login to continue</p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit}>
                <InputBox type="email" name="email" placeholder="Email" />
                <InputBox
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                {/* error message */}
                <span>
                  {error && <div className="text-red-500 mb-1">{error}</div>}
                </span>

                <div className="mb-10">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center cursor-pointer rounded-md border btn px-5 py-3 text-base font-medium transition hover:bg-opacity-90">
                    {loading ? <LoadingSpinner size={1} /> : 'Login'}
                  </button>
                </div>
              </form>

              <p className="text-base text-left -mt-6 mb-5">
                <span className="pr-0.5">Forgot Password? </span>
                <Link
                  to={'/forgot-password'}
                  className="hover:underline text-clr-secondary">
                  Reset Password
                </Link>
              </p>

              <div className="my-6 h-[1px] bg-clr-secondary"></div>

              <p className="text-base">
                <span className="pr-0.5">Don't have an account? </span>
                <Link
                  to={'/register'}
                  className="hover:underline text-clr-secondary">
                  Sign-up
                </Link>
              </p>

              <div className="my-6 text-base h-[1px] bg-clr-secondary"></div>

              <button
                type="button"
                onClick={handleLoginWithGoogle}
                disabled={gloading}
                className="w-full flex items-center justify-center cursor-pointer rounded-md border btn px-5 py-3 text-base font-medium">
                {gloading ? (
                  <LoadingSpinner size={1} />
                ) : (
                  <span>
                    <FcGoogle className="text-2xl inline mr-2" />
                    Login with Google
                  </span>
                )}
              </button>

              <div>
                <span className="absolute right-0 top-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlns:svgjs="http://svgjs.dev/svgjs"
                    width="100"
                    height="100"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 100">
                    <g mask='url("#SvgjsMask1125")' fill="none">
                      <path
                        d="M26 14L-19 59"
                        strokeWidth="10"
                        stroke='url("#SvgjsLinearGradient1126")'
                        strokeLinecap="round"
                        className="BottomLeft"></path>
                      <path
                        d="M28 29L67 -10"
                        strokeWidth="8"
                        stroke='url("#SvgjsLinearGradient1127")'
                        strokeLinecap="round"
                        className="TopRight"></path>
                      <path
                        d="M73 79L124 28"
                        strokeWidth="8"
                        stroke='url("#SvgjsLinearGradient1128")'
                        strokeLinecap="round"
                        className="BottomLeft"></path>
                      <path
                        d="M31 80L92 19"
                        strokeWidth="6"
                        stroke='url("#SvgjsLinearGradient1128")'
                        strokeLinecap="round"
                        className="BottomLeft"></path>
                    </g>
                    <defs>
                      <mask id="SvgjsMask1125">
                        <rect width="100" height="100" fill="#ffffff"></rect>
                      </mask>
                      <linearGradient
                        x1="100%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                        id="SvgjsLinearGradient1126">
                        <stop
                          stopColor="rgba(52, 197, 90, 0)"
                          offset="0"></stop>
                        <stop
                          stopColor="rgba(52, 197, 90, 1)"
                          offset="1"></stop>
                      </linearGradient>
                      <linearGradient
                        x1="0%"
                        y1="100%"
                        x2="100%"
                        y2="0%"
                        id="SvgjsLinearGradient1127">
                        <stop
                          stopColor="rgba(44, 57, 197, 0)"
                          offset="0"></stop>
                        <stop
                          stopColor="rgba(44, 57, 197, 1)"
                          offset="1"></stop>
                      </linearGradient>
                      <linearGradient
                        x1="100%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                        id="SvgjsLinearGradient1128">
                        <stop
                          stopColor="rgba(165, 21, 67, 0)"
                          offset="0"></stop>
                        <stop
                          stopColor="rgba(165, 21, 67, 1)"
                          offset="1"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="absolute bottom-0 left-0 right-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlns:svgjs="http://svgjs.dev/svgjs"
                    width="530"
                    height="55"
                    preserveAspectRatio="none"
                    viewBox="0 0 530 55">
                    <g mask='url("#SvgjsMask1184")' fill="none">
                      <path
                        d="M 0,8 C 17.8,14.6 53.4,40.4 89,41 C 124.6,41.6 142.4,13.4 178,11 C 213.6,8.6 231.4,29.2 267,29 C 302.6,28.8 320.4,5.6 356,10 C 391.6,14.4 410.2,48.8 445,51 C 479.8,53.2 513,27 530,21L530 55L0 55z"
                        fill="rgba(51, 36, 145, 0.91)"></path>
                    </g>
                    <defs>
                      <mask id="SvgjsMask1184">
                        <rect width="530" height="55" fill="#ffffff"></rect>
                      </mask>
                    </defs>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
