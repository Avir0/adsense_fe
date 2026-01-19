
// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   Heading,
//   Text,
//   Button,
//   VStack,
//   HStack,
//   IconButton,
//   useToast,
//   Drawer,
//   DrawerBody,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   useDisclosure,
//   FormControl,
//   FormLabel,
//   Input,
//   Textarea,
//   Stack,
//   Flex,
// } from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';
// import { FaUserEdit, FaBars } from 'react-icons/fa';
// import axios from 'axios';
// import Navbar from '../components/Navbar.jsx';
// import Footer from '../components/Footer.jsx';
// import { useAuth } from '../contexts/AuthContext.jsx';

// function InfluencerDashboard() {
//   const { user } = useAuth();
//   const navigate = useNavigate();
//   const toast = useToast();
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const [ads, setAds] = useState([]);
//   const [acceptedAds, setAcceptedAds] = useState([]);
//   const [proofData, setProofData] = useState({ link: '', description: '' });
//   const [selectedAd, setSelectedAd] = useState(null);

//   useEffect(() => {
//     const fetchAds = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const res = await axios.get('https://ad-chain-backend.vercel.app/api/ads', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setAds(res.data);
//       } catch (err) {
//         console.error('Error fetching ads:', err);
//       }
//     };

//     const fetchAcceptedAds = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const res = await axios.get('https://ad-chain-backend.vercel.app/api/ads/accepted', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setAcceptedAds(res.data);
//       } catch (err) {
//         console.error('Error fetching accepted ads:', err);
//       }
//     };

//     fetchAds();
//     fetchAcceptedAds();
//   }, []);

//   const handleAcceptAd = async (adId) => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.post(`https://ad-chain-backend.vercel.app/api/ads/${adId}/accept`, {}, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setAds(ads.filter((ad) => ad._id !== adId));
//       const res = await axios.get('https://ad-chain-backend.vercel.app/api/ads/accepted', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setAcceptedAds(res.data);
//       toast({
//         title: 'Ad Accepted',
//         description: 'The ad has been accepted successfully.',
//         status: 'success',
//         duration: 3000,
//         isClosable: true,
//       });
//     } catch (err) {
//       toast({
//         title: 'Error',
//         description: err.response?.data?.message || 'Failed to accept ad',
//         status: 'error',
//         duration: 3000,
//         isClosable: true,
//       });
//     }
//   };

//   const handleSubmitProof = async (adId) => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.post(
//         `https://ad-chain-backend.vercel.app/api/ads/${adId}/submit-proof`,
//         proofData,
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );
//       const res = await axios.get('https://ad-chain-backend.vercel.app/api/ads/accepted', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setAcceptedAds(res.data);
//       setProofData({ link: '', description: '' });
//       setSelectedAd(null);
//       toast({
//         title: 'Proof Submitted',
//         description: 'Your proof has been submitted successfully.',
//         status: 'success',
//         duration: 3000,
//         isClosable: true,
//       });
//     } catch (err) {
//       toast({
//         title: 'Error',
//         description: err.response?.data?.message || 'Failed to submit proof',
//         status: 'error',
//         duration: 3000,
//         isClosable: true,
//       });
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <Box minH="calc(100vh - 160px)" p={{ base: 4, md: 6 }} bgGradient="linear(to-br, gray.50, gray.100)">
//         <Flex justify="space-between" align="center" mb={6} flexDir={{ base: 'column', md: 'row' }} gap={4}>
//           <HStack spacing={4} w="100%" justify={{ base: 'space-between', md: 'flex-start' }}>
//             <IconButton
//               icon={<FaBars />}
//               colorScheme="orange"
//               onClick={onOpen}
//               aria-label="Open Sidebar"
//               boxShadow="md"
//               _hover={{ transform: 'scale(1.05)', bg: 'orange.400', color: 'white' }}
//               transition="all 0.2s"
//             />
//             <Heading size="lg" color="orange.600">Influencer Dashboard</Heading>
//           </HStack>
//           <IconButton
//             icon={<FaUserEdit />}
//             colorScheme="orange"
//             onClick={() => navigate('/influencer/profile')}
//             aria-label="Edit Profile"
//             boxShadow="md"
//             _hover={{ transform: 'scale(1.05)', bg: 'orange.400', color: 'white' }}
//             transition="all 0.2s"
//           />
//         </Flex>

