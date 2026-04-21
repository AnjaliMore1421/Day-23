import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  background: ${({ theme }) => theme.card};
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
`;

const Button = styled.button`
  background: ${({ theme }) => theme.primary};
  border: none;
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
`;

function Navbar({ toggleTheme, dark }) {
  return (
    <Nav>
      <h3>Hospital Dashboard</h3>
      <Button onClick={toggleTheme}>
        {dark ? "Light" : "Dark"}
      </Button>
    </Nav>
  );
}

export default Navbar;
