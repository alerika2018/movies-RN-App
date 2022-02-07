import React, { useEffect, useState } from "react";
import Card from "../cards/Card";
import Loading from "../layout/Loading";
import { Container, VStack, ScrollView, Center } from "native-base";
import Pagination from "../Elements/pagination";

import { getTVShow } from "../../services/api";

import { Dimensions } from "react-native";

const TvsContainer = (props) => {
  let width = Dimensions.get("window").width;

  const [pageData, setPageData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getTVShow(props.filter).then((data) => {
      let i, j;
      if (page == 1) {
        i = 0;
        j = 9;
      } else {
        i = 10;
        j = 19;
      }
      setPageData([]);
      if (data) {
        data.map((item, index) => {
          if (index >= i && index <= j) {
            setPageData((prevData) => [...prevData, item]);
          }
        });
      }
    });
  }, [props.filter, page]);

  return (
    <Container pb={20} mb={10}>
      <ScrollView w={width}>
        <VStack space={2} width="100%" py={3}>
          <Center>
            {pageData ? (
              pageData.map((tv, index) => (
                <Card
                  navigation={props.navigation}
                  key={index}
                  item={tv}
                  type={"tv"}
                />
              ))
            ) : (
              <Loading />
            )}
            {pageData && <Pagination setPage={setPage} />}
          </Center>
        </VStack>
      </ScrollView>
    </Container>
  );
};

export default TvsContainer;
