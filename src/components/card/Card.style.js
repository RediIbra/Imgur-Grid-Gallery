import styled from "styled-components";
import breakpoints from "../../config/breakpoints";
import { colors } from "../../config/colors";
import { Link } from "react-router-dom";
export const CardTemplate = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 250px;
  width: 200px;
  cursor: pointer;
`;

export const CardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: auto;
  width: 200px;
`;

export const TextContent = styled.h2`
  margin-top: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 30px;
`;
export const Paragraph = styled.p`
  margin: 8px 0;
  font-size: 1rem;
  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 50px;
`;
export const ModalContent = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 1.4;
  background: #f1f1f1;
  padding: 14px 28px;
  border-radius: 3px;
  max-width: 600px;
  min-width: 300px;
`;
export const CloseModalButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 7px;
`;

export const Modal = styled.div`
  background: rgba(49, 49, 49, 0.8);
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 3;
`;

export const ModalTitle = styled.h1`
  font-size: 16px;
  font-weight: 900;
`;
export const ModalDes = styled.p`
  font-size: 16px;
`;
