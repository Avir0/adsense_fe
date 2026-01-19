// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   Heading,
//   SimpleGrid,
//   Stat,
//   StatLabel,
//   StatNumber,
//   Text,
//   Spinner,
//   Center,
// } from "@chakra-ui/react";
// import axios from "axios";
// import Navbar from "../components/Navbar.jsx";
// import Footer from "../components/Footer.jsx";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   Cell,
// } from "recharts";

// const COLORS = ["#38A169", "#ECC94B", "#E53E3E"];

// function AnalyticsDashboard() {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState("");

//   const fetchAnalytics = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       const res = await axios.get(
//         "https://ad-chain-backend.vercel.app/api/analytics/company",
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );

//       setData(res.data);
//     } catch (err) {
//       console.error("Analytics error:", err);
//       setError("Failed to load analytics");
//     }
//   };

//   useEffect(() => {
//     fetchAnalytics();
//   }, []);

//   if (error) {
//     return (
//       <Center minH="100vh">
//         <Text color="red.500">{error}</Text>
//       </Center>
//     );
//   }

//   if (!data) {
//     return (
//       <Center minH="100vh">
//         <Spinner size="xl" />
//       </Center>
//     );
//   }

//   return (
//     <>
//       <Navbar />

//       <Box bg="gray.50" p={6} minH="100vh">
//         <Heading mb={6}>📊 Analytics Dashboard</Heading>

//         {/* KPI */}
//         <SimpleGrid columns={{ base: 1, md: 4 }} spacing={4} mb={8}>
//           <Stat bg="white" p={5} borderRadius="xl">
//             <StatLabel>Total Campaigns</StatLabel>
//             <StatNumber>{data.totalAds}</StatNumber>
//           </Stat>

//           <Stat bg="white" p={5} borderRadius="xl">
//             <StatLabel>Accepted Ads</StatLabel>
//             <StatNumber>{data.acceptedAds}</StatNumber>
//           </Stat>

//           <Stat bg="white" p={5} borderRadius="xl">
//             <StatLabel>Total Influencers</StatLabel>
//             <StatNumber>{data.totalInfluencers}</StatNumber>
//           </Stat>

//           <Stat bg="white" p={5} borderRadius="xl">
//             <StatLabel>Revenue (demo)</StatLabel>
//             <StatNumber>₹{data.revenue}</StatNumber>
//           </Stat>
//         </SimpleGrid>

//         {/* Charts */}
//         <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
//           <Box bg="white" p={5} borderRadius="xl">
//             <Text fontWeight="bold" mb={3}>Campaign Growth</Text>
//             <ResponsiveContainer width="100%" height={250}>
//               <LineChart data={data.growth}>
//                 <XAxis dataKey="month" />
//                 <YAxis />
//                 <Tooltip />
//                 <Line type="monotone" dataKey="count" />
//               </LineChart>
//             </ResponsiveContainer>
//           </Box>

//           <Box bg="white" p={5} borderRadius="xl">
//             <Text fontWeight="bold" mb={3}>Status Breakdown</Text>
//             <ResponsiveContainer width="100%" height={250}>
//               <PieChart>
//                 <Pie data={data.status} dataKey="value" outerRadius={80} label>
//                   {data.status.map((_, i) => (
//                     <Cell key={i} fill={COLORS[i]} />
//                   ))}
//                 </Pie>
//                 <Tooltip />
//               </PieChart>
//             </ResponsiveContainer>
//           </Box>
//         </SimpleGrid>
//       </Box>

//       <Footer />
//     </>
//   );
// }

// export default AnalyticsDashboard;

import React, { useEffect, useState } from "react";

