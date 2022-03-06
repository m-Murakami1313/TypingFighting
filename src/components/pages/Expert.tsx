import { Container, Box } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { useTypingGame } from "../../hooks/useTypingGameEX";

export const Expert: VFC = memo(() => {
  const { wordContent, textTargetNone, clickStart, clickSet } = useTypingGame();
  const onClickStart = () => clickSet();

  return (
    <>
      <Container margin="50%" fontSize={50}>
        <Box _hover={{ color: "red", fontSize: "50", cursor: "pointer" }}>
          <p onClick={onClickStart}>{clickStart}</p>
        </Box>
        <Box pb={70}>
          <p>{wordContent}</p>
        </Box>
        <Box>
          <p>{textTargetNone}</p>
        </Box>
      </Container>
    </>
  );
});
