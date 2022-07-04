import React, { forwardRef } from "react";

const ExampleForwardRef = ({ label, id, value, onChange, name }, ref) => {
  return (
    <div ref={ref}>
      <label>{label}</label>
      <input
        type="text"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default forwardRef(ExampleForwardRef);
