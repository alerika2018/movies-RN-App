import React, { useState } from "react";
import { Center, VStack, Box } from "native-base";
import DropDown from "../Elements/DropDown";
import MoviesContainer from "../containers/MoviesContainer";

const Movies = ({ navigation }) => {
  const [filter, setFilter] = useState("popular");
  let options = [
    { label: "Now Playing", value: "now_playing" },
    { label: "Popular", value: "popular" },
    { label: "Top Rated", value: "top_rated" },
    { label: "Upcoming", value: "upcoming" },
  ];

  return (
    <>
      <VStack space={2} width="100%" py={5}>
        <Center>
          <Box w="3/4" maxW="300">
            <DropDown setFilter={setFilter} filter={filter} options={options} />
          </Box>
        </Center>
        <MoviesContainer navigation={navigation} filter={filter} />
      </VStack>
    </>
  );
};

export default Movies;
