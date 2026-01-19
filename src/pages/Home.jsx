

// import React from 'react';
// import {
//   Box,
//   Button,
//   Container,
//   Flex,
//   Heading,
//   Text,
//   Image,
//   Stack,
//   SimpleGrid,
//   Icon,
//   useColorModeValue,
//   Badge,
//   Link
// } from '@chakra-ui/react';
// import { FaArrowRight, FaChartLine, FaSearch, FaHandshake } from 'react-icons/fa';
// import { MdVerified } from 'react-icons/md';
// import { Link as RouterLink } from 'react-router-dom';
// // import  Navbar  from './Navbar'; // Import from same directory
// // import Footer from './Footer'; // Import from same directory
// import Navbar from '../components/Navbar.jsx';
// import Footer from '../components/Footer.jsx';

// const HomePage = () => {
//   const bgGradient = useColorModeValue(
//     'linear(to-r, red.400, orange.400)',
//     'linear(to-r, red.500, orange.500)'
//   );

//   const stats = [
//     { value: '10,000+', label: 'Active Influencers' },
//     { value: '2,500+', label: 'Brand Partners' },
//     { value: '$5M+', label: 'Paid to Creators' },
//     { value: '95%', label: 'Satisfaction Rate' },
//   ];

//   const features = [
//     {
//       icon: FaSearch,
//       title: 'Smart Matching',
//       text: 'Our AI finds perfect influencer-brand matches based on audience demographics and engagement',
//     },
//     {
//       icon: FaChartLine,
//       title: 'Performance Analytics',
//       text: 'Real-time campaign tracking with detailed ROI metrics and audience insights',
//     },
//     {
//       icon: FaHandshake,
//       title: 'Secure Payments',
//       text: 'Escrow system ensures creators get paid and brands get quality content',
//     },
//   ];

//   const testimonials = [
//     {
//       name: 'Sarah K.',
//       role: 'Beauty Influencer',
//       content: 'Grew my brand collaborations by 300% in just 3 months using this platform!',
//       avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
//     },
//     {
//       name: 'Mike T.',
//       role: 'Marketing Director, Nike',
//       content: 'Found perfect micro-influencers for our campaign with incredible ROI.',
//       avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
//     },
//   ];

//   return (
//     <Box>
//       {/* Navbar */}
//       <Navbar />

//       {/* Hero Section */}
//       <Box bgGradient={bgGradient} color="white" py={20} px={4}>
//         <Container maxW="6xl">
//           <Flex direction={{ base: 'column', md: 'row' }} align="center">
//             <Box flex={1} mb={{ base: 8, md: 0 }}>
//               <Heading as="h1" size="2xl" mb={4} lineHeight="1.2">
//                 Connect Brands with <br />Authentic Influencers
//               </Heading>
//               <Text fontSize="xl" mb={8}>
//                 The leading platform for influencer marketing campaigns with verified audience data
//               </Text>
//               <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
//                 <Button
//                   as={RouterLink}
//                   to="/signup"
//                   size="lg"
//                   colorScheme="whiteAlpha"
//                   rightIcon={<FaArrowRight />}
//                 >
//                   Sign Up
//                 </Button>
//                 <Button
//                   as={RouterLink}
//                   to="/login"
//                   size="lg"
//                   variant="outline"
//                   color="white"
//                   _hover={{ bg: 'whiteAlpha.200' }}
//                   rightIcon={<FaArrowRight />}
//                 >
//                   Login
//                 </Button>
//               </Stack>
//             </Box>
//             <Box flex={1} display="flex" justifyContent="center">
//               <Image
//                 src="https://illustrations.popsy.co/amber/digital-nomad.svg"
//                 alt="Influencer marketing illustration"
//                 maxW="500px"
//                 w="100%"
//               />
//             </Box>
//           </Flex>
//         </Container>
//       </Box>

//       {/* Stats Section */}
//       <Box py={16} bg={useColorModeValue('gray.50', 'gray.800')}>
//         <Container maxW="6xl">
//           <SimpleGrid columns={{ base: 2, md: 4 }} spacing={10}>
//             {stats.map((stat) => (
//               <Box key={stat.label} textAlign="center">
//                 <Text fontSize="4xl" fontWeight="bold" mb={2}>
//                   {stat.value}
//                 </Text>
//                 <Text color={useColorModeValue('gray.600', 'gray.400')}>
//                   {stat.label}
//                 </Text>
//               </Box>
//             ))}
//           </SimpleGrid>
//         </Container>
//       </Box>

