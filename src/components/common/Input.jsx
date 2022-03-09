import React, { useEffect, useState } from "react";

const Input = ({ name, label, onChange, value, ...rest }) => {
  const [isTouched, setIsTouched] = useState(false);
  const [error, setError] = useState(true);

  const handleError = () => {
    if (value?.length > 0) {
      setError(false);
    } else setError(true);
  };

  const handleBlur = (e) => {
    e.currentTarget.name === name && setIsTouched(true);
  };

  useEffect(() => {
    handleError();
    return setIsTouched(false);
  }, [value]);

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        onBlur={handleBlur}
        id={name}
        name={name}
        value={value}
        placeholder={`Type new ${name} here`}
        onChange={onChange}
        {...rest}
        className="form-control"
      />
      {isTouched && error && (
        <div className="alert alert-danger">{`${name} will not be empty`}</div>
      )}
    </div>
  );
};

export default Input;
