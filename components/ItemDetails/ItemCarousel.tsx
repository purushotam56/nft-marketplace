import React, { useRef } from "react";

import { Box, Typography, Grid, Link } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Carousel from "react-multi-carousel";

import Button from "@/components/UI/Button";
import { PATHS } from "@/constants/url";
import leftArrow from "public/images/arrow-left.svg";
import rightArrow from "public/images/arrow-right.svg";

import { ItemCarouselStyle } from "./item.style";
import ItemCard from "./ItemCard";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const SuggestItemImage = [
  {
    logo: true,
    type: "land",
    title: "Parcel #25",
    size: "MEGA",
    district: "BUSINESS",
    mainImage: "/images/land.png",
  },
  {
    logo: false,
    type: "Ape",
    mainImage: "/images/Ape/Ape.png",
  },
  {
    logo: false,
    type: "Transport",
    mainImage: "/images/Roadster/Roadster_Card.png",
  },
  {
    logo: false,
    type: "Ape",
    mainImage: "/images/Ape/Ape.png",
  },
  {
    logo: false,
    type: "Ape",
    mainImage: "/images/Ape/Ape.png",
  },
];

const ItemCarousel: React.FC = () => {
  const refCarousel = useRef(null);

  const Items = [];
  SuggestItemImage.forEach((data, i) => {
    Items.push(<ItemCard key={i} image={data} />);
  });

  const nextSlide = () => {
    refCarousel.current.next();
  };

  const prevSlide = () => {
    refCarousel.current.previous();
  };

  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <>
      <Box sx={{ mt: "50px" }}>
        <Grid container>
          <Grid item xs={12} sm={10}>
            <Typography sx={ItemCarouselStyle.title_h2}>
              {!isMobile && <>You might also like</>}
              {isMobile && <>RELATED</>}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={2} sx={ItemCarouselStyle.arrowContainer}>
            <Button
              icon={leftArrow}
              onClick={() => prevSlide()}
              sx={ItemCarouselStyle.buttonStyle}
              className="carouselBtn"
            />
            <Button
              icon={rightArrow}
              onClick={() => nextSlide()}
              sx={ItemCarouselStyle.buttonStyle}
              className="carouselBtn"
            />
          </Grid>
        </Grid>
        <Carousel
          ref={refCarousel}
          arrows={false}
          responsive={responsive}
          infinite={false}
          containerClass="carousel-container"
          autoPlay={false}
        >
          {Items}
        </Carousel>
      </Box>
      <Box sx={ItemCarouselStyle.exploreMoreContainer}>
        <Link href={PATHS.staking.path} underline="none">
          <Button
            variant="outlined"
            title="Explore More"
            sx={ItemCarouselStyle.exploreMoreBtn}
          />
        </Link>
      </Box>
    </>
  );
};

export default ItemCarousel;
