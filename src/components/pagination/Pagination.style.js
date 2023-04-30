import styled from "styled-components";
import { colors } from "../../config/colors";
export const PaginationList = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
  overflow-x: scroll;
`;
export const PaginationButtons = styled.button`
  text-decoration: none;
  padding: 5px 10px;
  border: 1px solid #ddd;
  margin: 0 5px;

  &:hover {
    background-color: ${colors.grey};
  }
`;
