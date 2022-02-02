import React from "react";

import { Select, CheckIcon } from "native-base";

const DropDown = (props) => {
  return (
    <Select
      // selectedValue={service}
      minWidth="200"
      placeholder="Select"
      _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="5" />,
      }}
      mt={1}
      onValueChange={(filterSelected) => props.setFilter(filterSelected)}
    >
      {props.options.map((item) => (
        <Select.Item label={item.label} value={item.value} />
      ))}
    </Select>
  );
};

export default DropDown;
