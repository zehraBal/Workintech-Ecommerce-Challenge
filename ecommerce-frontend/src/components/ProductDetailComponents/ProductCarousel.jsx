import React, { useState } from "react";

const ProductCarousel = ({ paths }) => {
  const imagePaths = paths.map((image) => image.url);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === imagePaths.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imagePaths.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="carousel-container">
      {/* Ana Büyük Resim */}
      <div className="carousel-main-image">
        <img src={imagePaths[currentImageIndex]} alt="Product" />
        <button className="carousel-button prev" onClick={prevImage}>
          &lt;
        </button>
        <button className="carousel-button next" onClick={nextImage}>
          &gt;
        </button>
      </div>

      {/* İleri ve Geri Butonları */}

      {/* Thumbnail Resimler */}
      <div className="carousel-thumbnails ">
        {imagePaths.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={index === currentImageIndex ? "active" : ""}
            onClick={() => goToImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
