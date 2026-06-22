import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

import {
  MdEmail,
  MdLocationOn,
  MdPhone,
} from "react-icons/md";

function Footer() {
  return (
    <footer className="bg-white text-blue-950 border-t border-gray-200 mt-16">

      {/* TOP SECTION */}

      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* BRAND SECTION */}

          <div>

            <h1 className="text-3xl font-extrabold mb-5 tracking-wide">
              ShopEase
            </h1>

            <p className="text-gray-500 leading-7 text-[15px]">
              Discover premium fashion, electronics, lifestyle products,
              and everyday essentials with secure payments and fast delivery.
            </p>

            {/* SOCIAL ICONS */}

            <div className="flex items-center gap-4 mt-8">

              <a
                href="#"
                className="w-11 h-11 rounded-full border border-blue-950 flex items-center justify-center hover:bg-blue-950 hover:text-white duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full border border-blue-950 flex items-center justify-center hover:bg-blue-950 hover:text-white duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full border border-blue-950 flex items-center justify-center hover:bg-blue-950 hover:text-white duration-300"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full border border-blue-950 flex items-center justify-center hover:bg-blue-950 hover:text-white duration-300"
              >
                <FaLinkedinIn />
              </a>

            </div>

          </div>

          {/* QUICK LINKS */}

          <div>

            <h2 className="text-xl font-bold mb-6">
              Quick Links
            </h2>

            <ul className="space-y-4">

              <li>
                <a
                  href="/"
                  className="text-gray-600 hover:text-blue-950 duration-300"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/cart"
                  className="text-gray-600 hover:text-blue-950 duration-300"
                >
                  Cart
                </a>
              </li>

              <li>
                <a
                  href="/like"
                  className="text-gray-600 hover:text-blue-950 duration-300"
                >
                  Wishlist
                </a>
              </li>

              <li>
                <a
                  href="/order"
                  className="text-gray-600 hover:text-blue-950 duration-300"
                >
                  Orders
                </a>
              </li>

            </ul>

          </div>

          {/* SUPPORT */}

          <div>

            <h2 className="text-xl font-bold mb-6">
              Customer Support
            </h2>

            <ul className="space-y-4 text-gray-600">

              <li className="hover:text-blue-950 duration-300 cursor-pointer">
                Help Center
              </li>

              <li className="hover:text-blue-950 duration-300 cursor-pointer">
                Privacy Policy
              </li>

              <li className="hover:text-blue-950 duration-300 cursor-pointer">
                Terms & Conditions
              </li>

              <li className="hover:text-blue-950 duration-300 cursor-pointer">
                Refund Policy
              </li>

            </ul>

          </div>

          {/* CONTACT */}

          <div>

            <h2 className="text-xl font-bold mb-6">
              Contact Us
            </h2>

            <div className="space-y-5">

              <div className="flex items-start gap-4">

                <div className="text-2xl mt-1">
                  <MdLocationOn />
                </div>

                <p className="text-gray-600 leading-6">
                  Madurai, Tamil Nadu, India
                </p>

              </div>

              <div className="flex items-center gap-4">

                <div className="text-2xl">
                  <MdPhone />
                </div>

                <p className="text-gray-600">
                  +91 98765 43210
                </p>

              </div>

              <div className="flex items-center gap-4">

                <div className="text-2xl">
                  <MdEmail />
                </div>

                <p className="text-gray-600">
                  support@shopease.com
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* BOTTOM SECTION */}

      <div className="border-t border-gray-200">

        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-sm">
            © 2026 ShopEase. All rights reserved.
          </p>

          <div className="flex items-center gap-6">

            <a
              href="#"
              className="text-gray-600 hover:text-blue-950 text-sm duration-300"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-gray-600 hover:text-blue-950 text-sm duration-300"
            >
              Terms
            </a>

            <a
              href="#"
              className="text-gray-600 hover:text-blue-950 text-sm duration-300"
            >
              Support
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;