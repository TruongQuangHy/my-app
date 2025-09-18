import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface ImageStore {
  images: string[];
  setImages: (imgs: string[]) => void;
}

export const useImageStore = create<ImageStore>()(
  devtools((set) => ({
    images: [],
    setImages: (imgs) => set({ images: imgs }, false, "setImages"),
  }))
);
