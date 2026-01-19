// // import React from 'react';
// // import {
// //   Box,
// //   Button,
// //   Container,
// //   Flex,
// //   Heading,
// //   Text,
// //   Image,
// //   Stack,
// //   SimpleGrid,
// //   Icon,
// //   useColorModeValue,
// //   Badge,
// // } from '@chakra-ui/react';
// // import { FaArrowRight, FaChartLine, FaSearch, FaHandshake } from 'react-icons/fa';
// // import { MdVerified } from 'react-icons/md';
// // import { Link as RouterLink } from 'react-router-dom';

// // import Navbar from '../components/Navbar.jsx';
// // import Footer from '../components/Footer.jsx';

// // const Home = () => {
// //   const bgGradient = useColorModeValue(
// //     'linear(to-r, red.400, orange.400)',
// //     'linear(to-r, red.500, orange.500)'
// //   );

// //   const stats = [
// //     { value: '10,000+', label: 'Active Influencers' },
// //     { value: '2,500+', label: 'Brand Partners' },
// //     { value: '$5M+', label: 'Paid to Creators' },
// //     { value: '95%', label: 'Satisfaction Rate' },
// //   ];

// //   const features = [
// //     {
// //       icon: FaSearch,
// //       title: 'Smart Matching',
// //       text: 'Our AI finds perfect influencer-brand matches based on audience demographics and engagement',
// //     },
// //     {
// //       icon: FaChartLine,
// //       title: 'Performance Analytics',
// //       text: 'Real-time campaign tracking with detailed ROI metrics and audience insights',
// //     },
// //     {
// //       icon: FaHandshake,
// //       title: 'Secure Payments',
// //       text: 'Escrow system ensures creators get paid and brands get quality content',
// //     },
// //   ];

// //   const testimonials = [
// //     {
// //       name: 'Sarah K.',
// //       role: 'Beauty Influencer',
// //       content: 'Grew my brand collaborations by 300% in just 3 months using this platform!',
// //       avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
// //     },
// //     {
// //       name: 'Mike T.',
// //       role: 'Marketing Director, Nike',
// //       content: 'Found perfect micro-influencers for our campaign with incredible ROI.',
// //       avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
// //     },
// //   ];

// //   return (
// //     <Box>
// //       {/* Navbar */}
// //       <Navbar />

// //       {/* Hero Section */}
// //       <Box bgGradient={bgGradient} color="white" py={20} px={4}>
// //         <Container maxW="6xl">
// //           <Flex direction={{ base: 'column', md: 'row' }} align="center">
// //             <Box flex={1} mb={{ base: 8, md: 0 }}>
// //               <Heading as="h1" size="2xl" mb={4} lineHeight="1.2">
// //                 Connect Brands with <br />Authentic Influencers
// //               </Heading>
// //               <Text fontSize="xl" mb={8}>
// //                 The leading platform for influencer marketing campaigns with verified audience data
// //               </Text>
// //               <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
// //                 <Button
// //                   as={RouterLink}
// //                   to="/signup"
// //                   size="lg"
// //                   colorScheme="whiteAlpha"
// //                   rightIcon={<FaArrowRight />}
// //                 >
// //                   Sign Up
// //                 </Button>
// //                 <Button
// //                   as={RouterLink}
// //                   to="/login"
// //                   size="lg"
// //                   variant="outline"
// //                   color="white"
// //                   _hover={{ bg: 'whiteAlpha.200' }}
// //                   rightIcon={<FaArrowRight />}
// //                 >
// //                   Login
// //                 </Button>
// //               </Stack>
// //             </Box>
// //             <Box flex={1} display="flex" justifyContent="center">
// //               <Image
// //                 src="https://illustrations.popsy.co/amber/digital-nomad.svg"
// //                 alt="Influencer marketing illustration"
// //                 maxW="500px"
// //                 w="100%"
// //               />
// //             </Box>
// //           </Flex>
// //         </Container>
// //       </Box>

