import { Link, NavLink } from 'react-router-dom';
import recopickLogo from '../assets/icons/logo-recopick.png';

const Footer = () => {
  return (
    <>
      <footer className="relative mt-auto z-10 pt-20 lg:pt-[120px] border-t border-solid border-gray-200">
        <div className="max-width-wrapper">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
              <div className="mb-10 w-full">
                <Link to={'/'} className="mb-6 inline-block max-w-[160px]">
                  <img src={recopickLogo} alt="logo" className="max-w-full" />
                </Link>
                <p className="mb-7 text-base text-body-color">
                  Our mission is to help you make smarter shopping decisions. We
                  provide you with the latest trends and recommendations by
                  sharing individual reviews and comparisons.
                </p>
                <p className="flex items-center text-sm font-medium">
                  <span className="mr-3 text-primary">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_941_15626)">
                        <path
                          d="M15.1875 19.4688C14.3438 19.4688 13.375 19.25 12.3125 18.8438C10.1875 18 7.84377 16.375 5.75002 14.2813C3.65627 12.1875 2.03127 9.84377 1.18752 7.68752C0.250019 5.37502 0.343769 3.46877 1.43752 2.40627C1.46877 2.37502 1.53127 2.34377 1.56252 2.31252L4.18752 0.750025C4.84377 0.375025 5.68752 0.562525 6.12502 1.18752L7.96877 3.93753C8.40627 4.59378 8.21877 5.46877 7.59377 5.90627L6.46877 6.68752C7.28127 8.00002 9.59377 11.2188 13.2813 13.5313L13.9688 12.5313C14.5 11.7813 15.3438 11.5625 16.0313 12.0313L18.7813 13.875C19.4063 14.3125 19.5938 15.1563 19.2188 15.8125L17.6563 18.4375C17.625 18.5 17.5938 18.5313 17.5625 18.5625C17 19.1563 16.1875 19.4688 15.1875 19.4688ZM2.37502 3.46878C1.78127 4.12503 1.81252 5.46877 2.50002 7.18752C3.28127 9.15627 4.78127 11.3125 6.75002 13.2813C8.68752 15.2188 10.875 16.7188 12.8125 17.5C14.5 18.1875 15.8438 18.2188 16.5313 17.625L18.0313 15.0625C18.0313 15.0313 18.0313 15.0313 18.0313 15L15.2813 13.1563C15.2813 13.1563 15.2188 13.1875 15.1563 13.2813L14.4688 14.2813C14.0313 14.9063 13.1875 15.0938 12.5625 14.6875C8.62502 12.25 6.18752 8.84377 5.31252 7.46877C4.90627 6.81252 5.06252 5.96878 5.68752 5.53128L6.81252 4.75002V4.71878L4.96877 1.96877C4.96877 1.93752 4.93752 1.93752 4.90627 1.96877L2.37502 3.46878Z"
                          fill="currentColor"
                        />
                        <path
                          d="M18.3125 8.90633C17.9375 8.90633 17.6563 8.62508 17.625 8.25008C17.375 5.09383 14.7813 2.56258 11.5938 2.34383C11.2188 2.31258 10.9063 2.00008 10.9375 1.59383C10.9688 1.21883 11.2813 0.906333 11.6875 0.937583C15.5625 1.18758 18.7188 4.25008 19.0313 8.12508C19.0625 8.50008 18.7813 8.84383 18.375 8.87508C18.375 8.90633 18.3438 8.90633 18.3125 8.90633Z"
                          fill="currentColor"
                        />
                        <path
                          d="M15.2187 9.18755C14.875 9.18755 14.5625 8.93755 14.5312 8.56255C14.3437 6.87505 13.0312 5.56255 11.3437 5.3438C10.9687 5.31255 10.6875 4.93755 10.7187 4.56255C10.75 4.18755 11.125 3.9063 11.5 3.93755C13.8437 4.2188 15.6562 6.0313 15.9375 8.37505C15.9687 8.75005 15.7187 9.0938 15.3125 9.1563C15.25 9.18755 15.2187 9.18755 15.2187 9.18755Z"
                          fill="currentColor"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_941_15626">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <span>+880 1913 015092</span>
                </p>
              </div>
            </div>

            <LinkGroup header="Helpful Links">
              <CustomNavLink label="About Us" />
              <NavLink to={'/queries'}>Queries</NavLink>
              <CustomNavLink label="Contact Us" />
              <CustomNavLink label="Careers" />
              <CustomNavLink label="FAQs" />
            </LinkGroup>
            <LinkGroup header="Connect With Us">
              <CustomNavLink label="Events" />
              <CustomNavLink label="Testimonials" />
              <CustomNavLink label="Resources" />
              <CustomNavLink label="Support" />
            </LinkGroup>
            <LinkGroup header="Quick Links">
              <CustomNavLink label="Premium Support" />
              <CustomNavLink label="Our Services" />
              <CustomNavLink label="Know Our Team" />
              <CustomNavLink label="Download App" />
            </LinkGroup>

            <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
              <div className="mb-10 w-full">
                <h4 className="mb-9 text-lg font-semibold">Follow Us On</h4>
                <ul className="mb-6 flex items-center">
                  <li className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-solid hover:bg-clr-accent hover:text-white  sm:mr-4 lg:mr-3 xl:mr-4">
                    <Link
                      target="_blank"
                      to="https://facebook.com/amirulalamkanak">
                      <svg
                        width="8"
                        height="16"
                        viewBox="0 0 8 16"
                        className="fill-current">
                        <path d="M7.43902 6.4H6.19918H5.75639V5.88387V4.28387V3.76774H6.19918H7.12906C7.3726 3.76774 7.57186 3.56129 7.57186 3.25161V0.516129C7.57186 0.232258 7.39474 0 7.12906 0H5.51285C3.76379 0 2.54609 1.44516 2.54609 3.5871V5.83226V6.34839H2.10329H0.597778C0.287819 6.34839 0 6.63226 0 7.04516V8.90323C0 9.26452 0.243539 9.6 0.597778 9.6H2.05902H2.50181V10.1161V15.3032C2.50181 15.6645 2.74535 16 3.09959 16H5.18075C5.31359 16 5.42429 15.9226 5.51285 15.8194C5.60141 15.7161 5.66783 15.5355 5.66783 15.3806V10.1419V9.62581H6.13276H7.12906C7.41688 9.62581 7.63828 9.41935 7.68256 9.10968V9.08387V9.05806L7.99252 7.27742C8.01466 7.09677 7.99252 6.89032 7.85968 6.68387C7.8154 6.55484 7.61614 6.42581 7.43902 6.4Z" />
                      </svg>
                    </Link>
                  </li>
                  <li className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-solid hover:bg-clr-accent hover:text-white y sm:mr-4 lg:mr-3 xl:mr-4">
                    <Link target="_blank" to="https://github.com/amirulkanak">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        className="fill-current">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                    </Link>
                  </li>

                  <li className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-solid hover:bg-clr-accent hover:text-white y sm:mr-4 lg:mr-3 xl:mr-4">
                    <Link
                      target="_blank"
                      to="https://bd.linkedin.com/in/amirulalamkanak">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        className="fill-current">
                        <path d="M13.0214 0H1.02084C0.453707 0 0 0.451613 0 1.01613V12.9839C0 13.5258 0.453707 14 1.02084 14H12.976C13.5432 14 13.9969 13.5484 13.9969 12.9839V0.993548C14.0422 0.451613 13.5885 0 13.0214 0ZM4.15142 11.9H2.08705V5.23871H4.15142V11.9ZM3.10789 4.3129C2.42733 4.3129 1.90557 3.77097 1.90557 3.11613C1.90557 2.46129 2.45002 1.91935 3.10789 1.91935C3.76577 1.91935 4.31022 2.46129 4.31022 3.11613C4.31022 3.77097 3.81114 4.3129 3.10789 4.3129ZM11.9779 11.9H9.9135V8.67097C9.9135 7.90323 9.89082 6.8871 8.82461 6.8871C7.73571 6.8871 7.57691 7.74516 7.57691 8.60323V11.9H5.51254V5.23871H7.53154V6.16452H7.55423C7.84914 5.62258 8.50701 5.08065 9.52785 5.08065C11.6376 5.08065 12.0232 6.43548 12.0232 8.2871V11.9H11.9779Z" />
                      </svg>
                    </Link>
                  </li>
                  <li className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-solid hover:bg-clr-accent hover:text-white y sm:mr-4 lg:mr-3 xl:mr-4">
                    <Link target="_blank" to="https://t.me/amirulkanak">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current">
                        <path d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM17.4545 8.54545L15.8182 16.3636C15.7273 16.8182 15.4545 16.9091 15.0909 16.7273L12.2727 14.5455L10.9091 15.8182C10.8182 15.9091 10.7273 16 10.5455 16L10.7273 13.0909L15.0909 9.09091C15.2727 8.90909 15.0909 8.72727 14.9091 8.90909L8.72727 13.0909L5.90909 12.2727C5.45455 12.0909 5.45455 11.6364 6 11.4545L16.3636 7.63636C16.7273 7.54545 17.0909 7.81818 17.4545 8.54545Z" />
                      </svg>
                    </Link>
                  </li>
                </ul>
                <p className="text-base text-body-color dark:text-dark-6">
                  &copy; {new Date().getFullYear()} Recopick
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-slate-300/10 to-slate-500/20 text-center py-4 border-t">
          Designed and developed by{' '}
          <Link
            to="https://github.com/amirulkanak"
            className="italic text-clr-secondary">
            Amirul Kanak
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;

const LinkGroup = ({ children, header }) => {
  return (
    <>
      <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
        <div className="mb-10 w-full">
          <h4 className="mb-9 text-lg font-semibold text-dark dark:text-white">
            {header}
          </h4>
          <ul className="space-y-3 flex flex-col">{children}</ul>
        </div>
      </div>
    </>
  );
};

const CustomNavLink = ({ label }) => {
  return (
    <li className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6">
      {label}
    </li>
  );
};
