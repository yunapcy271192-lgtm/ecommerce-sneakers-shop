import React, { useState } from "react";

function ProductGallery() {
  const images = [
    "https://www.sneakerfiles.com/wp-content/uploads/2024/11/nike-air-max-muse-black-metallic-silver-FV1920-001-1-300x213.jpg",
    "https://tse4.mm.bing.net/th/id/OIP.GaWGCXUMEBUuQe25w2CAcAHaFF?w=1200&h=823&rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://tse1.mm.bing.net/th/id/OIP.vm7ihrI7naLRLruRJdIHzgHaFL?pid=ImgDet&w=202&h=141&c=7&dpr=2&o=7&rm=3",
    "https://tse3.mm.bing.net/th/id/OIP.E4rnONfiM-XS4ZkLqAw_9gHaFL?pid=ImgDet&w=202&h=141&c=7&dpr=2&o=7&rm=3",
  ];

  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <section className="w-full md:w-1/2 flex flex-col gap-6 max-w-[600px] mx-auto">
      <div className="w-full overflow-hidden rounded-2xl bg-gray-100">
        <img
          src={mainImage}
          alt="Main shoe"
          className="w-full h-full object-cover transition-all duration-300"
        />
      </div>

      <div className="grid grid-cols-4 gap-4">
        {images.map((imageUrl, index) => {
          const isActive = mainImage === imageUrl;
          return (
            <div
              key={index}
              onClick={() => setMainImage(imageUrl)}
              className={`relative cursor-pointer rounded-xl overflow-hidden border-2 
                ${isActive ? "border-black" : "border-transparent hover:opacity-80"}`}
            >
              <img
                src={imageUrl}
                alt={`Thumbnail ${index + 1}`}
                className={`w-full h-full object-cover ${isActive ? "opacity-40" : ""}`}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ProductGallery;
