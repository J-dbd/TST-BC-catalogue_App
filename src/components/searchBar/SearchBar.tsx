import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useRecoilState } from "recoil";
import { searchModeState } from "lib/recoil";

import "./search.css";
import LinkStyle2D from "styles/LinkStyle2D";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [isSearchMode, setIsSearchMode] = useRecoilState(searchModeState);
  const navigate = useNavigate();

  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    //검색 후에도 input tag에 남아있게 하기 위함
    const preVal = localStorage.getItem("inputValue");
    if (preVal && isSearchMode.keyword) {
      setInputValue(preVal);
    }
  }, []);

  // 검색 input handling 함수
  const handlesearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // seraching func
  const handleSearching = (inputValue: string) => {
    localStorage.setItem("inputValue", inputValue);
    navigate(`/search/${inputValue}`);
    setIsSearchMode({
      mode: true,
      yoffset: window.scrollY,
      keyword: inputValue,
    });
  };

  // for submit
  const handleSearchSubmit = () => {
    if (inputValue === "") {
      setIsEmpty(true);
      return;
    }
    handleSearching(inputValue);
    setInputValue(inputValue);
  };

  const handlePressEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      handleSearching(inputValue);
    }
  };

  const visibility = isEmpty ? "visible" : "hidden";

  return (
    <section className="searching_section">
      <div className="searching_div">
        <input
          type="text"
          value={inputValue}
          onChange={handlesearchInput}
          onKeyDown={handlePressEnter}
          className="searching_input"
        ></input>
        <p className={`alert-text  ${visibility}`}>검색어를 입력해주세요</p>
      </div>
      <LinkStyle2D onClick={handleSearchSubmit} content="검색" toUrl={null} />
    </section>
  );
};

export default SearchBar;
