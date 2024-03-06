import React, { useState } from "react";
import { Box, Divider, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("/student/home");

  const SidebarComponents = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "DashBoard",
      link: "/dashboard",
    },
  ];

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <Box
      width={{ base: "300px" }}
      height={"100vh"}
      fontSize={"1rem"}
      padding={"2rem"}
    >
      {/* <Text padding={"2rem"} fontWeight={700}>
        MMUDU College
      </Text> */}
      <Image src="https://erp.mmumullana.org/uploads/logo.png?=10" />
      <VStack>
        <Divider margin={"1rem"} />
      </VStack>

      <Flex padding={"0.5rem"} flexDirection={"column"}>
        {SidebarComponents.map((item) => (
          <Box key={item.link} minWidth="10rem">
            <NavLink
              activeClassName="active-link"
              style={{ textDecoration: "none" }}
              to={item.link}
              onClick={() => handleLinkClick(item.link)}
            >
              <Flex
                boxShadow={
                  activeLink === item.link
                    ? "rgba(149, 157, 165, 0.2) 0px 8px 24px;"
                    : "none"
                }
                justifyContent={"normal"}
                padding={"0.5rem"}
                alignItems={"center"}
                gap={"1rem"}
                fontWeight={500}
                // backgroundColor={activeLink === item.link ? "white" : "none"}
                marginY={"0.2rem"}
                borderRadius={"1rem"}
                transition={"0.2s"}
                // _hover={{
                //   backgroundColor: "white",
                // }}
              >
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  backgroundColor="#e63838"
                  padding={"0.5rem"}
                  borderRadius={"50%"}
                  opacity={activeLink === item.link ? "100%" : "70%"}
                >
                  <Text color="white">{item.icon}</Text>
                </Box>
                <Text>{item.name}</Text>
              </Flex>
            </NavLink>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Sidebar;
