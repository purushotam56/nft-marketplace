import React, { FC, Fragment, useCallback, useEffect, useState } from "react";

import { Global } from "@emotion/react";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import { Grid, SwipeableDrawer, TextField } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/system";
import Image from "next/image";

import Accordion from "@/components/UI/Accordion";
import Checkbox from "@/components/UI/Checkbox";
import Select from "@/components/UI/Select";
import useReducer from "@/hooks/useReducer";
import { getSidebarDetails } from "@/services/sidebar";
import { Filter, FilterData, FiltersCB, FilterType } from "@/types/filters";

import { SideNavigationStyle } from "./sideNavigation.styles";

type RecursiveAccordionProps = {
  container: FilterType;
  handleAccordion: (
    container: FilterType,
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked: (container: FilterType) => boolean;
  isDefaultExpanded: (container: FilterType) => boolean;
  renderPricing?: () => JSX.Element;
};

const RecursiveAccordion = ({
  container,
  handleAccordion,
  isChecked,
  isDefaultExpanded,
  renderPricing,
}: RecursiveAccordionProps) => {
  const isRoot = container.level === 1;

  const getIcon = (): JSX.Element | boolean | null => {
    if (container.id === "blockchain.ethereum") {
      return (
        <Image
          src="/images/etharium.png"
          height={21}
          width={21}
          className="MuiSvgIcon-root"
        />
      );
    }

    return container.isLeaf ? false : null;
  };

  const getData = () => {
    if (container.isLeaf) return null;

    if (container.flag === "price") return renderPricing();

    return (container.filters ?? []).map((item) => (
      <RecursiveAccordion
        key={item.id}
        container={item}
        handleAccordion={handleAccordion}
        isChecked={isChecked}
        isDefaultExpanded={isDefaultExpanded}
      />
    ));
  };

  const checkbox = (
    <Box>
      <Checkbox
        label={container.label}
        value={container.id}
        onChange={handleAccordion(container)}
        checked={isChecked(container)}
      />
      <Box component="span" sx={SideNavigationStyle.checkboxLabel}>
        {container.count === undefined ? null : `(${container.count})`}
      </Box>
    </Box>
  );

  return (
    <Accordion
      key={isRoot ? container.label : container.id}
      label={isRoot ? container.label : checkbox}
      container={isRoot}
      item={container.level === 2}
      icon={getIcon()}
      defaultExpanded={isRoot ? true : isDefaultExpanded(container)}
      {...(container.level === 3
        ? {
            detailsSx: {
              display: "flex",
              flexDirection: "column",
              marginLeft: "3rem",
            },
          }
        : {})}
    >
      {getData()}
    </Accordion>
  );
};

type Props = {
  filters: Filter[];
  setFilters: (cb: FiltersCB) => void;
};

const SideNavigation: FC<Props> = ({ filters, setFilters }) => {
  const [select, setSelect] = useState<string>("eth");
  const [sidebarData, setSidebarData] = useState<FilterType[]>([]);

  const recursionData = useCallback(
    (data: FilterType): FilterType => ({
      ...data,
      filters: (data.filters ?? []).map((cur) =>
        recursionData({ ...cur, parentId: data.id }),
      ),
    }),
    [],
  );

  const convertData = useCallback(
    (data: FilterData): FilterType[] =>
      Object.values(data)
        .slice(1)
        .map((cur) => recursionData({ ...cur, id: cur.id ?? cur.label })),
    [recursionData],
  );

  useEffect(() => {
    (async () => {
      const data = await getSidebarDetails();
      setSidebarData(convertData(data));
    })();
  }, [convertData]);

  const handleAccordion = (container: FilterType) => (e) => {
    const { checked } = e.target;
    const cloneContainer = { ...container };
    const { id } = cloneContainer;
    delete cloneContainer.filters;

    setFilters((prev) => {
      if (checked) return [...prev, cloneContainer];
      return prev.filter((cur) => cur.id !== id);
    });
  };

  const isChecked = (container: FilterType): boolean => {
    const { id } = container;
    return !!filters.find((cur) => cur.id === id);
  };

  const isDefaultExpanded = (container: FilterType): boolean => {
    const { id } = container;
    return !!filters.find((cur) => cur.parentId === id);
  };

  const renderPricing = () => {
    return (
      <Box sx={{ padding: "15px 25px" }}>
        <Select
          sx={SideNavigationStyle.priceSelect}
          value={select}
          onChange={(event) => setSelect(event.target.value as string)}
          options={[
            {
              label: (
                <Box display="flex" alignItems="center">
                  <Image
                    src="/images/etharium.png"
                    height={21}
                    width={21}
                    className="MuiSvgIcon-root"
                  />
                  <span className="font-play select-value">ETH</span>
                </Box>
              ),
              value: "eth",
            },
            {
              label: (
                <Box display="flex" alignItems="center">
                  <AttachMoneyOutlinedIcon />
                  <span className="font-play select-value">USD</span>
                </Box>
              ),
              value: "usd",
            },
            {
              label: (
                <Box display="flex" alignItems="center">
                  <CurrencyRupeeOutlinedIcon />
                  <span className="font-play select-value">INR</span>
                </Box>
              ),
              value: "inr",
            },
          ]}
        />
        <Box sx={{ marginTop: "10px" }}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={6}>
              <TextField
                sx={SideNavigationStyle.priceTextField}
                variant="outlined"
                placeholder="Min"
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <TextField
                sx={SideNavigationStyle.priceTextField}
                variant="outlined"
                placeholder="Max"
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
  };

  return (
    <SideNavigationWrapper>
      <Box sx={SideNavigationStyle.sideNavContent}>
        <Box
          sx={SideNavigationStyle.MobileTitle}
          className="align-items-center"
        >
          <Box sx={{ marginRight: "10px", display: "inline-block" }}>
            <Image src="/images/filter.svg" height={21} width={20} />
          </Box>
          Filters
          <Box sx={SideNavigationStyle.ExpandOpenIcon}>
            <ExpandLessOutlinedIcon />
          </Box>
        </Box>
        {sidebarData.map((container) => (
          <RecursiveAccordion
            key={container.label}
            container={container}
            handleAccordion={handleAccordion}
            isChecked={isChecked}
            isDefaultExpanded={isDefaultExpanded}
            renderPricing={renderPricing}
          />
        ))}
      </Box>
    </SideNavigationWrapper>
  );
};

const SideNavigationWrapper: FC = ({ children }) => {
  const [{ open }, setState] = useReducer<{ open: boolean }>({ open: true });
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box sx={SideNavigationStyle.sideNav}>
      <Box
        sx={SideNavigationStyle.MobileTitle}
        className="align-items-center"
        onClick={() => setState({ open: true })}
      >
        <Box sx={{ marginRight: "10px", display: "inline-block" }}>
          <Image src="/images/filter.svg" height={21} width={20} />
        </Box>
        Filters
        <Box sx={SideNavigationStyle.ExpandIcon}>
          <ExpandLessOutlinedIcon />
        </Box>
      </Box>
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: "calc(64% - 65px)",
            overflowY: "auto",
            overflowX: "hidden",
          },
        }}
      />
      {isMobile ? (
        <SwipeableDrawer
          anchor="bottom"
          open={open}
          onClose={() => setState({ open: false })}
          onOpen={() => setState({ open: true })}
        >
          {children}
        </SwipeableDrawer>
      ) : (
        <Fragment>{children}</Fragment>
      )}
    </Box>
  );
};

export default SideNavigation;
