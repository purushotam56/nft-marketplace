import React, { useRef } from "react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Typography, Grid } from "@mui/material";
import Carousel from "react-multi-carousel";

import { TopLandsStyle } from "@/components/Home/Home.styles";
import { ItemCarouselStyle } from "@/components/ItemDetails/item.style";
import ItemCard from "@/components/ItemDetails/ItemCard";
import Button from "@/components/UI/Button";
import leftArrow from "public/images/arrow-left.svg";
import rightArrow from "public/images/arrow-right.svg";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
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
    logo: true,
    type: "land",
    title: "Parcel #25",
    size: "MEGA",
    district: "BUSINESS",
    mainImage: "/images/land.png",
  },
  {
    logo: true,
    type: "land",
    title: "Parcel #25",
    size: "MEGA",
    district: "BUSINESS",
    mainImage: "/images/land.png",
  },
  {
    logo: true,
    type: "land",
    title: "Parcel #25",
    size: "MEGA",
    district: "BUSINESS",
    mainImage: "/images/land.png",
  },
];

const TopLands: React.FC = () => {
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

  return (
    <>
      <Box sx={{ mt: "50px" }}>
        <Grid container>
          <Grid item xs={12} sm={10}>
            <Box sx={TopLandsStyle.titleBox}>
              <Typography
                variant="h6"
                component="div"
                gutterBottom
                sx={TopLandsStyle.primaryTitle}
              >
                TOP LANDS
              </Typography>
              <Typography
                variant="h6"
                component="div"
                gutterBottom
                sx={TopLandsStyle.blueTitle}
              >
                LAST 7 DAYS
                <KeyboardArrowDownIcon fontSize="large" sx={{}} />
              </Typography>
            </Box>
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
    </>
  );
};

export default TopLands;
