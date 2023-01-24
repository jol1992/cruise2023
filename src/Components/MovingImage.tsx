import { FC, useEffect, useState } from "react";

export const MovingImage: FC<{ images: string[] }> = ({ images }) => {
  const [currentImageindex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        currentImageindex + 1 < images.length ? currentImageindex + 1 : 0
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [currentImageindex]);

  return <img style={{ maxWidth: "100%" }} src={images[currentImageindex]} />;
};