//         <VStack spacing={5} align="stretch">
//           <Text fontSize={{ base: 'md', md: 'xl' }} fontWeight="semibold" color="gray.700">
//             Welcome, <Text as="span" color="orange.600">{user.name}</Text>!
//           </Text>
//           <Text fontSize={{ base: 'sm', md: 'lg' }} color="gray.600">
//             Ad Feed (Matching Your Categories:{' '}
//             <Text as="span" fontWeight="medium" color="orange.500">
//               {user.categories.join(', ')}
//             </Text>
//             )
//           </Text>

//           {ads.length === 0 ? (
//             <Text>No ads available in your categories.</Text>
//           ) : (
//             ads.map((ad) => (
//               <Box
//                 key={ad._id}
//                 p={5}
//                 bg="white"
//                 borderRadius="lg"
//                 boxShadow="md"
//                 _hover={{ boxShadow: 'xl', transform: 'scale(1.01)', bg: 'orange.50' }}
//                 transition="all 0.2s"
//               >
//                 <Text fontSize="xl" fontWeight="bold" color="orange.600">{ad.title}</Text>
//                 <Text mt={1} color="gray.700">{ad.description}</Text>
//                 <Text mt={1}><b>Budget:</b> ${ad.budget}</Text>
//                 <Text><b>Category:</b> {ad.category}</Text>
//                 <Text><b>Posted by:</b> {ad.companyId.name}</Text>
//                 <Button
//                   mt={3}
//                   colorScheme="orange"
//                   onClick={() => handleAcceptAd(ad._id)}
//                   _hover={{ bg: 'orange.500' }}
//                   width="full"
//                 >
//                   Accept Ad
//                 </Button>
//               </Box>
//             ))
//           )}
//         </VStack>
//       </Box>

//       <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
//         <DrawerOverlay />
//         <DrawerContent>
//           <DrawerCloseButton />
//           <DrawerHeader>Accepted Ads</DrawerHeader>
//           <DrawerBody>
//             {acceptedAds.length === 0 ? (
//               <Text>No accepted ads yet.</Text>
//             ) : (
//               acceptedAds.map((ad) => (
//                 <Box
//                   key={ad._id}
//                   p={4}
//                   mb={4}
//                   bg="gray.100"
//                   borderRadius="md"
//                   boxShadow="sm"
//                   _hover={{ boxShadow: 'md', bg: 'orange.100' }}
//                   transition="all 0.2s"
//                 >
//                   <Text fontWeight="bold" color="orange.600">{ad.title}</Text>
//                   <Text>{ad.description}</Text>
//                   <Text><b>Budget:</b> ${ad.budget}</Text>
//                   <Text><b>Category:</b> {ad.category}</Text>
//                   <Text><b>Posted by:</b> {ad.companyId.name}</Text>

//                   {ad.proof && ad.proof.submittedAt ? (
//                     <Box mt={2}>
//                       <Text fontWeight="bold">Proof Submitted:</Text>
//                       <Text>
//                         Link:{' '}
//                         <a
//                           href={ad.proof.link}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           style={{ color: 'blue' }}
//                         >
//                           {ad.proof.link}
//                         </a>
//                       </Text>
//                       <Text>Description: {ad.proof.description}</Text>
//                       <Text>Submitted At: {new Date(ad.proof.submittedAt).toLocaleDateString()}</Text>
//                     </Box>
//                   ) : (
//                     <Button mt={2} colorScheme="orange" onClick={() => setSelectedAd(ad)} width="full">
//                       Submit Proof
//                     </Button>
//                   )}

