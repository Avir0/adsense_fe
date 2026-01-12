// // import React, { useState } from 'react';
// // import {
// //   Box,
// //   FormControl,
// //   FormLabel,
// //   Input,
// //   Textarea,
// //   Select,
// //   Button,
// //   VStack,
// //   Text,
// //   SimpleGrid,
// //   useBreakpointValue,
// // } from '@chakra-ui/react';
// // import axios from 'axios';

// // function CreateAd({ onAdCreated }) {
// //   const [adData, setAdData] = useState({
// //     title: '',
// //     description: '',
// //     budget: '',
// //     category: '',
// //     duration: '', // new field
// //   });
// //   const [error, setError] = useState('');

// //   const categories = ['Fashion', 'Fitness', 'Travel', 'Tech', 'Food'];

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setAdData((prev) => ({ ...prev, [name]: value }));
// //   };

// //   const handleSubmit = async () => {
// //     try {
// //       setError('');
// //       const token = localStorage.getItem('token');
// //       await axios.post('https://ad-chain-backend.vercel.app/api/ads', adData, {
      
// //         headers: { Authorization: `Bearer ${token}` },
// //       });
// //       onAdCreated();
// //       setAdData({ title: '', description: '', budget: '', category: '', duration: '' });
// //     } catch (err) {
// //       setError(err.response?.data?.message || 'Failed to create ad');
// //     }
// //   };

// //   const columns = useBreakpointValue({ base: 1, md: 2 }); // 1 column on small screens, 2 on medium+

// //   return (
// //     <Box p={4} bg="white" borderRadius="md" boxShadow="md">
// //       <VStack spacing={6} align="stretch">
// //         <Text fontSize="xl" fontWeight="bold" textAlign="center">
// //           Create Ad
// //         </Text>
// //         {error && <Text color="red.500" textAlign="center">{error}</Text>}
// //         <SimpleGrid columns={columns} spacing={4}>
// //           <FormControl>
// //             <FormLabel>Title</FormLabel>
// //             <Input name="title" value={adData.title} onChange={handleChange} />
// //           </FormControl>

// //           <FormControl>
// //             <FormLabel>Budget ($)</FormLabel>
// //             <Input type="number" name="budget" value={adData.budget} onChange={handleChange} />
// //           </FormControl>

// //           <FormControl>
// //             <FormLabel>Category</FormLabel>
// //             <Select
// //               name="category"
// //               value={adData.category}
// //               onChange={handleChange}
// //               placeholder="Select category"
// //             >
// //               {categories.map((cat) => (
// //                 <option key={cat} value={cat}>{cat}</option>
// //               ))}
// //             </Select>
// //           </FormControl>

// //           {/* <FormControl>
// //             <FormLabel>Duration (in days)</FormLabel>
// //             <Input
// //               type="number"
// //               name="duration"
// //               value={adData.duration}
// //               onChange={handleChange}
// //               placeholder="e.g., 7"
// //             />
// //           </FormControl> */}
// //         </SimpleGrid>

// //         <FormControl>
// //           <FormLabel>Description</FormLabel>
// //           <Textarea name="description" value={adData.description} onChange={handleChange} />
// //         </FormControl>

// //         <Button colorScheme="brand" onClick={handleSubmit} width="full">
// //           Create Ad
// //         </Button>
// //       </VStack>
// //     </Box>
// //   );
// // }

// // export default CreateAd;
// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   Input,
//   Select,
//   Textarea,
//   Heading,
//   VStack,
//   SimpleGrid,
//   Divider,
//   Text,
//   useToast,
// } from "@chakra-ui/react";
// import axios from "axios";

// function CreateAd({ onAdCreated }) {
//   const toast = useToast();

//   const [form, setForm] = useState({
//     title: "",
//     objective: "",
//     category: "",
//     product: "",
//     description: "",
//     usp: "",
//     audience: "",
//     ageGroup: "",
//     location: "",
//     platform: "",
//     influencersRequired: "",
//     minFollowers: "",
//     budget: "",
//     deliverables: "",
//     hashtags: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // 🤖 Improved AI Generator
//   const generateWithAI = () => {
//     if (!form.product.trim()) {
//       toast({
//         title: "Please enter product name first",
//         status: "warning",
//         duration: 2000,
//       });
//       return;
//     }

//     const audience = form.audience || "young audience";

//     setForm((prev) => ({
//       ...prev,
//       title: `${prev.product} Influencer Marketing Campaign`,
//       description: `We are launching ${prev.product} targeted towards ${audience}. The campaign focuses on engaging content and strong brand visibility.`,
//       usp: "High quality, affordable and trending product",
//       objective: "Brand Awareness",
//       platform: "Instagram",
//       ageGroup: "18-34",
//       deliverables: "1 Reel + 2 Stories",
//       hashtags: "#adchain #viral #influencermarketing",
//       minFollowers: "10000",
//       influencersRequired: prev.influencersRequired || "5",
//     }));

