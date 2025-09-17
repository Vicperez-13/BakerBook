import React from "react";

const Footer = () => {
  return (
    <footer
      className="relative py-16"
      style={{
        background:
          "linear-gradient(to right, rgba(82, 101, 84, 0.25), rgba(107, 142, 123, 0.20), rgba(75, 95, 77, 0.25))",
      }}
    >
      <div className="container mx-auto px-4">
        {/* Contact Methods - Professional Text Layout */}
        <div className="grid md:grid-cols-3 gap-12 mb-16 text-center">
          {/* Email Contact */}
          <div>
            <h3 className="text-xl font-bold text-stone-700 mb-3">Email Us</h3>
            <p className="text-stone-600 mb-3"> ava3065@icloud.com</p>
          </div>
        </div>

        {/* Footer Links & Info */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-stone-700 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/menu"
                  className="text-stone-600 hover:text-stone-700 transition-colors"
                >
                  Our Menu
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-stone-600 hover:text-stone-700 transition-colors"
                >
                  About Ava
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-bold text-stone-700 mb-4">
              Bakery Hours
            </h4>
            <ul className="space-y-2 text-sm text-stone-600">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>6AM - 6PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>7AM - 5PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>8AM - 4PM</span>
              </li>
            </ul>
            <p className="text-xs text-stone-600 mt-3 italic">
              Fresh pastries available all day!
            </p>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-lg font-bold text-stone-700 mb-4">
              Follow Our Journey
            </h4>
            <p className="text-stone-600 text-sm mb-4">
              Stay updated with our latest creations and sweet surprises!
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="bg-stone-200 hover:bg-stone-300 p-2 rounded-full transition-colors"
              >
                <svg
                  className="w-5 h-5 text-stone-700"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-stone-200 hover:bg-stone-300 p-2 rounded-full transition-colors"
              >
                <svg
                  className="w-5 h-5 text-stone-700"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.219-5.160 1.219-5.160s-.219-.438-.219-1.085c0-1.016.590-1.775 1.324-1.775.624 0 .925.468.925 1.028 0 .627-.398 1.564-.603 2.433-.171.72.361 1.307 1.072 1.307 1.286 0 2.275-1.357 2.275-3.315 0-1.734-1.246-2.944-3.027-2.944-2.061 0-3.273 1.547-3.273 3.146 0 .623.240 1.291.539 1.653.059.072.068.135.050.209-.055.227-.177.719-.202.820-.032.134-.108.162-.249.098-1.349-.629-2.194-2.604-2.194-4.192 0-3.417 2.481-6.557 7.152-6.557 3.755 0 6.675 2.674 6.675 6.253 0 3.729-2.352 6.728-5.616 6.728-1.096 0-2.128-.571-2.481-1.253 0 0-.543 2.067-.675 2.567-.244.943-.900 2.125-1.339 2.844C9.423 23.836 10.704 24.013 12.017 24.013c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-stone-200 hover:bg-stone-300 p-2 rounded-full transition-colors"
              >
                <svg
                  className="w-5 h-5 text-stone-700"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-stone-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-stone-600">
                © 2024 Ava's Goodies. Made with love and lots of flour.
              </p>
              <p className="text-stone-600 mt-1">
                All rights reserved • Victor Morales Perez
              </p>
              <p className="text-stone-600 text-sm mt-2 italic">
                "Every message brings us joy - just like every pastry we bake
                brings sweetness to your day." - The Ava's Goodies Team
              </p>
            </div>
            <div className="flex space-x-4 text-sm">
              <a
                href="#"
                className="text-stone-600 hover:text-stone-800 transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <span className="text-stone-400">•</span>
              <a
                href="#"
                className="text-stone-600 hover:text-stone-800 transition-colors duration-200"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
