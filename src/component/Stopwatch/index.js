import React, { useState, useRef } from "react";
import Butn from "../Button";
import style from "./styleSw.module.scss";

const Stopwatch = () => {
  const [textBtn, setTextBtn] = useState("Start");
  const [active, setActive] = useState(false);
  const [dblClick, setDblClick] = useState(false);
  const [time, setTime] = useState(0);
  const increment = useRef(null);

  const handleStartTimer = () => {
    if (!active) {
      setActive(true);
      setTextBtn("Stop");
      increment.current = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    } else {
      setTextBtn("Start");
      setActive(false);
      clearInterval(increment.current);
      setTimeout(() => {
        setTime(0);
      }, 1000);
    }
  };

  const handleWaitTimer = (e) => {
    setDblClick(true);
    setTimeout(() => {
      setDblClick(false);
    }, 300);
    if (dblClick) {
      setTextBtn("Start");
      setActive(false);
      clearInterval(increment.current);
    }
  };

  const handleResetTimer = () => {
    setTime(0);
    if (!active) {
      setTextBtn("Stop");
      setActive(true);
      increment.current = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    }
  };
  const countTimer = () => {
    const seconds = `0${time % 60}`.slice(-2);
    const minutes = `0${Math.floor(time / 60) % 60}`.slice(-2);
    const hours = `0${Math.floor(time / 3600)}`.slice(-2);
    return `${hours} : ${minutes} : ${seconds}`;
  };

  return (
    <div className={style.container}>
      <p className={style.container__timer}> {countTimer()} </p>
      <div className={style.container_box}>
        <Butn text={textBtn} onClick={() => handleStartTimer()} color="red" />
        <Butn text="Wait" onClick={(e) => handleWaitTimer(e)} />
        <Butn text="Reset" onClick={() => handleResetTimer()} />
      </div>
    </div>
  );
};

export default Stopwatch;