//       {/* Features Section */}
//       <Box py={16}>
//         <Container maxW="6xl">
//           <Heading as="h2" size="xl" textAlign="center" mb={12}>
//             Why Choose Our Platform
//           </Heading>
//           <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
//             {features.map((feature, index) => (
//               <Box key={index} p={6} boxShadow="lg" borderRadius="lg">
//                 <Icon as={feature.icon} w={10} h={10} color="red.400" mb={4} />
//                 <Heading as="h3" size="md" mb={3}>
//                   {feature.title}
//                 </Heading>
//                 <Text color={useColorModeValue('gray.600', 'gray.400')}>
//                   {feature.text}
//                 </Text>
//               </Box>
//             ))}
//           </SimpleGrid>
//         </Container>
//       </Box>

//       {/* How It Works Section */}
//       <Box py={16} bg={useColorModeValue('gray.50', 'gray.800')}>
//         <Container maxW="6xl">
//           <Heading as="h2" size="xl" textAlign="center" mb={12}>
//             How It Works
//           </Heading>
//           <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
//             {[
//               {
//                 step: '1',
//                 title: 'Create Profile',
//                 description: 'Brands or influencers set up their verified profiles',
//               },
//               {
//                 step: '2',
//                 title: 'Find Matches',
//                 description: 'Our algorithm suggests perfect collaboration partners',
//               },
//               {
//                 step: '3',
//                 title: 'Launch Campaign',
//                 description: 'Manage everything from brief to payment in one dashboard',
//               },
//             ].map((item) => (
//               <Box key={item.step} textAlign="center">
//                 <Badge
//                   fontSize="xl"
//                   p={2}
//                   borderRadius="full"
//                   bgGradient={bgGradient}
//                   color="white"
//                   mb={4}
//                 >
//                   {item.step}
//                 </Badge>
//                 <Heading as="h3" size="md" mb={2}>
//                   {item.title}
//                 </Heading>
//                 <Text color={useColorModeValue('gray.600', 'gray.400')}>
//                   {item.description}
//                 </Text>
//               </Box>
//             ))}
//           </SimpleGrid>
//         </Container>
//       </Box>

//       {/* Testimonials Section */}
//       <Box py={16}>
//         <Container maxW="6xl">
//           <Heading as="h2" size="xl" textAlign="center" mb={12}>
//             What Our Users Say
//           </Heading>
//           <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
//             {testimonials.map((testimonial, index) => (
//               <Box
//                 key={index}
//                 p={6}
//                 borderWidth="1px"
//                 borderRadius="lg"
//                 position="relative"
//               >
//                 <Box
//                   position="absolute"
//                   top="-4"
//                   left="6"
//                   bg="white"
//                   p={1}
//                   borderRadius="full"
//                   boxShadow="md"
//                 >
//                   <Icon as={MdVerified} w={6} h={6} color="red.400" />
//                 </Box>
//                 <Text mb={4} fontStyle="italic">
//                   "{testimonial.content}"
//                 </Text>
//                 <Flex align="center">
//                   <Image
//                     src={testimonial.avatar}
//                     alt={testimonial.name}
//                     borderRadius="full"
//                     boxSize="50px"
//                     mr={4}
//                   />
//                   <Box>
//                     <Text fontWeight="bold">{testimonial.name}</Text>
//                     <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
//                       {testimonial.role}
//                     </Text>
//                   </Box>
//                 </Flex>
//               </Box>
//             ))}
//           </SimpleGrid>
//         </Container>
//       </Box>

//       {/* CTA Section */}
//       <Box py={16} bgGradient={bgGradient} color="white">
//         <Container maxW="2xl" textAlign="center">
//           <Heading as="h2" size="xl" mb={6}>
//             Ready to Grow Your Brand?
//           </Heading>
//           <Text fontSize="xl" mb={8}>
//             Join thousands of brands and creators already collaborating on our platform
//           </Text>
//           <Button
//             as={RouterLink}
//             to="/signup"
//             size="lg"
//             colorScheme="whiteAlpha"
//             rightIcon={<FaArrowRight />}
//             mb={4}
//             mx={2}
//           >
//             Sign Up
//           </Button>
//           <Button
//             size="lg"
//             variant="outline"
//             color="white"
//             _hover={{ bg: 'whiteAlpha.200' }}
//             mx={2}
//           >
//             See How It Works
//           </Button>
//         </Container>
//       </Box>

//       {/* Footer */}
//       <Footer />
//     </Box>
//   );
// };

// export default HomePage;


