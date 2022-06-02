import React from "react";

import AlarmIcon from "@mui/icons-material/Alarm";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import HelpIcon from "@mui/icons-material/Help";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { Box } from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

import FeeUI from "@/components/Dialogs/UI/FeeUI";
import SaleItemDetails from "@/components/Dialogs/UI/SaleItemDetails";
import SelectInput from "@/components/Dialogs/UI/SelectInput";
import TabPanel from "@/components/Dialogs/UI/TabPabel";

import {
  DailogContentStyle,
  PillsTabStyle,
  InputGroupStyle,
} from "./ListSale.style";

const EditListingPopup: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const saleItemDialogContent = {
    land: "NetVRk Land",
    priceDollar: "$1,000,000.00",
    princETH: "390 ETH",
    ItemImage: {
      logo: true,
      type: "land",
      title: "Parcel #25",
      size: "MEGA",
      district: "BUSINESS",
      mainImage: "/images/land.png",
    },
  };
  const selectInputProps = {
    selected: "usd",
    label: "PRICE",
    selectInput: [
      {
        label: "USD",
        value: "usd",
        icon: <AttachMoneyIcon />,
      },
      {
        label: "INR",
        value: "inr",
        icon: <CurrencyRupeeIcon />,
      },
    ],
    inputTextValue: "$1,000,000.00",
  };
  const selectInputProps1 = {
    selected: "Months",
    label: "DURATION",
    selectInput: [
      {
        label: "6 Months",
        value: "Months",
        icon: <CalendarTodayIcon />,
      },
      {
        label: "1 Year",
        value: "Year",
        icon: <CalendarTodayIcon />,
      },
    ],
    inputTextValue: "01:43 PM (PST)",
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
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
    <Box>
      <SaleItemDetails {...saleItemDialogContent} />
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
        <SelectInput {...selectInputProps} />
        <SelectInput {...selectInputProps1} />
        <Box sx={InputGroupStyle.hairLine}></Box>
        <FeeUI label="FEES" value="2.5%" />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SelectInput {...selectInputProps} />
        <SelectInput {...selectInputProps1} />
        <Box sx={InputGroupStyle.hairLine}></Box>
        <FeeUI label="FEES" value="2.5%" />
      </TabPanel>
    </Box>
  );
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default EditListingPopup;
