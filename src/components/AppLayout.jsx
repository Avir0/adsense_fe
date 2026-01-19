// import React from "react";
// import { Box, Flex } from "@chakra-ui/react";
// import Sidebar from "./Sidebar";
// import Topbar from "./Topbar";

// const AppLayout = ({ children }) => {
//   return (
//     <Flex minH="100vh" bg="gray.100">
      
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main content */}
//       <Box flex="1" display="flex" flexDirection="column">
        
//         {/* Topbar */}
//         <Topbar />

//         {/* Page Content */}
//         <Box flex="1" p={{ base: 4, md: 6 }}>
//           {children}
//         </Box>

//       </Box>
//     </Flex>
//   );
// };

// export default AppLayout;

import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const AppLayout = ({ children }) => {
  return (
    <Flex minH="100vh" bg="gray.50">
      <Sidebar />

      <Box flex="1">
        <Topbar />
        <Box p={{ base: 4, md: 6 }}>{children}</Box>
      </Box>
    </Flex>
  );
};

export default AppLayout;

