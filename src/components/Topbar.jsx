import { Flex, Text, Avatar } from "@chakra-ui/react";
import { useAuth } from "../contexts/AuthContext";

export default function Topbar() {
  const { user } = useAuth();

  return (
    <Flex
      h="70px"
      bg="white"
      borderBottom="1px solid #eee"
      align="center"
      justify="space-between"
      px={{ base: 4, md: 8 }}
    >
      <Text fontWeight="600">Dashboard</Text>

      <Flex align="center" gap={3}>
        <Text fontSize="sm">{user?.name}</Text>
        <Avatar size="sm" name={user?.name} />
      </Flex>
    </Flex>
  );
}
