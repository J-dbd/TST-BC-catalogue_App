import styled from "@emotion/styled";
import Unions from "lib/unions";
const Loader = () => {
  const LoaderContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  const Loading = styled.span`
    display: inline-block;
    font-size: 48px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    color: black;
    position: relative;

    ::before {
      content: "";
      position: absolute;
      left: 34px;
      bottom: 8px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 5px solid ${Unions.color.rightGreen};
      border-bottom-color: ${Unions.color.rightGreen};
      box-sizing: border-box;
      animation: rotation 0.6s linear infinite;
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `;

  return (
    <LoaderContainer>
      <Loading>L &nbsp; ading</Loading>
    </LoaderContainer>
  );
};

export default Loader;
