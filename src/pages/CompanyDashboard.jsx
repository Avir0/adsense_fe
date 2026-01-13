

// // // import React, { useState, useEffect } from 'react';
// // // import {
// // //   Box,
// // //   Heading,
// // //   Text,
// // //   VStack,
// // //   HStack,
// // //   IconButton,
// // //   Drawer,
// // //   DrawerBody,
// // //   DrawerHeader,
// // //   DrawerOverlay,
// // //   DrawerContent,
// // //   DrawerCloseButton,
// // //   useDisclosure,
// // //   Badge,
// // //   Popover,
// // //   PopoverTrigger,
// // //   PopoverContent,
// // //   PopoverHeader,
// // //   PopoverBody,
// // //   PopoverCloseButton,
// // //   useBreakpointValue,
// // // } from '@chakra-ui/react';
// // // import { FaUserEdit, FaBars, FaBell } from 'react-icons/fa';
// // // import { useNavigate } from 'react-router-dom';
// // // import axios from 'axios';
// // // import Navbar from '../components/Navbar.jsx';
// // // import Footer from '../components/Footer.jsx';
// // // import CreateAd from '../components/CreateAd.jsx';
// // // import { useAuth } from '../contexts/AuthContext.jsx';

// // // function CompanyDashboard() {
// // //   const { user } = useAuth();
// // //   const navigate = useNavigate();
// // //   const { isOpen, onOpen, onClose } = useDisclosure();
// // //   const {
// // //     isOpen: isNotifOpen,
// // //     onOpen: onNotifOpen,
// // //     onClose: onNotifClose,
// // //   } = useDisclosure();
// // //   const [ads, setAds] = useState([]);
// // //   const [notifications, setNotifications] = useState([]);
// // //   const [unreadNotifications, setUnreadNotifications] = useState(0);

// // //   const fetchAds = async () => {
// // //     try {
// // //       const token = localStorage.getItem('token');
// // //       const res = await axios.get('https://ad-chain-backend.vercel.app/api/ads/my-ads', {
// // //         headers: { Authorization: `Bearer ${token}` },
// // //       });
// // //       setAds(res.data);
// // //     } catch (err) {
// // //       console.error('Error fetching ads:', err);
// // //     }
// // //   };

// // //   const fetchNotifications = async () => {
// // //     try {
// // //       const token = localStorage.getItem('token');
// // //       const res = await axios.get('https://ad-chain-backend.vercel.app/api/users/notifications', {
// // //         headers: { Authorization: `Bearer ${token}` },
// // //       });
// // //       setNotifications(res.data);
// // //       setUnreadNotifications(res.data.length);
// // //     } catch (err) {
// // //       console.error('Error fetching notifications:', err);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchAds();
// // //     fetchNotifications();
// // //   }, []);

// // //   const handleNotifOpen = () => {
// // //     setUnreadNotifications(0); // Mark as read
// // //     onNotifOpen();
// // //   };

// // //   return (
// // //     <>
// // //       <Navbar />
// // //       <Box minH="calc(100vh - 160px)" p={{ base: 4, md: 6 }} bg="gray.50">
// // //         <HStack
// // //           justify="space-between"
// // //           align="start"
// // //           mb={6}
// // //           flexDirection={{ base: 'column', md: 'row' }}
// // //         >
// // //           <HStack spacing={4} mb={{ base: 4, md: 0 }}>
// // //             <IconButton
// // //               icon={<FaBars />}
// // //               colorScheme="brand"
// // //               onClick={onOpen}
// // //               aria-label="Open Sidebar"
// // //             />
// // //             <Heading size={{ base: 'md', md: 'lg' }} color="brand.500">
// // //               Company Dashboard
// // //             </Heading>
// // //           </HStack>

