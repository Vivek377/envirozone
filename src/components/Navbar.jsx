import { Box, Button, Text } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import React, { useContext, useState } from "react";
import { ContentContext } from "../context/ContentContextProvider";
import Content from "./Content";

const Navbar = ({ data }) => {
  const [nav, setNav] = useState(false);
  const { setFile } = useContext(ContentContext);

  return (
    <div>
      <Box
        bg={"blue.400"}
        w={"full"}
        h={"3rem"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box ml={"2rem"}>
          <Text fontWeight={"bold"}>LOGO</Text>
        </Box>
        <Box display={{ md: "none", sm: "none" }} mr={"2rem"}>
          <Box mr={"1rem"} display={{ sm: "none", md: "none" }}>
            {!nav ? (
              <FaBars onClick={() => setNav(!nav)} />
            ) : (
              <GiCancel onClick={() => setNav(!nav)} />
            )}
          </Box>
        </Box>
      </Box>

      {/* sidebar */}

      <Box
        display={{ base: nav ? "flex" : "none", md: "flex", sm: "flex" }}
        flexDirection={"column"}
        bg={"gray.400"}
        h={"100vh"}
        position={"fixed"}
        w={"fit-content"}
        p={"2rem"}
        gap={"1rem"}
        zIndex={"3"}
      >
        {data.map((ele) => {
          return (
            <Box key={ele.filename}>
              <Button
                onClick={() => {
                  setFile(ele.content);
                  setNav(false);
                }}
              >
                {ele.filename}
              </Button>
            </Box>
          );
        })}
      </Box>
    </div>
  );
};

export default Navbar;
