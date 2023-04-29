import React, { useState, useEffect, useRef } from "react";
import {
  CardTemplate,
  Image,
  CardContent,
  TextContent,
  Paragraph,
  ModalTitle,
  ModalContent,
  CloseModalButton,
  Modal,
  ModalDes,
} from "./Card.style";
import "../../index.css";
function Card(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const formRef = useRef(null);
  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    function handleClickOutside(event) {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setIsModalOpen(false);
      } else {
        setIsModalOpen(true);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [formRef]);
  return (
    <CardTemplate ref={formRef}>
      <Image src={props.imageSrc} alt="Card image" onClick={handleImageClick} />
      <CardContent>
        <TextContent>{props.title}</TextContent>
        <Paragraph>{props.description}</Paragraph>
      </CardContent>
      {isModalOpen && (
        <Modal>
          <ModalContent>
            <ModalTitle>{props.title}</ModalTitle>
            <ModalDes>{props.description}</ModalDes>
            <CloseModalButton onClick={handleCloseModal}>X</CloseModalButton>
          </ModalContent>
        </Modal>
      )}
    </CardTemplate>
  );
}

export default Card;
