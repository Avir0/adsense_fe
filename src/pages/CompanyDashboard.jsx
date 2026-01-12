

// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   Heading,
//   Text,
//   VStack,
//   HStack,
//   IconButton,
//   Drawer,
//   DrawerBody,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   useDisclosure,
//   Badge,
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
//   PopoverHeader,
//   PopoverBody,
//   PopoverCloseButton,
//   useBreakpointValue,
// } from '@chakra-ui/react';
// import { FaUserEdit, FaBars, FaBell } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Navbar from '../components/Navbar.jsx';
// import Footer from '../components/Footer.jsx';
// import CreateAd from '../components/CreateAd.jsx';
// import { useAuth } from '../contexts/AuthContext.jsx';

// function CompanyDashboard() {
//   const { user } = useAuth();
//   const navigate = useNavigate();
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const {
//     isOpen: isNotifOpen,
//     onOpen: onNotifOpen,
//     onClose: onNotifClose,
//   } = useDisclosure();
//   const [ads, setAds] = useState([]);
//   const [notifications, setNotifications] = useState([]);
//   const [unreadNotifications, setUnreadNotifications] = useState(0);

//   const fetchAds = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       const res = await axios.get('https://ad-chain-backend.vercel.app/api/ads/my-ads', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setAds(res.data);
//     } catch (err) {
//       console.error('Error fetching ads:', err);
//     }
//   };

//   const fetchNotifications = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       const res = await axios.get('https://ad-chain-backend.vercel.app/api/users/notifications', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setNotifications(res.data);
//       setUnreadNotifications(res.data.length);
//     } catch (err) {
//       console.error('Error fetching notifications:', err);
//     }
//   };

//   useEffect(() => {
//     fetchAds();
//     fetchNotifications();
//   }, []);

//   const handleNotifOpen = () => {
//     setUnreadNotifications(0); // Mark as read
//     onNotifOpen();
//   };

//   return (
//     <>
//       <Navbar />
//       <Box minH="calc(100vh - 160px)" p={{ base: 4, md: 6 }} bg="gray.50">
//         <HStack
//           justify="space-between"
//           align="start"
//           mb={6}
//           flexDirection={{ base: 'column', md: 'row' }}
//         >
//           <HStack spacing={4} mb={{ base: 4, md: 0 }}>
//             <IconButton
//               icon={<FaBars />}
//               colorScheme="brand"
//               onClick={onOpen}
//               aria-label="Open Sidebar"
//             />
//             <Heading size={{ base: 'md', md: 'lg' }} color="brand.500">
//               Company Dashboard
//             </Heading>
//           </HStack>

//           <HStack spacing={4}>
//             <Popover>
//               <PopoverTrigger>
//                 <Box position="relative">
//                   <IconButton
//                     icon={<FaBell />}
//                     colorScheme="brand"
//                     onClick={handleNotifOpen}
//                     aria-label="Notifications"
//                   />
//                   {unreadNotifications > 0 && (
//                     <Badge
//                       position="absolute"
//                       top="-1"
//                       right="-1"
//                       colorScheme="red"
//                       borderRadius="full"
//                       px={2}
//                     >
//                       {unreadNotifications}
//                     </Badge>
//                   )}
//                 </Box>
//               </PopoverTrigger>
//               <PopoverContent>
//                 <PopoverHeader>Notifications</PopoverHeader>
//                 <PopoverCloseButton />
//                 <PopoverBody>
//                   {notifications.length === 0 ? (
//                     <Text>No notifications.</Text>
//                   ) : (
//                     notifications.map((notif, index) => (
//                       <Text key={index} mb={2} fontSize="sm">
//                         {notif.message} - {new Date(notif.createdAt).toLocaleDateString()}
//                       </Text>
//                     ))
//                   )}
//                 </PopoverBody>
//               </PopoverContent>
//             </Popover>

//             <IconButton
//               icon={<FaUserEdit />}
//               colorScheme="brand"
//               onClick={() => navigate('/company/profile')}
//               aria-label="Edit Profile"
//             />
//           </HStack>
//         </HStack>

//         <VStack spacing={6} align="stretch">
//           <Text fontSize={{ base: 'md', md: 'xl' }}>Welcome, {user.name}!</Text>
//           <CreateAd onAdCreated={fetchAds} />
//           <Text fontSize={{ base: 'md', md: 'lg' }}>Your Ads</Text>
//           {ads.length === 0 ? (
//             <Text>No ads created yet.</Text>
//           ) : (
//             ads.map((ad) => (
//               <Box
//                 key={ad._id}
//                 p={4}
//                 bg="white"
//                 borderRadius="md"
//                 boxShadow="md"
//                 overflowX="auto"
//               >
//                 <Text fontWeight="bold" fontSize="md">{ad.title}</Text>
//                 <Text>{ad.description}</Text>
//                 <Text>Budget: ${ad.budget}</Text>
//                 <Text>Category: {ad.category}</Text>
//                 <Text>Status: {ad.status}</Text>
//                 {ad.status === 'accepted' && ad.acceptedBy && (
//                   <Text>Accepted by: {ad.acceptedBy.name}</Text>
//                 )}
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
//             {ads.filter((ad) => ad.status === 'accepted').length === 0 ? (
//               <Text>No ads have been accepted yet.</Text>
//             ) : (
//               ads
//                 .filter((ad) => ad.status === 'accepted')
//                 .map((ad) => (
//                   <Box key={ad._id} p={4} mb={4} bg="gray.100" borderRadius="md">
//                     <Text fontWeight="bold">{ad.title}</Text>
//                     <Text>{ad.description}</Text>
//                     <Text>Budget: ${ad.budget}</Text>
//                     <Text>Category: {ad.category}</Text>
//                     <Text>Accepted by: {ad.acceptedBy.name}</Text>
//                     {ad.proof && ad.proof.submittedAt ? (
//                       <Box mt={2}>
//                         <Text fontWeight="bold">Proof Submitted:</Text>
//                         <Text>
//                           Link:{' '}
//                           <a href={ad.proof.link} target="_blank" rel="noopener noreferrer">
//                             {ad.proof.link}
//                           </a>
//                         </Text>
//                         <Text>Description: {ad.proof.description}</Text>
//                         <Text>
//                           Submitted At:{' '}
//                           {new Date(ad.proof.submittedAt).toLocaleDateString()}
//                         </Text>
//                       </Box>
//                     ) : (
//                       <Text mt={2}>Proof: Not submitted yet</Text>
//                     )}
//                   </Box>
//                 ))
//             )}
//           </DrawerBody>
//         </DrawerContent>
//       </Drawer>

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
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Alert,
  AlertIcon,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverCloseButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { FaUserEdit, FaBars, FaBell, FaEllipsisV } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import CreateAd from "../components/CreateAd.jsx";
import { useAuth } from "../contexts/AuthContext.jsx";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const COLORS = ["#38A169", "#ECC94B", "#E53E3E"];

function CompanyDashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [ads, setAds] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [unread, setUnread] = useState(0);

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

  const fetchNotifications = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        "https://ad-chain-backend.vercel.app/api/users/notifications",
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setNotifications(res.data);
      setUnread(res.data.length);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchAds();
    fetchNotifications();
  }, []);

  // ------------------ Analytics ------------------
  const total = ads.length;
  const accepted = ads.filter((a) => a.status === "accepted").length;
  const pending = ads.filter((a) => a.status === "pending").length;
  const rejected = ads.filter((a) => a.status === "rejected").length;

  const revenue = accepted * 500;
  const acceptanceRate = total > 0 ? Math.round((accepted / total) * 100) : 0;

  // ------------------ Charts Data ------------------
  const statusData = [
    { name: "Accepted", value: accepted },
    { name: "Pending", value: pending },
    { name: "Rejected", value: rejected },
  ];

  const growthData = ads.map((_, i) => ({
    name: `C${i + 1}`,
    campaigns: i + 1,
  }));

  // ------------------ AI Insights ------------------
  const insights = [];

  if (total === 0) insights.push("🧠 Create your first campaign to unlock insights.");
  if (acceptanceRate >= 60) insights.push("🚀 Strong acceptance rate. Increase budget.");
  else if (acceptanceRate > 0) insights.push("📉 Improve targeting for better acceptance.");
  if (pending >= 3) insights.push("⏳ Too many pending campaigns. Improve clarity.");
  if (accepted >= 5) insights.push("💎 You are a top-performing brand!");

  return (
    <>
      <Navbar />

      <Box bg="gray.50" minH="100vh" p={6}>

        {/* HEADER */}
        <HStack justify="space-between" mb={6}>
          <HStack>
            <IconButton icon={<FaBars />} onClick={onOpen} />
            <Heading size="lg">Company Dashboard</Heading>
          </HStack>

          <HStack spacing={4}>
            <Popover>
              <PopoverTrigger>
                <Box position="relative">
                  <IconButton icon={<FaBell />} />
                  {unread > 0 && (
                    <Badge position="absolute" top="-1" right="-1" colorScheme="red">
                      {unread}
                    </Badge>
                  )}
                </Box>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverHeader>Notifications</PopoverHeader>
                <PopoverCloseButton />
                <PopoverBody>
                  {notifications.map((n, i) => (
                    <Text key={i}>{n.message}</Text>
                  ))}
                </PopoverBody>
              </PopoverContent>
            </Popover>

            <IconButton icon={<FaUserEdit />} onClick={() => navigate("/company/profile")} />
          </HStack>
        </HStack>

        {/* KPI */}
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={4} mb={6}>
          {[
            { label: "Total Campaigns", value: total },
            { label: "Accepted", value: accepted },
            { label: "Pending", value: pending },
            { label: "Revenue (demo)", value: `₹${revenue}` },
          ].map((item, i) => (
            <Box key={i} bg="white" p={5} borderRadius="xl">
              <Stat>
                <StatLabel>{item.label}</StatLabel>
                <StatNumber>{item.value}</StatNumber>
                <StatHelpText>Overview</StatHelpText>
              </Stat>
            </Box>
          ))}
        </SimpleGrid>

        {/* CHARTS */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mb={8}>
          <Box bg="white" p={5} borderRadius="xl">
            <Heading size="sm">Growth</Heading>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={growthData}>
                <Line type="monotone" dataKey="campaigns" stroke="#3182CE" />
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </Box>

          <Box bg="white" p={5} borderRadius="xl">
            <Heading size="sm">Status</Heading>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={statusData} dataKey="value" outerRadius={80} label>
                  {statusData.map((_, i) => (
                    <Cell key={i} fill={COLORS[i]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Box>
        </SimpleGrid>

        {/* AI INSIGHTS */}
        <Box bg="white" p={6} borderRadius="xl" mb={8}>
          <Heading size="md">🤖 AI Insights</Heading>
          <VStack align="stretch" mt={3}>
            {insights.map((text, i) => (
              <Alert key={i} status="info">
                <AlertIcon />
                {text}
              </Alert>
            ))}
          </VStack>
        </Box>

        {/* CREATE */}
        <CreateAd onAdCreated={fetchAds} />

        <Divider my={6} />

        {/* CAMPAIGNS */}
        <Heading size="md" mb={4}>Your Campaigns</Heading>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
          {[...ads]
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .map((ad) => (
              <Box key={ad._id} bg="white" p={4} borderRadius="xl" position="relative">

                {/* 3 DOT MENU */}
                <Box position="absolute" top="10px" right="10px">
                  <Menu>
                    <MenuButton
                      as={IconButton}
                      icon={<FaEllipsisV />}
                      size="sm"
                      variant="ghost"
                    />
                    <MenuList>
                      <MenuItem
                        color="red.500"
                        onClick={async () => {
                          try {
                            const token = localStorage.getItem("token");
                            await axios.delete(
                              `https://ad-chain-backend.vercel.app/api/ads/${ad._id}`,
                              { headers: { Authorization: `Bearer ${token}` } }
                            );
                            fetchAds();
                          } catch (err) {
                            console.error("Delete failed", err);
                          }
                        }}
                      >
                        Delete Campaign
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Box>

                <Heading size="sm">{ad.title}</Heading>
                <Text fontSize="sm" color="gray.600">{ad.description}</Text>

                <HStack justify="space-between" mt={3}>
                  <Text fontSize="sm">₹{ad.budget}</Text>
                  <Badge colorScheme={
                    ad.status === "accepted" ? "green" :
                    ad.status === "rejected" ? "red" : "yellow"
                  }>
                    {ad.status}
                  </Badge>
                </HStack>
              </Box>
            ))}
        </SimpleGrid>
      </Box>

      <Footer />
    </>
  );
}

export default CompanyDashboard;


export default CompanyDashboard;
