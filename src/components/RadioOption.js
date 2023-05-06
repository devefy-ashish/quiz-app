import React, { useState } from "react";
import "./RadioOption.css";

export default function RadioOption({ props }) {
  const [answer, setAnswer] = useState();

  const handleChange = (e) => {
    if (e.target.checked) {
      setAnswer((answer) => e.target.value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handlerRadioClick(answer);
  };

  function handlerRadioClick(answer) {
    if (answer === props.quesAnswer) {
      console.log("Correct Answer !!!");
      document.getElementById("answer-box").innerText = "Corrent Answer !!!";
      document.getElementById("answer-box").style.color = "green";
    } else {
      console.log("Wrong Answer !!!");
      document.getElementById("answer-box").innerText = "Wrong Answer !!!";
      document.getElementById("answer-box").style.color = "red";
    }

    setTimeout(() => {
      document.getElementById("answer-box").innerText = "";
    }, 1000);
  }

  return (
    <div key={props.id} className="question-box">
      <h3>{props.question}</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <input
              className="radio-option"
              type="radio"
              value={props.op1}
              name={props.radioname}
              onChange={handleChange}
            />
            <span>{props.op1}</span>
          </label>
          <label>
            <input
              className="radio-option"
              type="radio"
              value={props.op2}
              name={props.radioname}
              onChange={handleChange}
            />
            <span>{props.op2}</span>
          </label>
          <label>
            <input
              className="radio-option"
              type="radio"
              value={props.op3}
              name={props.radioname}
              onChange={handleChange}
            />
            <span>{props.op3}</span>
          </label>

          <label>
            <input
              className="radio-option"
              type="radio"
              value={props.op4}
              name={props.radioname}
              onChange={handleChange}
            />
            <span>{props.op4}</span>
          </label>
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