// // //           <HStack spacing={4}>
// // //             <Popover>
// // //               <PopoverTrigger>
// // //                 <Box position="relative">
// // //                   <IconButton
// // //                     icon={<FaBell />}
// // //                     colorScheme="brand"
// // //                     onClick={handleNotifOpen}
// // //                     aria-label="Notifications"
// // //                   />
// // //                   {unreadNotifications > 0 && (
// // //                     <Badge
// // //                       position="absolute"
// // //                       top="-1"
// // //                       right="-1"
// // //                       colorScheme="red"
// // //                       borderRadius="full"
// // //                       px={2}
// // //                     >
// // //                       {unreadNotifications}
// // //                     </Badge>
// // //                   )}
// // //                 </Box>
// // //               </PopoverTrigger>
// // //               <PopoverContent>
// // //                 <PopoverHeader>Notifications</PopoverHeader>
// // //                 <PopoverCloseButton />
// // //                 <PopoverBody>
// // //                   {notifications.length === 0 ? (
// // //                     <Text>No notifications.</Text>
// // //                   ) : (
// // //                     notifications.map((notif, index) => (
// // //                       <Text key={index} mb={2} fontSize="sm">
// // //                         {notif.message} - {new Date(notif.createdAt).toLocaleDateString()}
// // //                       </Text>
// // //                     ))
// // //                   )}
// // //                 </PopoverBody>
// // //               </PopoverContent>
// // //             </Popover>

// // //             <IconButton
// // //               icon={<FaUserEdit />}
// // //               colorScheme="brand"
// // //               onClick={() => navigate('/company/profile')}
// // //               aria-label="Edit Profile"
// // //             />
// // //           </HStack>
// // //         </HStack>

// // //         <VStack spacing={6} align="stretch">
// // //           <Text fontSize={{ base: 'md', md: 'xl' }}>Welcome, {user.name}!</Text>
// // //           <CreateAd onAdCreated={fetchAds} />
// // //           <Text fontSize={{ base: 'md', md: 'lg' }}>Your Ads</Text>
// // //           {ads.length === 0 ? (
// // //             <Text>No ads created yet.</Text>
// // //           ) : (
// // //             ads.map((ad) => (
// // //               <Box
// // //                 key={ad._id}
// // //                 p={4}
// // //                 bg="white"
// // //                 borderRadius="md"
// // //                 boxShadow="md"
// // //                 overflowX="auto"
// // //               >
// // //                 <Text fontWeight="bold" fontSize="md">{ad.title}</Text>
// // //                 <Text>{ad.description}</Text>
// // //                 <Text>Budget: ${ad.budget}</Text>
// // //                 <Text>Category: {ad.category}</Text>
// // //                 <Text>Status: {ad.status}</Text>
// // //                 {ad.status === 'accepted' && ad.acceptedBy && (
// // //                   <Text>Accepted by: {ad.acceptedBy.name}</Text>
// // //                 )}
// // //               </Box>
// // //             ))
// // //           )}
// // //         </VStack>
// // //       </Box>

// // //       <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
// // //         <DrawerOverlay />
// // //         <DrawerContent>
// // //           <DrawerCloseButton />
// // //           <DrawerHeader>Accepted Ads</DrawerHeader>
// // //           <DrawerBody>
// // //             {ads.filter((ad) => ad.status === 'accepted').length === 0 ? (
// // //               <Text>No ads have been accepted yet.</Text>
// // //             ) : (
// // //               ads
// // //                 .filter((ad) => ad.status === 'accepted')
// // //                 .map((ad) => (
// // //                   <Box key={ad._id} p={4} mb={4} bg="gray.100" borderRadius="md">
// // //                     <Text fontWeight="bold">{ad.title}</Text>
// // //                     <Text>{ad.description}</Text>
// // //                     <Text>Budget: ${ad.budget}</Text>
// // //                     <Text>Category: {ad.category}</Text>
// // //                     <Text>Accepted by: {ad.acceptedBy.name}</Text>
// // //                     {ad.proof && ad.proof.submittedAt ? (
// // //                       <Box mt={2}>
// // //                         <Text fontWeight="bold">Proof Submitted:</Text>
// // //                         <Text>
// // //                           Link:{' '}
// // //                           <a href={ad.proof.link} target="_blank" rel="noopener noreferrer">
// // //                             {ad.proof.link}
// // //                           </a>
// // //                         </Text>
// // //                         <Text>Description: {ad.proof.description}</Text>
// // //                         <Text>
// // //                           Submitted At:{' '}
// // //                           {new Date(ad.proof.submittedAt).toLocaleDateString()}
// // //                         </Text>
// // //                       </Box>
// // //                     ) : (
// // //                       <Text mt={2}>Proof: Not submitted yet</Text>
// // //                     )}
// // //                   </Box>
// // //                 ))
// // //             )}
// // //           </DrawerBody>
// // //         </DrawerContent>
// // //       </Drawer>

