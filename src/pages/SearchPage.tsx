import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import styled from "@emotion/styled";
import API from "API/api";
import { Product } from "lib";

import Loader from "components/Loader";
import ProductCard from "components/Card";
import MainContainer from "styles/MainContainer";
import { PrdSection, PrdLists } from "styles/PrdSectionLists";

const SearchPage = () => {
  const [itemLists, setItemList] = useState<Product[]>([]);
  const [isEmpty, SetIsEmpty] = useState(false);
  const location = useLocation();

  const keyword = location.state.keyword;

  useEffect(() => {
    if (location.state.yoffset) {
      window.scrollTo(0, location.state.yoffset);
    }
    searchProducts(0, keyword);
  }, []);

  const searchProducts = async (currPageNum: number, searchKeyword: string) => {
    const api = new API();
    try {
      const resData = await api.getSeachData(searchKeyword);

      if (resData === undefined) {
        console.log("[Main] API issue");
        return null;
      } else {
        if (resData.total === 0) {
          SetIsEmpty(true);
          return null;
        }
        setItemList(resData.products);
      }
    } catch (error) {
      console.error("[searchBar] Error fetching products:", error);
      return null;
    }
  };

  const EmptyPage = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  if (isEmpty) {
    return (
      <MainContainer>
        <PrdSection>
          <EmptyPage>검색 결과가 존재하지 않습니다!</EmptyPage>
        </PrdSection>
      </MainContainer>
    );
  }
  return (
    <div>
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
      </MainContainer>
    </div>
  );
};

export default SearchPage;
