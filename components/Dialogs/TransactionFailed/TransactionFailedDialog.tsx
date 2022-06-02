import React from "react";

import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import RefreshIcon from "@mui/icons-material/Refresh";
import {
  Box,
  Container,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import Button from "@/components/UI/Button";
import Checkbox from "@/components/UI/Checkbox";
import Dialog from "@/components/UI/Dialog";

import {
  mainContainer,
  termsText,
  refreshIcon,
  tryAgainBtn,
  dialogContainer,
  tableHeader,
  tableCell,
  dialogContentContainer,
  diloagMainText,
  tryAgainText,
} from "./TransactionFailed.style";
const TransactionFailed = (props) => {
  const { handleOpen, open, tryAgain } = props;
  return (
    <Dialog
      onClose={handleOpen}
      open={open}
      dialogTitle={"TRANSACTION FAILED"}
      variant="primary"
      dialogActions={
        <Container sx={mainContainer}>
          <Checkbox label={""} disabled checked />
          <Typography sx={termsText}>
            By checking this box, I agree to Netvrk&apos;s Terms of Service
          </Typography>
          <Button
            startIcon={<RefreshIcon sx={refreshIcon} />}
            title="TRY AGAIN"
            sx={tryAgainBtn}
            onClick={tryAgain}
          />
        </Container>
      }
      sx={dialogContainer}
    >
      <Box>
        <TableContainer component={"div"}>
          <Table size="small">
            <TableHead sx={tableHeader}>
              <TableRow>
                <TableCell sx={tableCell}>ITEM</TableCell>
                <TableCell sx={tableCell} align="right">
                  SUBTOTAL
                </TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
        <Container sx={dialogContentContainer}>
          <Typography sx={diloagMainText}>
            {" "}
            <ErrorOutlineIcon sx={{ mr: 1 }} />
            Oops Something went wrong
          </Typography>
          <Typography sx={tryAgainText}>Please try again</Typography>
        </Container>
      </Box>
    </Dialog>
  );
};
export default TransactionFailed;
