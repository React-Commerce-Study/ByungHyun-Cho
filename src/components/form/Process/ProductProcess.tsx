import React, { useState, useEffect } from "react";
import ProductList from "../../ProductList";
import ProductListPage from "../../ProductListPage";
import { useParams } from "react-router-dom";

interface ProductData {
  count: number;
  results: any[];
}

const ProductProcess: React.FC = () => {
  const basicURL = "https://openmarket.weniv.co.kr/products/";
  const [productList, setProductList] = useState<any[]>([]);
  const [fetchPage, setFetchPage] = useState<string>(basicURL);
  const [productPage, setProductPage] = useState<number[]>([]);
  const [init, setInit] = useState<boolean>(false);
  const dataResultsLength: number = 15;
  let productPageNum: number = 0;

  const pageParams = useParams<{ productId?: string }>();

  function pageSetChange(page: string | undefined | null) {
    const newFetchPage =
      page === "1" || page === undefined || page === null
        ? basicURL
        : `${basicURL}?page=${pageParams.productId}`;
    setFetchPage(newFetchPage);
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    if (pageParams.productId === undefined || pageParams.productId === null) {
      pageSetChange("1");
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
        const data: ProductData = await response.json();
        pageNumSet(data);
        const productListArr: any[] = [];

        for (let i = 0; i < data.results.length; i++) {
          productListArr.push(data.results[i]);
        }
        setProductList(productListArr);
      }
    } catch (error) {
      console.error("데이터를 가져오는데 문제가 생겼습니다.", error);
    }
  }

  function pageNumSet(data: ProductData) {
    productPageNum = Math.ceil(data.count / dataResultsLength);

    const pages: number[] = [];
    for (let i = 1; i <= productPageNum; i++) {
      pages.push(i);
    }
    setProductPage(pages);
  }

  return (
    <>
      <ProductList productList={productList} />
      <ProductListPage productPage={productPage} />
    </>
  );
};

export default ProductProcess;
