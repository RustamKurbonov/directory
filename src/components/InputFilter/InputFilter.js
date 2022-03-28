import React from "react";

const InputFilter = (props) => {
  return (
    <form className="post__form">
      <input
        className="post__input"
        type="text"
        placeholder="Найти..."
        onChange={(e) => props.onChengeInput(e)}
      />
    </form>
  );
};

export default InputFilter;
