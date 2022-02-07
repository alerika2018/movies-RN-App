import React, { useEffect, useState } from "react";
import Card from "../cards/Card";
import Loading from "../layout/Loading";
import { Container, VStack, ScrollView, Center, Text } from "native-base";
import Pagination from "../Elements/pagination";
import { getSearch } from "../../services/api";

import { Dimensions } from "react-native";

const SearchContainer = (props) => {
  let width = Dimensions.get("window").width;

  const [pageData, setPageData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalData, setTotalData] = useState(0);

  useEffect(() => {
    getSearch(props.filter, props.query).then((data) => {
      setTotalData(data);
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
  }, [props.doSearch, page]);

  return (
    <Container mb={10}>
      <ScrollView w={width}>
        <VStack space={2} width="100%" pb={430} py={3}>
          <Center>
            {pageData ? (
              pageData.map((result, index) => (
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
            {totalData.length == 0 && <Text>No results found</Text>}
            {totalData.length > 10 && <Pagination setPage={setPage} />}
          </Center>
        </VStack>
      </ScrollView>
    </Container>
  );
};

export default SearchContainer;
