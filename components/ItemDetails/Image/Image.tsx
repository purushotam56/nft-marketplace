import { Box, Card, CardMedia, Typography } from "@mui/material";
import Image from "next/image";

import {
  FullMapViewBox,
  ImageBoxShadow,
  FullMapInsideBox,
  InnerSyleMainImage,
  FullMapImageText,
  MoreImageBox,
  MoreImageBoxInnerStyle,
  FullMapInsideCard,
  FullMapInsideCardBox,
  FullMapInsideBoxBG,
  ExtraImageBox,
  MainImageBoxStyle,
  MainMapBox,
  FullMapBorder,
  FullMapBorderV,
  FullMapBorderH,
} from "./Image.styles";

const ImageComponent = (props) => {
  return (
    <>
      <Box sx={props.MainImageBoxStyle}>
        <Card sx={FullMapViewBox}>
          {" "}
          <Box sx={MainMapBox}>
            <CardMedia
              component="img"
              height="100%"
              image={props.ItemImage.mainImage}
              alt="image"
              className={props.ItemImage.type !== "land" ? "bgblack" : ""}
            />
            <Box sx={ImageBoxShadow}>
              <Box sx={InnerSyleMainImage}>
                {props.ItemImage.logo && (
                  <Box sx={MainImageBoxStyle}>
                    <Box className="ImageBoxLogo">
                      <Image
                        src="/images/landLogo.png"
                        width={props.netvrkLogoStyle.width}
                        height={props.netvrkLogoStyle.height}
                      />
                    </Box>
                    {props.ItemImage.title && (
                      <Box sx={ExtraImageBox} className="ImageBoxText">
                        <Box>
                          <Typography sx={props.parcelDetailsStyle}>
                            {props.ItemImage.title}
                          </Typography>
                          {props.ItemImage.district && (
                            <Typography sx={props.parcelDetailsStyle}>
                              DISTRICT: {props.ItemImage.district}
                            </Typography>
                          )}
                          {props.ItemImage.size && (
                            <Typography sx={props.parcelDetailsStyle}>
                              SIZE: {props.ItemImage.size}
                            </Typography>
                          )}
                        </Box>
                        {props.ItemImage.type === "land" && (
                          <Box
                            component="img"
                            src="/images/lands/landCircle.png"
                            sx={props.cicleMapStyle}
                          ></Box>
                        )}
                      </Box>
                    )}
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
        </Card>

        {props.ItemImage.moreImages && (
          <Box sx={MoreImageBox}>
            {props.ItemImage.moreImages &&
              props.ItemImage.moreImages.map((img, index) => {
                if (
                  index + 1 !== props.ItemImage.moreImages.length ||
                  !props.ItemImage.logo
                )
                  return (
                    <Box
                      component="img"
                      sx={MoreImageBoxInnerStyle}
                      src={img.src}
                      key={img.src}
                      height="90%"
                    />
                  );
                else
                  return (
                    <Card key={img.src} sx={FullMapInsideCard}>
                      {" "}
                      <Box sx={FullMapInsideCardBox}>
                        <CardMedia
                          component="img"
                          height="100%"
                          image={img.src}
                          alt="image"
                        />
                        <Box sx={FullMapInsideBoxBG}>
                          <Box sx={FullMapBorder}>
                            <Box sx={FullMapBorderV}>
                              <Box sx={FullMapBorderH}>
                                <Box sx={FullMapInsideBox}>
                                  <Typography sx={FullMapImageText}>
                                    {" "}
                                    VIEW FULL MAP
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Card>
                  );
              })}
          </Box>
        )}
      </Box>
    </>
  );
};

export default ImageComponent;
