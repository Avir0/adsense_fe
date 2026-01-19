// import { Box, VStack, Text, Icon, Flex } from "@chakra-ui/react";
// import { NavLink } from "react-router-dom";
// import { FaHome, FaChartBar, FaBullhorn, FaUser } from "react-icons/fa";

// const links = [
//   { label: "Dashboard", path: "/company/dashboard", icon: FaHome },
//   { label: "Analytics", path: "/company/analytics", icon: FaChartBar },
//   { label: "Campaigns", path: "/company/dashboard", icon: FaBullhorn },
//   { label: "Profile", path: "/company/profile", icon: FaUser },
// ];

// export default function Sidebar() {
//   return (
//     <Box
//       position="fixed"
//       left={0}
//       top={0}
//       w="260px"
//       h="100vh"
//       bg="white"
//       borderRight="1px solid #eee"
//       display={{ base: "none", md: "block" }}
//     >
//       {/* Logo */}
//       <Flex p={6} fontWeight="bold" fontSize="xl">
//         Adchain 🚀
//       </Flex>

//       {/* Navigation */}
//       <VStack align="stretch" spacing={1} px={3}>
//         {links.map((link) => (
//           <NavLink key={link.path} to={link.path}>
//             {({ isActive }) => (
//               <Flex
//                 align="center"
//                 gap={3}
//                 px={4}
//                 py={3}
//                 borderRadius="lg"
//                 bg={isActive ? "orange.50" : "transparent"}
//                 color={isActive ? "orange.500" : "gray.600"}
//                 fontWeight="500"
//                 _hover={{ bg: "gray.100" }}
//               >
//                 <Icon as={link.icon} />
//                 <Text>{link.label}</Text>
//               </Flex>
//             )}
//           </NavLink>
//         ))}


import React from "react";
import {
  Box,
  VStack,
  Text,
  HStack,
  Icon,
  Button,
  Divider,
} from "@chakra-ui/react";
import {
  FaHome,
  FaChartBar,
  FaBullhorn,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();

  const isCompany = user?.role === "company";
  const isInfluencer = user?.role === "influencer";

  const menu = isCompany
    ? [
        { label: "Dashboard", icon: FaHome, path: "/company/dashboard" },
        { label: "Analytics", icon: FaChartBar, path: "/company/analytics" },
        { label: "Campaigns", icon: FaBullhorn, path: "/company/dashboard" },
        { label: "Profile", icon: FaUser, path: "/company/profile" },
        { label: "Settings", icon: FaCog, path: "#" },
      ]
    : [
        { label: "Dashboard", icon: FaHome, path: "/influencer/dashboard" },
        { label: "Profile", icon: FaUser, path: "/influencer/profile" },
        { label: "Settings", icon: FaCog, path: "#" },
      ];

  return (
    <Box
      w={{ base: "70px", md: "240px" }}
      bg="white"
      borderRight="1px solid"
      borderColor="gray.200"
      minH="100vh"
      px={3}
      py={5}
      position="sticky"
      top="0"
    >
      {/* Logo */}
      <HStack mb={8} justify={{ base: "center", md: "flex-start" }}>
        <Box
          bg="orange.400"
          color="white"
          fontWeight="bold"
          px={3}
          py={1}
          borderRadius="md"
        >
          A
        </Box>
        <Text
          fontWeight="bold"
          display={{ base: "none", md: "block" }}
        >
          Adchain AI
        </Text>
      </HStack>

      {/* Menu */}
      <VStack align="stretch" spacing={1}>
        {menu.map((item) => {
          const active = location.pathname === item.path;

          return (
            <Button
              key={item.label}
              justifyContent={{ base: "center", md: "flex-start" }}
              leftIcon={<Icon as={item.icon} />}
              variant="ghost"
              bg={active ? "orange.50" : "transparent"}
              color={active ? "orange.500" : "gray.600"}
              _hover={{ bg: "orange.50", color: "orange.500" }}
              onClick={() => navigate(item.path)}
              borderRadius="lg"
            >
              <Text display={{ base: "none", md: "block" }}>
                {item.label}
              </Text>
            </Button>
          );
        })}
      </VStack>

      {/* Bottom logout */}
      <Box position="absolute" bottom="20px" left="0" w="100%" px={3}>
        <Divider mb={3} />
        <Button
          w="100%"
          leftIcon={<FaSignOutAlt />}
          variant="ghost"
          color="red.500"
          justifyContent={{ base: "center", md: "flex-start" }}
          onClick={logout}
        >
          <Text display={{ base: "none", md: "block" }}>
            Logout
          </Text>
        </Button>
      </Box>
    </Box>
  );
};

export default Sidebar;

//       </VStack>
//     </Box>
//   );
// }
