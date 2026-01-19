
// import React from "react";
// import { Box, Flex } from "@chakra-ui/react";
// import Sidebar from "./Sidebar";
// import Topbar from "./Topbar";

// const AppLayout = ({ children }) => {
//   return (
//     <Flex minH="100vh" bg="gray.50">
//       <Sidebar />

//       <Box flex="1">
//         <Topbar />
//         <Box p={{ base: 4, md: 6 }}>{children}</Box>
//       </Box>
//     </Flex>
//   );
// };

// export default AppLayout;

import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const AppLayout = ({ children }) => {
  return (
    <Flex minH="100vh" bg="gray.50">
      {/* Sidebar hides on mobile */}
      <Box display={{ base: "none", md: "block" }}>
        <Sidebar />
      </Box>

      {/* Main area FULL WIDTH */}
      <Flex direction="column" flex="1" w="100%">
        <Topbar />

        <Box
          w="100%"
          px={{ base: 3, md: 6 }}
          py={4}
        >
          {children}
        </Box>
      </Flex>
    </Flex>
  );
};

export default AppLayout;
