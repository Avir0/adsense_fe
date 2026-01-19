


// // // import { FaEllipsisVertical } from "react-icons/fa6";

// // // import React, { useState, useEffect } from "react";
// // // import {
// // //   Box,
// // //   Heading,
// // //   Text,
// // //   VStack,
// // //   HStack,
// // //   IconButton,
// // //   Badge,
// // //   SimpleGrid,
// // //   Divider,
// // //   Stat,
// // //   StatLabel,
// // //   StatNumber,
// // //   StatHelpText,
// // //   Alert,
// // //   AlertIcon,
// // //   Drawer,
// // //   DrawerBody,
// // //   DrawerHeader,
// // //   DrawerOverlay,
// // //   DrawerContent,
// // //   DrawerCloseButton,
// // //   useDisclosure,
// // //   Popover,
// // //   PopoverTrigger,
// // //   PopoverContent,
// // //   PopoverHeader,
// // //   PopoverBody,
// // //   PopoverCloseButton,
// // //   Menu,
// // //   MenuButton,
// // //   MenuList,
// // //   MenuItem,
// // //   Input,
// // //   Tabs,
// // //   TabList,
// // //   TabPanels,
// // //   Tab,
// // //   TabPanel,
// // // } from "@chakra-ui/react";
// // // import { FaUserEdit, FaBars, FaBell } from "react-icons/fa";
// // // import { FaEllipsisVertical } from "react-icons/fa6";
// // // import { useNavigate } from "react-router-dom";
// // // import axios from "axios";
// // // import Navbar from "../components/Navbar.jsx";
// // // import Footer from "../components/Footer.jsx";
// // // import CreateAd from "../components/CreateAd.jsx";
// // // import { useAuth } from "../contexts/AuthContext.jsx";

// // // import {
// // //   LineChart,
// // //   Line,
// // //   XAxis,
// // //   YAxis,
// // //   CartesianGrid,
// // //   Tooltip,
// // //   ResponsiveContainer,
// // //   PieChart,
// // //   Pie,
// // //   Cell,
// // // } from "recharts";

// // // const COLORS = ["#38A169", "#ECC94B", "#E53E3E"];

// // // function CompanyDashboard() {
// // //   const { user } = useAuth();
// // //   const navigate = useNavigate();
// // //   const { isOpen, onOpen, onClose } = useDisclosure();

// // //   const [ads, setAds] = useState([]);
// // //   const [notifications, setNotifications] = useState([]);
// // //   const [unread, setUnread] = useState(0);
// // //   const [search, setSearch] = useState("");

// // //   const fetchAds = async () => {
// // //     try {
// // //       const token = localStorage.getItem("token");
// // //       const res = await axios.get(
// // //         "https://ad-chain-backend.vercel.app/api/ads/my-ads",
// // //         { headers: { Authorization: `Bearer ${token}` } }
// // //       );
// // //       setAds(res.data);
// // //     } catch (err) {
// // //       console.error(err);
// // //     }
// // //   };

// // //   const fetchNotifications = async () => {
// // //     try {
// // //       const token = localStorage.getItem("token");
// // //       const res = await axios.get(
// // //         "https://ad-chain-backend.vercel.app/api/users/notifications",
// // //         { headers: { Authorization: `Bearer ${token}` } }
// // //       );
// // //       setNotifications(res.data);
// // //       setUnread(res.data.length);
// // //     } catch (err) {
// // //       console.error(err);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchAds();
// // //     fetchNotifications();
// // //   }, []);

// // //   // ------------------ Analytics ------------------
// // //   const total = ads.length;
// // //   const accepted = ads.filter((a) => a.status === "accepted").length;
// // //   const pending = ads.filter((a) => a.status === "pending").length;
// // //   const rejected = ads.filter((a) => a.status === "rejected").length;

// // //   const revenue = accepted * 500;
// // //   const acceptanceRate = total > 0 ? Math.round((accepted / total) * 100) : 0;

// // //   // ------------------ Charts Data ------------------
// // //   const statusData = [
// // //     { name: "Accepted", value: accepted },
// // //     { name: "Pending", value: pending },
// // //     { name: "Rejected", value: rejected },
// // //   ];

// // //   const growthData = ads.map((_, i) => ({
// // //     name: `C${i + 1}`,
// // //     campaigns: i + 1,
// // //   }));

