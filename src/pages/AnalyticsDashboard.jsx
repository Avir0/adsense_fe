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
  Center,
} from "@chakra-ui/react";
import axios from "axios";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
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

const COLORS = ["#38A169", "#ECC94B", "#E53E3E"];

function AnalyticsDashboard() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const fetchAnalytics = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "https://ad-chain-backend.vercel.app/api/analytics/company",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setData(res.data);
    } catch (err) {
      console.error("Analytics error:", err);
      setError("Failed to load analytics");
    }
  };

  useEffect(() => {
    fetchAnalytics();
  }, []);

  if (error) {
    return (
      <Center minH="100vh">
        <Text color="red.500">{error}</Text>
      </Center>
    );
  }

  if (!data) {
    return (
      <Center minH="100vh">
        <Spinner size="xl" />
      </Center>
    );
  }

  return (
    <>
      <Navbar />

      <Box bg="gray.50" p={6} minH="100vh">
        <Heading mb={6}>📊 Analytics Dashboard</Heading>

        {/* KPI */}
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={4} mb={8}>
          <Stat bg="white" p={5} borderRadius="xl">
            <StatLabel>Total Campaigns</StatLabel>
            <StatNumber>{data.totalAds}</StatNumber>
          </Stat>

          <Stat bg="white" p={5} borderRadius="xl">
            <StatLabel>Accepted Ads</StatLabel>
            <StatNumber>{data.acceptedAds}</StatNumber>
          </Stat>

          <Stat bg="white" p={5} borderRadius="xl">
            <StatLabel>Total Influencers</StatLabel>
            <StatNumber>{data.totalInfluencers}</StatNumber>
          </Stat>

          <Stat bg="white" p={5} borderRadius="xl">
            <StatLabel>Revenue (demo)</StatLabel>
            <StatNumber>₹{data.revenue}</StatNumber>
          </Stat>
        </SimpleGrid>

        {/* Charts */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          <Box bg="white" p={5} borderRadius="xl">
            <Text fontWeight="bold" mb={3}>Campaign Growth</Text>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={data.growth}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="count" />
              </LineChart>
            </ResponsiveContainer>
          </Box>

          <Box bg="white" p={5} borderRadius="xl">
            <Text fontWeight="bold" mb={3}>Status Breakdown</Text>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={data.status} dataKey="value" outerRadius={80} label>
                  {data.status.map((_, i) => (
                    <Cell key={i} fill={COLORS[i]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Box>
        </SimpleGrid>
      </Box>

      <Footer />
    </>
  );
}

export default AnalyticsDashboard;
