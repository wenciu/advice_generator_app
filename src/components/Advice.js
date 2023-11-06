import { useState, useEffect } from "react";
import DividerD from "../images/pattern-divider-desktop.svg";
import DividerM from "../images/pattern-divider-mobile.svg";
import Dice from "../images/icon-dice.svg";

function Advice() {
  const [advice, setAdvice] = useState([]);

  const fetchData = async () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAdvice(data.slip);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg">
      <div className="container">
        <p>ADVICE # {advice.id}</p>
        <div className="advice">
          <h2>{advice.advice}</h2>
        </div>
        <div className="circle">
          <img className="dice" src={Dice} alt="Dice" onClick={fetchData} />
        </div>
      </div>
    </div>
  );
}

export default Advice;
