import React from "react";

import { Select, CheckIcon } from "native-base";

const DropDown = (props) => {
  return (
    <Select
      selectedValue={props.filter}
      minWidth="200"
      _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="5" />,
      }}
      mt={1}
      onValueChange={(filterSelected) => props.setFilter(filterSelected)}
    >
      {props.options.map((item) => (
        <Select.Item key={item.label} label={item.label} value={item.value} />
      ))}
    </Select>
  );
};

export default DropDown;
