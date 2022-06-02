import React, { useCallback, useState, useEffect } from "react";

import { Box, Divider, Typography } from "@mui/material";
import { AbstractConnector } from "@web3-react/abstract-connector";
import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

import Button from "@/components/UI/Button";
import Checkbox from "@/components/UI/Checkbox";
import { SUPPORTED_WALLETS } from "@/constants/wallet";
import { SxStyles } from "@/types/types";
import { shortenAddress } from "@/utils/addressHelpers";

const styles: SxStyles = {
  wrapper: {
    padding: "14px 28px",
    color: "primary.contrastText",
    backgroundColor: "primary.main",
  },
  title: {
    fontFamily: "Teko",
    fontSize: 26,
    letterSpacing: 2,
    lineHeight: "37px",
  },
  label: {
    fontFamily: "Play",
    fontSize: 16,
    lineHeight: "18px",
  },
  walletWrapper: {
    padding: "16px 28px",
  },
  button: {
    height: 48,
    width: "100%",
    marginBottom: "13px",
    backgroundColor: "primary.main",
  },
  termsText: {
    fontSize: "16px",
    fontFamily: "Teko",
    lineHeight: "18px",
    width: "100%",
    color: "#A29DB0",
  },
};

enum ConnectStatus {
  NOT_CONNECTED = 0,
  CONNECTING = 1,
  CONNECTED = 2,
}

const WalletInfo = () => {
  const { account, connector, activate } = useWeb3React();
  const [status, setStatus] = useState(ConnectStatus.NOT_CONNECTED);

  const [agreeTerms, setAgreeTerms] = useState<boolean>(false);

  useEffect(() => {
    if (account) setStatus(ConnectStatus.CONNECTED);
    else setStatus(ConnectStatus.NOT_CONNECTED);
  }, [account]);

  const tryActivation = async (connector: AbstractConnector | undefined) => {
    // if the connector is walletconnect and the user has already tried to connect, manually reset the connector
    if (connector instanceof WalletConnectConnector) {
      connector.walletConnectProvider = undefined;
    }

    connector &&
      activate(connector, undefined, true)
        .then(() => {
          setStatus(ConnectStatus.CONNECTED);
        })
        .catch((error) => {
          if (error instanceof UnsupportedChainIdError) {
            activate(connector); // a little janky...can't use setError because the connector isn't set
            setStatus(ConnectStatus.NOT_CONNECTED);
          } else {
            setStatus(ConnectStatus.NOT_CONNECTED);
          }
        });
  };

  const handleConnect = useCallback(
    (option) => {
      if (!agreeTerms) {
        return;
      }

      setStatus(ConnectStatus.CONNECTING);
      if (option.connector === connector) {
        setStatus(ConnectStatus.CONNECTED);
      }
      if (option.connector !== connector && !option.href) {
        tryActivation(option.connector);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [connector, agreeTerms],
  );

  return (
    <>
      <Box sx={styles.wrapper}>
        {status === ConnectStatus.CONNECTED ? (
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography sx={styles.title}>MY WALLET</Typography>
            <Typography sx={styles.label}>{shortenAddress(account)}</Typography>
          </Box>
        ) : (
          "CONNECT WALLET"
        )}
      </Box>
      <Divider />
      {status === ConnectStatus.NOT_CONNECTED && (
        <Box sx={styles.walletWrapper}>
          <Box mb={2}>
            <Checkbox
              label="By checking this box, I agree to Netvrk's Terms of Service"
              checked={agreeTerms}
              value={agreeTerms}
              onChange={(event) => {
                setAgreeTerms(event.target.checked);
              }}
            />
          </Box>
          <Button
            title="Metamask"
            variant="outlined"
            sx={styles.button}
            onClick={() => handleConnect(SUPPORTED_WALLETS.METAMASK)}
          />
          <Button
            title="Wallet Connect"
            variant="outlined"
            sx={styles.button}
            onClick={() => handleConnect(SUPPORTED_WALLETS.WALLETCONNECT)}
          />
        </Box>
      )}
      {status === ConnectStatus.CONNECTED && (
        <Box sx={styles.walletWrapper}>
          <Typography sx={styles.title}>Total Balance</Typography>
        </Box>
      )}
    </>
  );
};

export default WalletInfo;
