import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home.jsx";

import GlobalStyles from "./styles/global.jsx";
import Header from "./components/Header/index.jsx";
import Footer from "./components/Footer/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <Header />
    <Home />
    <Footer />
  </React.StrictMode>
);
