import React from "react";
import {
  Overlay,
  ModalContainer,
  ModalPhoto,
  ModalRight,
  XButton,
  Content,
  Title,
  Description,
  Score,
  Upvotes,
  Downvotes,
  Views,
} from "./Modal.style";
import notFound from "../../assets/img-notFound.webp";
import ThumbUpOffAltTwoToneIcon from "@mui/icons-material/ThumbUpOffAltTwoTone";
import ThumbDownTwoToneIcon from "@mui/icons-material/ThumbDownTwoTone";
import RemoveRedEyeTwoToneIcon from "@mui/icons-material/RemoveRedEyeTwoTone";
import ScoreboardTwoToneIcon from "@mui/icons-material/ScoreboardTwoTone";
const Modal = ({ open, onClose, info }) => {
  const showImg = (img) => {
    if (img.split(".")[3] === "mp4") {
      return notFound;
    } else {
      return img;
    }
  };
  if (!open) return null;
  return (
    <Overlay onClick={onClose}>
      <ModalContainer
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <ModalPhoto src={showImg(info.photoUrl)} alt="/" />
        <ModalRight>
          <XButton onClick={onClose}>X</XButton>
          <Content>
            <Title>{info.title}</Title>
            <Description>{info.description}</Description>
            <Score>
              Score:{info.score}
              <ScoreboardTwoToneIcon />
            </Score>
            <Upvotes>
              Upvotes:{info.upvotes} <ThumbUpOffAltTwoToneIcon />
            </Upvotes>
            <Downvotes>
              Downvotes:{info.downvotes}
              <ThumbDownTwoToneIcon />
            </Downvotes>
            <Views>
              Views:{info.views}
              <RemoveRedEyeTwoToneIcon />
            </Views>
          </Content>
        </ModalRight>
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;
