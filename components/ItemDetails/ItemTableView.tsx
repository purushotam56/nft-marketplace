import React from "react";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
// import useMediaQuery from "@mui/material/useMediaQuery";
import PropTypes from "prop-types";

import {
  tableHeaderStyle,
  tableRowStyle,
  TabStyle,
  TabsStyle,
  TabsStyleSelect,
  tableIcon,
  tableRow,
  tableBody,
  tableRowData,
} from "@/components/ItemDetails/item.style";

// import Select from "../UI/Select";

const tableData = [
  {
    event: "Bid Offer",
    from: "BidMan3000",
    fDiff: "41% below",
    USD: "$12099.33",
    expiration: "Mar 7, 22 (12:00 AM",
  },
  {
    event: "Listed for Sale",
    from: "CryptoPpl99",
    fDiff: "41% below",
    USD: "$3099.33",
    expiration: "Mar 5, 22 (12:00 AM)",
  },
  {
    event: "Sale",
    from: "Hamilton",
    fDiff: "41% below",
    USD: "$2429.13",
    expiration: "Mar 3, 22 (12:00 AM)",
  },
  {
    event: "Transfer",
    from: "Lloyd12345",
    fDiff: "41% below",
    USD: "$1759.33",
    expiration: "Mar 2, 22 (12:00 AM)",
  },
];
const tableHeader = [
  "EVENT",
  "FROM",
  "FLOOR DIFFERENCE",
  "USD PRICE",
  "EXPIRATION",
];

const TableView: React.FC = () => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow sx={tableRow}>
              {tableHeader.map((t, index) => {
                return (
                  <TableCell sx={tableHeaderStyle} key={index}>
                    {t}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody sx={tableBody}>
            {tableData.map((row) => (
              <TableRow key={row.event} sx={tableRowData}>
                <TableCell sx={tableRowStyle} component="th" scope="row">
                  {row.event}
                </TableCell>
                <TableCell sx={tableRowStyle} align="left">
                  {row.from}
                </TableCell>
                <TableCell sx={tableRowStyle} align="left">
                  {row.fDiff}
                </TableCell>
                <TableCell sx={tableRowStyle} align="left">
                  {row.USD}
                </TableCell>
                <TableCell sx={tableRowStyle} align="left">
                  {row.expiration}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
const ItemTableView: React.FC = () => {
  // const isMobile = useMediaQuery("(max-width:600px)");
  const tab = [
    // {
    //   name: "OFFERS",
    // },
    {
      name: "LISTING",
    },
    // {
    //   name: "HISTORY",
    // },
  ];
  // const [select, setSelect] = React.useState<number>(0);
  const selectOptions = [];
  const selectInput = [
    {
      label: "OFFERS",
      value: 0,
    },
    {
      label: "LISTING",
      value: 1,
    },
    {
      label: "HISTORY",
      value: 2,
    },
  ];
  selectInput.forEach((data, index) => {
    selectOptions.push({
      label: (
        <Tab
          sx={TabsStyleSelect}
          key={index}
          {...a11yProps(index)}
          label={data.label}
        />
      ),
      value: data.value,
    });
  });
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue.props ? newValue.props.value : newValue);
    // setSelect(newValue.props ? newValue.props.value : newValue);
  };

  // const onChangeSelect = (event) => {
  //   setSelect(event.target.value as number);
  //   setValue(event.target.value);
  // };
  return (
    <Box>
      <Box>
        <Tabs value={value} onChange={handleChange} sx={TabStyle}>
          {tab.map((t, index) => {
            return (
              <Tab
                sx={TabsStyle}
                key={index}
                {...a11yProps(index)}
                label={t.name}
              />
            );
          })}
          {/* {isMobile && (
            <Select
              className="selectInput"
              value={select}
              onChange={onChangeSelect}
              sx={{
                "&.MuiOutlinedInput-root.MuiInputBase-root": {
                  border: "0px",
                },
              }}
              options={selectOptions}
            />
          )} */}
          <Box sx={tableIcon} tabIndex={-1}>
            <MoreHorizIcon />
          </Box>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <TableView />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TableView />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TableView />
      </TabPanel>
    </Box>
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

export default ItemTableView;
