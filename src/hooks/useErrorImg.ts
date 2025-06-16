import { useState } from "react";

export const useErrorImg = (
  initialUrl: string,
  errorUrl = "/error-img.png"
) => {
  const [imgSrc, setImgSrc] = useState(initialUrl);
  const handleError = () => setImgSrc(errorUrl);
  return { imgSrc, handleError };
};
