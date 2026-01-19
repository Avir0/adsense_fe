import { Box, VStack, Text, Icon, Flex } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { FaHome, FaChartBar, FaBullhorn, FaUser } from "react-icons/fa";

const links = [
  { label: "Dashboard", path: "/company/dashboard", icon: FaHome },
  { label: "Analytics", path: "/company/analytics", icon: FaChartBar },
  { label: "Campaigns", path: "/company/dashboard", icon: FaBullhorn },
  { label: "Profile", path: "/company/profile", icon: FaUser },
];

export default function Sidebar() {
  return (
    <Box
      position="fixed"
      left={0}
      top={0}
      w="260px"
      h="100vh"
      bg="white"
      borderRight="1px solid #eee"
      display={{ base: "none", md: "block" }}
    >
      {/* Logo */}
      <Flex p={6} fontWeight="bold" fontSize="xl">
        Adchain 🚀
      </Flex>

      {/* Navigation */}
      <VStack align="stretch" spacing={1} px={3}>
        {links.map((link) => (
          <NavLink key={link.path} to={link.path}>
            {({ isActive }) => (
              <Flex
                align="center"
                gap={3}
                px={4}
                py={3}
                borderRadius="lg"
                bg={isActive ? "orange.50" : "transparent"}
                color={isActive ? "orange.500" : "gray.600"}
                fontWeight="500"
                _hover={{ bg: "gray.100" }}
              >
                <Icon as={link.icon} />
                <Text>{link.label}</Text>
              </Flex>
            )}
          </NavLink>
        ))}
      </VStack>
    </Box>
  );
}