// import React from 'react';
// import {
//   Box,
//   Button,
//   Container,
//   Flex,
//   Heading,
//   Text,
//   Image,
//   Stack,
//   SimpleGrid,
//   Icon,
//   useColorModeValue,
//   Badge,
// } from '@chakra-ui/react';
// import { FaArrowRight, FaChartLine, FaSearch, FaHandshake } from 'react-icons/fa';
// import { MdVerified } from 'react-icons/md';
// import { Link as RouterLink } from 'react-router-dom';

// import Navbar from '../components/Navbar.jsx';
// import Footer from '../components/Footer.jsx';

// const Home = () => {
//   const bgGradient = useColorModeValue(
//     'linear(to-r, red.400, orange.400)',
//     'linear(to-r, red.500, orange.500)'
//   );

//   const stats = [
//     { value: '10,000+', label: 'Active Influencers' },
//     { value: '2,500+', label: 'Brand Partners' },
//     { value: '$5M+', label: 'Paid to Creators' },
//     { value: '95%', label: 'Satisfaction Rate' },
//   ];

//   const features = [
//     {
//       icon: FaSearch,
//       title: 'Smart Matching',
//       text: 'Our AI finds perfect influencer-brand matches based on audience demographics and engagement',
//     },
//     {
//       icon: FaChartLine,
//       title: 'Performance Analytics',
//       text: 'Real-time campaign tracking with detailed ROI metrics and audience insights',
//     },
//     {
//       icon: FaHandshake,
//       title: 'Secure Payments',
//       text: 'Escrow system ensures creators get paid and brands get quality content',
//     },
//   ];

//   const testimonials = [
//     {
//       name: 'Sarah K.',
//       role: 'Beauty Influencer',
//       content: 'Grew my brand collaborations by 300% in just 3 months using this platform!',
//       avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
//     },
//     {
//       name: 'Mike T.',
//       role: 'Marketing Director, Nike',
//       content: 'Found perfect micro-influencers for our campaign with incredible ROI.',
//       avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
//     },
//   ];

//   return (
//     <Box>
//       {/* Navbar */}
//       <Navbar />

//       {/* Hero Section */}
//       <Box bgGradient={bgGradient} color="white" py={20} px={4}>
//         <Container maxW="6xl">
//           <Flex direction={{ base: 'column', md: 'row' }} align="center">
//             <Box flex={1} mb={{ base: 8, md: 0 }}>
//               <Heading as="h1" size="2xl" mb={4} lineHeight="1.2">
//                 Connect Brands with <br />Authentic Influencers
//               </Heading>
//               <Text fontSize="xl" mb={8}>
//                 The leading platform for influencer marketing campaigns with verified audience data
//               </Text>
//               <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
//                 <Button
//                   as={RouterLink}
//                   to="/signup"
//                   size="lg"
//                   colorScheme="whiteAlpha"
//                   rightIcon={<FaArrowRight />}
//                 >
//                   Sign Up
//                 </Button>
//                 <Button
//                   as={RouterLink}
//                   to="/login"
//                   size="lg"
//                   variant="outline"
//                   color="white"
//                   _hover={{ bg: 'whiteAlpha.200' }}
//                   rightIcon={<FaArrowRight />}
//                 >
//                   Login
//                 </Button>
//               </Stack>
//             </Box>
//             <Box flex={1} display="flex" justifyContent="center">
//               <Image
//                 src="https://illustrations.popsy.co/amber/digital-nomad.svg"
//                 alt="Influencer marketing illustration"
//                 maxW="500px"
//                 w="100%"
//               />
//             </Box>
//           </Flex>
//         </Container>
//       </Box>

//       {/* Stats Section */}
//       <Box py={16} bg={useColorModeValue('gray.50', 'gray.800')}>
//         <Container maxW="6xl">
//           <SimpleGrid columns={{ base: 2, md: 4 }} spacing={10}>
//             {stats.map((stat) => (
//               <Box key={stat.label} textAlign="center">
//                 <Text fontSize="4xl" fontWeight="bold" mb={2}>
//                   {stat.value}
//                 </Text>
//                 <Text color={useColorModeValue('gray.600', 'gray.400')}>
//                   {stat.label}
//                 </Text>
//               </Box>
//             ))}
//           </SimpleGrid>
//         </Container>
//       </Box>

