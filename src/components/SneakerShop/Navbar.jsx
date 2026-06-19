function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 md:px-12 border-b border-gray-200 max-w-7xl mx-auto">
      <div className="flex items-center gap-14">
        <span className="text-3xl font-bold text-black cursor-pointer">
          sneakers
        </span>

        <ul className="flex gap-8 text-gray-400 font-medium text-[15px]">
          <li>
            <a
              href="#collections"
              className="hover:text-[#1D2026] transition-colors duration-200 "
            >
              Collections
            </a>
          </li>
          <li>
            <a
              href="#men"
              className="hover:text-[#1D2026] transition-colors duration-200"
            >
              Men
            </a>
          </li>
          <li>
            <a
              href="#women"
              className="hover:text-[#1D2026] transition-colors duration-200"
            >
              Women
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-[#1D2026] transition-colors duration-200 "
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-[#1D2026] transition-colors duration-200 "
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-10">
        <button className="text-gray-500 hover:text-black transition-colors duration-200 cursor-pointer">
          <i className="fa-solid fa-cart-shopping text-gray-600 text-xl"></i>
        </button>
        <div>
          <img
            src="https://asianwiki.com/images/1/18/Chanyeol-1992-p1.jpeg"
            alt="img"
            className="w-10 h-10 rounded-full border-2 border-transparent hover:border-gray-600 cursor-pointer"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
 