// // //   // ------------------ AI Insights ------------------
// // //   const insights = [];
// // //   if (total === 0) insights.push("🧠 Create your first campaign to unlock insights.");
// // //   if (acceptanceRate >= 60) insights.push("🚀 Strong acceptance rate. Increase budget.");
// // //   else if (acceptanceRate > 0) insights.push("📉 Improve targeting for better acceptance.");
// // //   if (pending >= 3) insights.push("⏳ Too many pending campaigns. Improve clarity.");
// // //   if (accepted >= 5) insights.push("💎 You are a top-performing brand!");

// // //   // ------------------ Filters ------------------
// // //   const filteredAds = (status) =>
// // //     [...ads]
// // //       .filter((ad) =>
// // //         ad.title.toLowerCase().includes(search.toLowerCase())
// // //       )
// // //       .filter((ad) => (status ? ad.status === status : true))
// // //       .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

// // //   return (
// // //     <>
// // //       <Navbar />

// // //       <Box bg="gray.50" minH="100vh" p={6}>

// // //         {/* HEADER */}
// // //         <HStack justify="space-between" mb={6}>
// // //           <HStack>
// // //             <IconButton icon={<FaBars />} onClick={onOpen} />
// // //             <Heading size="lg">Company Dashboard</Heading>
// // //           </HStack>

// // //           <HStack spacing={4}>
// // //             <Popover>
// // //               <PopoverTrigger>
// // //                 <Box position="relative">
// // //                   <IconButton icon={<FaBell />} />
// // //                   {unread > 0 && (
// // //                     <Badge position="absolute" top="-1" right="-1" colorScheme="red">
// // //                       {unread}
// // //                     </Badge>
// // //                   )}
// // //                 </Box>
// // //               </PopoverTrigger>
// // //               <PopoverContent>
// // //                 <PopoverHeader>Notifications</PopoverHeader>
// // //                 <PopoverCloseButton />
// // //                 <PopoverBody>
// // //                   {notifications.map((n, i) => (
// // //                     <Text key={i}>{n.message}</Text>
// // //                   ))}
// // //                 </PopoverBody>
// // //               </PopoverContent>
// // //             </Popover>

// // //             <IconButton icon={<FaUserEdit />} onClick={() => navigate("/company/profile")} />
// // //           </HStack>
// // //         </HStack>

// // //         {/* KPI */}
// // //         <SimpleGrid columns={{ base: 1, md: 4 }} spacing={4} mb={6}>
// // //           {[
// // //             { label: "Total Campaigns", value: total },
// // //             { label: "Accepted", value: accepted },
// // //             { label: "Pending", value: pending },
// // //             { label: "Revenue (demo)", value: `₹${revenue}` },
// // //           ].map((item, i) => (
// // //             <Box key={i} bg="white" p={5} borderRadius="xl">
// // //               <Stat>
// // //                 <StatLabel>{item.label}</StatLabel>
// // //                 <StatNumber>{item.value}</StatNumber>
// // //                 <StatHelpText>Overview</StatHelpText>
// // //               </Stat>
// // //             </Box>
// // //           ))}
// // //         </SimpleGrid>

// // //         {/* CREATE */}
// // //         <CreateAd onAdCreated={fetchAds} />

// // //         <Divider my={6} />

// // //         {/* SEARCH */}
// // //         <Input
// // //           placeholder="Search campaigns..."
// // //           mb={4}
// // //           value={search}
// // //           onChange={(e) => setSearch(e.target.value)}
// // //         />

// // //         {/* FILTER TABS */}
// // //         <Tabs variant="soft-rounded" colorScheme="brand">
// // //           <TabList mb={4}>
// // //             <Tab>All</Tab>
// // //             <Tab>Pending</Tab>
// // //             <Tab>Accepted</Tab>
// // //           </TabList>

// // //           <TabPanels>
// // //             <TabPanel>
// // //               <CampaignGrid ads={filteredAds()} fetchAds={fetchAds} />
// // //             </TabPanel>
// // //             <TabPanel>
// // //               <CampaignGrid ads={filteredAds("pending")} fetchAds={fetchAds} />
// // //             </TabPanel>
// // //             <TabPanel>
// // //               <CampaignGrid ads={filteredAds("accepted")} fetchAds={fetchAds} />
// // //             </TabPanel>
// // //           </TabPanels>
// // //         </Tabs>
// // //       </Box>

// // //       <Footer />
// // //     </>
// // //   );
// // // }

// // // // ---------------- COMPONENT FOR ADS GRID ----------------
// // // function CampaignGrid({ ads, fetchAds }) {
// // //   return (
// // //     <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
// // //       {ads.map((ad) => (
// // //         <Box key={ad._id} bg="white" p={4} borderRadius="xl" position="relative">

