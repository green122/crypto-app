import React, { useState, useCallback } from "react";
import { Dropdown } from "semantic-ui-react";

const options = [
  { key: "10lim", text: "10", value: 10 },
  { key: "20lim", text: "20", value: 20 },
  { key: "all", text: "all", value: 0 }
];

export default function MaximumDropdown({ setMaximum }) {
  const [value, setValue] = useState(options[0].value);
  const onChange = useCallback(
    (_, { value }) => {
      setMaximum(value);
      setValue(value);
    },
    [value]
  );
  return (
    <Dropdown
      placeholder="Select Limit"
      selection
      onChange={onChange}
      options={options}
    />
  );
}