//       {/* Features Section */}
//       <Box py={16}>
//         <Container maxW="6xl">
//           <Heading as="h2" size="xl" textAlign="center" mb={12}>
//             Why Choose Our Platform
//           </Heading>
//           <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
//             {features.map((feature, index) => (
//               <Box key={index} p={6} boxShadow="lg" borderRadius="lg">
//                 <Icon as={feature.icon} w={10} h={10} color="red.400" mb={4} />
//                 <Heading as="h3" size="md" mb={3}>
//                   {feature.title}
//                 </Heading>
//                 <Text color={useColorModeValue('gray.600', 'gray.400')}>
//                   {feature.text}
//                 </Text>
//               </Box>
//             ))}
//           </SimpleGrid>
//         </Container>
//       </Box>

//       {/* How It Works Section */}
//       <Box py={16} bg={useColorModeValue('gray.50', 'gray.800')}>
//         <Container maxW="6xl">
//           <Heading as="h2" size="xl" textAlign="center" mb={12}>
//             How It Works
//           </Heading>
//           <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
//             {[1, 2, 3].map((step, idx) => {
//               const steps = [
//                 {
//                   title: 'Create Profile',
//                   description: 'Brands or influencers set up their verified profiles',
//                 },
//                 {
//                   title: 'Find Matches',
//                   description: 'Our algorithm suggests perfect collaboration partners',
//                 },
//                 {
//                   title: 'Launch Campaign',
//                   description: 'Manage everything from brief to payment in one dashboard',
//                 },
//               ];
//               return (
//                 <Box key={idx} textAlign="center">
//                   <Badge
//                     fontSize="xl"
//                     p={2}
//                     borderRadius="full"
//                     bgGradient={bgGradient}
//                     color="white"
//                     mb={4}
//                   >
//                     {step}
//                   </Badge>
//                   <Heading as="h3" size="md" mb={2}>
//                     {steps[idx].title}
//                   </Heading>
//                   <Text color={useColorModeValue('gray.600', 'gray.400')}>
//                     {steps[idx].description}
//                   </Text>
//                 </Box>
//               );
//             })}
//           </SimpleGrid>
//         </Container>
//       </Box>

//       {/* Testimonials Section */}
//       <Box py={16}>
//         <Container maxW="6xl">
//           <Heading as="h2" size="xl" textAlign="center" mb={12}>
//             What Our Users Say
//           </Heading>
//           <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
//             {testimonials.map((testimonial, index) => (
//               <Box
//                 key={index}
//                 p={6}
//                 borderWidth="1px"
//                 borderRadius="lg"
//                 position="relative"
//               >
//                 <Box
//                   position="absolute"
//                   top="-4"
//                   left="6"
//                   bg="white"
//                   p={1}
//                   borderRadius="full"
//                   boxShadow="md"
//                 >
//                   <Icon as={MdVerified} w={6} h={6} color="red.400" />
//                 </Box>
//                 <Text mb={4} fontStyle="italic">
//                   "{testimonial.content}"
//                 </Text>
//                 <Flex align="center">
//                   <Image
//                     src={testimonial.avatar}
//                     alt={testimonial.name}
//                     borderRadius="full"
//                     boxSize="50px"
//                     mr={4}
//                   />
//                   <Box>
//                     <Text fontWeight="bold">{testimonial.name}</Text>
//                     <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
//                       {testimonial.role}
//                     </Text>
//                   </Box>
//                 </Flex>
//               </Box>
//             ))}
//           </SimpleGrid>
//         </Container>
//       </Box>

//       {/* CTA Section */}
//       <Box py={16} bgGradient={bgGradient} color="white">
//         <Container maxW="2xl" textAlign="center">
//           <Heading as="h2" size="xl" mb={6}>
//             Ready to Grow Your Brand?
//           </Heading>
//           <Text fontSize="xl" mb={8}>
//             Join thousands of brands and creators already collaborating on our platform
//           </Text>
//           <Button
//             as={RouterLink}
//             to="/signup"
//             size="lg"
//             colorScheme="whiteAlpha"
//             rightIcon={<FaArrowRight />}
//             mb={4}
//             mx={2}
//           >
//             Sign Up
//           </Button>
//           <Button
//             size="lg"
//             variant="outline"
//             color="white"
//             _hover={{ bg: 'whiteAlpha.200' }}
//             mx={2}
//           >
//             See How It Works
//           </Button>
//         </Container>
//       </Box>

//       {/* Footer */}
//       <Footer />
//     </Box>
//   );
// };

// export default Home;




