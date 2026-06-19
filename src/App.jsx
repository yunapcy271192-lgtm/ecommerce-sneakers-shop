import Navbar from "./components/SneakerShop/Navbar";
import ProductGallery from "./components/SneakerShop/ProductGallery";
import ProductDetail from "./components/SneakerShop/ProductDetail";
import "./App.css";
function App() {
  return (
    <div className="min-h-screen px-6 md:px-24 pb-12 bg-white">
      <Navbar />
      <main className="max-w-6xl mx-auto mt-10 md:mt-20 flex flex-col md:flex-row gap-12 md:gap-24s">
        <ProductGallery />
        <ProductDetail />
      </main>
    </div>
  );
}

export default App;
