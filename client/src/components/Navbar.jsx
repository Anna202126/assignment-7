import styled from "styled-components";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <StyledNavbar>
      <h1>Todos App</h1>
      <NavItems />
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 100px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);
`;

export default Navbar;
