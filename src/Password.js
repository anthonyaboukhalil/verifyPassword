import React, { useEffect, useState } from "react";
import Checkmark from "./svgs/Checkmark";
import Close from "./svgs/Close";
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
    <div className=" d-flex justify-content-center ">
      <form
        className=" border border-1 rounded border-secondary col-7 form-control "
        onSubmit={onSubmit}
      >
        <label className=" col-form-label border-1 border-bottom">
          Please create a password that conforms to the following conditions:
        </label>
        <ul className="d-flex flex-column">
          <div className="d-inline-flex flex-row align-items-center   ">
            <li className={`text-${lengthValid} list-group-item p-1 `}>
              Minimum 6 characters
            </li>

            <Checkmark status={lengthValid} />
            <Close status={lengthValid} />
          </div>
          <div className="d-inline-flex flex-row align-items-center  ">
            <li className={`text-${capitalValid} list-group-item p-1`}>
              Contains an upperCase letter
            </li>
            <Checkmark status={capitalValid} />
            <Close status={capitalValid} />
          </div>
          <div className="d-inline-flex flex-row align-items-center ">
            <li className={`text-${numberValid} list-group-item p-1`}>
              Contains a number
            </li>
            <Checkmark status={numberValid} />
            <Close status={numberValid} />
          </div>
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