// // //           {/* 3 DOT MENU */}
// // //           <Box position="absolute" top="8px" right="8px" zIndex="10">
// // //             <Menu>
// // //               <MenuButton
// // //                 as={IconButton}
// // //                 icon={<FaEllipsisVertical />}
// // //                 size="sm"
// // //                 variant="ghost"
// // //                 aria-label="Options"
// // //               />
// // //               <MenuList>
// // //                 <MenuItem
// // //                   color="red.500"
// // //                   onClick={async () => {
// // //                     const token = localStorage.getItem("token");
// // //                     await axios.delete(
// // //                       `https://ad-chain-backend.vercel.app/api/ads/${ad._id}`,
// // //                       { headers: { Authorization: `Bearer ${token}` } }
// // //                     );
// // //                     fetchAds();
// // //                   }}
// // //                 >
// // //                   Delete Campaign
// // //                 </MenuItem>
// // //               </MenuList>
// // //             </Menu>
// // //           </Box>

// // //           <Heading size="sm">{ad.title}</Heading>
// // //           <Text fontSize="sm" color="gray.600">{ad.description}</Text>

// // //           <HStack justify="space-between" mt={3}>
// // //             <Text fontSize="sm">₹{ad.budget}</Text>
// // //             <Badge colorScheme={
// // //               ad.status === "accepted" ? "green" :
// // //               ad.status === "rejected" ? "red" : "yellow"
// // //             }>
// // //               {ad.status}
// // //             </Badge>
// // //           </HStack>
// // //         </Box>
// // //       ))}
// // //     </SimpleGrid>
// // //   );
// // // }

// // // export default CompanyDashboard;

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
// //   Input,
// //   Tabs,
// //   TabList,
// //   TabPanels,
// //   Tab,
// //   TabPanel,
// //   Menu,
// //   MenuButton,
// //   MenuList,
// //   MenuItem,
// // } from "@chakra-ui/react";
// // import { FaUserEdit, FaBars, FaBell, FaEllipsisV } from "react-icons/fa";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios";
// // import Navbar from "../components/Navbar.jsx";
// // import Footer from "../components/Footer.jsx";
// // import CreateAd from "../components/CreateAd.jsx";
// // import { useAuth } from "../contexts/AuthContext.jsx";

// // function CompanyDashboard() {
// //   const { user } = useAuth();
// //   const navigate = useNavigate();

// //   const [ads, setAds] = useState([]);
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

// //   useEffect(() => {
// //     fetchAds();
// //   }, []);

// //   const deleteAd = async (id) => {
// //     try {
// //       const token = localStorage.getItem("token");
// //       await axios.delete(
// //         `https://ad-chain-backend.vercel.app/api/ads/${id}`,
// //         { headers: { Authorization: `Bearer ${token}` } }
// //       );
// //       fetchAds();
// //     } catch (err) {
// //       console.error("Delete failed", err);
// //     }
// //   };

// //   const filterAds = (status) => {
// //     return [...ads]
// //       .filter((ad) =>
// //         ad.title.toLowerCase().includes(search.toLowerCase())
// //       )
// //       .filter((ad) => (status ? ad.status === status : true))
// //       .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
// //   };

// //   const AdCard = ({ ad }) => (
// //     <Box
// //       bg="white"
// //       p={5}
// //       borderRadius="lg"
// //       boxShadow="sm"
// //       position="relative"
// //       border="1px solid #eee"
// //     >
// //       {/* 3 DOT MENU */}
// //       <Box position="absolute" top="10px" right="10px" zIndex="99">
// //         <Menu>
// //           <MenuButton
// //             as={IconButton}
// //             icon={<FaEllipsisV />}
// //             size="sm"
// //             variant="ghost"
// //             aria-label="Options"
// //           />
// //           <MenuList>
// //             <MenuItem color="red.500" onClick={() => deleteAd(ad._id)}>
// //               Delete Campaign
// //             </MenuItem>
// //           </MenuList>
// //         </Menu>
// //       </Box>

// //       <Heading size="sm" mb={2}>{ad.title}</Heading>
// //       <Text fontSize="sm" mb={1}>{ad.description}</Text>
// //       <Text fontSize="sm">Budget: ${ad.budget}</Text>
// //       <Text fontSize="sm">Category: {ad.category}</Text>

// //       <Badge
// //         mt={2}
// //         colorScheme={
// //           ad.status === "accepted"
// //             ? "green"
// //             : ad.status === "rejected"
// //             ? "red"
// //             : "yellow"
// //         }
// //       >
// //         {ad.status}
// //       </Badge>
// //     </Box>
// //   );

