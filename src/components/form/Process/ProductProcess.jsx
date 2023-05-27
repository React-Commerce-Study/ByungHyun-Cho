import React, { useState, useEffect } from "react";
import ImageList from "../../ImageList";
import ProductListPage from "../../ProductListPage";

const ProductProcess = () => {
  const basicURL = "https://openmarket.weniv.co.kr/products/";
  const [imageList, setImageList] = useState([]);
  const [fetchPage, setFetchPage] = useState(basicURL);
  const [pageSet, setPageSet] = useState(1);
  const [productPage, setProductPage] = useState([]);
  const dataResultsLength = 15;
  let productPageNum = 0;

  useEffect(() => {
    console.log(pageSet);
    if (pageSet === 1) {
      setFetchPage(basicURL);
    } else {
      setFetchPage(`${basicURL}?page=${pageSet}`);
    }
    window.scrollTo(0, 0);
  }, [pageSet]);

  useEffect(() => {
    async function fetchImages() {
      try {
        console.log(fetchPage);

        const response = await fetch(fetchPage);
        if (!response.ok) {
          throw new Error("네트워크에 문제가 있습니다.");
        } else {
          const data = await response.json();
          pageNumSet(data);
          const productList = [];

          for (let i = 0; i < data.results.length; i++) {
            productList.push(data.results[i]);
          }
          setImageList(productList);
        }
      } catch (error) {
        console.error("데이터를 가져오는데 문제가 생겼습니다.", error);
      }
    }
    fetchImages();
  }, [fetchPage]);

  function pageNumSet(data) {
    productPageNum = Math.ceil(data.count / dataResultsLength);

    const pages = [];
    for (let i = 1; i <= productPageNum; i++) {
      pages.push(i);
    }
    setProductPage(pages);
  }
  return (
    <>
      <ImageList imageList={imageList} />
      <ProductListPage setPageSet={setPageSet} productPage={productPage} />
    </>
  );
};

export default ProductProcess;
