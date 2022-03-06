import { useHistory } from "react-router-dom";
import { Container, Box } from "@chakra-ui/react";

export const Home = () => {
  const history = useHistory();
  const onClickBiginner = () => {
    history.push("/page1");
  };
  const onClickExpert = () => {
    history.push("/page2");
  };

  return (
    <>
      <Container margin="30%" fontSize={50}>
        <Box
          pb={70}
          _hover={{ color: "red.300", fontSize: "50", cursor: "pointer" }}
        >
          <p onClick={onClickBiginner}>LEVEL☆☆☆</p>
        </Box>
        <Box _hover={{ color: "red", fontSize: "50", cursor: "pointer" }}>
          <p onClick={onClickExpert}>LEVEL☆☆☆☆☆☆☆☆</p>
        </Box>
      </Container>
    </>
  );
};