// //   return (
// //     <>
// //       <Navbar />

// //       <Box bg="gray.50" minH="100vh" p={6}>
// //         <Heading mb={4}>Company Dashboard</Heading>

// //         <Text mb={6}>Welcome, {user?.name}</Text>

// //         <CreateAd onAdCreated={fetchAds} />

// //         <Divider my={6} />

// //         <Heading size="md" mb={4}>Your Ads</Heading>

// //         {/* SEARCH */}
// //         <Input
// //           placeholder="Search campaigns..."
// //           mb={4}
// //           value={search}
// //           onChange={(e) => setSearch(e.target.value)}
// //         />

// //         {/* FILTER TABS */}
// //         <Tabs variant="soft-rounded" colorScheme="blue">
// //           <TabList mb={4}>
// //             <Tab>All</Tab>
// //             <Tab>Pending</Tab>
// //             <Tab>Accepted</Tab>
// //           </TabList>

// //           <TabPanels>
// //             <TabPanel>
// //               <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
// //                 {filterAds().map((ad) => <AdCard key={ad._id} ad={ad} />)}
// //               </SimpleGrid>
// //             </TabPanel>

// //             <TabPanel>
// //               <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
// //                 {filterAds("pending").map((ad) => <AdCard key={ad._id} ad={ad} />)}
// //               </SimpleGrid>
// //             </TabPanel>

// //             <TabPanel>
// //               <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
// //                 {filterAds("accepted").map((ad) => <AdCard key={ad._id} ad={ad} />)}
// //               </SimpleGrid>
// //             </TabPanel>
// //           </TabPanels>
// //         </Tabs>
// //       </Box>

// //       <Footer />
// //     </>
// //   );
// // }

// // export default CompanyDashboard;
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
// //   Input,
// //   Tabs,
// //   TabList,
// //   TabPanels,
// //   Tab,
// //   TabPanel,
// //   Menu,
// //   MenuButton,
// //   MenuList,
// //   MenuItem,
// //   Button,
// // } from "@chakra-ui/react";
// // import { FaEllipsisV } from "react-icons/fa";
// // import { FaChartBar } from "react-icons/fa";

// // import axios from "axios";
// // import Navbar from "../components/Navbar.jsx";
// // import Footer from "../components/Footer.jsx";
// // import CreateAd from "../components/CreateAd.jsx";
// // import { useAuth } from "../contexts/AuthContext.jsx";

// // function CompanyDashboard() {
// //   const { user } = useAuth();

// //   const [ads, setAds] = useState([]);
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

// //   useEffect(() => {
// //     fetchAds();
// //   }, []);

// //   const deleteAd = async (id) => {
// //     try {
// //       const token = localStorage.getItem("token");
// //       await axios.delete(
// //         `https://ad-chain-backend.vercel.app/api/ads/${id}`,
// //         { headers: { Authorization: `Bearer ${token}` } }
// //       );
// //       fetchAds();
// //     } catch (err) {
// //       console.error("Delete failed", err);
// //     }
// //   };

// //   const filterAds = (status) => {
// //     return [...ads]
// //       .filter((ad) =>
// //         ad.title.toLowerCase().includes(search.toLowerCase())
// //       )
// //       .filter((ad) => (status ? ad.status === status : true))
// //       .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
// //   };

// //   const AdCard = ({ ad }) => (
// //     <Box
// //       bg="white"
// //       p={5}
// //       borderRadius="lg"
// //       boxShadow="sm"
// //       position="relative"
// //       border="1px solid #eee"
// //     >
// //       {/* 3 DOT MENU */}
// //       <Box position="absolute" top="10px" right="10px">
// //         <Menu>
// //           <MenuButton
// //             as={IconButton}
// //             icon={<FaEllipsisV />}
// //             size="sm"
// //             variant="ghost"
// //           />
// //           <MenuList>
// //             <MenuItem color="red.500" onClick={() => deleteAd(ad._id)}>
// //               Delete Campaign
// //             </MenuItem>
// //           </MenuList>
// //         </Menu>
// //       </Box>

// //       <Heading size="sm" mb={2}>{ad.title}</Heading>
// //       <Text fontSize="sm" mb={1}>{ad.description}</Text>
// //       <Text fontSize="sm">Budget: ${ad.budget}</Text>
// //       <Text fontSize="sm">Category: {ad.category}</Text>