// // //       <Footer />
// // //     </>
// // //   );
// // // }

// // // export default CompanyDashboard;


// // import { FaEllipsisVertical } from "react-icons/fa6";

// // import React, { useState, useEffect } from "react";
// // import {
// //   Box,
// //   Heading,
// //   Text,
// //   VStack,
// //   HStack,
// //   IconButton,
// //   Badge,
// //   SimpleGrid,
// //   Divider,
// //   Stat,
// //   StatLabel,
// //   StatNumber,
// //   StatHelpText,
// //   Alert,
// //   AlertIcon,
// //   Drawer,
// //   DrawerBody,
// //   DrawerHeader,
// //   DrawerOverlay,
// //   DrawerContent,
// //   DrawerCloseButton,
// //   useDisclosure,
// //   Popover,
// //   PopoverTrigger,
// //   PopoverContent,
// //   PopoverHeader,
// //   PopoverBody,
// //   PopoverCloseButton,
// //   Menu,
// //   MenuButton,
// //   MenuList,
// //   MenuItem,
// //   Input,
// //   Tabs,
// //   TabList,
// //   TabPanels,
// //   Tab,
// //   TabPanel,
// // } from "@chakra-ui/react";
// // import { FaUserEdit, FaBars, FaBell } from "react-icons/fa";
// // import { FaEllipsisVertical } from "react-icons/fa6";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios";
// // import Navbar from "../components/Navbar.jsx";
// // import Footer from "../components/Footer.jsx";
// // import CreateAd from "../components/CreateAd.jsx";
// // import { useAuth } from "../contexts/AuthContext.jsx";

// // import {
// //   LineChart,
// //   Line,
// //   XAxis,
// //   YAxis,
// //   CartesianGrid,
// //   Tooltip,
// //   ResponsiveContainer,
// //   PieChart,
// //   Pie,
// //   Cell,
// // } from "recharts";

// // const COLORS = ["#38A169", "#ECC94B", "#E53E3E"];

// // function CompanyDashboard() {
// //   const { user } = useAuth();
// //   const navigate = useNavigate();
// //   const { isOpen, onOpen, onClose } = useDisclosure();

// //   const [ads, setAds] = useState([]);
// //   const [notifications, setNotifications] = useState([]);
// //   const [unread, setUnread] = useState(0);
// //   const [search, setSearch] = useState("");

// //   const fetchAds = async () => {
// //     try {
// //       const token = localStorage.getItem("token");
// //       const res = await axios.get(
// //         "https://ad-chain-backend.vercel.app/api/ads/my-ads",
// //         { headers: { Authorization: `Bearer ${token}` } }
// //       );
// //       setAds(res.data);
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   };

// //   const fetchNotifications = async () => {
// //     try {
// //       const token = localStorage.getItem("token");
// //       const res = await axios.get(
// //         "https://ad-chain-backend.vercel.app/api/users/notifications",
// //         { headers: { Authorization: `Bearer ${token}` } }
// //       );
// //       setNotifications(res.data);
// //       setUnread(res.data.length);
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchAds();
// //     fetchNotifications();
// //   }, []);

// //   // ------------------ Analytics ------------------
// //   const total = ads.length;
// //   const accepted = ads.filter((a) => a.status === "accepted").length;
// //   const pending = ads.filter((a) => a.status === "pending").length;
// //   const rejected = ads.filter((a) => a.status === "rejected").length;

// //   const revenue = accepted * 500;
// //   const acceptanceRate = total > 0 ? Math.round((accepted / total) * 100) : 0;

