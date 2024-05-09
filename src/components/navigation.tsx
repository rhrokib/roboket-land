import Image from 'next/image';
import { Button } from './button/button';

export default function NavigationBar() {
  return (
    <nav className="z-50 fixed bg-white w-screen">
      <div className="flex flex-wrap justify-between items-center mx-auto p-4 max-w-screen-xl">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src="/logo.svg" width={120} height={60} alt="Roboket Logo" />
        </a>
        {/* <div className="flex md:order-2">
          <button
            type="button"
            className="bg-primary-600 rounded-lg w-40 h-12 text-white"
          >
            Get started
          </button>
        </div> */}
        <div
          className="md:flex justify-between items-center gap-5 md:order-1 hidden w-full md:w-auto"
          id="navbar-cta"
        >
          <ul className="flex md:flex-row flex-col md:space-x-8 rtl:space-x-reverse mt-4 md:mt-0 p-4 md:p-0 rounded-lg font-medium">
            <li>
              <a
                href="#"
                className="block md:hover:bg-transparent md:dark:hover:bg-transparent px-3 py-2 md:p-0 rounded md:hover:text-primary-600"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block md:hover:bg-transparent md:dark:hover:bg-transparent px-3 py-2 md:p-0 rounded md:hover:text-primary-600"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block md:hover:bg-transparent md:dark:hover:bg-transparent px-3 py-2 md:p-0 rounded md:hover:text-primary-600"
              >
                Help
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block md:hover:bg-transparent md:dark:hover:bg-transparent px-3 py-2 md:p-0 rounded md:hover:text-primary-600"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block md:hover:bg-transparent md:dark:hover:bg-transparent px-3 py-2 md:p-0 rounded md:hover:text-primary-600"
              >
                Contact
              </a>
            </li>
          </ul>
          <Button label="Get Started" />
        </div>
      </div>
    </nav>
  );
}