// //       <Badge
// //         mt={2}
// //         colorScheme={
// //           ad.status === "accepted"
// //             ? "green"
// //             : ad.status === "rejected"
// //             ? "red"
// //             : "yellow"
// //         }
// //       >
// //         {ad.status}
// //       </Badge>

// //       {/* ================= INFLUENCER DETAILS ================= */}
// //       {ad.influencers?.length > 0 && (
// //         <Box mt={4} bg="gray.50" p={3} borderRadius="md">
// //           <Text fontWeight="bold" fontSize="sm">
// //             Accepted By:
// //           </Text>

// //           {ad.influencers.map((inf, i) => (
// //             <Box
// //               key={i}
// //               mt={2}
// //               p={3}
// //               bg="white"
// //               borderRadius="md"
// //               border="1px solid #eee"
// //             >
// //               <Text fontSize="sm">👤 {inf.influencer?.name}</Text>
// //               <Text fontSize="sm">📧 {inf.influencer?.email}</Text>

// //               {inf.proof?.link ? (
// //                 <>
// //                   <Text fontSize="sm">
// //                     🔗{" "}
// //                     <a
// //                       href={inf.proof.link}
// //                       target="_blank"
// //                       rel="noreferrer"
// //                       style={{ color: "blue" }}
// //                     >
// //                       View Proof
// //                     </a>
// //                   </Text>

// //                   <Text fontSize="sm">
// //                     👍 {inf.metrics?.likes || 0} | 💬 {inf.metrics?.comments || 0} | 👁 {inf.metrics?.views || 0}
// //                   </Text>

// //                   <Text fontSize="sm">
// //                     🤖 AI Score: {inf.aiScore || 0}%
// //                   </Text>
// //                 </>
// //               ) : (
// //                 <Text fontSize="sm" color="orange.500">
// //                   ⏳ Proof not submitted yet
// //                 </Text>
// //               )}

// //               <Badge mt={2}>
// //                 Payment: {inf.paymentStatus || "unpaid"}
// //               </Badge>
// //             </Box>
// //           ))}
// //         </Box>
// //       )}
// //     </Box>
// //   );

// //   return (
// //     <>
// //       <Navbar />

// //       <Box bg="gray.50" minH="100vh" p={6}>
// //         <Heading mb={2}>Company Dashboard</Heading>
// //         <Text mb={6}>Welcome, {user?.name}</Text>

// //         <CreateAd onAdCreated={fetchAds} />

// //         <Divider my={6} />

// //         <Heading size="md" mb={4}>Your Ads</Heading>

// //         <Input
// //           placeholder="Search campaigns..."
// //           mb={4}
// //           value={search}
// //           onChange={(e) => setSearch(e.target.value)}
// //         />

// //         <Tabs variant="soft-rounded" colorScheme="blue">
// //           <TabList mb={4}>
// //             <Tab>All</Tab>
// //             <Tab>Pending</Tab>
// //             <Tab>Accepted</Tab>
// //           </TabList>

// //           <TabPanels>
// //             <TabPanel>
// //               <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
// //                 {filterAds().map((ad) => (
// //                   <AdCard key={ad._id} ad={ad} />
// //                 ))}
// //               </SimpleGrid>
// //             </TabPanel>

// //             <TabPanel>
// //               <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
// //                 {filterAds("pending").map((ad) => (
// //                   <AdCard key={ad._id} ad={ad} />
// //                 ))}
// //               </SimpleGrid>
// //             </TabPanel>

// //             <TabPanel>
// //               <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
// //                 {filterAds("accepted").map((ad) => (
// //                   <AdCard key={ad._id} ad={ad} />
// //                 ))}
// //               </SimpleGrid>
// //             </TabPanel>
// //           </TabPanels>
// //         </Tabs>
// //       </Box>

// //       <Footer />
// //     </>
// //   );
// // }



// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Heading,
//   Text,
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
// import { FaEllipsisV, FaChartBar } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import Navbar from "../components/Navbar.jsx";
// import Footer from "../components/Footer.jsx";
// import CreateAd from "../components/CreateAd.jsx";
// import { useAuth } from "../contexts/AuthContext.jsx";
// import AppLayout from "../components/AppLayout";

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
//       console.log("API DATA:", res.data);
//       setAds(res.data || []);
//     } catch (err) {
//       console.error("Fetch failed:", err);
//     }
//   };

//   useEffect(() => {
//     fetchAds();
//   }, []);

