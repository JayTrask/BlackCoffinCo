import React from "react";
import "./styles.css";

import MainGlobal from "./Main/MainGlobal.js";
import ShopPage from "./Shop/ShopPage.js";

export default function App() {
  return (
    <div className="App">
      <MainGlobal />
      <div className="Spacer" />
      <ShopPage />
    </div>
  );
}
