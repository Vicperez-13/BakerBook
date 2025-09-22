import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleContactClick = () => {
    // If we're not on the home page, navigate to home first
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation to complete, then scroll to contact
      setTimeout(() => {
        const contactSection = document.querySelector("#contact-section");
        contactSection?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      // If we're already on home page, just scroll to contact
      const contactSection = document.querySelector("#contact-section");
      contactSection?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show header when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div
        className="shadow-lg py-4 px-4 md:px-8 w-full backdrop-blur-md border-b border-amber-900/20"
        style={{
          background:
            "linear-gradient(to right, rgba(60, 36, 20, 0.9), rgba(93, 58, 34, 0.85), rgba(139, 90, 60, 0.9))",
        }}
      >
        {/* Mobile Layout: Column on mobile, Row on desktop */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          {/* Top row: Logo and mobile menu */}
          <div className="flex justify-between items-center w-full md:w-auto">
            {/* Mobile menu button */}
            <div className="dropdown md:hidden">
              <div tabIndex={0} role="button" className="btn btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link
                    to="/"
                    className="text-xl text-amber-50 font-medium rounded-lg transition-all duration-300 hover:text-white hover:bg-amber-800/40 hover:scale-105 groovy-logo"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/menu"
                    className="text-xl text-amber-50 font-medium rounded-lg transition-all duration-300 hover:text-white hover:bg-amber-800/40 hover:scale-105 groovy-logo"
                  >
                    Menu
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-xl text-amber-50 font-medium rounded-lg transition-all duration-300 hover:text-white hover:bg-amber-800/40 hover:scale-105 groovy-logo"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleContactClick}
                    className="text-xl text-amber-50 font-medium rounded-lg transition-all duration-300 hover:text-white hover:bg-amber-800/40 hover:scale-105 cursor-pointer w-full text-left bg-transparent border-none focus:outline-none focus:bg-amber-800/40 active:bg-amber-800/60 groovy-logo"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Logo */}
            <Link
              to="/"
              className="flex items-center text-2xl md:text-3xl lg:text-4xl font-bold text-amber-50 p-2 md:p-3 rounded-lg hover:scale-110 hover:rotate-3 transition-all duration-300 ease-in-out hover:shadow-lg hover:text-white"
            >
              <img
                src="/muffin .png"
                alt="Ava's Goodies Logo"
                className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-cover rounded-full mr-2 md:mr-4 lg:mr-6"
              />
              <span className="groovy-logo">Ava's Tweats</span>
            </Link>

            {/* Social icons on mobile - right side of top row */}
            <div className="flex items-center gap-1 md:hidden">
              <a
                href="https://facebook.com/ava.labrie.39"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 rounded-full hover:scale-110 hover:rotate-12 transition-all duration-300 ease-in-out hover:shadow-lg"
                aria-label="Visit our Facebook page"
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="#1877F2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/avalabrie1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 rounded-full hover:scale-110 hover:-rotate-12 transition-all duration-300 ease-in-out hover:shadow-lg"
                aria-label="Visit our Instagram page"
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="url(#instagram-gradient)"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="instagram-gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#833AB4" />
                      <stop offset="50%" stopColor="#FD1D1D" />
                      <stop offset="100%" stopColor="#FCB045" />
                    </linearGradient>
                  </defs>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="p-1 rounded-full hover:scale-125 hover:rotate-45 transition-all duration-300 ease-in-out hover:shadow-lg text-xl"
              >
                🌻
              </a>
            </div>
          </div>

          {/* Desktop menu - centered */}
          <div className="hidden md:flex md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
            <ul className="menu menu-horizontal px-1 gap-4">
              <li>
                <Link
                  to="/"
                  className="relative px-6 py-3 text-xl text-amber-50 font-medium rounded-lg transition-all duration-300 hover:text-white hover:bg-amber-800/30 hover:shadow-md hover:scale-105 hover:-rotate-1 group groovy-logo"
                >
                  <span className="relative z-10">Home</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 to-amber-800/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </li>
              <li>
                <Link
                  to="/menu"
                  className="relative px-6 py-3 text-xl text-amber-50 font-medium rounded-lg transition-all duration-300 hover:text-white hover:bg-amber-800/30 hover:shadow-md hover:scale-105 hover:rotate-1 group groovy-logo"
                >
                  <span className="relative z-10">Menu</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 to-amber-800/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="relative px-6 py-3 text-xl text-amber-50 font-medium rounded-lg transition-all duration-300 hover:text-white hover:bg-amber-800/30 hover:shadow-md hover:scale-105 hover:-rotate-1 group groovy-logo"
                >
                  <span className="relative z-10">About</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 to-amber-800/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </li>
              <li>
                <button
                  onClick={handleContactClick}
                  className="relative px-6 py-3 text-xl text-amber-50 font-medium rounded-lg transition-all duration-300 hover:text-white hover:bg-amber-800/30 hover:shadow-md hover:scale-105 hover:rotate-1 group cursor-pointer bg-transparent border-none focus:outline-none focus:bg-amber-800/30 active:bg-amber-800/50 groovy-logo"
                >
                  <span className="relative z-10">Contact</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 to-amber-800/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </li>
            </ul>
          </div>

          {/* Desktop social icons - right side */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://facebook.com/ava.labrie.39"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:scale-110 hover:rotate-12 transition-all duration-300 ease-in-out hover:shadow-lg"
              aria-label="Visit our Facebook page"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="#1877F2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/avalabrie1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:scale-110 hover:-rotate-12 transition-all duration-300 ease-in-out hover:shadow-lg"
              aria-label="Visit our Instagram page"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="url(#instagram-gradient-desktop)"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="instagram-gradient-desktop"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#833AB4" />
                    <stop offset="50%" stopColor="#FD1D1D" />
                    <stop offset="100%" stopColor="#FCB045" />
                  </linearGradient>
                </defs>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="#"
              className="relative z-10 p-2 rounded-full hover:scale-125 hover:rotate-45 transition-all duration-300 ease-in-out hover:shadow-lg text-2xl"
            >
              🌻
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
