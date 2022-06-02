import React from "react";

import AlarmIcon from "@mui/icons-material/Alarm";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import HelpIcon from "@mui/icons-material/Help";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { Typography, Box, TextField } from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import PropTypes from "prop-types";

import {
  DailogContentStyle,
  MainImageBox,
  CircleMapImage,
  ImageInfoTextStyle,
  PillsTabStyle,
  InputGroupStyle,
  selectStyleMenu,
  ItemInfoStyle,
} from "@/components/ItemDetails/item.style";
import Button from "@/components/UI/Button";
import Dialog from "@/components/UI/Dialog";
import Select from "@/components/UI/Select";

import Image from "./Image";

export interface EditListingType {
  open?: boolean;
  editListingClose(arg: boolean): void;
}

const EditListingPopup = (props: EditListingType) => {
  const { open, editListingClose } = props;
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClose = (): void => {
    editListingClose(false);
  };
  const tab = [
    {
      name: "Fixed Pricing",
      icon: <MonetizationOnOutlinedIcon />,
    },
    {
      name: "Timed Auction",
      icon: <AlarmIcon />,
    },
  ];

  return (
    <Dialog
      dialogTitle="Edit Listing"
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      sx={ItemInfoStyle.editListingModal}
      maxWidth={"md"}
      variant="primary"
      dialogActions={
        <Box
          className="d-flex justify-content-between w-100"
          sx={ItemInfoStyle.modalFooterButton}
        >
          <Button
            title="Cancel Listing"
            variant="danger-filled"
            icon="/images/trash.svg"
            iconSize="30"
          />
          <Button
            title="Save Changes"
            variant="filled"
            icon="/images/save.svg"
            iconSize="30"
          />
        </Box>
      }
    >
      <Box>
        <PopupTopSection topRightText="subtotal" />
        <Box>
          <Box
            sx={DailogContentStyle.formLabel}
            className="font-play d-flex align-items-center"
          >
            Type <HelpIcon />
          </Box>
          <Tabs
            sx={PillsTabStyle.pillsTab}
            className="font-teko"
            value={value}
            onChange={handleChange}
          >
            {tab.map((t, index) => {
              return (
                <Tab
                  key={index}
                  {...a11yProps(index)}
                  label={t.name}
                  icon={t.icon}
                />
              );
            })}
            <Box tabIndex={-1}></Box>
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <EditFormControl />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <EditFormControl />
        </TabPanel>
      </Box>
    </Dialog>
  );
};

type Props = {
  topRightText?: string;
};

export const PopupTopSection: React.FC<Props> = ({ topRightText }) => {
  const ItemImage = {
    logo: true,
    type: "land",
    title: "Parcel #25",
    size: "MEGA",
    district: "BUSINESS",
    mainImage: "/images/land.png",
  };
  return (
    <>
      <Box>
        <Box
          sx={DailogContentStyle.dailogTopBar}
          className="d-flex justify-content-between font-play"
        >
          <Box>
            <Typography>Item</Typography>
          </Box>
          <Box>
            <Typography>{topRightText}</Typography>
          </Box>
        </Box>
        <Box
          className="d-flex justify-content-between align-items-center"
          sx={DailogContentStyle.media}
        >
          <Box className="d-flex justify-content-between align-items-center">
            <Box sx={DailogContentStyle.NFTthumbnail}>
              <Image
                ItemImage={ItemImage}
                MainImageBoxStyle={MainImageBox}
                cicleMapStyle={CircleMapImage}
                parcelDetailsStyle={ImageInfoTextStyle}
                netvrkLogoStyle={{ width: "80%", height: "15%" }}
              />
            </Box>
            <Box sx={DailogContentStyle.mediaBody}>
              <Typography
                sx={DailogContentStyle.mediaSubTitle}
                className="font-play"
              >
                NetVRk Land
              </Typography>
              <Typography
                variant="h3"
                sx={DailogContentStyle.mediaTitle}
                className="font-teko"
              >
                Parcel #25
              </Typography>
            </Box>
          </Box>
          <Box className="font-teko">
            <Typography variant="h4" sx={DailogContentStyle.priceStyle}>
              $1,000,000.00
            </Typography>
            <Typography sx={DailogContentStyle.priceSubStyle}>
              (390 ETH)
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export const EditFormControl: React.FC = () => {
  const [select, setSelect] = React.useState<string>("usd");
  const [selectPrice, setSelectPrice] = React.useState<string>("Months");

  return (
    <>
      <Box sx={InputGroupStyle.formControl}>
        <Box
          sx={DailogContentStyle.formLabel}
          className="font-play d-flex align-items-center"
        >
          Price <HelpIcon />
        </Box>
        <Box sx={InputGroupStyle.inputGroup}>
          <Select
            className="selectInput"
            value={select}
            onChange={(event) => setSelect(event.target.value as string)}
            MenuProps={{ sx: selectStyleMenu.selectStyle }}
            options={[
              {
                label: (
                  <Box display="flex" alignItems="center">
                    <AttachMoneyIcon />
                    <span>USD</span>
                  </Box>
                ),
                value: "usd",
              },
              {
                label: (
                  <Box display="flex" alignItems="center">
                    <CurrencyRupeeIcon />
                    <span>INR</span>
                  </Box>
                ),
                value: "inr",
              },
            ]}
          />
          <TextField
            className="textInput"
            variant="standard"
            value="$1,000,000.00"
          />
        </Box>
      </Box>
      <Box sx={InputGroupStyle.formControl}>
        <Box
          sx={DailogContentStyle.formLabel}
          className="font-play d-flex align-items-center"
        >
          Duration <HelpIcon />
        </Box>
        <Box sx={InputGroupStyle.inputGroup}>
          <Select
            className="selectInput"
            value={selectPrice}
            onChange={(event) => setSelectPrice(event.target.value as string)}
            MenuProps={{ sx: selectStyleMenu.selectStyle }}
            options={[
              {
                label: (
                  <Box display="flex" alignItems="center">
                    <CalendarTodayIcon />
                    <span>6 Months</span>
                  </Box>
                ),
                value: "Months",
              },
              {
                label: (
                  <Box display="flex" alignItems="center">
                    <CalendarTodayIcon />
                    <span>1 Year</span>
                  </Box>
                ),
                value: "Year",
              },
            ]}
          />
          <TextField
            className="textInput"
            variant="standard"
            value="01:43 PM (PST)"
          />
        </Box>
      </Box>
      <Box sx={InputGroupStyle.hairLine}></Box>
      <Box className="d-flex justify-content-between">
        <Box
          sx={DailogContentStyle.formLabel}
          className="font-play d-flex align-items-center"
        >
          Fees <HelpIcon />
        </Box>
        <Box
          sx={DailogContentStyle.formValue}
          className="font-play d-flex align-items-center"
        >
          2.5%
        </Box>
      </Box>
    </>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <>{children}</>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default EditListingPopup;
