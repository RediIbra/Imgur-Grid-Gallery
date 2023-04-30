import React, { useState, useEffect } from "react";
import Card from "../components/card/Card";
import { GridThumbnailsContainer } from "./GridThumbnails.style";
import axios from "axios";
import Header from "../components/header/Header";
import Pagination from "../components/pagination/Pagination";
function GridThumbnails() {
  const [galleryData, setGalleryData] = useState([]);
  const [urlConfig, setUrlConfig] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  const url = `https://api.imgur.com/3/gallery/${urlConfig.section ?? "hot"}/${
    urlConfig.sort ?? "viral"
  }/${urlConfig.window ?? "day"}/1?showViral=${
    urlConfig.showViral ?? true
  }&mature=false&album_previews=false`;

  const getData = async () => {
    try {
      const gallery = await axios.get(url, {
        headers: {
          Authorization: `Bearer 5aa0c39cb53066c5fbe393794b17c08f4499cba8`,
        },
      });
      setGalleryData(gallery.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, [url]);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = galleryData.slice(indexOfFirstPost, indexOfLastPost);
  console.log(currentPosts);
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <Header getUrlInfos={setUrlConfig} />
      <GridThumbnailsContainer>
        {currentPosts.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            imageSrc={card.images ? card.images["0"].link : card.link}
            description={card?.description}
          />
        ))}
      </GridThumbnailsContainer>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={galleryData.length}
        paginate={paginate}
      />
    </>
  );
}

export default GridThumbnails;
