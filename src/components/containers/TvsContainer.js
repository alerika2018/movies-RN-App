import React, { useEffect, useState } from "react";
import Card from "../cards/Card";
import Loading from "../layout/Loading";
import { Container, VStack, ScrollView, Center } from "native-base";

import { getTVShow } from "../../services/api";

import { Dimensions } from "react-native";

const TvsContainer = (props) => {
  let width = Dimensions.get("window").width;
  console.log("width: ", width);
  const [data, setData] = useState();
  useEffect(() => {
    getTVShow(props.filter).then((data) => {
      setData(data);
      //   console.log("data", data);
    });
  }, [props.filter]);

  return (
    <Container>
      <ScrollView w={width}>
        <VStack space={2} width="100%" py={3}>
          <Center>
            {data ? (
              data.map((TV) => <Card item={TV} type={"TV"} />)
            ) : (
              <Loading />
            )}
          </Center>
        </VStack>
      </ScrollView>
    </Container>
  );
};

export default TvsContainer;