// //       {/* Stats Section */}
// //       <Box py={16} bg={useColorModeValue('gray.50', 'gray.800')}>
// //         <Container maxW="6xl">
// //           <SimpleGrid columns={{ base: 2, md: 4 }} spacing={10}>
// //             {stats.map((stat) => (
// //               <Box key={stat.label} textAlign="center">
// //                 <Text fontSize="4xl" fontWeight="bold" mb={2}>
// //                   {stat.value}
// //                 </Text>
// //                 <Text color={useColorModeValue('gray.600', 'gray.400')}>
// //                   {stat.label}
// //                 </Text>
// //               </Box>
// //             ))}
// //           </SimpleGrid>
// //         </Container>
// //       </Box>

// //       {/* Features Section */}
// //       <Box py={16}>
// //         <Container maxW="6xl">
// //           <Heading as="h2" size="xl" textAlign="center" mb={12}>
// //             Why Choose Our Platform
// //           </Heading>
// //           <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
// //             {features.map((feature, index) => (
// //               <Box key={index} p={6} boxShadow="lg" borderRadius="lg">
// //                 <Icon as={feature.icon} w={10} h={10} color="red.400" mb={4} />
// //                 <Heading as="h3" size="md" mb={3}>
// //                   {feature.title}
// //                 </Heading>
// //                 <Text color={useColorModeValue('gray.600', 'gray.400')}>
// //                   {feature.text}
// //                 </Text>
// //               </Box>
// //             ))}
// //           </SimpleGrid>
// //         </Container>
// //       </Box>

// //       {/* How It Works Section */}
// //       <Box py={16} bg={useColorModeValue('gray.50', 'gray.800')}>
// //         <Container maxW="6xl">
// //           <Heading as="h2" size="xl" textAlign="center" mb={12}>
// //             How It Works
// //           </Heading>
// //           <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
// //             {[1, 2, 3].map((step, idx) => {
// //               const steps = [
// //                 {
// //                   title: 'Create Profile',
// //                   description: 'Brands or influencers set up their verified profiles',
// //                 },
// //                 {
// //                   title: 'Find Matches',
// //                   description: 'Our algorithm suggests perfect collaboration partners',
// //                 },
// //                 {
// //                   title: 'Launch Campaign',
// //                   description: 'Manage everything from brief to payment in one dashboard',
// //                 },
// //               ];
// //               return (
// //                 <Box key={idx} textAlign="center">
// //                   <Badge
// //                     fontSize="xl"
// //                     p={2}
// //                     borderRadius="full"
// //                     bgGradient={bgGradient}
// //                     color="white"
// //                     mb={4}
// //                   >
// //                     {step}
// //                   </Badge>
// //                   <Heading as="h3" size="md" mb={2}>
// //                     {steps[idx].title}
// //                   </Heading>
// //                   <Text color={useColorModeValue('gray.600', 'gray.400')}>
// //                     {steps[idx].description}
// //                   </Text>
// //                 </Box>
// //               );
// //             })}
// //           </SimpleGrid>
// //         </Container>
// //       </Box>

// //       {/* Testimonials Section */}
// //       <Box py={16}>
// //         <Container maxW="6xl">
// //           <Heading as="h2" size="xl" textAlign="center" mb={12}>
// //             What Our Users Say
// //           </Heading>
// //           <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
// //             {testimonials.map((testimonial, index) => (
// //               <Box
// //                 key={index}
// //                 p={6}
// //                 borderWidth="1px"
// //                 borderRadius="lg"
// //                 position="relative"
// //               >
// //                 <Box
// //                   position="absolute"
// //                   top="-4"
// //                   left="6"
// //                   bg="white"
// //                   p={1}
// //                   borderRadius="full"
// //                   boxShadow="md"
// //                 >
// //                   <Icon as={MdVerified} w={6} h={6} color="red.400" />
// //                 </Box>
// //                 <Text mb={4} fontStyle="italic">
// //                   "{testimonial.content}"
// //                 </Text>
// //                 <Flex align="center">
// //                   <Image
// //                     src={testimonial.avatar}
// //                     alt={testimonial.name}
// //                     borderRadius="full"
// //                     boxSize="50px"
// //                     mr={4}
// //                   />
// //                   <Box>
// //                     <Text fontWeight="bold">{testimonial.name}</Text>
// //                     <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
// //                       {testimonial.role}
// //                     </Text>
// //                   </Box>
// //                 </Flex>
// //               </Box>
// //             ))}
// //           </SimpleGrid>
// //         </Container>
// //       </Box>

