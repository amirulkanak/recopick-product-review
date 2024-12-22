import { useState } from 'react';
import { validateEmail, validatePasswordForSignUp } from '../utils/validator';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import PasswordInput from './../components/ui/PasswordInput';
import InputBox from './../components/ui/InputBox';
import useAuth from './../hooks/useAuth';
import notify from '../utils/notify';

const RegisterPage = () => {
  document.title = 'Sign Up | Recopick';
  window.scrollTo(0, 0);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setUser, signUp, updateUserProfile, loginWithGooglePopup } =
    useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');
    const formData = Object.fromEntries(new FormData(event.target));

    if (!formData.fullName) {
      setError('Full name is required.');
      return;
    }

    if (!formData.photoUrl) {
      setError('Photo url is required.');
      return;
    }

    if (!validateEmail(formData.email)) {
      setError('Invalid email. Please check email address.');
      return;
    }

    if (!validatePasswordForSignUp(formData.password)) {
      setError(
        'Password must includes 6 characters, an uppercase and a lowercase letters.'
      );
      return;
    }

    // Sign up the user
    signUp(formData.email, formData.password)
      .then((result) => {
        setUser(result.user);
        // update user profile
        updateUserProfile(formData.fullName, formData.photoUrl);
        notify.success(`Sign up Successful`);
        // clear input fields after submit
        event.target.reset();
        navigate('/');
      })
      .catch((error) => {
        notify.error('Error');
        setError(
          'Failed to login with Google. Please try again. ' + error.message
        );
      });
  };

  // Login with Google
  const handleLoginWithGoogle = () => {
    loginWithGooglePopup()
      .then((result) => {
        setUser(result.user);
        notify.success(`Welcome ${result.user.displayName}`);
        navigate('/');
      })
      .catch((error) => {
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
            <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white shadow-xl px-10 py-16 text-center sm:px-12 md:px-[60px]">
              <div className="mb-10 text-center md:mb-16">
                <h2 className="text-3xl font-light">Sign Up</h2>
                <p className="text-base mt-2">Create an account to continue</p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit}>
                <InputBox type="text" name="fullName" placeholder="Full name" />
                <InputBox type="text" name="photoUrl" placeholder="Photo URL" />
                <InputBox type="email" name="email" placeholder="Email" />

                <PasswordInput
                  type="password"
                  name="password"
                  placeholder="Password"
                />

                {/* error message */}
                <span>
                  {error && <div className="text-red-500 mb-1">{error}</div>}
                </span>

                <div className="mb-10">
                  <input
                    type="submit"
                    value="Sign Up"
                    className="w-full cursor-pointer rounded-md border btn px-5 py-3 text-base font-medium bg-minsk-500 text-white transition hover:bg-opacity-90"
                  />
                </div>
              </form>

              <div className="my-6 h-[1px] bg-clr-secondary"></div>

              <p className="text-base text-body-color">
                <span className="pr-0.5">Already have an account? </span>
                <Link
                  to={'/login'}
                  className="hover:underline text-clr-secondary">
                  Login
                </Link>
              </p>

              <div className="my-6 h-[1px] bg-clr-secondary"></div>

              <div
                onClick={handleLoginWithGoogle}
                className="w-full cursor-pointer rounded-md border btn px-5 py-3 text-base font-medium">
                <FcGoogle className="text-2xl inline mr-2" />
                Sign up with Google
              </div>

              <div>
                <span className="absolute right-0 top-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns:svgjs="http://svgjs.dev/svgjs"
                    width="100"
                    height="100"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 100">
                    <g mask='url("#SvgjsMask1125")' fill="none">
                      <path
                        d="M26 14L-19 59"
                        stroke-width="10"
                        stroke='url("#SvgjsLinearGradient1126")'
                        stroke-linecap="round"
                        class="BottomLeft"></path>
                      <path
                        d="M28 29L67 -10"
                        stroke-width="8"
                        stroke='url("#SvgjsLinearGradient1127")'
                        stroke-linecap="round"
                        class="TopRight"></path>
                      <path
                        d="M73 79L124 28"
                        stroke-width="8"
                        stroke='url("#SvgjsLinearGradient1128")'
                        stroke-linecap="round"
                        class="BottomLeft"></path>
                      <path
                        d="M31 80L92 19"
                        stroke-width="6"
                        stroke='url("#SvgjsLinearGradient1128")'
                        stroke-linecap="round"
                        class="BottomLeft"></path>
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
                          stop-color="rgba(52, 197, 90, 0)"
                          offset="0"></stop>
                        <stop
                          stop-color="rgba(52, 197, 90, 1)"
                          offset="1"></stop>
                      </linearGradient>
                      <linearGradient
                        x1="0%"
                        y1="100%"
                        x2="100%"
                        y2="0%"
                        id="SvgjsLinearGradient1127">
                        <stop
                          stop-color="rgba(44, 57, 197, 0)"
                          offset="0"></stop>
                        <stop
                          stop-color="rgba(44, 57, 197, 1)"
                          offset="1"></stop>
                      </linearGradient>
                      <linearGradient
                        x1="100%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                        id="SvgjsLinearGradient1128">
                        <stop
                          stop-color="rgba(165, 21, 67, 0)"
                          offset="0"></stop>
                        <stop
                          stop-color="rgba(165, 21, 67, 1)"
                          offset="1"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="absolute bottom-0 left-0 right-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
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

export default RegisterPage;
