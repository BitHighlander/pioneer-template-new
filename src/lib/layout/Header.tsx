import { Box, Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";

import ThemeToggle from "./ThemeToggle";
import { NativeAdapter } from "@shapeshiftoss/hdwallet-native";
// import * as metaMask from "@shapeshiftoss/hdwallet-metamask";
import * as core from "@shapeshiftoss/hdwallet-core";
// import { entropyToMnemonic } from "bip39";

const Header = () => {
  const onStart = async function () {
    try {
      const keyring = new core.Keyring();
      // MM
      //const metaMaskAdapter = metaMask.MetaMaskAdapter.useKeyring(keyring);
      //const walletMetaMask = await metaMaskAdapter.pairDevice();
      // const hashStored = localStorage.getItem("hash");
      // if(!hashStored){
      //   if (walletMetaMask) {
      //     await walletMetaMask.initialize();
      //     //sign
      //     const { hardenedPath, relPath } = walletMetaMask.ethGetAccountPaths({
      //       coin: "Ethereum",
      //       accountIdx: 0,
      //     })[0];
      //     const message = "Pioneers:0xD9B4BEF9:gen1";
      //     const sig = await walletMetaMask.ethSignMessage({
      //       addressNList: hardenedPath.concat(relPath),
      //       message,
      //     });
      //     if(sig && sig.signature)localStorage.setItem("hash", sig.signature);
      //   }
      // }
      // const hashSplice = (str: string | any[] | null) => {
      //   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //   // @ts-ignore
      //   return str.slice(0, 34);
      // };
      // const hash = hashSplice(hashStored);
      // // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // // @ts-ignore
      // const hashBytes = hash.replace("0x", "");
      //const mnemonic = entropyToMnemonic(hashBytes.toString(`hex`));
      const mnemonic =
        "candy maple cake sugar pudding cream honey rich smooth crumble sweet treat";
      // eslint-disable-next-line no-console
      console.log("mnemonic: ", mnemonic);

      const nativeAdapter = NativeAdapter.useKeyring(keyring);
      const walletSoftware = await nativeAdapter.pairDevice("testid");
      await nativeAdapter.initialize();
      // @ts-ignore
      await walletSoftware.loadDevice({ mnemonic });

      // eslint-disable-next-line no-console
      console.log("walletSoftware: ", walletSoftware);
      // eslint-disable-next-line no-console
      console.log("isInitialized: ", await walletSoftware?.isInitialized());
      // eslint-disable-next-line no-console
      console.log("getLabel: ", await walletSoftware?.getLabel());

      //get eth address
      const addressInfo = {
        addressNList: [2147483692, 2147483708, 2147483648, 0, 0],
        coin: "Ethereum",
        scriptType: "ethereum",
        showDisplay: false,
      };
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const ethAddress = await walletSoftware.ethGetAddress(addressInfo);
      // eslint-disable-next-line no-console
      console.log("ethAddress: ", ethAddress);

      // eslint-disable-next-line react-hooks/rules-of-hooks
      // const nativeAdapter = NativeAdapter.useKeyring(keyring);
      // const walletSoftware = await nativeAdapter.pairDevice("testid");
      //
      // await nativeAdapter.initialize();
      //
      // // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // // @ts-ignore
      // await walletSoftware.loadDevice({ mnemonic });
      // // eslint-disable-next-line no-console
      //
      // // eslint-disable-next-line no-console
      // console.log("walletSoftware: ",walletSoftware)
      // // eslint-disable-next-line no-console
      // console.log("isInitialized: ",await walletSoftware?.isInitialized())
      // // eslint-disable-next-line no-console
      // console.log("getLabel: ",await walletSoftware?.getLabel())
      //
      // //get eth address
      // const addressInfo = {
      //   addressNList: [2147483692, 2147483708, 2147483648, 0, 0],
      //   coin: 'Ethereum',
      //   scriptType: 'ethereum',
      //   showDisplay: false
      // }
      // // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // // @ts-ignore
      // const ethAddress = await walletSoftware.ethGetAddress(addressInfo);
      // // eslint-disable-next-line no-console
      // console.log("ethAddress: ",ethAddress)
      //
      // // eslint-disable-next-line no-console
      // console.log("isInitialized: ",await walletSoftware?.isInitialized())
    } catch (e) {
      console.error(e);
    }
  };
  // onstart get data
  useEffect(() => {
    onStart();
  }, []);

  return (
    <Flex
      as="header"
      width="full"
      align="center"
      alignSelf="flex-start"
      justifyContent="center"
      gridGap={2}
    >
      <Box marginLeft="auto">
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;