// //   // ------------------ Charts Data ------------------
// //   const statusData = [
// //     { name: "Accepted", value: accepted },
// //     { name: "Pending", value: pending },
// //     { name: "Rejected", value: rejected },
// //   ];

// //   const growthData = ads.map((_, i) => ({
// //     name: `C${i + 1}`,
// //     campaigns: i + 1,
// //   }));

// //   // ------------------ AI Insights ------------------
// //   const insights = [];
// //   if (total === 0) insights.push("🧠 Create your first campaign to unlock insights.");
// //   if (acceptanceRate >= 60) insights.push("🚀 Strong acceptance rate. Increase budget.");
// //   else if (acceptanceRate > 0) insights.push("📉 Improve targeting for better acceptance.");
// //   if (pending >= 3) insights.push("⏳ Too many pending campaigns. Improve clarity.");
// //   if (accepted >= 5) insights.push("💎 You are a top-performing brand!");

// //   // ------------------ Filters ------------------
// //   const filteredAds = (status) =>
// //     [...ads]
// //       .filter((ad) =>
// //         ad.title.toLowerCase().includes(search.toLowerCase())
// //       )
// //       .filter((ad) => (status ? ad.status === status : true))
// //       .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

// //   return (
// //     <>
// //       <Navbar />

// //       <Box bg="gray.50" minH="100vh" p={6}>

// //         {/* HEADER */}
// //         <HStack justify="space-between" mb={6}>
// //           <HStack>
// //             <IconButton icon={<FaBars />} onClick={onOpen} />
// //             <Heading size="lg">Company Dashboard</Heading>
// //           </HStack>

// //           <HStack spacing={4}>
// //             <Popover>
// //               <PopoverTrigger>
// //                 <Box position="relative">
// //                   <IconButton icon={<FaBell />} />
// //                   {unread > 0 && (
// //                     <Badge position="absolute" top="-1" right="-1" colorScheme="red">
// //                       {unread}
// //                     </Badge>
// //                   )}
// //                 </Box>
// //               </PopoverTrigger>
// //               <PopoverContent>
// //                 <PopoverHeader>Notifications</PopoverHeader>
// //                 <PopoverCloseButton />
// //                 <PopoverBody>
// //                   {notifications.map((n, i) => (
// //                     <Text key={i}>{n.message}</Text>
// //                   ))}
// //                 </PopoverBody>
// //               </PopoverContent>
// //             </Popover>

// //             <IconButton icon={<FaUserEdit />} onClick={() => navigate("/company/profile")} />
// //           </HStack>
// //         </HStack>

// //         {/* KPI */}
// //         <SimpleGrid columns={{ base: 1, md: 4 }} spacing={4} mb={6}>
// //           {[
// //             { label: "Total Campaigns", value: total },
// //             { label: "Accepted", value: accepted },
// //             { label: "Pending", value: pending },
// //             { label: "Revenue (demo)", value: `₹${revenue}` },
// //           ].map((item, i) => (
// //             <Box key={i} bg="white" p={5} borderRadius="xl">
// //               <Stat>
// //                 <StatLabel>{item.label}</StatLabel>
// //                 <StatNumber>{item.value}</StatNumber>
// //                 <StatHelpText>Overview</StatHelpText>
// //               </Stat>
// //             </Box>
// //           ))}
// //         </SimpleGrid>

// //         {/* CREATE */}
// //         <CreateAd onAdCreated={fetchAds} />

// //         <Divider my={6} />

// //         {/* SEARCH */}
// //         <Input
// //           placeholder="Search campaigns..."
// //           mb={4}
// //           value={search}
// //           onChange={(e) => setSearch(e.target.value)}
// //         />

// //         {/* FILTER TABS */}
// //         <Tabs variant="soft-rounded" colorScheme="brand">
// //           <TabList mb={4}>
// //             <Tab>All</Tab>
// //             <Tab>Pending</Tab>
// //             <Tab>Accepted</Tab>
// //           </TabList>

