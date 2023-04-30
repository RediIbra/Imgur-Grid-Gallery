import React, { useState, useEffect } from "react";
import Card from "../components/card/Card";
import { GridThumbnailsContainer } from "./GridThumbnails.style";
import axios from "axios";
import Header from "../components/header/Header";
function GridThumbnails() {
  const [galleryData, setGalleryData] = useState([]);
  const [urlConfig, setUrlConfig] = useState({});
  console.log(urlConfig);
  const getData = async () => {
    try {
      const gallery = await axios.get(
        `https://api.imgur.com/3/gallery/${urlConfig.section ?? "hot"}/${
          urlConfig.sort ?? "viral"
        }/${urlConfig.window ?? "day"}/1?showViral=${
          urlConfig.showViral ?? true
        }&mature=false&album_previews=false`,
        {
          headers: {
            Authorization: `Bearer 5aa0c39cb53066c5fbe393794b17c08f4499cba8`,
          },
        }
      );
      setGalleryData(gallery.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(galleryData);

  return (
    <>
      <Header getUrlInfos={setUrlConfig} />
      <GridThumbnailsContainer>
        {galleryData.slice(0, 10).map((card) => (
          <Card
            key={card.id}
            title={card.title}
            imageSrc={card.images ? card.images["0"].link : card.link}
            description={card?.description}
          />
        ))}
      </GridThumbnailsContainer>
    </>
  );
}

export default GridThumbnails;
