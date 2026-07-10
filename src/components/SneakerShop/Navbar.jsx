import { useDispatch } from "react-redux";
import { toggleDrawer } from "../redux/drawerSlice";

function Navbar() {
  const dispatch = useDispatch();
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center py-4 px-4 md:px-12 border-b border-gray-200 max-w-7xl mx-auto gap-4 md:gap-0">
      <div className="flex justify-between items-center w-full md:w-auto md:gap-14">
        <span className="text-3xl font-bold text-black cursor-pointer">
          sneakers
        </span>

        <div className="flex items-center gap-8 md:hidden">
          <button className="text-gray-500 hover:text-black transition-colors duration-200 cursor-pointer">
            <i className="fa-solid fa-cart-shopping text-gray-600 text-xl"></i>
          </button>
          <div>
            <img
              src="https://asianwiki.com/images/1/18/Chanyeol-1992-p1.jpeg"
              alt="img"
              className="w-8 h-8 rounded-full border-2 border-transparent hover:border-gray-600 cursor-pointer"
              onClick={() => dispatch(toggleDrawer())}
            />
          </div>
        </div>
      </div>

      <ul className="flex gap-3 sm:gap-6 md:gap-14 text-gray-400 font-medium text-[15px] justify-center md:justify-start py-2 md:py-0 w-full md:w-auto overflow-x-auto text-center md:text-left">
        <li>
          <a
            href="#collections"
            className="hover:text-[#1D2026] transition-colors duration-200"
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
            className="hover:text-[#1D2026] transition-colors duration-200"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="hover:text-[#1D2026] transition-colors duration-200"
          >
            Contact
          </a>
        </li>
      </ul>

      <div className="items-center gap-14 md:flex hidden">
        <button className="text-gray-500 hover:text-black transition-colors duration-200 cursor-pointer">
          <i className="fa-solid fa-cart-shopping text-gray-600 text-xl"></i>
        </button>
        <div>
          <img
            src="https://asianwiki.com/images/1/18/Chanyeol-1992-p1.jpeg"
            alt="img"
            className="w-10 h-10 rounded-full border-2 border-transparent hover:border-gray-600 cursor-pointer"
            onClick={() => dispatch(toggleDrawer())}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
