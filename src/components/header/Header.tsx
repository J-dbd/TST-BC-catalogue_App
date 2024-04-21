import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { searchModeState } from "lib/recoil";

import styled from "@emotion/styled";
import Unions from "lib/unions";

import LinkStyle3D from "styles/LinkStyle3D";
import SearchBar from "components/searchBar/SearchBar";

const Header = () => {
  const isSearchMode = useRecoilValue(searchModeState);
  const navigate = useNavigate();
  const HeaderContainer = styled.header`
    display: flex;

    width: 100vw;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: white;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    border: 1px solid gray;

    .left-title {
      margin-left: 30px;
      font-size: ${Unions.font_size.x_large};
    }
    .right-button {
      margin-right: 30px;
      font-size: ${Unions.font_size.large};
    }
  `;

  const hanldeGoToList = () => {
    const { mode, yoffset, keyword } = isSearchMode;
    if (mode) {
      navigate("/search", {
        state: { keyword, yoffset },
      });
    } else {
      navigate("/");
    }
  };

  return (
    <HeaderContainer>
      <h1 className="left-title">[배컴] FE PreTask</h1>
      <SearchBar />
      <nav className="right-button">
        <LinkStyle3D
          content={"목록으로 돌아가기"}
          onClick={hanldeGoToList}
          toUrl={null}
        />
      </nav>
    </HeaderContainer>
  );
};
export default Header;
