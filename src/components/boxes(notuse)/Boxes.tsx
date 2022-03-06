import { Box, Flex, HStack } from "@chakra-ui/react";

export const Boxes = () => {
  return (
    <>
      <Flex>
        <Box backgroundColor="green" h={50} w={100}></Box>

        <Box backgroundColor="red" h={50} w={100}></Box>
      </Flex>
    </>
  );
};
