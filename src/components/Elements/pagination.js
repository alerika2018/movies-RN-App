import React, { useState } from "react";
import { HStack, Button } from "native-base";

const Pagination = ({ setPage }) => {
  [colorButton1, setColorButton1] = useState(true);
  [colorButton2, setColorButton2] = useState(false);
  const onClick = (pageNumber) => {
    if (pageNumber == 1) {
      setColorButton1(true);
      setColorButton2(false);
    } else {
      setColorButton1(false);
      setColorButton2(true);
    }

    setPage(pageNumber);
  };

  return (
    <HStack>
      <Button mx={3} isDisabled={colorButton1} onPress={() => onClick(1)}>
        1
      </Button>
      <Button mx={3} isDisabled={colorButton2} onPress={() => onClick(2)}>
        2
      </Button>
    </HStack>
  );
};

export default Pagination;