//                   {selectedAd && selectedAd._id === ad._id && (
//                     <Box mt={4}>
//                       <FormControl>
//                         <FormLabel>Link to Posted Content</FormLabel>
//                         <Input
//                           value={proofData.link}
//                           onChange={(e) => setProofData({ ...proofData, link: e.target.value })}
//                           placeholder="https://example.com"
//                           bg="white"
//                         />
//                       </FormControl>
//                       <FormControl mt={2}>
//                         <FormLabel>Description</FormLabel>
//                         <Textarea
//                           value={proofData.description}
//                           onChange={(e) => setProofData({ ...proofData, description: e.target.value })}
//                           placeholder="Describe the content you posted"
//                           bg="white"
//                         />
//                       </FormControl>
//                       <Stack mt={3} direction={{ base: 'column', sm: 'row' }}>
//                         <Button colorScheme="orange" onClick={() => handleSubmitProof(ad._id)}>
//                           Submit Proof
//                         </Button>
//                         <Button onClick={() => setSelectedAd(null)}>Cancel</Button>
//                       </Stack>
//                     </Box>
//                   )}
//                 </Box>
//               ))
//             )}
//           </DrawerBody>
//         </DrawerContent>
//       </Drawer>
//       <Footer />
//     </>
//   );
// }

// export default InfluencerDashboard;


import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Input,
  Textarea,
  Badge,
  useToast,
  SimpleGrid,
  Divider,
} from "@chakra-ui/react";
import axios from "axios";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { useAuth } from "../contexts/AuthContext.jsx";
// import AppLayout from "../components/AppLayout";

