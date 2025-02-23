import React, { useState, useEffect } from 'react';
import './App.css';

const ImageViewer = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  // Handle image click
  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  // Close modal
  const handleCloseModal = () => {
    setSelectedImage(null);
    setIsZoomed(false);
  };

  // Navigate to the next image
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  // Navigate to the previous image
  const handlePrevious = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage) {
        if (e.key === 'ArrowRight') handleNext();
        if (e.key === 'ArrowLeft') handlePrevious();
        if (e.key === 'Escape') handleCloseModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex]);

  return (
    <div className="image-viewer">
      <div className="gallery" >
        {images.map((image, index) => (
          <div key={index} className="thumbnail-container">
            <img
              src={image}
              alt={`Image ${index}`}
              onClick={() => handleImageClick(image, index)}
              className="thumbnail"
            />
            <p className="image-description">Image {index + 1}</p>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt="Selected"
              className={`modal-image ${isZoomed ? 'zoomed' : ''}`}
              onClick={() => setIsZoomed(!isZoomed)}
            />
            <div className="modal-controls">
              <button onClick={handlePrevious} className="nav-button">
                &lt; Previous
              </button>
              <button onClick={handleNext} className="nav-button">
                Next &gt;
              </button>
            </div>
            <p className="image-caption">Image {currentIndex + 1}</p>
            <button onClick={handleCloseModal} className="close-button">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageViewer;