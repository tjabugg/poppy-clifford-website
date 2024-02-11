import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Thumbnail } from "./Thumbnail";
import styled from "styled-components";
import { MyImage } from "../styles";

const EmblaCarousel = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel();
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel();

  const onThumbClick = useCallback(
    (index) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on("select", onSelect);
    emblaMainApi.on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <>
      <Viewport ref={emblaMainRef}>
        <CarouselContainer>
          {images.map((image, index) => (
            <Slide key={index}>
              <MyImage
                style={{ objectFit: "contain", borderRadius: "8px" }}
                src={image.src}
                alt="Your alt text"
              />
            </Slide>
          ))}
        </CarouselContainer>
      </Viewport>

      <div
        style={{
          // display: "flex",
          width: "100vw",
        }}
      >
        <ThumbnailCarousel ref={emblaThumbsRef}>
          <ThumbnailContainer>
            {images.map((image, index) => (
              <Thumbnail
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                imgSrc={image.src}
                key={index}
              />
            ))}
          </ThumbnailContainer>
        </ThumbnailCarousel>
      </div>
    </>
  );
};

export default EmblaCarousel;

export const Viewport = styled.div`
  overflow: hidden;
  border-radius: 8px;
  margin: 24px auto 24px auto;
  max-width: 1729px;

  @media (max-width: 1729px) {
    margin: 24px;
  }

  @media (max-width: 768px) {
    margin: 16px;
  }
`;

export const CarouselContainer = styled.div`
  display: flex;
  touch-action: pan-y;
  border-radius: 8px;
  gap: 24px;

  @media (max-width: 768px) {
    gap: 16px;
  }
`;

export const Slide = styled.div`
  flex: 0 0 100%;
  width: 100%;
  height: 100%;
  aspect-ratio: 16/9;
  margin-left: -1px;
`;

export const ThumbnailCarousel = styled.div`
  overflow: hidden;
  /* width: 50vw; */
  border-radius: 8px;
  margin: 24px auto 24px auto;
  max-width: 1729px;

  @media (max-width: 1729px) {
    margin: 0px 24px;
  }

  @media (max-width: 768px) {
    margin: 16px;
  }
`;

export const ThumbnailContainer = styled.div`
  display: flex;
  gap: 12px;
`;
