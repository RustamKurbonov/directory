import React from "react";
import siteMap from "../../siteMap/config.json";
import text from "./assets/text.json";
import image from "../../image/about.png";

export const About = (props) => {
  return (
    <div className="about">
      <div className="about__title title">{siteMap.about.name}</div>
      <div className="about__body">{text.mainText}</div>
      <div className="about__img">
        <img alt="About" src={image} />
      </div>
      <div className="about__body">{text.footerText}</div>
    </div>
  );
};
