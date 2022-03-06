import { Container, Box } from "@chakra-ui/react";
import { memo, VFC } from "react";

import { useTypingGame } from "../../hooks/useTypingGame";

export const Beginner: VFC = memo(() => {
  const { wordContent, textTarget, clickSet, clickStart } = useTypingGame();

  const onClickStart = () => clickSet();

  return (
    <>
      <Container ml="40%" mt="250px" fontSize={50}>
        <Box _hover={{ color: "red.300", fontSize: "50", cursor: "pointer" }}>
          <p onClick={onClickStart}>{clickStart}</p>
        </Box>
        <Box pb={30} fontSize={50}>
          <p>{wordContent}</p>
        </Box>
        <Box fontSize={50}>
          <p>{textTarget}</p>
        </Box>
      </Container>
    </>
  );
});
