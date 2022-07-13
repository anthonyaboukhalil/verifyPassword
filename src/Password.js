import React, { useEffect, useState } from "react";

const Password = ({ onFormSubmit }) => {
  const [input, setInput] = useState("");
  const [conditions, setConditions] = useState(false);
  const [lengthValid, setLengthValid] = useState("danger");
  const [capitalValid, setCapitalValid] = useState("danger");
  const [numberValid, setNumberValid] = useState("danger");

  // Whenever our input or numberValid updates, we need to validate it
  useEffect(() => {
    validate();
    checkConditions();
  }, [input, numberValid]);

  // this method validates our input in real time
  const validate = () => {
    //check for length
    checkForLength();
    //check if any of the characters are upperCase
    checkForUpperCase();
    // check if input contains a number
    checkForNumber();

    // checkConditions();
  };
  // This method makes sure all conditions are met and then calls the method in App.js
  const onSubmit = (e) => {
    console.log(conditions);
    if (conditions) {
      e.preventDefault();
      onFormSubmit(input);
    } else {
      e.preventDefault();

      console.log("Checks don't pass");
    }
  };
  const checkForLength = () => {
    if (input.length >= 6) {
      setLengthValid("success");
    } else {
      setLengthValid("danger");
    }
  };
  const checkForNumber = () => {
    if (/\d/.test(input)) {
      setNumberValid("success");
    } else setNumberValid("danger");
  };
  const checkForUpperCase = () => {
    if (input.length >= 1 && isNaN(+input)) {
      if (input.length >= 1 && /[a-z]/.test(input) && !/[A-Z]/.test(input)) {
        setCapitalValid("danger");
      } else setCapitalValid("success");
    } else {
      setCapitalValid("danger");
    }
  };
  const checkConditions = () => {
    lengthValid === "success" &&
    capitalValid === "success" &&
    numberValid === "success"
      ? setConditions(true)
      : setConditions(false);
  };
  return (
    <div className=" d-flex justify-content-center">
      <form
        className=" border border-1 rounded border-secondary col-7 form-control "
        onSubmit={onSubmit}
      >
        <label className=" col-form-label border-1 border-bottom">
          Please create a password that conforms to the following conditions:
        </label>
        <ul>
          <li className={`text-${lengthValid}`}>Minimum 6 characters</li>
          <li className={`text-${capitalValid}`}>
            Contains an upperCase letter
          </li>
          <li className={`text-${numberValid}`}>Contains a number</li>
        </ul>
        <input
          value={input}
          type="password"
          className="form-control"
          placeholder="Start Typing ..."
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Password;
