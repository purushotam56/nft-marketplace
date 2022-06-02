import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageIcon from "@mui/icons-material/Language";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import VerifiedIcon from "@mui/icons-material/Verified";
import { Typography, Box, List, ListItem, ListItemText } from "@mui/material";
import Image from "next/image";

import { InnerHeaderStyle } from "@/components/Innerheader/innerHeader.styles";
import type { innerHeaderType } from "@/components/Innerheader/innerHeader.types";
import { isObjEmpty } from "@/utils/helper";

const InnerHeader = (props: innerHeaderType) => {
  const {
    title,
    created,
    logo,
    backgroundImage,
    variant,
    description,
    isVerified,
    statistics = {},
    social = {},
    ...rest
  } = props;
  const { items, owners, floorPrice, volumeTraded } = statistics;
  const { website, discord, medium, telegram, twitter, instagram } = social;

  return (
    <>
      {variant === "normal-header" && (
        <Box
          sx={InnerHeaderStyle.innerHeader}
          className="d-flex align-items-center"
        >
          <Typography
            variant="h2"
            className="font-teko"
            {...rest}
            sx={{ color: "white", fontSize: "100px" }}
          >
            {title}
          </Typography>
        </Box>
      )}
      {variant === "user-header" && (
        <Box sx={InnerHeaderStyle.innerUserHeader}>
          <Box sx={InnerHeaderStyle.InnerHeaderBgImage}>
            <Image src={backgroundImage} width={2880} height={842} />
          </Box>
          <Box className="d-flex align-items-start">
            <Box sx={InnerHeaderStyle.leftHeaderSection}>
              <Box sx={InnerHeaderStyle.profileIconBanner}>
                <Image src={logo} width={118} height={96} />
              </Box>

              {!isObjEmpty(statistics) && (
                <List sx={InnerHeaderStyle.profileCountHolder}>
                  {items && (
                    <ListItem>
                      <ListItemText primary={items} secondary="Items" />
                    </ListItem>
                  )}
                  {owners && (
                    <ListItem>
                      <ListItemText primary={owners} secondary="Owners" />
                    </ListItem>
                  )}
                  {floorPrice && (
                    <ListItem>
                      <ListItemText
                        primary={floorPrice}
                        secondary="Floor Price"
                      />
                    </ListItem>
                  )}
                  {volumeTraded && (
                    <ListItem>
                      <ListItemText
                        primary={volumeTraded}
                        secondary="Volume Traded"
                      />
                    </ListItem>
                  )}
                </List>
              )}
            </Box>
            <Box sx={InnerHeaderStyle.rightHeaderSection}>
              <Typography
                variant="h2"
                className="font-teko d-flex align-items-center"
                {...rest}
                sx={{ color: "white", fontSize: "100px" }}
              >
                {title}
              </Typography>
              {created && (
                <Typography variant="h4">
                  Created by{" "}
                  <span>
                    {created} {isVerified && <VerifiedIcon />}
                  </span>
                </Typography>
              )}
              <Typography>{description}</Typography>

              {!isObjEmpty(social) && (
                <Box sx={InnerHeaderStyle.rightHeaderSocialLinks}>
                  {website && (
                    <a href={website} target="_blank" rel="noreferrer">
                      <LanguageIcon />
                    </a>
                  )}

                  {discord && (
                    <a href={discord} target="_blank" rel="noreferrer">
                      <Box sx={InnerHeaderStyle.socialImageIcon}>
                        <Image
                          src="/images/discord-h.svg"
                          width={21}
                          height={16}
                        />
                      </Box>
                    </a>
                  )}

                  {medium && (
                    <a href={medium} target="_blank" rel="noreferrer">
                      <Box sx={InnerHeaderStyle.socialImageIcon}>
                        <Image
                          src="/images/medium.svg"
                          width={19}
                          height={19}
                        />
                      </Box>
                    </a>
                  )}

                  {telegram && (
                    <a href={telegram} target="_blank" rel="noreferrer">
                      <TelegramIcon />
                    </a>
                  )}

                  {twitter && (
                    <a href={twitter} target="_blank" rel="noreferrer">
                      <TwitterIcon />
                    </a>
                  )}

                  {instagram && (
                    <a href={instagram} target="_blank" rel="noreferrer">
                      <InstagramIcon />
                    </a>
                  )}
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default InnerHeader;
