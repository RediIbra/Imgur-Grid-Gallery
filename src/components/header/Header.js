import React, { useState } from "react";
import {
  Container,
  MenuLink,
  UnorderedList,
  NavBar,
  Logo,
  NavElements,
  NavLink,
  SecondGrid,
  LogoLink,
  ArrowIcon,
  DropdownMenu,
  DropdownUnorderedList,
  DropdownListItem,
} from "./Header.style";

import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";

import { useEffect } from "react";
import { useRef } from "react";
function Header() {
  const [openList, setOpenList] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpenList(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <NavBar>
      <Container>
        <LogoLink to="/dashboard">
          <Logo>
            Photo
            <SecondGrid>Grid</SecondGrid>
          </Logo>
        </LogoLink>
        <NavElements>
          <UnorderedList>
            <MenuLink>
              <ArrowIcon>
                <ArrowDropDownCircleIcon
                  onClick={() => {
                    setOpenList(!openList);
                  }}
                  fontSize="large"
                />
              </ArrowIcon>

              <DropdownMenu ref={menuRef} className={openList ? " " : "active"}>
                <DropdownUnorderedList>
                  <DropdownListItem>
                    <LogoLink
                      to="/profile"
                      onClick={() => {
                        setOpenList(!openList);
                      }}
                    >
                      Profile
                    </LogoLink>
                  </DropdownListItem>
                  <DropdownListItem>
                    <MenuLink>
                      <NavLink>Log out</NavLink>
                    </MenuLink>
                  </DropdownListItem>
                </DropdownUnorderedList>
              </DropdownMenu>
            </MenuLink>
          </UnorderedList>
        </NavElements>
      </Container>
    </NavBar>
  );
}

export default Header;
