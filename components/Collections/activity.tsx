import { FC } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Link,
} from "@mui/material";
import Image from "next/image";

import { ActivityStyle } from "@/components/Collections/activity.styles";
import {
  tableHeaderStyle,
  tableRowStyle,
  tableRow,
  tableBody,
  tableRowData,
} from "@/components/ItemDetails/item.style";

const tableData = [
  {
    event: "Bid Offer",
    itemimage: "/images/parcel64.png",
    item: "Parcel #1420",
    USD: "$12099.33",
    from: "BidMan3000",
    to: "BidMan3000",
    time: "Mar 7, 22 (12:00)",
  },
  {
    event: "Listed for Sale",
    itemimage: "/images/parcel64.png",
    item: "Parcel #8867",
    USD: "$3099.33",
    from: "CryptoPpl99",
    to: "CryptoPpl99",
    time: "Mar 5, 22 (12:00)",
  },
  {
    event: "Sale",
    itemimage: "/images/parcel64.png",
    item: "Parcel #11837",
    USD: "$2429.13",
    from: "Hamilton",
    to: "Hamilton",
    time: "Mar 3, 22 (12:00)",
  },
  {
    event: "Transfer",
    itemimage: "/images/parcel64.png",
    item: "Parcel #12976",
    USD: "$1759.33",
    from: "Lloyd12345",
    to: "Lloyd12345",
    time: "Mar 2, 22 (12:00)",
  },
];
const tableHeader = ["EVENT", "ITEM", "USD PRICE", "FROM", "TO", "TIME"];

const ActivityPanel: FC = () => {
  return (
    <Box>
      <TableContainer component={Paper} sx={ActivityStyle.activityTable}>
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
                  <Box className="d-flex align-items-center image-rounded">
                    <Image src={row.itemimage} width={44} height={44} />
                    {row.item}
                  </Box>
                </TableCell>
                <TableCell sx={tableRowStyle} align="left">
                  {row.USD}
                </TableCell>
                <TableCell sx={tableRowStyle} align="left">
                  <Link href="#">{row.from}</Link>
                </TableCell>
                <TableCell sx={tableRowStyle} align="left">
                  <Link href="#">{row.to}</Link>
                </TableCell>
                <TableCell sx={tableRowStyle} align="left">
                  {row.time}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ActivityPanel;