//   const deleteAd = async (id) => {
//     const token = localStorage.getItem("token");
//     await axios.delete(
//       `https://ad-chain-backend.vercel.app/api/ads/${id}`,
//       { headers: { Authorization: `Bearer ${token}` } }
//     );
//     fetchAds();
//   };

//   const formatDate = (date) =>
//     new Date(date).toLocaleString("en-IN", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//       hour: "2-digit",
//       minute: "2-digit",
//     });

//   const filterAds = (status) => {
//     return ads
//       .filter((ad) =>
//         ad.title?.toLowerCase().includes(search.toLowerCase())
//       )
//       .filter((ad) => (status ? ad.status === status : true))
//       .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
//   };

//   const AdCard = ({ ad }) => (
//     <Box bg="white" p={5} borderRadius="lg" boxShadow="sm" position="relative">
//       {/* Menu */}
//       <Box position="absolute" top="10px" right="10px">
//         <Menu>
//           <MenuButton as={IconButton} icon={<FaEllipsisV />} size="sm" />
//           <MenuList>
//             <MenuItem color="red.500" onClick={() => deleteAd(ad._id)}>
//               Delete Campaign
//             </MenuItem>
//           </MenuList>
//         </Menu>
//       </Box>

//       <Heading size="sm">{ad.title}</Heading>
//       <Text fontSize="xs" color="gray.500">
//         🕒 {formatDate(ad.createdAt)}
//       </Text>

//       <Text mt={2}>{ad.description}</Text>
//       <Text>💰 Budget: ${ad.budget}</Text>
//       <Text>📦 Category: {ad.category}</Text>

//       <Badge mt={2} colorScheme={ad.status === "accepted" ? "green" : "yellow"}>
//         {ad.status}
//       </Badge>

//       {/* Influencers */}
//       {ad.influencers?.length > 0 && (
//         <Box mt={4} bg="gray.50" p={3} borderRadius="md">
//           <Text fontWeight="bold">Accepted By:</Text>

//           {ad.influencers.map((inf, i) => (
//             <Box key={i} bg="white" p={3} mt={2} borderRadius="md">
//               <Text>👤 {inf.influencer?.name}</Text>
//               <Text>📧 {inf.influencer?.email}</Text>

//               {inf.proof?.link ? (
//                 <>
//                   <a href={inf.proof.link} target="_blank" rel="noreferrer">
//                     🔗 View Proof
//                   </a>
//                   <Text>
//                     👍 {inf.metrics?.likes || 0} | 💬 {inf.metrics?.comments || 0} | 👁 {inf.metrics?.views || 0}
//                   </Text>
//                   <Text>🤖 AI Score: {inf.aiScore || 0}%</Text>
//                 </>
//               ) : (
//                 <Text color="orange.500">⏳ Proof pending</Text>
//               )}
//             </Box>
//           ))}
//         </Box>
//       )}
//     </Box>
//   );

//   return (
//     <>
//       <Navbar />

//       <Box bg="gray.50" minH="100vh" p={6}>
//         <HStack justify="space-between" mb={6}>
//           <Box>
//             <Heading>Company Dashboard</Heading>
//             <Text>Welcome, {user?.name}</Text>
//           </Box>

//           <IconButton
//             icon={<FaChartBar />}
//             onClick={() => navigate("/company/analytics")}
//           />
//         </HStack>

//         <CreateAd onAdCreated={fetchAds} />

//         <Divider my={6} />

//         <Input
//           placeholder="Search campaigns..."
//           mb={4}
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />

//         <Tabs variant="soft-rounded" colorScheme="blue">
//           <TabList>
//             <Tab>All</Tab>
//             <Tab>Pending</Tab>
//             <Tab>Accepted</Tab>
//           </TabList>

//           <TabPanels>
//             <TabPanel>
//               <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
//                 {filterAds().map((ad) => (
//                   <AdCard key={ad._id} ad={ad} />
//                 ))}
//               </SimpleGrid>
//             </TabPanel>

//             <TabPanel>
//               <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
//                 {filterAds("pending").map((ad) => (
//                   <AdCard key={ad._id} ad={ad} />
//                 ))}
//               </SimpleGrid>
//             </TabPanel>

//             <TabPanel>
//               <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
//                 {filterAds("accepted").map((ad) => (
//                   <AdCard key={ad._id} ad={ad} />
//                 ))}
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

// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Heading,
//   Text,
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
// import { FaEllipsisV, FaChartBar } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import CreateAd from "../components/CreateAd.jsx";
// import { useAuth } from "../contexts/AuthContext.jsx";
// import AppLayout from "../components/AppLayout";

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
//       setAds(res.data || []);
//     } catch (err) {
//       console.error("Fetch failed:", err);
//     }
//   };

