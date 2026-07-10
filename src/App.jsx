import Navbar from "./components/SneakerShop/Navbar";
import ProductGallery from "./components/SneakerShop/ProductGallery";
import ProductDetail from "./components/SneakerShop/ProductDetail";
import ProfileDrawer from "./components/SneakerShop/ProfileDrawer";
import "./App.css";
import Form from "./components/Form";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => state.drawer.isLoggedIn); // Replace with your actual authentication logic
  return (
    <>
      {isLoggedIn ? (
        <div className="min-h-screen px-6 md:px-24 pb-12 bg-white">
          <Navbar />
          <main className="max-w-6xl mx-auto mt-10 md:mt-20 flex flex-col md:flex-row gap-12 md:gap-24s">
            <ProductGallery />
            <ProductDetail />
          </main>
          <ProfileDrawer />
        </div>
      ) : (
        <Form />
      )}
    </>
  );
}

export default App;
