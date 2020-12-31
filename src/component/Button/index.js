import React from "react";
import style from "./style.module.scss";

const Butn = ({ text, onClick, color }) => {
  return (
    <button className={style.btn} onClick={onClick}>
      {" "}
      {text}
    </button>
  );
};

export default Butn;
