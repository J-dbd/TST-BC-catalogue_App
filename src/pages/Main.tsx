import styled from "@emotion/styled";
import Unions from "lib/unions";
const Main = () => {
  console.log(Unions.size.min);
  const MainContainer = styled.main`
    width: 80%;
    height: 80%;
    background-color: transparent;

    border: 1px solid gray;

    @media (max-width: ${Unions.size.min}) {
      width: ${Unions.size.min};
      height: ${Unions.size.min};
    }
  `;

  return <MainContainer>Main Page 'main'</MainContainer>;
};
export default Main;
