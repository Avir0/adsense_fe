// import React from 'react';
// import { Flex, Heading, Button } from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext.jsx';

// function Navbar() {
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();

//   return (
//     <Flex as="nav" p={4} bg="brand.500" color="white" justify="space-between" align="center">
//       <Heading size="md" onClick={() => navigate('/')} cursor="pointer">
//         Adsense
//       </Heading>
//       <Flex gap={4}>
//         {user ? (
//           <>
//             <Button colorScheme="whiteAlpha" onClick={() => logout()}>
//               Logout
//             </Button>
//           </>
//         ) : (
//           <>
//             <Button colorScheme="whiteAlpha" onClick={() => navigate('/login')}>
//               Login
//             </Button>
//             <Button colorScheme="whiteAlpha" onClick={() => navigate('/signup')}>
//               Signup
//             </Button>
//           </>
//         )}
//       </Flex>
//     </Flex>
//   );
// }

// export default Navbar;
// import React from 'react';
// import { Flex, Heading, Image, Button } from '@chakra-ui/react';
// import logo from '../assets/logo.png';

// const Navbar = () => (
//   <Flex
//     bgGradient="linear(to-r, red.400, orange.400)"
//     p={4}
//     color="white"
//     alignItems="center"
//     justifyContent="space-between"
//   >
//     <Flex alignItems="center">
//       <Image
//         src={logo}
//         boxSize="40px"
//         borderRadius="md"
//         mr={2}
//       />
//       <Heading size="md" color="white">
//         🔺SENSE
//       </Heading>
//     </Flex>
//     <Flex>
//     <Button 
//     variant="ghost" 
//     color="white" 
//     mr={3}
//    _hover={{ bg: 'blue.500', color: 'white' }}
//    >
//      Home 
//       </Button> 
//       <Button variant="ghost" color="white" mr={3}_hover={{ bg: 'blue.500', color: 'white' }}
// >
//         About
//       </Button>
//       <Button variant="ghost" color="white" mr={3} _hover={{ bg: 'blue.500', color: 'white' }}>
//         Contact
//       </Button>
//     </Flex>
//   </Flex>
// );

// export default Navbar;



import { useState } from 'react';
import {
  Flex, Heading, Image, Button, IconButton, Box, VStack, Collapse, useDisclosure
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import logo from '../assets/logo1.jpg';

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bgGradient="linear(to-r, red.400, orange.400)"
        p={4}
        color="white"
        alignItems="center"
        justifyContent="space-between"
        wrap="wrap"
      >
        <Flex alignItems="center">
          <Image src={logo} boxSize="40px" borderRadius="md" mr={2} />
          <Heading size="md" color="white">Adchain</Heading>
        </Flex>

        <IconButton
          display={{ base: 'flex', md: 'none' }}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          onClick={onToggle}
          aria-label="Toggle Menu"
          bg="transparent"
          color="white"
          _hover={{ bg: 'orange.500' }}
        />

        <Flex
          display={{ base: 'none', md: 'flex' }}
          ml={4}
        >
          <Button variant="ghost" color="white" mr={3} _hover={{ bg: 'blue.500' }}>
            Home
          </Button>
          <Button variant="ghost" color="white" mr={3} _hover={{ bg: 'blue.500' }}>
            About
          </Button>
          <Button variant="ghost" color="white" mr={3} _hover={{ bg: 'blue.500' }}>
            Contact
          </Button>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <VStack
          bg="red.400"
          color="white"
          py={4}
          display={{ md: 'none' }}
        >
          <Button variant="ghost" _hover={{ bg: 'blue.500' }}>Home</Button>
          <Button variant="ghost" _hover={{ bg: 'blue.500' }}>About</Button>
          <Button variant="ghost" _hover={{ bg: 'blue.500' }}>Contact</Button>
        </VStack>
      </Collapse>
    </Box>
  );
};

export default Navbar;
