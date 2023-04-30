import styled from "styled-components";
import breakpoints from "../config/breakpoints";

export const GridThumbnailsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
  margin: 20px;
  @media (max-width: ${breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
