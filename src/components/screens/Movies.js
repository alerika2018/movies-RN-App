import React, { useState, useEffect } from "react";
import { View, Text, Center, VStack, Box } from "native-base";
import DropDown from "../Elements/DropDown";
import MoviesContainer from "../containers/MoviesContainer";

// import { getMovies } from "../../services/api";

const Movies = ({ navigation }) => {
  const [filter, setFilter] = useState("");
  let options = [
    { label: "Now Playing", value: "now_playing" },
    { label: "Popular", value: "popular" },
    { label: "Top Rated", value: "top_rated" },
    { label: "Upcoming", value: "upcoming" },
  ];

  // useEffect(() => {
  //   getMovies(filter).then((data) => {
  //     console.log("data", data[0]);
  //   });
  // }, [filter]);

  return (
    <>
      {/* <Text> Hello Screen</Text> */}

      <VStack space={2} width="100%" py={5}>
        <Center>
          <Box w="3/4" maxW="300">
            <DropDown setFilter={setFilter} options={options} />
          </Box>
        </Center>
        <MoviesContainer filter={filter} />
      </VStack>
    </>
  );
};

export default Movies;
