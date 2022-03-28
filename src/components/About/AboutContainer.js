import React from "react";
import About from "./About";

const AboutContainer = (props) => {
  let state = props.store.getState();

  return (
    <About
      img={state.aboutPage.img.img}
      textTop={state.aboutPage.textTop}
      textBottom={state.aboutPage.textBottom}
    />
  );
};

export default AboutContainer;
