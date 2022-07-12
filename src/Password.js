import React, { useEffect, useState } from "react";

const Password = ({ onFormSubmit }) => {
  const [input, setInput] = useState("");
  const [conditions, setConditions] = useState(false);
  const [lengthValid, setLengthValid] = useState("danger");
  const [capitalValid, setCapitalValid] = useState("danger");
  const [char, setChar] = useState("");
  // Whenever our input updates, we need to validate it
  useEffect(() => {
    validate();
  }, [input]);

  // this method validates our input in real time
  const checkForUpperCase = () => {
    if (input.length > 1) {
      if (/[a-z]/.test(input) && !/[A-Z]/.test(input)) {
        setCapitalValid("danger");
      } else setCapitalValid("success");
    }
  };
  const validate = () => {
    //check for length
    if (input.length >= 6) {
      setLengthValid("success");
    } else {
      setLengthValid("danger");
    }

    //check if there exists an upperCase
    checkForUpperCase();

    // if (input.length > 1) {
    //   setChar(input.charAt(input.length - 1));
    //   console.log(char);
    // }

    // if (char === char.toUpperCase()) {
    //   setCapitalValid("success");
    // }
  };

  const onSubmit = (e) => {
    if (conditions) {
      e.preventDefault();
      onFormSubmit(input);
    } else {
      e.preventDefault();

      console.log("Checks don't pass");
    }
  };

  return (
    <div className=" d-flex justify-content-center">
      <form
        className=" border border-1 rounded border-secondary col-7 form-control "
        onSubmit={onSubmit}
      >
        <label className=" col-form-label border-1 border-bottom">
          Please enter a password that conforms to the following conditions:
        </label>
        <ul>
          <li className={`text-${lengthValid}`}>Minimum 6 characters</li>
          <li className={`text-${capitalValid}`}>
            Contains an upperCase letter
          </li>
          <li>6 Characters</li>
          <li>6 Characters</li>
        </ul>
        <input
          value={input}
          type="password"
          className="form-control"
          placeholder="Start Typing ..."
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
      <span>{input?.length}</span>
    </div>
  );
};

export default Password;
