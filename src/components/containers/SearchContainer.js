import React, { useEffect, useState } from "react";
import Card from "../cards/Card";
import Loading from "../layout/Loading";
import { Container, VStack, ScrollView, Center } from "native-base";

import { getSearch } from "../../services/api";

import { Dimensions } from "react-native";

const SearchContainer = (props) => {
  let width = Dimensions.get("window").width;

  const [data, setData] = useState();
  useEffect(() => {
    getSearch(props.filter, props.query).then((data) => {
      setData(data);
    });
  }, [props.doSearch]);

  return (
    <Container pb={20} mb={10}>
      <ScrollView w={width}>
        <VStack space={2} width="100%" py={3}>
          <Center>
            {data ? (
              data.map((result, index) => (
                <Card
                  navigation={props.navigation}
                  key={index}
                  item={result}
                  type={props.filter}
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

export default SearchContainer;