// //       {/* CTA Section */}
// //       <Box py={16} bgGradient={bgGradient} color="white">
// //         <Container maxW="2xl" textAlign="center">
// //           <Heading as="h2" size="xl" mb={6}>
// //             Ready to Grow Your Brand?
// //           </Heading>
// //           <Text fontSize="xl" mb={8}>
// //             Join thousands of brands and creators already collaborating on our platform
// //           </Text>
// //           <Button
// //             as={RouterLink}
// //             to="/signup"
// //             size="lg"
// //             colorScheme="whiteAlpha"
// //             rightIcon={<FaArrowRight />}
// //             mb={4}
// //             mx={2}
// //           >
// //             Sign Up
// //           </Button>
// //           <Button
// //             size="lg"
// //             variant="outline"
// //             color="white"
// //             _hover={{ bg: 'whiteAlpha.200' }}
// //             mx={2}
// //           >
// //             See How It Works
// //           </Button>
// //         </Container>
// //       </Box>

// //       {/* Footer */}
// //       <Footer />
// //     </Box>
// //   );
// // };

// // export default Home;


// import React from "react";
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
// } from "@chakra-ui/react";
// import { FaArrowRight, FaChartLine, FaSearch, FaHandshake } from "react-icons/fa";
// import { MdVerified } from "react-icons/md";
// import { Link as RouterLink } from "react-router-dom";

// import Navbar from "../components/Navbar.jsx";
// import Footer from "../components/Footer.jsx";

// const Home = () => {
//   const bgGradient = "linear(to-br, #ff6a4a, #ff9f43)";
//   const softBg = useColorModeValue("gray.50", "gray.900");

//   const stats = [
//     { value: "10,000+", label: "Active Influencers" },
//     { value: "2,500+", label: "Brand Partners" },
//     { value: "$5M+", label: "Paid to Creators" },
//     { value: "95%", label: "Satisfaction Rate" },
//   ];

//   const features = [
//     {
//       icon: FaSearch,
//       title: "Smart Matching",
//       text: "AI-powered matching connects brands with the most relevant creators.",
//     },
//     {
//       icon: FaChartLine,
//       title: "Performance Analytics",
//       text: "Track campaign ROI, engagement, reach, and conversions in real-time.",
//     },
//     {
//       icon: FaHandshake,
//       title: "Secure Payments",
//       text: "Built-in payment tracking ensures transparency for brands and creators.",
//     },
//   ];

//   return (
//     <Box w="100%" overflowX="hidden">
//       <Navbar />

//       {/* ================= HERO ================= */}
//       <Box bgGradient={bgGradient} color="white">
//         <Container maxW="7xl" px={{ base: 5, md: 10 }} py={{ base: 14, md: 20 }}>
//           <Flex
//             direction={{ base: "column", md: "row" }}
//             align="center"
//             gap={10}
//           >
//             <Box flex={1}>
//               <Heading
//                 fontSize={{ base: "32px", md: "56px" }}
//                 lineHeight="1.1"
//                 mb={5}
//               >
//                 Connect Brands with <br /> Authentic Influencers
//               </Heading>

//               <Text
//                 fontSize={{ base: "md", md: "xl" }}
//                 opacity={0.95}
//                 maxW="520px"
//                 mb={8}
//               >
//                 A modern influencer marketing platform helping brands scale with
//                 data-driven creator collaborations.
//               </Text>

//               <Stack direction={{ base: "column", sm: "row" }} spacing={4}>
//                 <Button
//                   as={RouterLink}
//                   to="/signup"
//                   size="lg"
//                   bg="white"
//                   color="black"
//                   _hover={{ bg: "gray.100" }}
//                   rightIcon={<FaArrowRight />}
//                 >
//                   Get Started
//                 </Button>

