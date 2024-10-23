import React, { useState } from "react";

const ProductCarousel = ({ product }) => {
  // Ensure imagePaths is always an array
  const imagePaths = product.images || []; // Default to an empty array if images is undefined
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === imagePaths.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imagePaths.length - 1 : prevIndex - 1
    );
  };

  // Function to go to a specific image
  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="carousel-container">
      {/* Main Image */}
      <div className="carousel-main-image">
        {imagePaths.length > 0 ? (
          <img src={imagePaths[currentImageIndex].url} alt="Product" />
        ) : (
          <p>No images available</p> // Fallback if there are no images
        )}
        <button className="carousel-button prev" onClick={prevImage}>
          &lt;
        </button>
        <button className="carousel-button next" onClick={nextImage}>
          &gt;
        </button>
      </div>

      {/* Thumbnail Images */}
      <div className="carousel-thumbnails">
        {imagePaths.map((image, index) => (
          <img
            key={index}
            src={image.url} // Access the URL from the image object
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
