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

  useEffect(() => {
    const preVal = localStorage.getItem("inputValue");
    if (preVal && isSearchMode.keyword) {
      setInputValue(preVal);
    }
  }, []);

  const handlesearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    localStorage.setItem("inputValue", e.target.value);
  };

  const handleSearchSubmit = () => {
    //searchProducts(0, inputValue);
    navigate("/search", {
      state: { keyword: inputValue },
    });
    setIsSearchMode({
      mode: true,
      yoffset: window.scrollY,
      keyword: inputValue,
    });
  };

  const handlePressEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      navigate("/search", {
        state: { keyword: inputValue },
      });
    }
  };

  return (
    <section className="searching_section">
      <input
        type="text"
        value={inputValue}
        onChange={handlesearchInput}
        onKeyDown={handlePressEnter}
        className="searching_input"
      ></input>
      <LinkStyle2D onClick={handleSearchSubmit} content="검색" toUrl={null} />
      {/* <Link to={`search/${inputValue}`}>검색</Link> */}
    </section>
  );
};

export default SearchBar;

//onClick={handleSearchSubmit}
