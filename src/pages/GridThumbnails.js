import React from "react";
import Card from "../components/card/Card";
import { GridThumbnailsContainer } from "./GridThumbnails.style";
function GridThumbnails() {
  const cards = [
    {
      title: "Card Title 1",
      imageSrc: "https://picsum.photos/200/300",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Card Title 2",
      imageSrc: "https://picsum.photos/200/300",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Card Title 3",
      imageSrc: "https://picsum.photos/200/300",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Card Title 4",
      imageSrc: "https://picsum.photos/200/300",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Card Title 5",
      imageSrc: "https://picsum.photos/200/300",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Card Title 6",
      imageSrc: "https://picsum.photos/200/300",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Card Title 7",
      imageSrc: "https://picsum.photos/200/300",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Card Title 8",
      imageSrc: "https://picsum.photos/200/300",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Card Title 9",
      imageSrc: "https://picsum.photos/200/300",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Card Title 10",
      imageSrc: "https://picsum.photos/200/300",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  return (
    <>
      <GridThumbnailsContainer>
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            imageSrc={card.imageSrc}
            description={card.description}
          />
        ))}
      </GridThumbnailsContainer>
    </>
  );
}

export default GridThumbnails;
