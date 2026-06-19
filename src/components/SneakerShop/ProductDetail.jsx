import { useState } from "react";

function ProductDetail() {
  const [quantity, setQuantity] = useState(0);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  const handleAddToCard = () => {
    if (quantity === 0) {
      alert("Can you choice at least one, Please?");
      return;
    }
  };

  return (
    <section className="w-full md:w-1/2 flex flex-col justify-center px-2 max-w-[500px]">
      <h4 className="text-gray-300 text-xs md:text-sm font-bold mb-3 uppercase">
        SNEAKER COMPANY
      </h4>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-6">
        Fall Limited Edition Sneakers
      </h1>
      <p className="text-sm text-gray-500 mb-5">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they will withstand everything
        the weather can offer.
      </p>
      <div className="flex flex-row md:flex-col justify-between md:justify-start items-center md:items-start mb:8 gap-2">
        <div className="flex items-center gap-4">
          <span className="text-3xl font-bold text-black">$125.00</span>
          <span className="bg-black text-amber-50 font-bold text-sm px-2 py-0.5 rounded-md">
            50%
          </span>
        </div>
        <div className="text-gray-600 line-through">$250.00</div>
      </div>
      <div className="flex flex-row gap-4 w-full items-center mt-2">
        <div className="flex items-center justify-between bg-gray-300 rounded-xl px-4 py-2.5 w-[140px] shrink-0font-bold select-none">
          <button
            className="text-amber-600 text-2xl hover:opacity-60 pb-1 font-bold cursor-pointer"
            onClick={handleDecrease}
          >
            -
          </button>
          <span className="text-black">{quantity}</span>
          <button
            className="text-amber-600 text-2xl hover:opacity-60 pb-1 font-bold cursor-pointer"
            onClick={handleIncrease}
          >
            +
          </button>
        </div>
        <button
          onClick={handleAddToCard}
          className="bg-amber-600 flex flex-1 w-full items-center gap-4 justify-center text-black font-bold text-sm px-2 py-4 rounded-md hover:opacity-80"
        >
          <i className="fa-solid fa-cart-shopping text-white text-sm"></i>
          <span className="whitespace-nowrap text-sm text-white">
            Add to cart
          </span>
        </button>
      </div>
    </section>
  );
}

export default ProductDetail;
