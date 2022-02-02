import React, { useState } from "react";
import DropDown from "../Elements/DropDown";
import {
  Text,
  Container,
  VStack,
  HStack,
  Box,
  Input,
  Icon,
  Button,
} from "native-base";
import { Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SearchContainer from "../containers/SearchContainer";

const Search = ({ navigation }) => {
  let width = Dimensions.get("window").width;
  const [filter, setFilter] = useState("");
  const [query, setQuery] = useState({});
  const [doSearch, setDoSearch] = useState(false);
  let options = [
    { label: "TV Show or Movie", value: "multi" },
    { label: "Movie", value: "movie" },
    { label: "TV Show", value: "tv" },
  ];

  const onSubmit = () => {
    if (doSearch) {
      setDoSearch(false);
    } else {
      setDoSearch(true);
    }
  };
  return (
    <Container>
      <VStack py={5} px={5} w={width}>
        <Box>
          <Text fontWeight={"bold"} fontSize={"18px"} pb={2}>
            Search Movie/TV Show Name
          </Text>
          <Input
            fontSize={"18thepx"}
            placeholder="i.e. James Bond, CSI"
            variant="filled"
            bg="gray.200"
            px={3}
            width="100%"
            InputLeftElement={
              <Icon
                size={5}
                ml={2}
                color="gray.400"
                as={<Ionicons name="ios-search" />}
              />
            }
            onChangeText={(value) => {
              setQuery(value);
            }}
          />
          <Text fontWeight={"bold"} fontSize={"18px"} py={2}>
            Choose Search Type
          </Text>
          <HStack>
            <Box w="2/3" maxW="300" paddingRight={4}>
              <DropDown setFilter={setFilter} options={options} />
            </Box>
            <Box w={"1/3"}>
              <Button
                onPress={onSubmit}
                // onPress={onSubmit}
                startIcon={<Icon as={<Ionicons name="ios-search" />} />}
              >
                Search
              </Button>
            </Box>
          </HStack>
        </Box>
      </VStack>
      <SearchContainer filter={filter} query={query} doSearch={doSearch} />
    </Container>
  );
};

export default Search;
