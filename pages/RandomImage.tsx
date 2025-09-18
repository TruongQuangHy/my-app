"use client";
import React, { useState } from "react";

import { useEffect } from "react";
import { useImageStore } from "../stores/imageStore";
import { fetchRandomImages } from "../utils/fetchRandomImages";

type RandomImageProps = {
  count?: number;
  images?: string[];
};

export default function RandomImage({
  count = 10,
  images: imagesProp,
}: RandomImageProps) {
  const imagesStore = useImageStore((state) => state.images);
  const setImages = useImageStore((state) => state.setImages);
  const images = imagesProp ?? imagesStore;
  const [img, setImg] = useState<string>("");

  useEffect(() => {
    if (!imagesProp && imagesStore.length === 0) {
      fetchRandomImages(count).then(setImages);
    }
    // eslint-disable-next-line
  }, [count, imagesProp, imagesStore.length, setImages]);

  useEffect(() => {
    if (images.length)
      setImg(images[Math.floor(Math.random() * images.length)]);
  }, [images]);

  const handleRandom = () => {
    if (images.length) {
      let newImg;
      do {
        newImg = images[Math.floor(Math.random() * images.length)];
      } while (newImg === img && images.length > 1);
      setImg(newImg);
    }
  };

  console.log("Images in store:", images);

  return (
    <div className="flex justify-center items-center flex-col gap-4 mt-10">
      <div className="text-sm text-gray-500">
        Store images count: {images.length}
      </div>
      <div className="text-xs text-gray-400 break-all max-w-xl">
        {images.length > 0 && JSON.stringify(images)}
      </div>
      {img && (
        <img
          src={img}
          alt="Random"
          style={{ maxWidth: 300 }}
          className="border-2 border-gray-300 rounded-lg"
        />
      )}
      <br />
      <button
        className="bg-[#f5f5f5] border-2 border-gray-300 rounded-lg p-2"
        onClick={handleRandom}
      >
        Random Image
      </button>
    </div>
  );
}
