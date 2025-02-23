import React from 'react';
import ImageViewer from '../components/ImageViewer';
import './App.css';

const images = [
  'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg',
  'https://images.pexels.com/photos/15286/pexels-photo.jpg',
  'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg',
  'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg',
  'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg',
  'https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg',
  'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg',
  'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg',
  'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg',
  'https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg',
  'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg',
  'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg',
  'https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg',
  'https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg',
  'https://images.pexels.com/photos/417148/pexels-photo-417148.jpeg',
  'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg',
  'https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg',
  'https://images.pexels.com/photos/358457/pexels-photo-358457.jpeg',
  'https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg',
  'https://images.pexels.com/photos/462024/pexels-photo-462024.jpeg',
  'https://images.pexels.com/photos/302804/pexels-photo-302804.jpeg',
  'https://images.pexels.com/photos/3493777/pexels-photo-3493777.jpeg',
  'https://images.pexels.com/photos/3224173/pexels-photo-3224173.jpeg',
  'https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg',
  'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg',
  'https://images.pexels.com/photos/1366909/pexels-photo-1366909.jpeg',
  'https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg',
  'https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg',
  'https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg',
  'https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg',
];

const Gallery = () => {
  return (
    <div className="gallery-page skeleton">
      <h1>Gallery</h1>
      <ImageViewer images={images} />
    </div>
  );
};

export default Gallery;