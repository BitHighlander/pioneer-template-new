import { ChakraProvider } from "@chakra-ui/react";
import { Web3OnboardProvider } from "@web3-onboard/react";
import { BrowserRouter as Router } from "react-router-dom";

import { PioneerProvider } from "lib/context/Pioneer";
import Layout from "lib/layout";
import Routings from "lib/router/Routings";
import { theme } from "lib/styles/theme";

import web3Onboard from "./web3-onboard";
import "./styles.css";

const App = () => (
  <Web3OnboardProvider web3Onboard={web3Onboard}>
    <PioneerProvider>
      <ChakraProvider theme={theme}>
        <Router>
          <Layout>
            <Routings />
          </Layout>
        </Router>
      </ChakraProvider>
    </PioneerProvider>
  </Web3OnboardProvider>
);

export default App;