//     toast({
//       title: "AI generated campaign successfully 🤖✨",
//       status: "success",
//       duration: 2000,
//     });
//   };

//   const handleSubmit = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       await axios.post(
//         "https://ad-chain-backend.vercel.app/api/ads", // ✅ FIXED URL
//         form,
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );

//       toast({ title: "Ad created successfully", status: "success" });
//       onAdCreated();

//       // Optional: reset form
//       setForm({
//         title: "",
//         objective: "",
//         category: "",
//         product: "",
//         description: "",
//         usp: "",
//         audience: "",
//         ageGroup: "",
//         location: "",
//         platform: "",
//         influencersRequired: "",
//         minFollowers: "",
//         budget: "",
//         deliverables: "",
//         hashtags: "",
//       });

//     } catch (err) {
//       console.error(err);
//       toast({ title: "Error creating ad", status: "error" });
//     }
//   };

//   return (
//     <Box bg="white" p={6} borderRadius="lg" boxShadow="md">
//       <Heading size="md" mb={4} color="brand.500">
//         Create New Campaign (AI Powered)
//       </Heading>

//       <VStack spacing={4} align="stretch">

//         <Button colorScheme="purple" onClick={generateWithAI}>
//           🤖 Generate Campaign with AI
//         </Button>

//         <Divider />

//         <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
//           <Input placeholder="Campaign Title" name="title" value={form.title} onChange={handleChange} />
//           <Select name="objective" value={form.objective} onChange={handleChange}>
//             <option value="">Objective</option>
//             <option>Brand Awareness</option>
//             <option>Sales</option>
//             <option>Website Traffic</option>
//             <option>App Installs</option>
//           </Select>

//           <Select name="category" value={form.category} onChange={handleChange}>
//             <option value="">Category</option>
//             <option>Fashion</option>
//             <option>Tech</option>
//             <option>Fitness</option>
//             <option>Food</option>
//             <option>Education</option>
//           </Select>

//           <Input placeholder="Product Name" name="product" value={form.product} onChange={handleChange} />
//         </SimpleGrid>

//         <Textarea placeholder="Product Description" name="description" value={form.description} onChange={handleChange} />
//         <Input placeholder="Unique Selling Point (USP)" name="usp" value={form.usp} onChange={handleChange} />

//         <Divider />

//         <Heading size="sm">Target Audience</Heading>

//         <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
//           <Input placeholder="Audience Type" name="audience" value={form.audience} onChange={handleChange} />
//           <Select name="ageGroup" value={form.ageGroup} onChange={handleChange}>
//             <option value="">Age Group</option>
//             <option>13-17</option>
//             <option>18-24</option>
//             <option>25-34</option>
//             <option>35+</option>
//           </Select>
//           <Input placeholder="Location" name="location" value={form.location} onChange={handleChange} />
//         </SimpleGrid>

//         <Divider />

//         <Heading size="sm">Influencer Requirements</Heading>

//         <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
//           <Select name="platform" value={form.platform} onChange={handleChange}>
//             <option value="">Platform</option>
//             <option>Instagram</option>
//             <option>YouTube</option>
//             <option>LinkedIn</option>
//           </Select>
//           <Input placeholder="Influencers Required" name="influencersRequired" value={form.influencersRequired} onChange={handleChange} />
//           <Input placeholder="Minimum Followers" name="minFollowers" value={form.minFollowers} onChange={handleChange} />
//         </SimpleGrid>

//         <Divider />

//         <Heading size="sm">Budget & Deliverables</Heading>

//         <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
//           <Input placeholder="Total Budget ($)" name="budget" value={form.budget} onChange={handleChange} />
//           <Input placeholder="Deliverables" name="deliverables" value={form.deliverables} onChange={handleChange} />
//         </SimpleGrid>

//         <Input placeholder="Hashtags" name="hashtags" value={form.hashtags} onChange={handleChange} />

//         <Button colorScheme="brand" onClick={handleSubmit}>
//           Create Campaign
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
  Checkbox,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { FaRobot, FaMagic } from "react-icons/fa";
import axios from "axios";

