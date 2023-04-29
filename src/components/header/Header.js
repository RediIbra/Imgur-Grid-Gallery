import React, { useState } from "react";
import { Container, NavBar, Logo, SecondGrid, LogoLink } from "./Header.style";

function Header() {
  return (
    <NavBar>
      <Container>
        <LogoLink to="/dashboard">
          <Logo>
            Photo
            <SecondGrid>Grid</SecondGrid>
          </Logo>
          <select>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </LogoLink>
      </Container>
    </NavBar>
  );
}

export default Header;
