import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";
import AuthContextProvider from "./context/AuthContextProvider";
// import * as ReactDOM from 'react-dom/client'
// import App from './App'

// const rootElement = document.getElementById('root')
// ReactDOM.createRoot(rootElement).render(
//   <>
//     {/* 👇 Here's the script */}
//     <ColorModeScript initialColorMode={theme.config.initialColorMode} />
//     <App />
//   </>,
// )

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <AuthContextProvider>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <App />
        </AuthContextProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
);
