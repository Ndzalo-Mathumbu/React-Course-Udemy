import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";
import styled from "styled-components";
import { Suspense } from "react";

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.5rem 6.3rem;
  overflow: scroll;
`;

const StyledAppLayOut = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function AppLayout({ onShowForm }) {
  return (
    <StyledAppLayOut>
      <Header />
      <SideBar onShowForm={onShowForm} />
      <Main>
        <Suspense fallback="Loading...">
          <Container>
            {" "}
            <Outlet />
          </Container>
        </Suspense>
      </Main>
    </StyledAppLayOut>
  );
}

export default AppLayout;
