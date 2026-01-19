import React from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Badge,
  Divider,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { FaBell, FaChevronDown, FaUser, FaSignOutAlt, FaChartLine } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Topbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <Box
      bg="white"
      px={6}
      py={3}
      borderBottom="1px solid"
      borderColor="gray.200"
      position="sticky"
      top="0"
      zIndex="10"
    >
      <Flex justify="space-between" align="center">
        {/* LEFT: Logo */}
        <Text fontWeight="bold" fontSize="lg" color="orange.500">
          Adchain AI
        </Text>

        {/* CENTER: Search */}
        <Box display={{ base: "none", md: "block" }} maxW="400px" w="100%">
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.400" />
            </InputLeftElement>
            <Input placeholder="Search campaigns, influencers..." bg="gray.50" />
          </InputGroup>
        </Box>

        {/* RIGHT: Icons & Profile */}
        <HStack spacing={5}>
          {/* Notifications */}
          <IconButton
            icon={<FaBell />}
            variant="ghost"
            aria-label="Notifications"
          />

          {/* Profile Menu */}
          <Menu>
            <MenuButton>
              <HStack spacing={2}>
                <Avatar
                  size="sm"
                  name={user?.name}
                  src={user?.avatar}
                  bg="orange.400"
                />
                <Box display={{ base: "none", md: "block" }}>
                  <Text fontSize="sm" fontWeight="500">
                    {user?.name || "User"}
                  </Text>
                  <Badge colorScheme="orange" fontSize="10px">
                    {user?.role || "user"}
                  </Badge>
                </Box>
                <FaChevronDown size="12" />
              </HStack>
            </MenuButton>

            <MenuList>
              <MenuItem icon={<FaUser />} onClick={() => navigate("/company/profile")}>
                Profile
              </MenuItem>

              <MenuItem icon={<FaChartLine />} onClick={() => navigate("/company/dashboard")}>
                Dashboard
              </MenuItem>

              <Divider />

              <MenuItem icon={<FaSignOutAlt />} color="red.500" onClick={logout}>
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Topbar;
