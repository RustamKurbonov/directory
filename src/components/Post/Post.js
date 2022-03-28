import React from "react";

export const Post = ({ title, text }) => (
  <div className="post__item">
    <div className="post__title">{title}</div>
    <div className="post__text">{text}</div>
  </div>
);
