import React, { useState, useEffect } from "react";
import { Text, Box, HStack, Image, VStack, Button } from "native-base";
import { API_IMAGE_URL } from "../../config/api.config";

const Card = ({ item, type }) => {
  let image = item.poster_path;

  let title = "";
  let date = "";
  if (type == "movie") {
    title = item.title;
    date = item.release_date;
  }
  if (type == "tv") {
    title = item.name;
    date = item.first_air_date;
  }
  if (type == "multi") {
    if (item.media_type == "movie") {
      title = item.original_title;
      date = item.release_date;
    } else if (item.media_type == "tv") {
      title = item.name;
      date = item.first_air_date;
    }

    if (item.media_type == "person") {
      title = item.name;
      date = "N/A";
      image = item.profile_path;
    }
  }

  return (
    <Box pb={3} mb={1} width={"80%"}>
      <HStack>
        <Box w={"1/3"} mr={3}>
          <Image
            size={"xs"}
            resizeMode="cover"
            source={{
              uri: `${API_IMAGE_URL}${image}`,
            }}
            alt="Alternate Text"
            size="xl"
          />
        </Box>
        <Box w={"2/3"}>
          <VStack>
            <Text fontWeight={"bold"} fontSize={"14px"}>
              {title}
              {/* {type == "movie" ? item.title : item.name} */}
            </Text>
            <Text>Popularity: {item.popularity}</Text>
            <Text>
              Release Date:{" "}
              {/* {type == "movie" ? item.release_date : item.first_air_date} */}
              {date}
            </Text>
            <Button w={"90%"}>More Details</Button>
          </VStack>
        </Box>
      </HStack>
    </Box>
  );
};

export default Card;
