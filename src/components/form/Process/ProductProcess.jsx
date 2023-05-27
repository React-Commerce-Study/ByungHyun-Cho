import React, { useState, useEffect } from "react";
import ImageList from "../../ImageList";

const ProductProcess = () => {
  const [imageList, setImageList] = useState([]);
  const [fetchPage, setFetchPage] = useState(1);
  useEffect(() => {
    fetchImages();
  }, []);
  async function fetchImages() {
    try {
      const response = await fetch(`https://openmarket.weniv.co.kr/products/`);
      if (!response.ok) {
        throw new Error("네트워크에 문제가 있습니다.");
      }
      const data = await response.json();
      for (let i = 0; i < data.results.length; i++) {
        setImageList((prev) => {
          return [...prev, data.results[i]];
        });
      }
    } catch (error) {
      console.error("데이터를 가져오는데 문제가 생겼습니다.", error);
    }
  }
  return (
    <>
      <ImageList imageList={imageList} />
      <div>123</div>
    </>
  );
};

export default ProductProcess;