function CreateAd({ onAdCreated }) {
  const toast = useToast();

  const [form, setForm] = useState({
    // Campaign basics
    title: "",
    objective: "",
    category: "",

    // Product
    product: "",
    description: "",
    usp: "",
    price: "",

    // Targeting
    ageGroup: "",
    gender: "",
    location: "",
    interests: "",

    // Influencer requirements
    influencersRequired: "",
    platform: "",
    minFollowers: "",
    engagementRate: "",
    language: "",

    // Deliverables
    deliverables: "",

    // Budget
    budget: "",
    paymentType: "",
    bonus: "",

    // Timeline
    startDate: "",
    endDate: "",

    // Guidelines
    dos: "",
    donts: "",

    // AI fields
    hashtags: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🤖 AI Generate
  const generateWithAI = () => {
    if (!form.product.trim()) {
      toast({ title: "Enter product name first", status: "warning" });
      return;
    }

    setForm((prev) => ({
      ...prev,
      title: `${prev.product} Campaign`,
      description: `Promote ${prev.product} targeting young audience with high engagement.`,
      usp: "High quality, affordable and trending",
      objective: "Brand Awareness",
      category: "Fashion",
      platform: "Instagram",
      deliverables: "1 Reel + 2 Stories",
      hashtags: "#adchain #influencer #viral",
      influencersRequired: "5",
      minFollowers: "10000",
      engagementRate: "3",
      ageGroup: "18-24",
      gender: "All",
      language: "English",
      budget: prev.budget || "1000",
    }));

    toast({ title: "AI generated campaign 🤖", status: "success" });
  };

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.post("https://ad-chain-backend.vercel.app/api/ads", form, {
        headers: { Authorization: `Bearer ${token}` },
      });

      toast({ title: "Campaign created successfully", status: "success" });
      onAdCreated();
    } catch (err) {
      toast({ title: "Error creating ad", status: "error" });
    }
  };

  return (
    <>
      {/* ================= FORM ================= */}
      <Box bg="white" p={6} borderRadius="lg" boxShadow="md">
        <Heading size="md" mb={4}>Create Professional Campaign</Heading>

        <VStack spacing={5} align="stretch">

          {/* Campaign Basics */}
          <Heading size="sm">Campaign Basics</Heading>
          <SimpleGrid columns={2} spacing={4}>
            <Input name="title" placeholder="Campaign Name" value={form.title} onChange={handleChange} />
            <Select name="objective" value={form.objective} onChange={handleChange}>
              <option value="">Objective</option>
              <option>Brand Awareness</option>
              <option>Sales</option>
              <option>App Installs</option>
              <option>Website Traffic</option>
              <option>Lead Generation</option>
            </Select>
            <Select name="category" value={form.category} onChange={handleChange}>
              <option value="">Category</option>
              <option>Fashion</option>
              <option>Tech</option>
              <option>Fitness</option>
              <option>Finance</option>
              <option>Food</option>
            </Select>
          </SimpleGrid>

          <Divider />

          {/* Product */}
          <Heading size="sm">Product Details</Heading>
          <Input name="product" placeholder="Product Name" value={form.product} onChange={handleChange} />
          <Textarea name="description" placeholder="Product Description" value={form.description} onChange={handleChange} />
          <Input name="usp" placeholder="Unique Selling Point" value={form.usp} onChange={handleChange} />
          <Input name="price" placeholder="Product Price (optional)" value={form.price} onChange={handleChange} />

          <Divider />

          {/* Targeting */}
          <Heading size="sm">Target Audience</Heading>
          <SimpleGrid columns={3} spacing={4}>
            <Select name="ageGroup" value={form.ageGroup} onChange={handleChange}>
              <option value="">Age Group</option>
              <option>13-17</option>
              <option>18-24</option>
              <option>25-34</option>
              <option>35-44</option>
              <option>45+</option>
            </Select>
            <Select name="gender" value={form.gender} onChange={handleChange}>
              <option value="">Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>All</option>
            </Select>
            <Input name="location" placeholder="Location" value={form.location} onChange={handleChange} />
          </SimpleGrid>

          <Divider />

          {/* Influencer Requirements */}
          <Heading size="sm">Influencer Requirements</Heading>
          <SimpleGrid columns={3} spacing={4}>
            <Input name="influencersRequired" placeholder="Influencers Required" value={form.influencersRequired} onChange={handleChange} />
            <Select name="platform" value={form.platform} onChange={handleChange}>
              <option value="">Platform</option>
              <option>Instagram</option>
              <option>YouTube</option>
              <option>LinkedIn</option>
            </Select>
            <Input name="minFollowers" placeholder="Min Followers" value={form.minFollowers} onChange={handleChange} />
          </SimpleGrid>

          <Divider />

          {/* Budget */}
          <Heading size="sm">Budget & Payment</Heading>
          <SimpleGrid columns={2} spacing={4}>
            <Input name="budget" placeholder="Total Budget" value={form.budget} onChange={handleChange} />
            <Select name="paymentType" value={form.paymentType} onChange={handleChange}>
              <option value="">Payment Type</option>
              <option>Fixed</option>
              <option>Per Post</option>
              <option>Per 1k Views</option>
            </Select>
          </SimpleGrid>

          <Divider />

          <Button colorScheme="brand" onClick={handleSubmit}>
            Create Campaign
          </Button>
        </VStack>
      </Box>

      {/* ================= FLOATING AI BUTTONS ================= */}
      <VStack position="fixed" bottom="25px" right="25px" spacing={3} zIndex="9999">
        <IconButton
          icon={<FaRobot />}
          colorScheme="purple"
          size="lg"
          borderRadius="full"
          aria-label="Generate with AI"
          onClick={generateWithAI}
        />
        <IconButton
          icon={<FaMagic />}
          colorScheme="blue"
          size="lg"
          borderRadius="full"
          aria-label="Improve with AI"
          onClick={generateWithAI}
        />
      </VStack>
    </>
  );
}

export default CreateAd;

