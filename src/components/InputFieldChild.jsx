import React from "react";

const InputFieldChild = ({
  label,
  inputType,
  fieldvalue,
  onChange,
  required,
  inputTitle,
  disabled,
  labelTitle,
}) => {
  const getInputType = () => {
    switch (inputType) {
      case "text":
        return (
          <input
            type="text"
            fieldvalue={fieldvalue}
            onChange={onChange}
            required
            disabled
          />
        );
      case "number":
        return (
          <input
            type="number"
            fieldvalue={fieldvalue}
            onChange={onChange}
            required
          />
        );
        case "email":
        return (
          <input
            type="email"
            fieldvalue={fieldvalue}
            onChange={onChange}
            required
          />
        );
      case "radio":
        return (
          <input
            type="radio"
            fieldvalue={fieldvalue}
            onChange={onChange}
            required
          />
        );
      case "checkbox":
        return (
          <input
            type="checkbox"
            fieldvalue={fieldvalue}
            onChange={onChange}
            required
          />
        );
      case "currency":
        return (
          <input
            type="currency"
            fieldvalue={fieldvalue}
            onChange={onChange}
            required
          />
        );
      case "password":
        return (
          <input
            type="password"
            fieldvalue={fieldvalue}
            onChange={onChange}
            required
          />
        );
      case "select":
        return (
          <input
            type="select"
            fieldvalue={fieldvalue}
            onChange={onChange}
            required
          />
        );
      default:
        return (
          <input
            type="text"
            fieldvalue={fieldvalue}
            onChange={onChange}
            required
          />
        );
    }
  };
  return (
    <>
      <div>
        <label> {label}</label>
        {getInputType()}
      </div>
    </>
  );
};

export default InputFieldChild;
