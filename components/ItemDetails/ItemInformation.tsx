import React from "react";

import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

import EditListingPopup from "@/components/Dialogs/EditList";
import ListSale from "@/components/Dialogs/ListSale";
import TransactionFailedDialog from "@/components/Dialogs/TransactionFailed";
import ItemCheckout from "@/components/ItemCheckout/ItemCheckout";
import Accordion from "@/components/UI/Accordion";
import Button from "@/components/UI/Button";
import { AssetType } from "@/types/asset";
import ETHLogo from "public/images/ethLogo.svg";
// import MakeOfferImg from "public/images/make-offer.svg";
import WalletImg from "public/images/wallet.svg";

// import EditListingPopup from "./editListing";
import { ItemInfoStyle } from "./item.style";
import MakeOffer from "./MakeOffer";
type Props = {
  asset: AssetType;
  showActivity?: boolean;
  showImage?: boolean;
};

const ItemInfo: React.FC<Props> = ({ asset, showActivity, showImage }) => {
  const tryAgainFunc = React.useRef(null);
  const [open, setOpen] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [editOfferOpen, setEditOfferOpen] = React.useState(false);
  const [viewOfferOpen, setViewOfferOpen] = React.useState(false);
  const [offerOpen, setOfferOpen] = React.useState(false);
  const [openListSale, setOpenListSale] = React.useState(false);
  const [openTransaction, setOpenTransaction] = React.useState(false);

  const checkoutDgOpen = () => {
    setOpen(true);
  };
  const handleClickOpen = () => {
    setOpenEdit(true);
  };
  const checkoutDgClose = (arg: boolean): void => {
    setOpen(arg);
  };

  // const editListingClose = (arg: boolean): void => {
  //   setOpenEdit(arg);
  // };

  // const makeOfferDgOpen = () => {
  //   setOfferOpen(true);
  // };

  const makeOfferDgClose = (arg: boolean): void => {
    setOfferOpen(arg);
  };

  // const editOfferDgOpen = () => {
  //   setEditOfferOpen(true);
  // };

  const editOfferDgClose = (arg: boolean): void => {
    setEditOfferOpen(arg);
  };

  // const viewOfferDgOpen = () => {
  //   setViewOfferOpen(true);
  // };

  const viewOfferDgClose = (arg: boolean): void => {
    setViewOfferOpen(arg);
  };

  const ListSaleDialogOpen = () => {
    setOpenListSale(!openListSale);
  };

  const EditSaleDialogOpen = () => {
    setOpenEdit(!openEdit);
  };

  const TransactionDialogOpen = () => {
    setOpenTransaction(!openTransaction);
  };

  const tryAgain = () => {
    TransactionDialogOpen();
    checkoutDgOpen();
    if (tryAgainFunc) {
      tryAgainFunc.current();
    }
  };
  const buyItemDialogContent = {
    land: "NetVRk " + asset.type,
    priceDollar: "1,000,000.00",
    princETH: "390",
    ItemImage: {
      logo: asset.type.toLowerCase() === "land" ? true : false,
      type: asset.type.toLowerCase(),
      title: asset.property.name.toUpperCase(),
      size: asset.land && asset.land.type ? asset.land.type.toUpperCase() : "",
      district:
        asset.land && asset.land.group
          ? asset.land.group.split("_")[0]
            ? asset.land.group.split("_")[0].toUpperCase()
            : ""
          : "",
      mainImage: asset.property.coverUrl,
    },
  };
  const byuItemDetails = {
    totalDollar: "800,100.50",
    totalETH: "11.4",
  };
  return (
    <Box sx={ItemInfoStyle.sidebarRight}>
      {showImage && (
        <Box sx={ItemInfoStyle.imageContainer}>
          <Box
            component="img"
            src="/images/Explorer/rect_image.jpg"
            sx={ItemInfoStyle.ItemImageStyle}
          ></Box>
        </Box>
      )}
      <Box sx={ItemInfoStyle.textContainer}>
        <Typography sx={ItemInfoStyle.title}>NetVRK {asset.type}</Typography>
        <Typography variant="h4" component="div" sx={ItemInfoStyle.parcelTitle}>
          {asset.property.name}
        </Typography>
        <Typography className="d-flex align-items-center">
          <Typography component="span" sx={ItemInfoStyle.OwnedByText}>
            Owned by
          </Typography>
          <Typography component="span" sx={ItemInfoStyle.OwnedByValue}>
            {asset.ownerAddress}
          </Typography>
        </Typography>
        <Typography sx={ItemInfoStyle.parcelText}>
          {asset.property.description}
        </Typography>
        <Typography variant="h5" component="div" sx={ItemInfoStyle.price}>
          <Image src={ETHLogo} height="30%" width="30%" />
          11.4
          <Typography component="span" sx={ItemInfoStyle.ethPrice}>
            ($800,100.50)
          </Typography>
        </Typography>

        {/* <Typography variant="h5" component="div" sx={ItemInfoStyle.price}>
          $800,100.50
          <Typography component="span" sx={ItemInfoStyle.ethPrice}>
            (11.4 eth)
          </Typography>
        </Typography> */}
      </Box>
      <Box sx={ItemInfoStyle.buttonContainer}>
        <Button
          onClick={checkoutDgOpen}
          title="BUY NOW"
          icon={WalletImg}
          sx={ItemInfoStyle.buyNowBtn}
        />
        <Button
          title="Edit Listing"
          icon={WalletImg}
          sx={ItemInfoStyle.buyNowBtn}
          onClick={handleClickOpen}
        >
          Edit Listing
        </Button>
        <Button
          onClick={ListSaleDialogOpen}
          variant="outlined"
          title="LIST FOR SALE"
          startIcon={<LocalOfferOutlinedIcon sx={ItemInfoStyle.rotateIcon} />}
          sx={ItemInfoStyle.makeOfferBtn}
        />
        <Button
          title="Transaction Failed Dialog"
          onClick={TransactionDialogOpen}
        ></Button>
        {/* <Button
          onClick={makeOfferDgOpen}
          variant="outlined"
          title="MAKE OFFER"
          icon={MakeOfferImg}
          sx={ItemInfoStyle.makeOfferBtn}
        />
        <Button
          onClick={editOfferDgOpen}
          variant="outlined"
          title="EDIT OFFER"
          icon={MakeOfferImg}
          sx={ItemInfoStyle.makeOfferBtn}
        />
        <Button
          onClick={viewOfferDgOpen}
          variant="outlined"
          title="VIEW OFFER"
          icon={MakeOfferImg}
          sx={ItemInfoStyle.makeOfferBtn}
        /> */}
        <Typography sx={ItemInfoStyle.saleText}>
          Sale ends April 1, 2022 at 12:16am PST
        </Typography>
      </Box>
      <Accordion
        defaultExpanded={true}
        label="properties"
        container
        sx={ItemInfoStyle.accordion}
      >
        <Box>
          <Box sx={ItemInfoStyle.item}>
            <Typography sx={ItemInfoStyle.label}>Type</Typography>
            <Typography>
              <Typography component="span" sx={ItemInfoStyle.details}>
                {asset.type}
              </Typography>
              <Typography component="span" sx={ItemInfoStyle.info}>
                (100% have this trait)
              </Typography>
            </Typography>
          </Box>
          {asset.land && (
            <>
              {" "}
              {asset.land.type && (
                <Box sx={ItemInfoStyle.item}>
                  <Typography sx={ItemInfoStyle.label}>Size</Typography>
                  <Typography>
                    <Typography component="span" sx={ItemInfoStyle.details}>
                      {asset.land.type}
                    </Typography>
                    <Typography component="span" sx={ItemInfoStyle.info}>
                      (3% have this trait)
                    </Typography>
                  </Typography>
                </Box>
              )}
              {asset.land.group && asset.land.group.split("_")[0] && (
                <Box sx={ItemInfoStyle.item}>
                  <Typography sx={ItemInfoStyle.label}>District</Typography>
                  <Typography>
                    <Typography component="span" sx={ItemInfoStyle.details}>
                      {asset.land.group.split("_")[0].toUpperCase()}
                    </Typography>
                    <Typography component="span" sx={ItemInfoStyle.info}>
                      (21% have this trait)
                    </Typography>
                  </Typography>
                </Box>
              )}
              {asset.land.x && (
                <Box sx={ItemInfoStyle.item}>
                  <Typography sx={ItemInfoStyle.label}>Coordinates</Typography>
                  <Typography sx={ItemInfoStyle.details}>
                    X = {asset.land.x} of 5,500
                  </Typography>
                  <Typography sx={ItemInfoStyle.details}>
                    Y = {asset.land.y} of 5,500
                  </Typography>
                </Box>
              )}
            </>
          )}
        </Box>
      </Accordion>

      {showActivity && (
        <Accordion
          defaultExpanded={true}
          label="activity"
          container
          sx={ItemInfoStyle.accordion}
        >
          <Box sx={ItemInfoStyle.itemContainer}>
            <Box sx={ItemInfoStyle.item}>
              <Typography sx={ItemInfoStyle.label}>event</Typography>
              <Typography>
                <Typography component="span" sx={ItemInfoStyle.details}>
                  Bid Offer
                </Typography>
              </Typography>
            </Box>
            <Box sx={ItemInfoStyle.item}>
              <Typography sx={ItemInfoStyle.label}>from</Typography>
              <Typography>
                <Typography component="span" sx={ItemInfoStyle.details}>
                  NewBidder
                </Typography>
              </Typography>
            </Box>
            <Box sx={ItemInfoStyle.item}>
              <Typography sx={ItemInfoStyle.label}>Price</Typography>
              <Typography>
                <Typography component="span" sx={ItemInfoStyle.details}>
                  3150
                </Typography>
                <Typography component="span" sx={ItemInfoStyle.info}>
                  $64200.02
                </Typography>
              </Typography>
            </Box>
            <Box sx={ItemInfoStyle.item}>
              <Typography sx={ItemInfoStyle.label}>Date</Typography>
              <Typography>
                <Typography component="span" sx={ItemInfoStyle.details}>
                  1 day ago
                </Typography>
              </Typography>
            </Box>
          </Box>
          <Box sx={ItemInfoStyle.itemContainer}>
            <Box sx={ItemInfoStyle.item}>
              <Typography sx={ItemInfoStyle.label}>event</Typography>
              <Typography>
                <Typography component="span" sx={ItemInfoStyle.details}>
                  Listed for Sale
                </Typography>
              </Typography>
            </Box>
            <Box sx={ItemInfoStyle.item}>
              <Typography sx={ItemInfoStyle.label}>from</Typography>
              <Typography>
                <Typography component="span" sx={ItemInfoStyle.details}>
                  CryptoPerson99
                </Typography>
              </Typography>
            </Box>
            <Box sx={ItemInfoStyle.item}>
              <Typography sx={ItemInfoStyle.label}>Price</Typography>
              <Typography>
                <Typography component="span" sx={ItemInfoStyle.details}>
                  3100
                </Typography>
                <Typography component="span" sx={ItemInfoStyle.info}>
                  60200.02
                </Typography>
              </Typography>
            </Box>
            <Box sx={ItemInfoStyle.item}>
              <Typography sx={ItemInfoStyle.label}>Date</Typography>
              <Typography>
                <Typography component="span" sx={ItemInfoStyle.details}>
                  3 days ago
                </Typography>
              </Typography>
            </Box>
          </Box>
          <Box>
            <Box sx={ItemInfoStyle.item}>
              <Typography sx={ItemInfoStyle.label}>event</Typography>
              <Typography>
                <Typography component="span" sx={ItemInfoStyle.details}>
                  Sale
                </Typography>
              </Typography>
            </Box>
            <Box sx={ItemInfoStyle.item}>
              <Typography sx={ItemInfoStyle.label}>from</Typography>
              <Typography>
                <Typography component="span" sx={ItemInfoStyle.details}>
                  KeyboardMonkeyVault
                </Typography>
              </Typography>
            </Box>
            <Box sx={ItemInfoStyle.item}>
              <Typography sx={ItemInfoStyle.label}>To</Typography>
              <Typography>
                <Typography component="span" sx={ItemInfoStyle.details}>
                  CryptoPerson99
                </Typography>
              </Typography>
            </Box>
            <Box sx={ItemInfoStyle.item}>
              <Typography sx={ItemInfoStyle.label}>Price</Typography>
              <Typography>
                <Typography component="span" sx={ItemInfoStyle.details}>
                  2900
                </Typography>
                <Typography component="span" sx={ItemInfoStyle.info}>
                  $50200.02
                </Typography>
              </Typography>
            </Box>
            <Box sx={ItemInfoStyle.item}>
              <Typography sx={ItemInfoStyle.label}>Date</Typography>
              <Typography>
                <Typography component="span" sx={ItemInfoStyle.details}>
                  5 days ago
                </Typography>
              </Typography>
            </Box>
          </Box>
        </Accordion>
      )}
      <EditListingPopup
        open={openEdit}
        handleOpen={EditSaleDialogOpen}
        SaleItem={buyItemDialogContent}
      />
      <ItemCheckout
        open={open}
        checkoutDgClose={checkoutDgClose}
        SaleItemProps={buyItemDialogContent}
        byuItemDetails={byuItemDetails}
        tryAgainFunc={tryAgainFunc}
      />
      <ListSale
        SaleItem={buyItemDialogContent}
        open={openListSale}
        handleOpen={ListSaleDialogOpen}
      />
      <TransactionFailedDialog
        open={openTransaction}
        handleOpen={TransactionDialogOpen}
        tryAgain={tryAgain}
      />

      <MakeOffer
        open={offerOpen}
        makeOfferDgClose={makeOfferDgClose}
        action="make"
      />
      <MakeOffer
        open={editOfferOpen}
        makeOfferDgClose={editOfferDgClose}
        action="edit"
      />
      <MakeOffer
        open={viewOfferOpen}
        makeOfferDgClose={viewOfferDgClose}
        action="view"
      />
    </Box>
  );
};

export default ItemInfo;