function InfluencerDashboard() {
  const { user } = useAuth();
  const toast = useToast();

  const [ads, setAds] = useState([]);
  const [acceptedAds, setAcceptedAds] = useState([]);
  const [proofData, setProofData] = useState({ link: "", description: "" });
  const [selectedAd, setSelectedAd] = useState(null);

  // 🤖 AI BOT
  const [botInput, setBotInput] = useState("");
  const [botMessages, setBotMessages] = useState([
    { from: "bot", text: "Hi! I am your Adchain AI assistant. Ask me anything about content, captions, hashtags, engagement etc." }
  ]);

  const token = localStorage.getItem("token");

  const fetchAds = async () => {
    const res = await axios.get("https://ad-chain-backend.vercel.app/api/ads", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setAds(res.data);
  };

  const fetchAcceptedAds = async () => {
    const res = await axios.get("https://ad-chain-backend.vercel.app/api/ads/accepted", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setAcceptedAds(res.data);
  };

  useEffect(() => {
    if (user) {
      fetchAds();
      fetchAcceptedAds();
    }
  }, [user]);

  const handleAcceptAd = async (id) => {
    await axios.post(
      `https://ad-chain-backend.vercel.app/api/ads/${id}/accept`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );

    toast({ title: "Ad accepted successfully", status: "success" });

    fetchAds();
    fetchAcceptedAds();
  };

  const handleSubmitProof = async (id) => {
    await axios.post(
      `https://ad-chain-backend.vercel.app/api/ads/${id}/submit-proof`,
      proofData,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    toast({ title: "Proof submitted", status: "success" });

    setSelectedAd(null);
    setProofData({ link: "", description: "" });

    fetchAcceptedAds();
  };

  // 🤖 Bot reply logic
  const handleBotSend = () => {
    if (!botInput.trim()) return;

    const userMsg = { from: "user", text: botInput };

    let reply = "Try using engaging hook, add CTA, and 5-10 trending hashtags.";
    if (botInput.toLowerCase().includes("caption"))
      reply = "Here is a strong caption: 'Level up your lifestyle with this 🔥 product. Don’t miss out!' #ad #viral";
    if (botInput.toLowerCase().includes("hashtags"))
      reply = "#adchain #viral #influencer #trending #reels #explore";
    if (botInput.toLowerCase().includes("engagement"))
      reply = "Post at peak time, ask questions in caption, use reels & trending audio.";

    setBotMessages((prev) => [
      ...prev,
      userMsg,
      { from: "bot", text: reply },
    ]);

    setBotInput("");
  };

  return (
    <>
      <Navbar />

      <Box p={6} bg="gray.50" minH="100vh">
        <Heading mb={2}>Influencer Dashboard</Heading>
        <Text mb={6}>Welcome, {user?.name}</Text>

        <Tabs colorScheme="orange" variant="soft-rounded">
          <TabList>
            <Tab>Ad Feed</Tab>
            <Tab>Accepted Ads</Tab>
            <Tab>Earnings</Tab>
            <Tab>🤖 AI Assistant</Tab>
          </TabList>

          <TabPanels>
            {/* FEED */}
            <TabPanel>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                {ads.map((ad) => (
                  <Box key={ad._id} p={4} bg="white" borderRadius="lg">
                    <Heading size="sm">{ad.title}</Heading>
                    <Text>{ad.description}</Text>
                    <Text>Budget: ${ad.budget}</Text>
                    <Button mt={3} colorScheme="orange" onClick={() => handleAcceptAd(ad._id)}>
                      Accept Ad
                    </Button>
                  </Box>
                ))}
              </SimpleGrid>
            </TabPanel>

            {/* ACCEPTED */}
            <TabPanel>
              {acceptedAds.map((ad) => (
                <Box key={ad._id} p={4} bg="white" borderRadius="lg" mb={4}>
                  <Heading size="sm">{ad.title}</Heading>
                  <Text>Status: <Badge colorScheme="green">Accepted</Badge></Text>

                  {ad.proof?.submittedAt ? (
                    <Text mt={2}>✅ Proof Submitted</Text>
                  ) : (
                    <>
                      <Button size="sm" mt={2} onClick={() => setSelectedAd(ad)}>
                        Submit Proof
                      </Button>

                      {selectedAd?._id === ad._id && (
                        <Box mt={3}>
                          <Input
                            placeholder="Post link"
                            value={proofData.link}
                            onChange={(e) =>
                              setProofData({ ...proofData, link: e.target.value })
                            }
                          />
                          <Textarea
                            mt={2}
                            placeholder="Description"
                            value={proofData.description}
                            onChange={(e) =>
                              setProofData({ ...proofData, description: e.target.value })
                            }
                          />
                          <Button mt={2} colorScheme="orange" onClick={() => handleSubmitProof(ad._id)}>
                            Submit
                          </Button>
                        </Box>
                      )}
                    </>
                  )}
                </Box>
              ))}
            </TabPanel>

            {/* EARNINGS */}
            <TabPanel>
              <Heading size="sm">Total Earnings</Heading>
              <Text mt={2}>₹ {acceptedAds.filter(a => a.proof?.submittedAt).length * 500}</Text>
              <Text fontSize="sm">(Demo logic)</Text>
            </TabPanel>

            {/* BOT */}
            <TabPanel>
              <Box bg="white" p={4} borderRadius="lg">
                <VStack align="stretch" spacing={3} maxH="400px" overflowY="auto">
                  {botMessages.map((msg, i) => (
                    <Box
                      key={i}
                      alignSelf={msg.from === "user" ? "flex-end" : "flex-start"}
                      bg={msg.from === "user" ? "orange.100" : "gray.100"}
                      p={2}
                      borderRadius="md"
                    >
                      {msg.text}
                    </Box>
                  ))}
                </VStack>

                <HStack mt={3}>
                  <Input
                    placeholder="Ask something..."
                    value={botInput}
                    onChange={(e) => setBotInput(e.target.value)}
                  />
                  <Button onClick={handleBotSend}>Send</Button>
                </HStack>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>

      <Footer />
    </>
  );
}

export default InfluencerDashboard;

