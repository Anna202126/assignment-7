import styled from "styled-components";
import { StyledLink } from "../styles";

const NavItems = () => {
  return (
    <StyledNavItems>
      <StyledLink to="/register" />
    </StyledNavItems>
  );
};

const StyledNavItems = styled.ul`
  list-style: none;
  display: flex;
`;

export default NavItems;
