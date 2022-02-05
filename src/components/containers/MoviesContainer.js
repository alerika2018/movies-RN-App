import React, { useEffect, useState } from "react";
import Card from "../cards/Card";
import Loading from "../layout/Loading";
import { Container, VStack, ScrollView, Center } from "native-base";

import { getMovies } from "../../services/api";

import { Dimensions } from "react-native";

const MoviesContainer = (props) => {
  let width = Dimensions.get("window").width;

  const [data, setData] = useState("");

  useEffect(() => {
    getMovies(props.filter).then((data) => {
      setData(data);
    });
  }, [props.filter]);

  return (
    <Container pb={20} mb={10}>
      <ScrollView w={width}>
        <VStack space={2} width="100%" py={3}>
          <Center>
            {data ? (
              data.map((movie, index) => (
                <Card
                  navigation={props.navigation}
                  key={index}
                  item={movie}
                  type={"movie"}
                />
              ))
            ) : (
              <Loading />
            )}
          </Center>
        </VStack>
      </ScrollView>
    </Container>
  );
};

export default MoviesContainer;
