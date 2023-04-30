import styled from "styled-components";
import { colors } from "../../config/colors";
export const PaginationList = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
`;
export const PaginationButtons = styled.button`
  color: ${colors.cyan};
  text-decoration: none;
  padding: 5px 10px;
  border: 1px solid #ddd;
  margin: 0 5px;
  background-color: ${colors.dark};
  &:hover {
    background-color: ${colors.grey};
  }
`;
