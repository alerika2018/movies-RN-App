import React, { useState } from "react";
import { Center, VStack, Box } from "native-base";
import DropDown from "../Elements/DropDown";
import TvsContainer from "../containers/TvsContainer";

const TVShows = ({ navigation }) => {
  const [filter, setFilter] = useState("");
  let options = [
    { label: "Airing Today", value: "airing_today" },
    { label: "On The Air", value: "on_the_air" },
    { label: "Popular", value: "popular" },
  ];
  return (
    <>
      <VStack space={2} width="100%" py={5}>
        <Center>
          <Box w="3/4" maxW="300">
            <DropDown setFilter={setFilter} options={options} />
          </Box>
        </Center>
        <TvsContainer filter={filter} />
      </VStack>
    </>
  );
};

export default TVShows;
