import { useState } from "react";

function Calculator() {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);


  return (
    <div>
      <input
       value={input1}
        type="text"
        onChange={(e) => {
          setInput1(e.target.value);
        }}
      ></input>
      <input
      value={input2}
        type="text"
        onChange={(e) => {
          setInput2(e.target.value);
        }}
      ></input>
      {}
      <button
        onClick={() => {
          console.log(parseInt(input1) + parseInt(input2));

        }}
      >
        +
      </button>
      <button
        onClick={() => {
          console.log(parseInt(input1) - parseInt(input2));
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          console.log(parseInt(input1) * parseInt(input2));
        }}
      >
        *
      </button>
      <button
        onClick={() => {
          console.log(parseInt(input1) / parseInt(input2));
        }}
      >
        /
      </button>
    </div>
  );
}

export default Calculator;
