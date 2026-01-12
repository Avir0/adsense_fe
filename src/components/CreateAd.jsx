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
  useToast,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { FaRobot, FaTimes } from "react-icons/fa";
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

  const [showAI, setShowAI] = useState(false);
  const [aiInput, setAiInput] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🤖 Floating AI generate → auto fill form
  const handleAIGenerate = () => {
    if (!aiInput.trim()) {
      toast({ title: "Describe your product first", status: "warning" });
      return;
    }

    const productName = aiInput.split(" ")[0];

    setForm((prev) => ({
      ...prev,
      product: productName,
      title: `${productName} Influencer Campaign`,
      description: `We are launching ${productName} targeted towards young audience to increase brand awareness and engagement.`,
      usp: "High quality, affordable and trending product",
      objective: "Brand Awareness",
      platform: "Instagram",
      ageGroup: "18-34",
      deliverables: "1 Reel + 2 Stories",
      hashtags: "#adchain #viral #influencer",
      minFollowers: "10000",
      influencersRequired: "5",
      category: "Fashion",
      audience: "Young adults",
      location: "India",
    }));

    toast({ title: "AI filled the campaign form 🤖✨", status: "success" });

    setAiInput("");
    setShowAI(false);
  };

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "https://ad-chain-backend.vercel.app/api/ads",
        form,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      toast({ title: "Campaign created successfully", status: "success" });
      onAdCreated();
    } catch (err) {
      console.error(err);
      toast({ title: "Error creating ad", status: "error" });
    }
  };

  return (
    <>
      {/* ================= MAIN FORM ================= */}
      <Box bg="white" p={6} borderRadius="lg" boxShadow="md">
        <Heading size="md" mb={4} color="brand.500">
          Create New Campaign
        </Heading>

        <VStack spacing={4} align="stretch">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            <Input placeholder="Campaign Title" name="title" value={form.title} onChange={handleChange} />
            <Select name="objective" value={form.objective} onChange={handleChange}>
              <option value="">Objective</option>
              <option>Brand Awareness</option>
              <option>Sales</option>
            </Select>

            <Select name="category" value={form.category} onChange={handleChange}>
              <option value="">Category</option>
              <option>Fashion</option>
              <option>Tech</option>
              <option>Fitness</option>
            </Select>

            <Input placeholder="Product Name" name="product" value={form.product} onChange={handleChange} />
          </SimpleGrid>

          <Textarea placeholder="Description" name="description" value={form.description} onChange={handleChange} />
          <Input placeholder="USP" name="usp" value={form.usp} onChange={handleChange} />

          <Divider />

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
            <Input placeholder="Audience" name="audience" value={form.audience} onChange={handleChange} />
            <Input placeholder="Location" name="location" value={form.location} onChange={handleChange} />
            <Select name="platform" value={form.platform} onChange={handleChange}>
              <option value="">Platform</option>
              <option>Instagram</option>
              <option>YouTube</option>
            </Select>
          </SimpleGrid>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            <Input placeholder="Influencers Required" name="influencersRequired" value={form.influencersRequired} onChange={handleChange} />
            <Input placeholder="Budget" name="budget" value={form.budget} onChange={handleChange} />
          </SimpleGrid>

          <Button colorScheme="brand" onClick={handleSubmit}>
            Create Campaign
          </Button>
        </VStack>
      </Box>

      {/* ================= FLOATING AI BUTTON ================= */}
      <IconButton
        icon={<FaRobot />}
        position="fixed"
        bottom="25px"
        right="25px"
        colorScheme="purple"
        size="lg"
        borderRadius="full"
        boxShadow="lg"
        zIndex="1000"
        onClick={() => setShowAI(true)}
        aria-label="AI Assistant"
      />

      {/* ================= FLOATING AI PANEL ================= */}
      {showAI && (
        <Box
          position="fixed"
          bottom="90px"
          right="25px"
          bg="white"
          p={4}
          w="320px"
          borderRadius="lg"
          boxShadow="2xl"
          zIndex="1001"
        >
          <VStack align="stretch" spacing={3}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Text fontWeight="bold">🤖 Adchain AI Assistant</Text>
              <IconButton
                icon={<FaTimes />}
                size="sm"
                onClick={() => setShowAI(false)}
                aria-label="Close AI"
              />
            </Box>

            <Text fontSize="sm">
              Describe your product/business and I will create a campaign for you.
            </Text>

            <Textarea
              placeholder="Example: We sell affordable shoes for college students"
              value={aiInput}
              onChange={(e) => setAiInput(e.target.value)}
            />

            <Button colorScheme="purple" onClick={handleAIGenerate}>
              Generate Campaign
            </Button>
          </VStack>
        </Box>
      )}
    </>
  );
}

export default CreateAd;
