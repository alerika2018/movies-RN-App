import React from "react";
import { Text, Box, HStack, Image, VStack, Button } from "native-base";
import { API_IMAGE_URL } from "../../config/api.config";

const Card = ({ item }) => {
  // console.log(item);
  return (
    <Box pb={3} mb={1} width={"80%"}>
      <HStack>
        <Box w={"1/3"} mr={3}>
          <Image
            size={"xs"}
            resizeMode="cover"
            source={{
              uri: `${API_IMAGE_URL}${item.poster_path}`,
            }}
            alt="Alternate Text"
            size="xl"
          />
        </Box>
        <Box w={"2/3"}>
          <VStack>
            <Text fontWeight={"bold"} fontSize={"14px"}>
              {item.title}
            </Text>
            <Text>Popularity: {item.popularity}</Text>
            <Text>Release Date: {item.release_date}</Text>
            <Button w={"90%"}>More Details</Button>
          </VStack>
        </Box>
      </HStack>
    </Box>
  );
};

export default Card;