import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  Image,
  Stack,
  SimpleGrid,
  Icon,
  useColorModeValue,
  Badge,
} from "@chakra-ui/react";
import { FaArrowRight, FaChartLine, FaSearch, FaHandshake } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { Link as RouterLink } from "react-router-dom";

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  const bg = useColorModeValue("gray.50", "gray.900");
  const cardBg = useColorModeValue("white", "gray.800");

  return (
    <Box bg={bg}>
      <Navbar />

      {/* HERO */}
      <Container maxW="7xl" py={{ base: 14, md: 20 }}>
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          gap={10}
        >
          <Box flex="1">
            <Badge colorScheme="orange" mb={3}>
              🚀 AI Powered Influencer Platform
            </Badge>

            <Heading fontSize={{ base: "3xl", md: "5xl" }} mb={4}>
              Grow your brand with <br />
              <Text as="span" color="orange.500">
                smart influencer marketing
              </Text>
            </Heading>

            <Text fontSize="lg" color="gray.600" mb={6}>
              Adchain helps companies launch data-driven campaigns, track real
              performance, and collaborate with trusted influencers.
            </Text>

            <Stack direction={{ base: "column", sm: "row" }} spacing={4}>
              <Button
                as={RouterLink}
                to="/signup"
                colorScheme="orange"
                size="lg"
                rightIcon={<FaArrowRight />}
              >
                Get Started
              </Button>

              <Button
                as={RouterLink}
                to="/login"
                size="lg"
                variant="outline"
              >
                Login
              </Button>
            </Stack>
          </Box>

          <Box flex="1">
            <Image
              src="https://illustrations.popsy.co/amber/digital-nomad.svg"
              w="100%"
              maxW="500px"
              mx="auto"
            />
          </Box>
        </Flex>
      </Container>

      {/* STATS */}
      <Container maxW="6xl" pb={14}>
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8}>
          {[
            ["10k+", "Influencers"],
            ["2500+", "Brands"],
            ["₹5Cr+", "Paid to Creators"],
            ["98%", "Success Rate"],
          ].map(([value, label]) => (
            <Box key={label} textAlign="center">
              <Heading size="lg" color="orange.500">
                {value}
              </Heading>
              <Text color="gray.600">{label}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      {/* FEATURES */}
      <Container maxW="6xl" py={16}>
        <Heading textAlign="center" mb={10}>
          Why companies choose Adchain
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {[
            {
              icon: FaSearch,
              title: "Smart Matching",
              text: "AI finds the best influencers for your product niche.",
            },
            {
              icon: FaChartLine,
              title: "Live Analytics",
              text: "Track performance, ROI, engagement & growth.",
            },
            {
              icon: FaHandshake,
              title: "Trusted Network",
              text: "Verified influencers with history & reputation.",
            },
          ].map((item, i) => (
            <Box
              key={i}
              bg={cardBg}
              p={8}
              borderRadius="xl"
              boxShadow="sm"
              border="1px solid #eee"
              _hover={{ transform: "translateY(-4px)", boxShadow: "md" }}
              transition="0.2s"
            >
              <Icon as={item.icon} w={8} h={8} color="orange.500" mb={4} />
              <Heading size="md" mb={2}>
                {item.title}
              </Heading>
              <Text color="gray.600">{item.text}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      {/* TESTIMONIAL */}
      <Container maxW="6xl" py={16}>
        <Heading textAlign="center" mb={10}>
          Trusted by founders & creators
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {[
            {
              name: "Aman Verma",
              role: "Startup Founder",
              text: "Adchain helped us scale influencer campaigns with real ROI tracking.",
            },
            {
              name: "Simran Kaur",
              role: "Lifestyle Influencer",
              text: "This platform feels professional and fair. No fake brands.",
            },
          ].map((t, i) => (
            <Box
              key={i}
              bg={cardBg}
              p={6}
              borderRadius="xl"
              border="1px solid #eee"
            >
              <Icon as={MdVerified} color="green.400" mb={2} />
              <Text mb={4}>"{t.text}"</Text>
              <Text fontWeight="bold">{t.name}</Text>
              <Text fontSize="sm" color="gray.500">
                {t.role}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      {/* CTA */}
      <Container maxW="6xl" py={20} textAlign="center">
        <Box
          bg="orange.500"
          color="white"
          p={12}
          borderRadius="2xl"
        >
          <Heading mb={4}>Ready to launch smarter campaigns?</Heading>
          <Text mb={6}>Join Adchain and grow faster with data-driven marketing.</Text>
          <Button
            as={RouterLink}
            to="/signup"
            size="lg"
            colorScheme="blackAlpha"
          >
            Get Started Free
          </Button>
        </Box>
      </Container>

      <Footer />
    </Box>
  );
}
export default Home;