//                 <Button
//                   as={RouterLink}
//                   to="/login"
//                   size="lg"
//                   variant="outline"
//                   color="white"
//                   borderColor="white"
//                   _hover={{ bg: "whiteAlpha.200" }}
//                 >
//                   Login
//                 </Button>
//               </Stack>
//             </Box>

//             <Box flex={1} textAlign="center">
//               <Image
//                 src="https://illustrations.popsy.co/amber/digital-nomad.svg"
//                 maxW={{ base: "280px", md: "520px" }}
//                 mx="auto"
//               />
//             </Box>
//           </Flex>
//         </Container>
//       </Box>

//       {/* ================= STATS ================= */}
//       <Box bg={softBg}>
//         <Container maxW="7xl" px={5} py={14}>
//           <SimpleGrid columns={{ base: 2, md: 4 }} spacing={10}>
//             {stats.map((s) => (
//               <Box key={s.label} textAlign="center">
//                 <Heading fontSize={{ base: "28px", md: "40px" }}>
//                   {s.value}
//                 </Heading>
//                 <Text color="gray.500">{s.label}</Text>
//               </Box>
//             ))}
//           </SimpleGrid>
//         </Container>
//       </Box>

//       {/* ================= FEATURES ================= */}
//       <Container maxW="7xl" px={5} py={20}>
//         <Heading textAlign="center" mb={12}>
//           Why Companies Choose Adchain
//         </Heading>

//         <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
//           {features.map((f, i) => (
//             <Box
//               key={i}
//               p={8}
//               borderRadius="2xl"
//               bg="white"
//               boxShadow="lg"
//             >
//               <Icon as={f.icon} fontSize="28px" color="orange.400" mb={4} />
//               <Heading size="md" mb={2}>
//                 {f.title}
//               </Heading>
//               <Text color="gray.600">{f.text}</Text>
//             </Box>
//           ))}
//         </SimpleGrid>
//       </Container>

//       {/* ================= HOW IT WORKS ================= */}
//       <Box bg={softBg}>
//         <Container maxW="7xl" px={5} py={20}>
//           <Heading textAlign="center" mb={12}>
//             How It Works
//           </Heading>

//           <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
//             {[
//               ["Create Profile", "Set goals and create your campaign."],
//               ["Find Influencers", "Get matched with relevant creators."],
//               ["Track Performance", "Monitor results and optimize ROI."],
//             ].map(([title, desc], i) => (
//               <Box key={i} textAlign="center">
//                 <Badge fontSize="lg" px={4} py={2} borderRadius="full" mb={4}>
//                   Step {i + 1}
//                 </Badge>
//                 <Heading size="md" mb={2}>
//                   {title}
//                 </Heading>
//                 <Text color="gray.600">{desc}</Text>
//               </Box>
//             ))}
//           </SimpleGrid>
//         </Container>
//       </Box>

//       {/* ================= CTA ================= */}
//       <Box bgGradient={bgGradient} color="white">
//         <Container maxW="5xl" px={5} py={20} textAlign="center">
//           <Heading mb={6}>
//             Start scaling your brand with influencer marketing
//           </Heading>

//           <Text fontSize="lg" opacity={0.9} mb={8}>
//             Join growing startups and enterprises using Adchain to drive
//             measurable ROI.
//           </Text>

