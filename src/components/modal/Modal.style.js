import styled from 'styled-components';
import breakpoints from '../../config/breakpoints';
import { colors } from '../../config/colors';

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
`;

export const ModalContainer = styled.div`
  width: 800px;
  height: 500px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  background-color: #ffffff;
  box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);
  border-radius: 8px;
  animation: fade-in 0.5s ease-in-out forwards;

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @media (max-width: ${breakpoints.md}) {
    width: 100%;
    /* height: 50vh; */
  }
`;

export const ModalPhoto = styled.img`
  padding: 8px;
  width: 100%;
  object-fit: contain;
  border-radius: 20px;

  max-width: 550px;
  @media (max-width: ${breakpoints.md}) {
    width: 50%;
  }
`;
export const ModalRight = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
`;
export const XButton = styled.p`
  background-color: transparent;
  border: none;
  color: ${colors.dark};
  cursor: pointer;
  font-size: 26px;
  font-weight: bold;
  &:hover {
    color: ${colors.grey};
  }
  position: fixed;
  top: 0;
  right: 25px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 16px 32px;
  margin-top: 35px;
`;
export const Title = styled.h1`
  @media (max-width: ${breakpoints.md}) {
    font-size: 14px;
  }
`;
export const Description = styled.h1`
  overflow: scroll;
  @media (max-width: ${breakpoints.md}) {
    font-size: 12px;
  }
`;
export const Score = styled.p`
  color: green;
`;
export const Upvotes = styled.p`
  color: darkblue;
`;
export const Downvotes = styled.p`
  color: red;
`;
export const Views = styled.p`
  color: black;
`;
