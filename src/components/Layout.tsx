import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";
//component
import Header from "components/header/Header";

const Layout = () => {
  const LayoutContainer = styled.div`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
  `;

  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  );
};

export default Layout;