//           <Button
//             as={RouterLink}
//             to="/signup"
//             size="lg"
//             bg="white"
//             color="black"
//             _hover={{ bg: "gray.100" }}
//           >
//             Create Free Account
//           </Button>
//         </Container>
//       </Box>

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
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaArrowRight, FaChartLine, FaSearch, FaHandshake } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  const gradient = "linear(to-br, #ff6a4a, #ff9f43)";
  const muted = useColorModeValue("gray.600", "gray.400");
  const softBg = useColorModeValue("gray.50", "gray.900");

  return (
    <Box overflowX="hidden">
      <Navbar />

      {/* HERO */}
      <Box bgGradient={gradient} color="white">
        <Container maxW="7xl" py={{ base: 14, md: 24 }} px={6}>
          <Flex
            direction={{ base: "column-reverse", md: "row" }}
            align="center"
            gap={{ base: 12, md: 16 }}
          >
            <Box flex={1} textAlign={{ base: "center", md: "left" }}>
              <Badge mb={4} px={3} py={1} borderRadius="full">
                🚀 Trusted by growing startups
              </Badge>

              <Heading
                fontSize={{ base: "30px", md: "64px" }}
                lineHeight="1.05"
                mb={5}
              >
                Influencer marketing <br /> built for modern brands
              </Heading>

              <Text
                fontSize={{ base: "md", md: "xl" }}
                opacity={0.95}
                maxW="480px"
                mx={{ base: "auto", md: 0 }}
                mb={10}
              >
                Discover, collaborate, and measure influencer campaigns with
                performance-driven analytics.
              </Text>

              <Stack
                direction="column"
                spacing={4}
                maxW="420px"
                mx={{ base: "auto", md: 0 }}
              >
                <Button
                  size="lg"
                  bg="white"
                  color="black"
                  _hover={{ bg: "gray.100" }}
                  rightIcon={<FaArrowRight />}
                  as={RouterLink}
                  to="/signup"
                  w="100%"
                >
                  Get Started Free
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  color="white"
                  borderColor="white"
                  as={RouterLink}
                  to="/login"
                  w="100%"
                >
                  Login to Dashboard
                </Button>
              </Stack>
            </Box>

            <Box flex={1} textAlign="center">
              <Image
                src="https://illustrations.popsy.co/amber/digital-nomad.svg"
                maxW={{ base: "240px", sm: "300px", md: "520px" }}
                mx="auto"
              />
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* SOCIAL PROOF */}
      <Box bg={softBg}>
        <Container maxW="7xl" py={14} px={6}>
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={10}>
            {[
              ["10k+", "Active Creators"],
              ["2.5k+", "Brands onboarded"],
              ["$5M+", "Creator payouts"],
              ["95%", "Client retention"],
            ].map(([v, l]) => (
              <Box key={l} textAlign="center">
                <Heading fontSize={{ base: "28px", md: "42px" }}>{v}</Heading>
                <Text color={muted}>{l}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* FEATURES */}
      <Container maxW="7xl" py={24} px={6}>
        <Box textAlign="center" mb={14}>
          <Heading mb={4}>Built for high-performing teams</Heading>
          <Text color={muted}>
            Everything you need to scale influencer marketing like a real growth
            channel.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {[
            {
              icon: FaSearch,
              title: "Smart Discovery",
              desc: "Find creators based on engagement, niche, authenticity, and audience.",
            },
            {
              icon: FaChartLine,
              title: "Real-time Analytics",
              desc: "Track ROI, reach, engagement, and conversion metrics per campaign.",
            },
            {
              icon: FaHandshake,
              title: "Collaboration Hub",
              desc: "Manage briefs, approvals, proofs, and payments in one place.",
            },
          ].map((f, i) => (
            <Box
              key={i}
              p={8}
              borderRadius="2xl"
              bg="white"
              boxShadow="xl"
            >
              <Icon as={f.icon} fontSize="28px" color="orange.400" mb={4} />
              <Heading size="md" mb={3}>
                {f.title}
              </Heading>
              <Text color={muted}>{f.desc}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      {/* CTA */}
      <Box bgGradient={gradient} color="white">
        <Container maxW="6xl" py={24} px={6} textAlign="center">
          <Heading mb={6}>
            Ready to turn influencer marketing into a growth engine?
          </Heading>
          <Text mb={10} opacity={0.9}>
            Join brands using Adchain to drive measurable revenue, not vanity
            metrics.
          </Text>

          <Button
            size="lg"
            bg="white"
            color="black"
            _hover={{ bg: "gray.100" }}
            as={RouterLink}
            to="/signup"
          >
            Create Free Account
          </Button>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default Home;