// //           <TabPanels>
// //             <TabPanel>
// //               <CampaignGrid ads={filteredAds()} fetchAds={fetchAds} />
// //             </TabPanel>
// //             <TabPanel>
// //               <CampaignGrid ads={filteredAds("pending")} fetchAds={fetchAds} />
// //             </TabPanel>
// //             <TabPanel>
// //               <CampaignGrid ads={filteredAds("accepted")} fetchAds={fetchAds} />
// //             </TabPanel>
// //           </TabPanels>
// //         </Tabs>
// //       </Box>

// //       <Footer />
// //     </>
// //   );
// // }

// // // ---------------- COMPONENT FOR ADS GRID ----------------
// // function CampaignGrid({ ads, fetchAds }) {
// //   return (
// //     <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
// //       {ads.map((ad) => (
// //         <Box key={ad._id} bg="white" p={4} borderRadius="xl" position="relative">

// //           {/* 3 DOT MENU */}
// //           <Box position="absolute" top="8px" right="8px" zIndex="10">
// //             <Menu>
// //               <MenuButton
// //                 as={IconButton}
// //                 icon={<FaEllipsisVertical />}
// //                 size="sm"
// //                 variant="ghost"
// //                 aria-label="Options"
// //               />
// //               <MenuList>
// //                 <MenuItem
// //                   color="red.500"
// //                   onClick={async () => {
// //                     const token = localStorage.getItem("token");
// //                     await axios.delete(
// //                       `https://ad-chain-backend.vercel.app/api/ads/${ad._id}`,
// //                       { headers: { Authorization: `Bearer ${token}` } }
// //                     );
// //                     fetchAds();
// //                   }}
// //                 >
// //                   Delete Campaign
// //                 </MenuItem>
// //               </MenuList>
// //             </Menu>
// //           </Box>

// //           <Heading size="sm">{ad.title}</Heading>
// //           <Text fontSize="sm" color="gray.600">{ad.description}</Text>

// //           <HStack justify="space-between" mt={3}>
// //             <Text fontSize="sm">₹{ad.budget}</Text>
// //             <Badge colorScheme={
// //               ad.status === "accepted" ? "green" :
// //               ad.status === "rejected" ? "red" : "yellow"
// //             }>
// //               {ad.status}
// //             </Badge>
// //           </HStack>
// //         </Box>
// //       ))}
// //     </SimpleGrid>
// //   );
// // }

// // export default CompanyDashboard;

// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Heading,
//   Text,
//   VStack,
//   HStack,
//   IconButton,
//   Badge,
//   SimpleGrid,
//   Divider,
//   Input,
//   Tabs,
//   TabList,
//   TabPanels,
//   Tab,
//   TabPanel,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
// } from "@chakra-ui/react";
// import { FaUserEdit, FaBars, FaBell, FaEllipsisV } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import Navbar from "../components/Navbar.jsx";
// import Footer from "../components/Footer.jsx";
// import CreateAd from "../components/CreateAd.jsx";
// import { useAuth } from "../contexts/AuthContext.jsx";

// function CompanyDashboard() {
//   const { user } = useAuth();
//   const navigate = useNavigate();

//   const [ads, setAds] = useState([]);
//   const [search, setSearch] = useState("");

