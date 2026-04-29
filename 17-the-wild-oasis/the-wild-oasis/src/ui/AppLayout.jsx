import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";
import styled from "styled-components";
import { Suspense } from "react";

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.5rem 6.3rem;
`;

const StyledAppLayOut = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
`;

function AppLayout() {
  return (
    <StyledAppLayOut>
      <Header />
      <SideBar />
      <Main>
        <Suspense fallback="Loading...">
          <Outlet />
        </Suspense>
      </Main>
    </StyledAppLayOut>
  );
}

export default AppLayout;
