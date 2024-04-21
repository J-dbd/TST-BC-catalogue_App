import styled from "@emotion/styled";
import Unions from "lib/unions";
import { Link } from "react-router-dom";
import LinkStyle3D from "styles/LinkStyle";
const Header = () => {
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

  return (
    <HeaderContainer>
      <h1 className="left-title">과제 테스트</h1>
      <nav className="right-button">
        <LinkStyle3D content={"목록으로 돌아가기"} toUrl={"/"} />
      </nav>
    </HeaderContainer>
  );
};
export default Header;
