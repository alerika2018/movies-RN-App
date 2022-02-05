import React, { useState, useEffect } from "react";
import { ScrollView, Image, Text, Center, VStack, Box } from "native-base";

import { getDetails } from "../../services/api";

import { API_DETAILSIMAGE_URL } from "../../config/api.config";

const Details = ({ route }) => {
  const [data, setData] = useState();
  useEffect(() => {
    getDetails(route.params.id, route.params.type).then((data) => {
      setData(data);
    });
  }, []);

  let title = "";
  let img_path = "";
  let about = "";
  let date = "";
  let labelDate = "";

  if (data) {
    switch (route.params.type) {
      case "person":
        title = data.name;
        img_path = data.profile_path;
        about = data.biography;
        date = data.birthday;
        labelDate = "DOB:";
        break;
      case "tv":
        title = data.name;
        img_path = data.poster_path;
        about = data.overview;
        date = data.release_date;
        labelDate = "Release Date:";
        break;
      case "movie":
        title = data.title;
        img_path = data.poster_path;
        about = data.overview;
        date = data.release_date;
        labelDate = "Release Date:";
        break;
    }
  }

  return (
    <>
      {data && (
        <ScrollView>
          <VStack space={2} width="100%" py={5}>
            <Center>
              <Box w="3/4" maxW="300" pb={10}>
                <Center>
                  <Text fontWeight={"bold"} fontSize={"18px"} pb={5}>
                    {title}
                  </Text>
                  <Image
                    source={{
                      uri: `${API_DETAILSIMAGE_URL}${img_path}`,
                    }}
                    alt={title}
                    size="200px"
                  />
                </Center>
                <Text pt={5}>{about}</Text>
                <Text fontSize={"12px"} pt={5}>
                  Popularity: {data.popularity} | {labelDate} {date}
                </Text>
              </Box>
            </Center>
          </VStack>
        </ScrollView>
      )}
    </>
  );
};

export default Details;
