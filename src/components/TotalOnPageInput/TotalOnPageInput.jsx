import React, { useState, useCallback } from "react";
import { Form } from "semantic-ui-react";

export default function TotalOnPageInput({ setTotalOnPage }) {
  const [value, setValue] = useState(10);
  const onChange = useCallback(
    (_, { value }) => {
      setTotalOnPage(+value);
      setValue(value);
    },
    [setTotalOnPage]
  );
  return (
    <div className="filter-wrapper">
      <Form.Input
        label={`Show on page: ${value}`}
        min={10}
        max={20}        
        onChange={onChange}
        step={5}
        value={value}
        type="range"
      />      
    </div>
  );
}
