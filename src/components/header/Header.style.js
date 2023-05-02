import styled from 'styled-components';
import breakpoints from '../../config/breakpoints';
import { colors } from '../../config/colors';
import { Link } from 'react-router-dom';
export const NavBar = styled.nav`
  height: 60px;
  background-color: ${colors.dark};
  position: sticky;
  top: 0;
  z-index: 1;
  width: 100%;
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;
export const Logo = styled.div`
  color: ${colors.snow};
  font-size: 19px;
  font-family: 'Poppins';
  padding-left: 5px;
  &:hover {
    font-size: 20px;
  }
  @media (max-width: ${breakpoints.md}) {
    font-size: 16px;
  }
`;
export const SecondGrid = styled.span`
  color: ${colors.cyan};
  font-size: 19px;
  &:hover {
    font-size: 20px;
  }
  @media (max-width: ${breakpoints.md}) {
    font-size: 16px;
  }
`;
export const NavElements = styled.div``;
export const UnorderedList = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  margin: 0;
  gap: 1rem;

  @media (max-width: ${breakpoints.md}) {
    display: flex;
    flex-direction: column;
    margin-left: 17px;
  }
`;
export const MenuLink = styled.div`
  align-items: center;
  color: ${colors.snow};
  font-family: 'Poppins', sans-serif;
  position: relative;

  @media (max-width: ${breakpoints.md}) {
    margin-right: unset;
    margin-top: 10px;
  }
`;
export const NavLink = styled(Link)`
  color: ${colors.snow};
  font-weight: 500;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    color: ${colors.cyan};
  }
`;

export const SelectSectionSpan = styled.span`
  color: ${colors.cyan};
  font-family: 'Poppins';

  @media (max-width: ${breakpoints.md}) {
    display: none;
  }
`;
export const SelectBar = styled.select`
  margin: 0 5px 0 5px;
  background-color: ${colors.dark};
  color: ${colors.snow};
  font-size: 16px;
  border: none;
  font-family: 'Poppins';
  &:focus {
    outline: none;
  }
  @media (max-width: ${breakpoints.md}) {
    font-size: 10px;
  }
`;
export const Option = styled.option`
  margin-left: 40px;
`;

export const GallerySpec = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${breakpoints.md}) {
    font-size: 10px;
  }
`;
export const ViralLable = styled.label`
  font-family: 'Poppins';
  color: ${colors.cyan};
`;

export const ViralCheckbox = styled.input``;
export const ButtonSubmit = styled.button`
  margin-right: 10px;
  background-color: ${colors.cyan};
  border: none;
  padding: 4px 4px;
  color: ${colors.snow};
  display: inline-block;
  font-size: 16px;
  border-radius: 4px;
  transition-duration: 0.4s;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background-color: #3e8e41;
  }
  &:disabled {
    background-color: ${colors.grey};
  }
  @media (max-width: ${breakpoints.md}) {
    font-size: 10px;
    margin-right: 0px;
    width: 50px;
    height: 30px;
  }
`;
