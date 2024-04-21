import styled from "@emotion/styled";
import Unions from "lib/unions";

const MainContainer = styled.main`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 90px;
  background-color: transparent;

  //border: 1px solid gray;

  @media (max-width: ${Unions.size.min}) {
    width: ${Unions.size.min};
    height: ${Unions.size.min};
  }
`;

export default MainContainer;
