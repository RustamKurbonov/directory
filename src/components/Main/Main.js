import React from "react";
//import Style from './Music.module.css'

const Main = (props) => {
  return (
    <div className="main">
      <div className="main__title title">Главная страница</div>
      <div className="main__img">
        <img alt="test" src={props.img} />
      </div>
      <div className="main__body">{props.data}</div>
    </div>
  );
};

export default Main;
