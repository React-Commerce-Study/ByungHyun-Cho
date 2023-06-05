import React, { useState, useEffect } from "react";
import ProductList from "../../ProductList";
import ProductListPage from "../../ProductListPage";
import { useParams } from "react-router-dom";
const ProductProcess = () => {
  const basicURL = "https://openmarket.weniv.co.kr/products/";
  const [productList, setProductList] = useState([]);
  const [fetchPage, setFetchPage] = useState(basicURL);
  const [productPage, setProductPage] = useState([]);
  const [init, setInit] = useState(false);
  const dataResultsLength = 15;
  let productPageNum = 0;

  let pageParams = useParams();

  function pageSetChange(page) {
    const newFetchPage =
      page === (1 || undefined || null)
        ? basicURL
        : `${basicURL}?page=${pageParams.productId}`;
    setFetchPage(newFetchPage);
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    if (pageParams.productId === undefined || pageParams.productId === null) {
      pageSetChange(1);
    } else {
      pageSetChange(pageParams.productId);
    }
  }, [pageParams]);

  useEffect(() => {
    if (!init) {
      fetchProducts();
    } else {
      setInit(true);
    }
  }, [fetchPage]);

  async function fetchProducts() {
    try {
      const response = await fetch(fetchPage);
      if (!response.ok) {
        throw new Error("네트워크에 문제가 있습니다.");
      } else {
        const data = await response.json();
        pageNumSet(data);
        const productListArr = [];

        for (let i = 0; i < data.results.length; i++) {
          productListArr.push(data.results[i]);
        }
        setProductList(productListArr);
      }
    } catch (error) {
      console.error("데이터를 가져오는데 문제가 생겼습니다.", error);
    }
  }

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
      <ProductList productList={productList} />
      <ProductListPage pageParams={pageParams} productPage={productPage} />
    </>
  );
};

export default ProductProcess;
