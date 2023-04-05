import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";

import { Buffer } from "buffer";

// make Buffer globally available
(global as any).Buffer = Buffer;

import Layout from "lib/layout";
import Routings from "lib/router/Routings";
import { theme } from "lib/styles/theme";

const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <Layout>
        <Routings />
      </Layout>
    </Router>
  </ChakraProvider>
);

export default App;
