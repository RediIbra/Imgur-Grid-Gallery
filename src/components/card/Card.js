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
  ModalDes,
} from "./Card.style";
import "../../index.css";
import loadingGif from "../../assets/Loading_icon.gif";
import notFound from "../../assets/img-notFound.webp";
import { useSelector } from "react-redux";

function Card(props) {
  const [photoLoaded, setPhotoLoaded] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const state = useSelector((state) => state.urlCall);
  const modalInfo = props.extraInfo;
  useEffect(() => {
    if (!state.loading) setPhotoLoaded(true);
  }, [state.loading, openModal]);

  const showImg = (img) => {
    if (img.split(".")[3] == "mp4") {
      return notFound;
    } else {
      return img;
    }
  };
  const openNewModal = () => {
    props.getModal(!openModal);
    props.imgInfo(modalInfo);
  };
  return (
    <CardTemplate>
      {photoLoaded ? (
        <Image
          src={showImg(props.imageSrc)}
          onClick={() => {
            openNewModal();
          }}
          alt="Card image"
        />
      ) : (
        <div id="loading-gif">
          <Image src={loadingGif} alt="Loading..." />
        </div>
      )}
      <CardContent>
        <TextContent>{props.title}</TextContent>
        {props.description && <Paragraph>{props.description}</Paragraph>}
      </CardContent>
    </CardTemplate>
  );
}

export default Card;
