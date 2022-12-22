import { useEffect, useState } from "react";
import {  ref, getDownloadURL, getStorage,} from "firebase/storage";


export const useGetItemImg = (productImg) => {
  const [img, setImg] = useState(null);
  const storage = getStorage();
  const productImgRef = ref(storage, productImg);

  useEffect(() => {
    getDownloadURL(productImgRef)
      .then((data) => setImg(data))
      .catch((err) => console.error({ err }));
  }, [productImgRef]);

  return img;
};