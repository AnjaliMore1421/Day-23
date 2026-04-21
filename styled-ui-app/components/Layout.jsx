import styled from "styled-components";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Wrapper = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  min-height: 100vh;
`;

function Layout({ children, toggleTheme, dark }) {
  return (
    <Wrapper>
      <Sidebar />
      <Main>
        <Navbar toggleTheme={toggleTheme} dark={dark} />
        {children}
      </Main>
    </Wrapper>
  );
}

export default Layout;
