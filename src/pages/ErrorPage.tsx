import LinkStyle3D from "styles/LinkStyle3D";
import MainContainer from "styles/MainContainer";
const ErrorPage = () => {
  return (
    <>
      <MainContainer>
        <h1>Error!</h1>
        <LinkStyle3D toUrl={"/"} content="메인으로" />
      </MainContainer>
    </>
  );
};

export default ErrorPage;
