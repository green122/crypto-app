import React, { useState, useCallback } from "react";
import { Dropdown } from "semantic-ui-react";

const options = [
  { key: "10lim", text: "10", value: 10 },
  { key: "50lim", text: "50", value: 50 },
  { key: "all", text: "All", value: 0 }
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
      fluid
      onChange={onChange}
      options={options}
    />
  );
}
