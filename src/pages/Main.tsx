import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { searchModeState } from "lib/recoil";

import API from "API/api";
import { Product } from "lib";

import ProductCard from "components/Card";
import Loader from "components/Loader";

import LinkStyle3D from "styles/LinkStyle3D";
import MainContainer from "styles/MainContainer";
import { PrdSection, PrdLists } from "styles/PrdSectionLists";

const Main = () => {
  const setIsSearchMode = useSetRecoilState(searchModeState);
  const [itemLists, setItemList] = useState<Product[]>([]);
  const [page, setPage] = useState(0);
  const [isMoreData, setIsMoreData] = useState(true);
  const prodPerPage = 10;

  useEffect(() => {
    //fatch first page, 0
    if (itemLists.length === 0) {
      fetchProducts(0);
    }

    setIsSearchMode({
      mode: false,
      yoffset: 0,
      keyword: "",
    });
  }, []);

  const fetchProducts = async (currPageNum: number) => {
    const api = new API();
    try {
      const limit = prodPerPage;
      const skip = currPageNum * prodPerPage;
      const selects = [
        "id",
        "title",
        "price",
        "brand",
        "thumbnail",
        "images",
        "description",
      ];
      const reqData = { limit, skip, selects };
      const resData = await api.getProudctsByPage(reqData);

      if (resData === undefined) {
        console.log("[Main] API issue");
        return null;
      }

      if (resData.products.length < 10) {
        setIsMoreData(false);
      } else {
        setItemList((prev) => [...prev, ...resData.products]);
        setPage(currPageNum);
      }
    } catch (error) {
      console.error("[getAllData] Error fetching products:", error);
      return null;
    }
  };

  const addPageHandler = () => {
    fetchProducts(page + 1);
  };

  return (
    <>
      <MainContainer>
        <PrdSection>
          {itemLists.length === 0 ? (
            <>
              <Loader />
            </>
          ) : (
            <PrdLists>
              {itemLists.map((product) => (
                <li key={product.id}>
                  <ProductCard data={product} />
                </li>
              ))}
            </PrdLists>
          )}
        </PrdSection>
        <section>
          {isMoreData ? (
            <LinkStyle3D
              onClick={addPageHandler}
              content="더보기"
              toUrl={null}
            />
          ) : null}
        </section>
      </MainContainer>
    </>
  );
};
export default Main;
