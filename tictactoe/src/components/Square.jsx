import "../index.css";
// import { useState } from "react";
// import PropTypes from "prop-types";

const Square = ({ value, onHandleClick }) => {
  return (
    <button className="square" onClick={onHandleClick}>
      {value}
    </button>
  );
};
// Square.propTypes = {
//   value: PropTypes.string.isRequired, // Validasi untuk prop "value"
//   onHandleClick: PropTypes.func.isRequired, // Validasi untuk prop "onHandleClick"
// };

export default Square;
