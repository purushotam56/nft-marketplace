import React, { FC } from "react";

import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";

import { VideoStyle } from "@/components/Home/Home.styles";
import Button from "@/components/UI/Button";

const NetvrkVideo: FC = () => {
  const [isPlay, setIsPlay] = React.useState(false);

  const playVideo = () => {
    setIsPlay(true);
  };

  return (
    <Box>
      <Box sx={VideoStyle.MainContainer}>
        {!isPlay && (
          <>
            <Image
              src="/images/netvrk_video_image.jpg"
              layout="fill"
              objectFit="cover"
            />
            <Button
              icon="/images/play.svg"
              iconSize={120}
              sx={{
                "&.CCButton-filled, &.CCButton-filled:hover": {
                  background: "none",
                  border: "none",
                },
              }}
              onClick={playVideo}
            />
          </>
        )}

        {isPlay && (
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/Tg2rzSXD_S8?autoplay=1&controls=0&disablekb=1&fs=0"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </Box>
      <Box className="d-flex" sx={{ justifyContent: "center", mb: "88px" }}>
        <Link href="/explore">
          <a>
            <Button
              title="EXPLORE THE MARKETPLACE"
              sx={VideoStyle.exploreBtn}
            />
          </a>
        </Link>
      </Box>
    </Box>
  );
};

export default NetvrkVideo;
