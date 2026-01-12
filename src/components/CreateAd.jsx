// import React, { useState } from 'react';
// import {
//   Box,
//   FormControl,
//   FormLabel,
//   Input,
//   Textarea,
//   Select,
//   Button,
//   VStack,
//   Text,
//   SimpleGrid,
//   useBreakpointValue,
// } from '@chakra-ui/react';
// import axios from 'axios';

// function CreateAd({ onAdCreated }) {
//   const [adData, setAdData] = useState({
//     title: '',
//     description: '',
//     budget: '',
//     category: '',
//     duration: '', // new field
//   });
//   const [error, setError] = useState('');

//   const categories = ['Fashion', 'Fitness', 'Travel', 'Tech', 'Food'];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setAdData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async () => {
//     try {
//       setError('');
//       const token = localStorage.getItem('token');
//       await axios.post('https://ad-chain-backend.vercel.app/api/ads', adData, {
      
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       onAdCreated();
//       setAdData({ title: '', description: '', budget: '', category: '', duration: '' });
//     } catch (err) {
//       setError(err.response?.data?.message || 'Failed to create ad');
//     }
//   };

//   const columns = useBreakpointValue({ base: 1, md: 2 }); // 1 column on small screens, 2 on medium+

//   return (
//     <Box p={4} bg="white" borderRadius="md" boxShadow="md">
//       <VStack spacing={6} align="stretch">
//         <Text fontSize="xl" fontWeight="bold" textAlign="center">
//           Create Ad
//         </Text>
//         {error && <Text color="red.500" textAlign="center">{error}</Text>}
//         <SimpleGrid columns={columns} spacing={4}>
//           <FormControl>
//             <FormLabel>Title</FormLabel>
//             <Input name="title" value={adData.title} onChange={handleChange} />
//           </FormControl>

//           <FormControl>
//             <FormLabel>Budget ($)</FormLabel>
//             <Input type="number" name="budget" value={adData.budget} onChange={handleChange} />
//           </FormControl>

//           <FormControl>
//             <FormLabel>Category</FormLabel>
//             <Select
//               name="category"
//               value={adData.category}
//               onChange={handleChange}
//               placeholder="Select category"
//             >
//               {categories.map((cat) => (
//                 <option key={cat} value={cat}>{cat}</option>
//               ))}
//             </Select>
//           </FormControl>

//           {/* <FormControl>
//             <FormLabel>Duration (in days)</FormLabel>
//             <Input
//               type="number"
//               name="duration"
//               value={adData.duration}
//               onChange={handleChange}
//               placeholder="e.g., 7"
//             />
//           </FormControl> */}
//         </SimpleGrid>

//         <FormControl>
//           <FormLabel>Description</FormLabel>
//           <Textarea name="description" value={adData.description} onChange={handleChange} />
//         </FormControl>

//         <Button colorScheme="brand" onClick={handleSubmit} width="full">
//           Create Ad
//         </Button>
//       </VStack>
//     </Box>
//   );
// }

// export default CreateAd;

import React, { useState } from "react";
import {
  Box,
  Button,
  Input,
  Select,
  Textarea,
  Heading,
  VStack,
  SimpleGrid,
  Divider,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";

function CreateAd({ onAdCreated }) {
  const toast = useToast();

  const [form, setForm] = useState({
    title: "",
    objective: "",
    category: "",
    product: "",
    description: "",
    usp: "",
    audience: "",
    ageGroup: "",
    location: "",
    platform: "",
    influencersRequired: "",
    minFollowers: "",
    budget: "",
    deliverables: "",
    hashtags: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🤖 AI Generator (simple smart logic for now)
  const generateWithAI = () => {
    if (!form.product) {
      toast({
        title: "Enter product name first",
        status: "warning",
      });
      return;
    }

    setForm((prev) => ({
      ...prev,
      title: `${prev.product} Influencer Campaign`,
      description: `We are promoting ${prev.product} for ${prev.audience || "young audience"} to increase brand visibility and engagement.`,
      usp: "High quality, trending and affordable",
      objective: "Brand Awareness",
      platform: "Instagram",
      ageGroup: "18-34",
      deliverables: "1 Reel + 2 Stories",
      hashtags: "#adchain #viral #trending",
      minFollowers: "10000",
    }));

    toast({
      title: "AI generated campaign ✨",
      status: "success",
    });
  };

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "https://ad-chain-backend.vercel.app/api/ads/create",
        form,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      toast({ title: "Ad created successfully", status: "success" });
      onAdCreated();
    } catch (err) {
      toast({ title: "Error creating ad", status: "error" });
      console.error(err);
    }
  };

  return (
    <Box bg="white" p={6} borderRadius="lg" boxShadow="md">
      <Heading size="md" mb={4} color="brand.500">
        Create New Campaign (AI Powered)
      </Heading>

      <VStack spacing={4} align="stretch">

        <Button colorScheme="purple" onClick={generateWithAI}>
          🤖 Generate Campaign with AI
        </Button>

        <Divider />

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
          <Input placeholder="Campaign Title" name="title" value={form.title} onChange={handleChange} />
          <Select name="objective" value={form.objective} onChange={handleChange}>
            <option value="">Objective</option>
            <option>Brand Awareness</option>
            <option>Sales</option>
            <option>Website Traffic</option>
            <option>App Installs</option>
          </Select>

          <Select name="category" value={form.category} onChange={handleChange}>
            <option value="">Category</option>
            <option>Fashion</option>
            <option>Tech</option>
            <option>Fitness</option>
            <option>Food</option>
            <option>Education</option>
          </Select>

          <Input placeholder="Product Name" name="product" value={form.product} onChange={handleChange} />
        </SimpleGrid>

        <Textarea placeholder="Product Description" name="description" value={form.description} onChange={handleChange} />
        <Input placeholder="Unique Selling Point (USP)" name="usp" value={form.usp} onChange={handleChange} />

        <Divider />

        <Heading size="sm">Target Audience</Heading>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
          <Input placeholder="Audience Type (students, gamers)" name="audience" value={form.audience} onChange={handleChange} />
          <Select name="ageGroup" value={form.ageGroup} onChange={handleChange}>
            <option value="">Age Group</option>
            <option>13-17</option>
            <option>18-24</option>
            <option>25-34</option>
            <option>35+</option>
          </Select>
          <Input placeholder="Location" name="location" value={form.location} onChange={handleChange} />
        </SimpleGrid>

        <Divider />

        <Heading size="sm">Influencer Requirements</Heading>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
          <Select name="platform" value={form.platform} onChange={handleChange}>
            <option value="">Platform</option>
            <option>Instagram</option>
            <option>YouTube</option>
            <option>LinkedIn</option>
          </Select>
          <Input placeholder="Influencers Required" name="influencersRequired" value={form.influencersRequired} onChange={handleChange} />
          <Input placeholder="Minimum Followers" name="minFollowers" value={form.minFollowers} onChange={handleChange} />
        </SimpleGrid>

        <Divider />

        <Heading size="sm">Budget & Deliverables</Heading>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
          <Input placeholder="Total Budget ($)" name="budget" value={form.budget} onChange={handleChange} />
          <Input placeholder="Deliverables (1 Reel + 2 Stories)" name="deliverables" value={form.deliverables} onChange={handleChange} />
        </SimpleGrid>

        <Input placeholder="Hashtags" name="hashtags" value={form.hashtags} onChange={handleChange} />

        <Button colorScheme="brand" onClick={handleSubmit}>
          Create Campaign
        </Button>
      </VStack>
    </Box>
  );
}

export default CreateAd;