//   useEffect(() => {
//     fetchAds();
//   }, []);

//   const deleteAd = async (id) => {
//     const token = localStorage.getItem("token");
//     await axios.delete(
//       `https://ad-chain-backend.vercel.app/api/ads/${id}`,
//       { headers: { Authorization: `Bearer ${token}` } }
//     );
//     fetchAds();
//   };

//   const formatDate = (date) =>
//     new Date(date).toLocaleString("en-IN", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//       hour: "2-digit",
//       minute: "2-digit",
//     });

//   const filterAds = (status) =>
//     ads
//       .filter((ad) =>
//         ad.title?.toLowerCase().includes(search.toLowerCase())
//       )
//       .filter((ad) => (status ? ad.status === status : true))
//       .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

//   const AdCard = ({ ad }) => (
//     <Box bg="white" p={5} borderRadius="xl" boxShadow="sm" position="relative">
//       {/* Menu */}
//       <Box position="absolute" top="10px" right="10px">
//         <Menu>
//           <MenuButton as={IconButton} icon={<FaEllipsisV />} size="sm" />
//           <MenuList>
//             <MenuItem color="red.500" onClick={() => deleteAd(ad._id)}>
//               Delete Campaign
//             </MenuItem>
//           </MenuList>
//         </Menu>
//       </Box>

//       <Heading size="sm">{ad.title}</Heading>
//       <Text fontSize="xs" color="gray.500">
//         🕒 {formatDate(ad.createdAt)}
//       </Text>

//       <Text mt={2}>{ad.description}</Text>
//       <Text fontSize="sm">💰 Budget: ${ad.budget}</Text>
//       <Text fontSize="sm">📦 Category: {ad.category}</Text>

//       <Badge
//         mt={2}
//         colorScheme={ad.status === "accepted" ? "green" : "yellow"}
//       >
//         {ad.status}
//       </Badge>

//       {/* Influencers */}
//       {ad.influencers?.length > 0 && (
//         <Box mt={4} bg="gray.50" p={3} borderRadius="lg">
//           <Text fontWeight="bold" fontSize="sm">
//             Accepted By:
//           </Text>

//           {ad.influencers.map((inf, i) => (
//             <Box key={i} bg="white" p={3} mt={2} borderRadius="md">
//               <Text fontSize="sm">👤 {inf.influencer?.name}</Text>
//               <Text fontSize="sm">📧 {inf.influencer?.email}</Text>

//               {inf.proof?.link ? (
//                 <>
//                   <a href={inf.proof.link} target="_blank" rel="noreferrer">
//                     🔗 View Proof
//                   </a>
//                   <Text fontSize="sm">
//                     👍 {inf.metrics?.likes || 0} | 💬 {inf.metrics?.comments || 0} | 👁 {inf.metrics?.views || 0}
//                   </Text>
//                   <Text fontSize="sm">🤖 AI Score: {inf.aiScore || 0}%</Text>
//                 </>
//               ) : (
//                 <Text fontSize="sm" color="orange.500">
//                   ⏳ Proof pending
//                 </Text>
//               )}
//             </Box>
//           ))}
//         </Box>
//       )}
//     </Box>
//   );

//   return (
//     <AppLayout>
//       {/* Page Header */}
//       <HStack justify="space-between" mb={6}>
//         <Box>
//           <Heading size="lg">Company Dashboard</Heading>
//           <Text color="gray.500">Welcome, {user?.name}</Text>
//         </Box>

//         <IconButton
//           icon={<FaChartBar />}
//           colorScheme="orange"
//           onClick={() => navigate("/company/analytics")}
//         />
//       </HStack>

//       <CreateAd onAdCreated={fetchAds} />

//       <Divider my={6} />

//       <Input
//         placeholder="Search campaigns..."
//         mb={4}
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       <Tabs variant="soft-rounded" colorScheme="orange">
//         <TabList mb={4}>
//           <Tab>All</Tab>
//           <Tab>Pending</Tab>
//           <Tab>Accepted</Tab>
//         </TabList>

//         <TabPanels>
//           {["", "pending", "accepted"].map((status, idx) => (
//             <TabPanel key={idx}>
//               <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
//                 {filterAds(status).map((ad) => (
//                   <AdCard key={ad._id} ad={ad} />
//                 ))}
//               </SimpleGrid>
//             </TabPanel>
//           ))}
//         </TabPanels>
//       </Tabs>
//     </AppLayout>
//   );
// }

