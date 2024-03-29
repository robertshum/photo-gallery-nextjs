"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import "./PhotoView.scss";

export default function PhotoView(props) {
  const router = useRouter();
  const { albumId, photoId, photos: initialPhotos, currentIndex: initialIndex } = props;

  const [photos, setPhotos] = useState(initialPhotos);
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const currentPhoto = currentIndex >= 0 && photos[currentIndex];

  useEffect(() => {
    const goBack = ({ key }) => {
      if (key === "Escape") {
        router.back();
      }
    };

    document.addEventListener("keydown", goBack);

    return () => document.removeEventListener("keydown", goBack);
  });

  const showNextPhoto = () => {

    let photoStateId;

    photoStateId = currentIndex + 1;
    if (currentIndex + 1 >= photos.length) {
      photoStateId = photos.length - 1;
    }

    window.history.replaceState(null, "", photos[photoStateId].id);
    setCurrentIndex(photoStateId % photos.length);
  };
  const showPrevPhoto = () => {
    if (currentIndex !== 0) {
      window.history.replaceState(null, "", photos[currentIndex - 1].id);
      setCurrentIndex((currentIndex - 1) % photos.length);
    }
  };

  return (
    <div className="PhotoView">
      <button className="close" onClick={() => router.back()}>
        X
      </button>
      <button onClick={showPrevPhoto}>{"<"}PREVIOUS</button>
      {currentPhoto && <img src={currentPhoto.url} alt={currentPhoto.title} />}
      <button onClick={showNextPhoto}>NEXT {">"}</button>
    </div>
  );
}
