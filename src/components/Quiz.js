import React, { useState } from "react";
import "./Quiz.css";
import RadioOption from "./RadioOption";

export default function Quiz() {
  const [counter, setCounter] = useState(0);

  const questionList = [
    {
      id: 1,
      question: "Q1. What is Capital of India ?",
      op1: "Delhi",
      op2: "Mumnai",
      op3: "Himachal",
      op4: "Haryana",
      radioname: "myradio",
      quesAnswer: "Delhi",
    },
    {
      id: 2,
      question: "Q2. What is Capital of Himachal Pradesh ?",
      op1: "Kullu",
      op2: "Shimla",
      op3: "Hamirpur",
      op4: "Mandi",
      radioname: "myradio",
      quesAnswer: "Shimla",
    },
    {
      id: 3,
      question: "Q3. What is Natioanl Bird of India ?",
      op1: "Pecock",
      op2: "Parrot",
      op3: "Koyal",
      op4: "Kuku",
      radioname: "myradio",
      quesAnswer: "Pecock",
    },
  ];

  function handleNavbutton(e) {
    if (e.target.value === "Previous") {
      console.log("Prev = ", e.target.value);
      console.log("Counter = ", counter);

      if (counter === 0) {
        return;
      } else {
        setCounter((counter) => counter - 1);
      }
    } else {
      console.log("Next = ", e.target.value);
      console.log("Counter = ", counter);
      if (counter < questionList.length - 1) {
        setCounter((counter) => counter + 1);
      } else {
        return;
      }
    }
  }

  return (
    <div className="quiz">
      {<RadioOption props={questionList[counter]} />}

      <div className="prev-next-box">
        <button
          onClick={handleNavbutton}
          value="Previous"
          className="btn btn-success"
        >
          Previous
        </button>
        <button
          onClick={handleNavbutton}
          value="Next"
          className="btn btn-success "
        >
          Next
        </button>
      </div>
    </div>
  );
}
