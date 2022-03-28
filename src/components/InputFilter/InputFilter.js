import React from "react";

export const InputFilter = ({ onInputChenge }) => (
  <form className="post__form">
    <input
      className="post__input"
      type="text"
      placeholder="Найти..."
      onChange={(e) => onInputChenge(e)}
    />
  </form>
);
