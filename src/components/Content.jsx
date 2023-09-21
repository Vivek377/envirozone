import { Box, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { ContentContext } from "../context/ContentContextProvider";

const Content = () => {
  const { file } = useContext(ContentContext);

  console.log(file);

  return (
    <div>
      <Box>
        <Text>{file}</Text>
        <Text>{!file && "No content available"}</Text>
      </Box>
    </div>
  );
};

export default Content;
