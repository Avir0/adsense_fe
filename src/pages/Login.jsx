// import React, { useState } from 'react';
// import { Box, FormControl, FormLabel, Input, Button, VStack, Text } from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';
// import Navbar from '../components/Navbar.jsx';
// import Footer from '../components/Footer.jsx';
// import { useAuth } from '../contexts/AuthContext.jsx';

// function Login() {
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async () => {
//     try {
//       setError('');
//       const user = await login(formData.email, formData.password);
//       if (user.role === 'influencer') {
//         navigate('/influencer/dashboard');
//       } else {
//         navigate('/company/dashboard');
//       }
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <Box minH="calc(100vh - 160px)" p={6} bg="gray.50" display="flex" justifyContent="center">
//         <Box p={6} bg="white" borderRadius="md" boxShadow="md" w="full" maxW="md">
//           <VStack spacing={4}>
//             <Text fontSize="2xl" fontWeight="bold">Login</Text>
//             {error && <Text color="red.500">{error}</Text>}
//             <FormControl>
//               <FormLabel>Email</FormLabel>
//               <Input type="email" name="email" value={formData.email} onChange={handleChange} />
//             </FormControl>
//             <FormControl>
//               <FormLabel>Password</FormLabel>
//               <Input type="password" name="password" value={formData.password} onChange={handleChange} />
//             </FormControl>
//             <Button colorScheme="brand" onClick={handleSubmit}>Login</Button>
//           </VStack>
//         </Box>
//       </Box>
//       <Footer />
//     </>
//   );
// }

// export default Login;

import React, { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import { useAuth } from '../contexts/AuthContext.jsx';

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      setError('');
      const user = await login(formData.email, formData.password);
      if (user.role === 'influencer') {
        navigate('/influencer/dashboard');
      } else {
        navigate('/company/dashboard');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  // Responsive max width for the login box
  const maxW = useBreakpointValue({ base: '90%', sm: '80%', md: '400px' });

  return (
    <>
      <Navbar />
      <Box
        minH="calc(100vh - 160px)"
        px={4}
        py={8}
        bg="gray.50"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          w="full"
          maxW={maxW}
          bg="white"
          p={{ base: 6, md: 8 }}
          borderRadius="md"
          boxShadow="lg"
        >
          <VStack spacing={5} align="stretch">
            <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" textAlign="center">
              Login
            </Text>

            {error && (
              <Text color="red.500" fontSize="sm" textAlign="center">
                {error}
              </Text>
            )}

            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </FormControl>

            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />
            </FormControl>

            <Button colorScheme="brand" onClick={handleSubmit} width="full">
              Login
            </Button>
          </VStack>
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default Login;