//   const fetchAds = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const res = await axios.get(
//         "https://ad-chain-backend.vercel.app/api/ads/my-ads",
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setAds(res.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     fetchAds();
//   }, []);

//   const deleteAd = async (id) => {
//     try {
//       const token = localStorage.getItem("token");
//       await axios.delete(
//         `https://ad-chain-backend.vercel.app/api/ads/${id}`,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       fetchAds();
//     } catch (err) {
//       console.error("Delete failed", err);
//     }
//   };

//   const filterAds = (status) => {
//     return [...ads]
//       .filter((ad) =>
//         ad.title.toLowerCase().includes(search.toLowerCase())
//       )
//       .filter((ad) => (status ? ad.status === status : true))
//       .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
//   };

//   const AdCard = ({ ad }) => (
//     <Box
//       bg="white"
//       p={5}
//       borderRadius="lg"
//       boxShadow="sm"
//       position="relative"
//       border="1px solid #eee"
//     >
//       {/* 3 DOT MENU */}
//       <Box position="absolute" top="10px" right="10px" zIndex="99">
//         <Menu>
//           <MenuButton
//             as={IconButton}
//             icon={<FaEllipsisV />}
//             size="sm"
//             variant="ghost"
//             aria-label="Options"
//           />
//           <MenuList>
//             <MenuItem color="red.500" onClick={() => deleteAd(ad._id)}>
//               Delete Campaign
//             </MenuItem>
//           </MenuList>
//         </Menu>
//       </Box>

//       <Heading size="sm" mb={2}>{ad.title}</Heading>
//       <Text fontSize="sm" mb={1}>{ad.description}</Text>
//       <Text fontSize="sm">Budget: ${ad.budget}</Text>
//       <Text fontSize="sm">Category: {ad.category}</Text>

//       <Badge
//         mt={2}
//         colorScheme={
//           ad.status === "accepted"
//             ? "green"
//             : ad.status === "rejected"
//             ? "red"
//             : "yellow"
//         }
//       >
//         {ad.status}
//       </Badge>
//     </Box>
//   );

//   return (
//     <>
//       <Navbar />

//       <Box bg="gray.50" minH="100vh" p={6}>
//         <Heading mb={4}>Company Dashboard</Heading>

//         <Text mb={6}>Welcome, {user?.name}</Text>

//         <CreateAd onAdCreated={fetchAds} />

//         <Divider my={6} />

//         <Heading size="md" mb={4}>Your Ads</Heading>

//         {/* SEARCH */}
//         <Input
//           placeholder="Search campaigns..."
//           mb={4}
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />

//         {/* FILTER TABS */}
//         <Tabs variant="soft-rounded" colorScheme="blue">
//           <TabList mb={4}>
//             <Tab>All</Tab>
//             <Tab>Pending</Tab>
//             <Tab>Accepted</Tab>
//           </TabList>

//           <TabPanels>
//             <TabPanel>
//               <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
//                 {filterAds().map((ad) => <AdCard key={ad._id} ad={ad} />)}
//               </SimpleGrid>
//             </TabPanel>

//             <TabPanel>
//               <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
//                 {filterAds("pending").map((ad) => <AdCard key={ad._id} ad={ad} />)}
//               </SimpleGrid>
//             </TabPanel>

//             <TabPanel>
//               <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
//                 {filterAds("accepted").map((ad) => <AdCard key={ad._id} ad={ad} />)}
//               </SimpleGrid>
//             </TabPanel>
//           </TabPanels>
//         </Tabs>
//       </Box>

//       <Footer />
//     </>
//   );
// }

// export default CompanyDashboard;



import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  IconButton,
  Badge,
  SimpleGrid,
  Divider,
  Input,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { FaUserEdit, FaBars, FaBell, FaEllipsisV } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import CreateAd from "../components/CreateAd.jsx";
import { useAuth } from "../contexts/AuthContext.jsx";

function CompanyDashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [ads, setAds] = useState([]);
  const [search, setSearch] = useState("");

  const fetchAds = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        "https://ad-chain-backend.vercel.app/api/ads/my-ads",
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setAds(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchAds();
  }, []);

  const deleteAd = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(
        `https://ad-chain-backend.vercel.app/api/ads/${id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchAds();
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  const markPaid = async (adId, influencerId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.patch(
        `https://ad-chain-backend.vercel.app/api/ads/${adId}/pay/${influencerId}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchAds();
    } catch (err) {
      console.error("Payment update failed", err);
    }
  };

  const exportCSV = () => {
    const rows = [];

    ads.forEach((ad) => {
      ad.influencers?.forEach((i) => {
        rows.push({
          Campaign: ad.title,
          Influencer: i.influencer?.name || "",
          Email: i.influencer?.email || "",
          Proof: i.proof?.link || "",
          Likes: i.metrics?.likes || 0,
          Comments: i.metrics?.comments || 0,
          Views: i.metrics?.views || 0,
          AIScore: i.aiScore || 0,
          Payment: i.paymentStatus || "unpaid",
        });
      });
    });

    if (rows.length === 0) return alert("No data to export");

    const csv = [
      Object.keys(rows[0]).join(","),
      ...rows.map((r) => Object.values(r).join(",")),
    ].join("\n");

    const blob = new Blob([csv]);
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "adchain-report.csv";
    a.click();
  };

  const filterAds = (status) => {
    return [...ads]
      .filter((ad) =>
        ad.title.toLowerCase().includes(search.toLowerCase())
      )
      .filter((ad) => (status ? ad.status === status : true))
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  };

  const AdCard = ({ ad }) => (
    <Box
      bg="white"
      p={5}
      borderRadius="lg"
      boxShadow="sm"
      position="relative"
      border="1px solid #eee"
    >
      {/* 3 DOT MENU */}
      <Box position="absolute" top="10px" right="10px" zIndex="99">
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<FaEllipsisV />}
            size="sm"
            variant="ghost"
            aria-label="Options"
          />
          <MenuList>
            <MenuItem color="red.500" onClick={() => deleteAd(ad._id)}>
              Delete Campaign
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>

      <Heading size="sm" mb={2}>{ad.title}</Heading>
      <Text fontSize="sm" mb={1}>{ad.description}</Text>
      <Text fontSize="sm">Budget: ${ad.budget}</Text>
      <Text fontSize="sm">Category: {ad.category}</Text>

      <Badge mt={2}>{ad.status}</Badge>

      {/* MULTIPLE INFLUENCERS TRACKING */}
      {ad.influencers?.length > 0 && (
        <Box mt={4}>
          <Text fontWeight="bold" fontSize="sm">Influencers:</Text>

          {ad.influencers.map((i, idx) => (
            <Box key={idx} mt={2} p={3} bg="gray.50" borderRadius="md">
              <Text fontSize="sm">👤 {i.influencer?.name}</Text>
              <Text fontSize="sm">📧 {i.influencer?.email}</Text>

              {i.proof?.link ? (
                <>
                  <Text fontSize="sm">
                    🔗 <a href={i.proof.link} target="_blank" rel="noreferrer">Proof Link</a>
                  </Text>
                  <Text fontSize="sm">
                    👍 {i.metrics?.likes || 0} | 💬 {i.metrics?.comments || 0} | 👁 {i.metrics?.views || 0}
                  </Text>
                  <Text fontSize="sm">🤖 AI Score: {i.aiScore || 0}%</Text>
                </>
              ) : (
                <Text fontSize="sm">⏳ Waiting for proof</Text>
              )}

              <Badge mt={1}>{i.paymentStatus}</Badge>

              {i.paymentStatus === "unpaid" && (
                <Button
                  size="xs"
                  mt={2}
                  onClick={() => markPaid(ad._id, i.influencer._id)}
                >
                  Mark Paid
                </Button>
              )}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );

  return (
    <>
      <Navbar />

      <Box bg="gray.50" minH="100vh" p={6}>
        <Heading mb={4}>Company Dashboard</Heading>
        <Text mb={6}>Welcome, {user?.name}</Text>

        <CreateAd onAdCreated={fetchAds} />

        <Button mt={4} onClick={exportCSV}>Export Report CSV</Button>

        <Divider my={6} />

        <Heading size="md" mb={4}>Your Ads</Heading>

        <Input
          placeholder="Search campaigns..."
          mb={4}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Tabs variant="soft-rounded" colorScheme="blue">
          <TabList mb={4}>
            <Tab>All</Tab>
            <Tab>Pending</Tab>
            <Tab>Accepted</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                {filterAds().map((ad) => <AdCard key={ad._id} ad={ad} />)}
              </SimpleGrid>
            </TabPanel>

            <TabPanel>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                {filterAds("pending").map((ad) => <AdCard key={ad._id} ad={ad} />)}
              </SimpleGrid>
            </TabPanel>

            <TabPanel>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                {filterAds("accepted").map((ad) => <AdCard key={ad._id} ad={ad} />)}
              </SimpleGrid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>

      <Footer />
    </>
  );
}

export default CompanyDashboard;
