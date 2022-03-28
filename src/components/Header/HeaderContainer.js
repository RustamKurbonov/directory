import React from "react";
import Header from "./Header";

const HeaderContainer = (props) => {
  return <Header loginUser={props.loginUser} outLogin={props.outLogin} />;
};

export default HeaderContainer;
