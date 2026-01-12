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
  HStack,
} from "@chakra-ui/react";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";
import axios from "axios";

function CreateAd({ onAdCreated }) {
  const toast = useToast();

  // ================= FORM STATE =================
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

  // ================= AI CHAT STATE =================
  const [showAI, setShowAI] = useState(false);
  const [chat, setChat] = useState([
    { sender: "bot", text: "Hi 👋 I'm Adchain AI. What product are you promoting?" },
  ]);
  const [userInput, setUserInput] = useState("");
  const [step, setStep] = useState(0);

  const answers = {};

  const questions = [
    "What product or service are you promoting?",
    "Who is your target audience?",
    "What is your campaign goal? (sales / awareness)",
    "What is your budget?",
    "How many influencers do you want?",
  ];

  // ================= HANDLE FORM =================
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ================= HANDLE CHAT SEND =================
  const handleSend = () => {
    if (!userInput.trim()) return;

    const newChat = [...chat, { sender: "user", text: userInput }];
    setChat(newChat);

    const updatedAnswers = { ...answers };
    updatedAnswers[step] = userInput;

    setTimeout(() => {
      if (step < questions.length - 1) {
        setChat((prev) => [
          ...prev,
          { sender: "bot", text: questions[step + 1] },
        ]);
        setStep(step + 1);
      } else {
        generateCampaign(updatedAnswers);
      }
    }, 500);

    setUserInput("");
  };

  // ================= GENERATE CAMPAIGN =================
  const generateCampaign = (data) => {
    const product = data[0];
    const audience = data[1];
    const goal = data[2];
    const budget = data[3];
    const influencers = data[4];

    setForm((prev) => ({
      ...prev,
      product,
      title: `${product} Influencer Campaign`,
      description: `We are promoting ${product} targeting ${audience} to achieve ${goal}.`,
      usp: "High quality, trending, and affordable",
      objective: goal.toLowerCase().includes("sale") ? "Sales" : "Brand Awareness",
      platform: "Instagram",
      ageGroup: "18-34",
      deliverables: "1 Reel + 2 Stories",
      hashtags: "#adchain #viral #influencer",
      minFollowers: "10000",
      influencersRequired: influencers,
      budget,
      category: "Fashion",
    }));

    setChat((prev) => [
      ...prev,
      { sender: "bot", text: "Your campaign is ready! I’ve filled the form for you 🤖✨" },
    ]);

    toast({
      title: "AI campaign created successfully",
      status: "success",
    });

    setTimeout(() => setShowAI(false), 1500);
  };

  // ================= SUBMIT =================
  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "https://ad-chain-backend.vercel.app/api/ads",
        form,
        { headers: { Authorization: `Bearer ${token}` } }
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
      {/* ================= FORM ================= */}
      <Box bg="white" p={6} borderRadius="lg" boxShadow="md">
        <Heading size="md" mb={4} color="brand.500">
          Create Campaign
        </Heading>

        <VStack spacing={4} align="stretch">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            <Input name="title" placeholder="Campaign Title" value={form.title} onChange={handleChange} />
            <Input name="product" placeholder="Product" value={form.product} onChange={handleChange} />
          </SimpleGrid>

          <Textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} />

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            <Input name="budget" placeholder="Budget" value={form.budget} onChange={handleChange} />
            <Input name="influencersRequired" placeholder="Influencers Required" value={form.influencersRequired} onChange={handleChange} />
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
        onClick={() => setShowAI(true)}
        zIndex="1000"
      />

      {/* ================= CHAT AI PANEL ================= */}
      {showAI && (
        <Box
          position="fixed"
          bottom="90px"
          right="25px"
          bg="white"
          w="350px"
          borderRadius="lg"
          boxShadow="2xl"
          p={4}
          zIndex="1001"
        >
          <HStack justify="space-between" mb={2}>
            <Text fontWeight="bold">🤖 Adchain AI</Text>
            <IconButton size="sm" icon={<FaTimes />} onClick={() => setShowAI(false)} />
          </HStack>

          <Box h="250px" overflowY="auto" p={2} bg="gray.50" borderRadius="md">
            {chat.map((msg, i) => (
              <Box
                key={i}
                bg={msg.sender === "bot" ? "purple.100" : "blue.100"}
                p={2}
                borderRadius="md"
                mb={2}
                alignSelf={msg.sender === "bot" ? "flex-start" : "flex-end"}
              >
                <Text fontSize="sm">{msg.text}</Text>
              </Box>
            ))}
          </Box>

          <HStack mt={3}>
            <Input
              placeholder="Type your reply..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <IconButton icon={<FaPaperPlane />} onClick={handleSend} />
          </HStack>
        </Box>
      )}
    </>
  );
}

export default CreateAd;
