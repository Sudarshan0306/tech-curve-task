import React, { useState } from "react";
import InputFieldChild from "./InputFieldChild";

const InputFieldParent = () => {
  const [textEntered, setTextEntered] = useState("");
  const [numberEntered, setNumberEntered] = useState(0);
  const [radioValue, setRadioValue] = useState('');
  const [emailValue, setEmailValue] = useState('');

  const handleChange = (e) => {
    setTextEntered(e.target.value);
  };
  const handleNumChange = (e) => {
    setNumberEntered(parseInt(e.target.value));
  };
  const handleRadioChange = (e) => {
    setRadioValue(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("form submitted");
  };
  //   console.log(textEntered);
  //   console.log(numberEntered);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputFieldChild
          label="Text Type"
          inputType="text"
          fieldvalue={textEntered}
          onChange={handleChange}
          required
        />
        <InputFieldChild
          label="Number Type"
          inputType="number"
          fieldvalue={numberEntered}
          onChange={handleNumChange}
          required
        />
        <InputFieldChild
          label="Radio Type"
          inputType="radio"
          fieldvalue={radioValue}
          onChange={handleRadioChange}
          required
        />
        <InputFieldChild
          label="Email Type"
          inputType="email"
          fieldvalue={emailValue}
          onChange={handleEmailChange}
          required
        />

        <button> Submit</button>
      </form>
    </div>
  );
};

export default InputFieldParent;
