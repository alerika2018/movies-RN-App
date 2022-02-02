import React from "react";
import { Box, StatusBar, HStack, Text } from "native-base";

const Header = () => {
  return (
    <>
      <StatusBar backgroundColor="#2c3e58" barSyle="light-content" />
      <Box safeAreaTop backgroundColor="#2c5e5e">
        <HStack
          bg="#2c3e58"
          px={1}
          py={3}
          alignItems="center"
          justifyContent="center"
        >
          <Text color="#fff" fontSize={20} fontWeight="bold">
            Movies App
          </Text>
        </HStack>
      </Box>
    </>
  );
};

export default Header;