import {
  Box,
  Heading,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  Spinner,
  Button,
  HStack,
  Select,
  Badge,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import AppLayout from "../components/AppLayout";

const COLORS = ["#38A169", "#ECC94B", "#E53E3E"];

function AnalyticsDashboard() {
  const [data, setData] = useState(null);
  const [range, setRange] = useState("30");

  const fetchAnalytics = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        `https://ad-chain-backend.vercel.app/api/analytics/company?days=${range}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setData(res.data);
    } catch (err) {
      console.error("Analytics error:", err);
    }
  };

  useEffect(() => {
    fetchAnalytics();
  }, [range]);

  const exportCSV = () => {
    if (!data?.leaderboard) return;

    const rows = [
      ["Influencer", "Likes", "Comments", "Views", "AI Score"],
      ...data.leaderboard.map((i) => [
        i.name,
        i.likes,
        i.comments,
        i.views,
        i.aiScore,
      ]),
    ];

    const csv = rows.map((r) => r.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "analytics.csv";
    a.click();
  };

  if (!data) {
    return (
      <Box minH="100vh" display="flex" alignItems="center" justifyContent="center">
        <Spinner size="xl" />
      </Box>
    );
  }

  return (
    <Box bg="gray.50" minH="100vh" p={{ base: 4, md: 8 }}>
      {/* HEADER */}
      <HStack justify="space-between" mb={6}>
        <Box>
          <Heading>📊 Advanced Analytics</Heading>
          <Text color="gray.600">Investor-ready dashboard</Text>
        </Box>

        <HStack>
          <Select value={range} onChange={(e) => setRange(e.target.value)}>
            <option value="7">Last 7 days</option>
            <option value="30">Last 30 days</option>
            <option value="90">Last 90 days</option>
          </Select>

          <Button onClick={fetchAnalytics} colorScheme="blue">
            Refresh
          </Button>

          <Button onClick={exportCSV} colorScheme="green">
            Export CSV
          </Button>
        </HStack>
      </HStack>

      {/* KPI CARDS */}
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={6} mb={10}>
        {[
          { label: "Total Campaigns", value: data.totalAds, color: "blue" },
          { label: "Accepted Ads", value: data.acceptedAds, color: "green" },
          { label: "Influencers", value: data.totalInfluencers, color: "purple" },
          { label: "Revenue (Demo)", value: `₹${data.revenue}`, color: "orange" },
        ].map((item, i) => (
          <Stat
            key={i}
            bg="white"
            p={6}
            borderRadius="2xl"
            boxShadow="md"
            borderLeft={`6px solid var(--chakra-colors-${item.color}-500)`}
          >
            <StatLabel>{item.label}</StatLabel>
            <StatNumber fontSize="3xl">{item.value}</StatNumber>
          </Stat>
        ))}
      </SimpleGrid>

      {/* CHARTS */}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        <Box bg="white" p={6} borderRadius="2xl" boxShadow="md">
          <Text fontWeight="bold" mb={4}>📈 Growth</Text>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data.growth}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line dataKey="count" stroke="#3182CE" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </Box>

        <Box bg="white" p={6} borderRadius="2xl" boxShadow="md">
          <Text fontWeight="bold" mb={4}>📊 Status</Text>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={data.status} dataKey="value" outerRadius={100} label>
                {data.status.map((_, i) => (
                  <Cell key={i} fill={COLORS[i]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Box>
      </SimpleGrid>

      {/* LEADERBOARD */}
      <Box mt={10} bg="white" p={6} borderRadius="2xl" boxShadow="md">
        <Heading size="md" mb={4}>🏆 Top Influencers</Heading>

        <Table>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Likes</Th>
              <Th>Comments</Th>
              <Th>Views</Th>
              <Th>AI Score</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.leaderboard?.map((inf, i) => (
              <Tr key={i}>
                <Td>{inf.name}</Td>
                <Td>{inf.likes}</Td>
                <Td>{inf.comments}</Td>
                <Td>{inf.views}</Td>
                <Td>
                  <Badge colorScheme={inf.aiScore > 70 ? "green" : "yellow"}>
                    {inf.aiScore}%
                  </Badge>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
}

export default AnalyticsDashboard;

