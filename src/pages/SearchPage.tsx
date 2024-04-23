import { useState, useEffect } from "react";
import styled from "@emotion/styled";

import { useRecoilValue } from "recoil";
import { searchModeState } from "lib/recoil";

import { Product } from "lib";
import API from "API/api";

import Loader from "components/Loader";
import ProductCard from "components/Card";
import MainContainer from "styles/MainContainer";
import { PrdSection, PrdLists } from "styles/PrdSectionLists";

const SearchPage = () => {
  const [itemLists, setItemList] = useState<Product[]>([]);
  const [isEmpty, SetIsEmpty] = useState(false);
  const isSearchMode = useRecoilValue(searchModeState);

  useEffect(() => {
    window.scrollTo(0, isSearchMode.yoffset);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productLists = await searchProducts(0, isSearchMode.keyword);
        setItemList(productLists || []);
      } catch (err) {
        console.error("[SearchPage] Error! : ", err);
        setItemList([]);
      }
    };
    fetchData();
  }, [isSearchMode.keyword]);

  const searchProducts = async (currPageNum: number, searchKeyword: string) => {
    const api = new API();
    try {
      const resData = await api.getSeachData(searchKeyword);

      if (resData.total === 0) {
        // 검색 결과가 없음
        SetIsEmpty(true);
        return;
      } else {
        return resData.products;
      }
    } catch (error) {
      console.error("[searchBar] Error fetching products:", error);
      return [];
    }
  };

  const EmptyPage = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  return (
    <div>
      <MainContainer>
        <PrdSection>
          {itemLists.length !== 0 ? (
            <PrdLists>
              {itemLists.map((product) => (
                <li key={product.id}>
                  <ProductCard data={product} />
                </li>
              ))}
            </PrdLists>
          ) : isEmpty ? (
            <EmptyPage>검색 결과가 존재하지 않습니다</EmptyPage>
          ) : (
            <Loader />
          )}
        </PrdSection>
      </MainContainer>
    </div>
  );
};

export default SearchPage;
