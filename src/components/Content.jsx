import { Box, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { ContentContext } from "../context/ContentContextProvider";

const Content = () => {
  const { file } = useContext(ContentContext);

  return (
    <div>
      <Box zIndex={"1"}>
        <Box w={"60%"} m={"auto"}>
          <Text>{file}</Text>
          <Text>{!file && "No content available"}</Text>
        </Box>
      </Box>
    </div>
  );
};

export default Content;