// export default CompanyDashboard;



import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Text,
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
  Avatar,
} from "@chakra-ui/react";
import { FaEllipsisV, FaChartBar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CreateAd from "../components/CreateAd.jsx";
import { useAuth } from "../contexts/AuthContext.jsx";
import AppLayout from "../components/AppLayout";

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
      setAds(res.data || []);
    } catch (err) {
      console.error("Fetch failed:", err);
    }
  };

  useEffect(() => {
    fetchAds();
  }, []);

  const deleteAd = async (id) => {
    const token = localStorage.getItem("token");
    await axios.delete(
      `https://ad-chain-backend.vercel.app/api/ads/${id}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    fetchAds();
  };

  const formatDate = (date) =>
    new Date(date).toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

  const filterAds = (status) =>
    ads
      .filter((ad) =>
        ad.title?.toLowerCase().includes(search.toLowerCase())
      )
      .filter((ad) => (status ? ad.status === status : true))
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const AdCard = ({ ad }) => (
    <Box bg="white" p={5} borderRadius="2xl" boxShadow="sm" position="relative">
      <Box position="absolute" top="10px" right="10px">
        <Menu>
          <MenuButton as={IconButton} icon={<FaEllipsisV />} size="sm" />
          <MenuList>
            <MenuItem color="red.500" onClick={() => deleteAd(ad._id)}>
              Delete Campaign
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>

      <Heading size="sm">{ad.title}</Heading>
      <Text fontSize="xs" color="gray.500">
        🕒 {formatDate(ad.createdAt)}
      </Text>

      <Text mt={2}>{ad.description}</Text>
      <Text fontSize="sm">💰 Budget: ${ad.budget}</Text>
      <Text fontSize="sm">📦 Category: {ad.category}</Text>

      <Badge
        mt={2}
        colorScheme={ad.status === "accepted" ? "green" : "yellow"}
      >
        {ad.status}
      </Badge>

      {ad.influencers?.length > 0 && (
        <Box mt={4} bg="gray.50" p={3} borderRadius="xl">
          <Text fontWeight="bold" fontSize="sm">
            Accepted By:
          </Text>

          {ad.influencers.map((inf, i) => (
            <Box key={i} bg="white" p={3} mt={2} borderRadius="md">
              <Text fontSize="sm">👤 {inf.influencer?.name}</Text>
              <Text fontSize="sm">📧 {inf.influencer?.email}</Text>

              {inf.proof?.link ? (
                <>
                  <a href={inf.proof.link} target="_blank" rel="noreferrer">
                    🔗 View Proof
                  </a>
                  <Text fontSize="sm">
                    👍 {inf.metrics?.likes || 0} | 💬 {inf.metrics?.comments || 0} | 👁 {inf.metrics?.views || 0}
                  </Text>
                  <Text fontSize="sm">🤖 AI Score: {inf.aiScore || 0}%</Text>
                </>
              ) : (
                <Text fontSize="sm" color="orange.500">
                  ⏳ Proof pending
                </Text>
              )}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );

  return (
    <AppLayout>
      {/* Header */}
      <HStack justify="space-between" mb={6}>
        <HStack spacing={4}>
          <Avatar
            name={user?.name}
            src={user?.avatar}
            bg="orange.400"
            color="white"
          />
          <Box>
            <Heading size="md">Company Dashboard</Heading>
            <HStack spacing={2}>
              <Text fontSize="sm" color="gray.500">
                {user?.name}
              </Text>
              <Badge colorScheme="orange">Company</Badge>
            </HStack>
          </Box>
        </HStack>

        <IconButton
          icon={<FaChartBar />}
          colorScheme="orange"
          onClick={() => navigate("/company/analytics")}
          aria-label="Analytics"
        />
      </HStack>

      <CreateAd onAdCreated={fetchAds} />

      <Divider my={6} />

      <Input
        placeholder="Search campaigns..."
        mb={4}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Tabs variant="soft-rounded" colorScheme="orange">
        <TabList mb={4}>
          <Tab>All</Tab>
          <Tab>Pending</Tab>
          <Tab>Accepted</Tab>
        </TabList>

        <TabPanels>
          {["", "pending", "accepted"].map((status, idx) => (
            <TabPanel key={idx}>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
                {filterAds(status).map((ad) => (
                  <AdCard key={ad._id} ad={ad} />
                ))}
              </SimpleGrid>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </AppLayout>
  );
}

export default CompanyDashboard;
