import React from "react";
import text from "./assets/text.json";
import siteMap from "../../siteMap/config.json";
import iamge from "../../image/main.png";

export const Main = () => (
  <div className="main">
    <div className="main__title title">{siteMap.mainPage.name}</div>
    <div className="main__img">
      <img alt="Main page" src={iamge} />
    </div>
    <div className="main__body">{text.textBody}</div>
  </div>
);
