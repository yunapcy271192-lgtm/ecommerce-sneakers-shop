// src/components/SneakerShop/ProfileDrawer.jsx
import { useSelector, useDispatch } from "react-redux";
import { closeDrawer, logout } from "../redux/drawerSlice";

export default function ProfileDrawer() {
  const isOpen = useSelector((state) => state.drawer.isOpen);
  const dispatch = useDispatch();

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-transparent"
        onClick={() => dispatch(closeDrawer())}
      />

      <div
        className="fixed top-20 right-6 w-60 bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 z-50 flex flex-col gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="text-gray-400 hover:text-black font-bold text-lg absolute top-3 right-4 transition"
          onClick={() => dispatch(closeDrawer())}
        >
          ✕
        </button>

        <ul className="flex flex-col gap-4 mt-2 list-none p-0 m-0">
          <li>
            <a
              href="#profile"
              className="text-gray-600 hover:text-orange-500 font-semibold text-sm block no-underline transition"
            >
              My Profile
            </a>
          </li>
          <li>
            <a
              href="#account"
              className="text-gray-600 hover:text-orange-500 font-semibold text-sm block no-underline transition"
            >
              My Account
            </a>
          </li>
          <li>
            <a
              href="#cart"
              className="text-gray-600 hover:text-orange-500 font-semibold text-sm block no-underline transition"
            >
              Cart
            </a>
          </li>
          <li>
            <a
              href="#orders"
              className="text-gray-600 hover:text-orange-500 font-semibold text-sm block no-underline transition"
            >
              Order History
            </a>
          </li>
          <li>
            <a
              href="#settings"
              className="text-gray-600 hover:text-orange-500 font-semibold text-sm block no-underline transition"
            >
              Settings
            </a>
          </li>
          <li className="mt-2 border-t border-gray-100 pt-3">
            <button
              className="text-red-500 hover:text-red-700 font-bold text-sm block no-underline transition"
              onClick={() => dispatch(logout())}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
