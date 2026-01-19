
// import React, { useState } from 'react';
// import { Box, FormControl, FormLabel, Input, Select, Textarea, Button, VStack, Text, HStack, Checkbox, CheckboxGroup } from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';
// import Navbar from '../components/Navbar.jsx';
// import Footer from '../components/Footer.jsx';
// import { useAuth } from '../contexts/AuthContext.jsx';

// function Signup() {
//   const { signup } = useAuth();
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     role: '',
//     name: '',
//     email: '',
//     password: '',
//     contactInfo: '',
//     industry: '',
//     companySize: '',
//     website: '',
//     socialMedia: [],
//     description: '',
//     categories: [],
//   });
//   const [error, setError] = useState('');
//   const [newPlatform, setNewPlatform] = useState({ platform: '', followers: '' });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const categoriesList = ['Fashion', 'Fitness', 'Travel', 'Tech', 'Food', 'Beauty', 'Gaming', 'Lifestyle', 'Healthcare', 'Finance', 'Education', 'Entertainment', 'Sports', 'Music', 'Art', 'Automotive', 'Real Estate', 'Retail', 'Telecommunications', 'Construction', 'Manufacturing','other'];
//   const companyIndustries = ['Technology', 'Fashion', 'Beauty', 'Fitness', 'Travel', 'Food & Beverage', 'Gaming', 'Lifestyle', 'Healthcare', 'Finance', 'Education', 'Entertainment', 'Sports', 'Music', 'Art', 'Automotive', 'Real Estate', 'Retail', 'Telecommunications', 'Construction', 'Manufacturing','other'];
//   const companySizes = ['Small (1-50 employees)', 'Medium (51-200 employees)', 'Large (201+ employees)'];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleCategoryChange = (newCategories) => {
//     if (newCategories.length <= 3) {
//       setFormData((prev) => ({ ...prev, categories: newCategories }));
//     }
//   };

//   const handleAddPlatform = () => {
//     if (!newPlatform.platform || !newPlatform.followers) {
//       setError('Please select a platform and enter follower count');
//       return;
//     }
//     if (formData.socialMedia.some((sm) => sm.platform === newPlatform.platform)) {
//       setError('This platform is already added');
//       return;
//     }
//     setFormData((prev) => ({
//       ...prev,
//       socialMedia: [
//         ...prev.socialMedia,
//         { platform: newPlatform.platform, followers: parseInt(newPlatform.followers) },
//       ],
//     }));
//     setNewPlatform({ platform: '', followers: '' });
//     setError('');
//   };

//   const handleRemovePlatform = (index) => {
//     const updatedSocialMedia = formData.socialMedia.filter((_, i) => i !== index);
//     setFormData((prev) => ({ ...prev, socialMedia: updatedSocialMedia }));
//   };

//   const validateForm = () => {
//     if (!formData.role) return 'Please select a role';
//     if (!formData.name) return 'Name is required';
//     if (!formData.email) return 'Email is required';
//     if (!formData.email.includes('@')) return 'Invalid email format';
//     if (!formData.password) return 'Password is required';
//     if (formData.password.length < 6) return 'Password must be at least 6 characters';
//     if (!formData.contactInfo) return 'Contact information is required';
//     if (formData.role === 'influencer') {
//       if (!formData.socialMedia.length) return 'At least one social media platform is required';
//       if (!formData.categories.length) return 'At least one category is required';
//     }
//     if (formData.role === 'company') {
//       if (!formData.industry) return 'Industry is required';
//       if (!formData.companySize) return 'Company size is required';
//     }
//     return '';
//   };

//   const handleSubmit = async () => {
//     try {
//       setError('');
//       setIsSubmitting(true);

//       // Validate form
//       const validationError = validateForm();
//       if (validationError) {
//         setError(validationError);
//         setIsSubmitting(false);
//         return;
//       }

//       console.log('Submitting form data:', formData); // Debug log
//       const user = await signup(formData);

//       if (user.role === 'influencer') {
//         navigate('/influencer/dashboard');
//       } else {
//         navigate('/company/dashboard');
//       }
//     } catch (err) {
//       console.error('Signup error:', err.response || err); // Debug log
//       const errorMsg = err.message.includes('already exists')
//         ? 'This email is already registered'
//         : err.message.includes('password')
//         ? 'Password does not meet requirements'
//         : err.message || 'Failed to signup';
//       setError(errorMsg);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <Box minH="calc(100vh - 160px)" p={6} bg="gray.50" display="flex" justifyContent="center">
//         <Box p={6} bg="white" borderRadius="md" boxShadow="md" w="full" maxW="md">
//           <VStack spacing={4}>
//             <Text fontSize="2xl" fontWeight="bold">Signup</Text>
//             {error && <Text color="red.500">{error}</Text>}
//             <FormControl>
//               <FormLabel>Role</FormLabel>
//               <Select name="role" value={formData.role} onChange={handleChange} placeholder="Select role">
//                 <option value="influencer">Influencer</option>
//                 <option value="company">Company</option>
//               </Select>
//             </FormControl>
//             <FormControl>
//               <FormLabel>{formData.role === 'company' ? 'Company Name' : 'Name'}</FormLabel>
//               <Input name="name" value={formData.name} onChange={handleChange} />
//             </FormControl>
//             <FormControl>
//               <FormLabel>Email</FormLabel>
//               <Input type="email" name="email" value={formData.email} onChange={handleChange} />
//             </FormControl>
//             <FormControl>
//               <FormLabel>Password</FormLabel>
//               <Input type="password" name="password" value={formData.password} onChange={handleChange} />
//             </FormControl>
//             <FormControl>
//               <FormLabel>Contact Information (Phone)</FormLabel>
//               <Input type="tel" name="contactInfo" value={formData.contactInfo} onChange={handleChange} />
//             </FormControl>
//             {formData.role === 'company' && (
//               <>
//                 <FormControl>
//                   <FormLabel>Industry</FormLabel>
//                   <Select name="industry" value={formData.industry} onChange={handleChange} placeholder="Select industry">
//                     {companyIndustries.map((ind) => (
//                       <option key={ind} value={ind}>{ind}</option>
//                     ))}
//                   </Select>
//                 </FormControl>
//                 <FormControl>
//                   <FormLabel>Company Size</FormLabel>
//                   <Select name="companySize" value={formData.companySize} onChange={handleChange} placeholder="Select size">
//                     {companySizes.map((size) => (
//                       <option key={size} value={size}>{size}</option>
//                     ))}
//                   </Select>
//                 </FormControl>
//                 <FormControl>
//                   <FormLabel>Website</FormLabel>
//                   <Input type="url" name="website" value={formData.website} onChange={handleChange} />
//                 </FormControl>
//               </>
//             )}
//             {formData.role === 'influencer' && (
//               <>
//                 <FormControl>
//                   <FormLabel>Social Media Platforms</FormLabel>
//                   {formData.socialMedia.map((sm, index) => (
//                     <HStack key={index} spacing={2} mb={2}>
//                       <Input value={sm.platform} isReadOnly />
//                       <Input value={sm.followers} isReadOnly />
//                       <Button colorScheme="red" onClick={() => handleRemovePlatform(index)}>Remove</Button>
//                     </HStack>
//                   ))}
//                   <HStack spacing={2}>
//                     <Select
//                       value={newPlatform.platform}
//                       onChange={(e) => setNewPlatform((prev) => ({ ...prev, platform: e.target.value }))}
//                       placeholder="Select Platform"
//                     >
//                       <option value="Instagram">Instagram</option>
//                       <option value="YouTube">YouTube</option>
//                       <option value="TikTok">TikTok</option>
//                     </Select>
//                     <Input
//                       type="number"
//                       value={newPlatform.followers}
//                       onChange={(e) => setNewPlatform((prev) => ({ ...prev, followers: e.target.value }))}
//                       placeholder="Followers"
//                     />
//                     <Button onClick={handleAddPlatform} colorScheme="brand">Add</Button>
//                   </HStack>
//                 </FormControl>
//                 <FormControl>
//                   <FormLabel>Categories (Max 3)</FormLabel>
//                   <Box display="flex" flexWrap="wrap" gap={3}>
//                     {categoriesList.map((cat) => (
//                       <Box
//                         key={cat}
//                         p={3}
//                         bg={formData.categories.includes(cat) ? 'green.100' : 'gray.100'}
//                         borderRadius="md"
//                         cursor="pointer"
//                         onClick={() => {
//                           const updatedCategories = formData.categories.includes(cat)
//                             ? formData.categories.filter((category) => category !== cat)
//                             : [...formData.categories, cat];
//                           if (updatedCategories.length <= 3) {
//                             handleCategoryChange(updatedCategories);
//                           }
//                         }}
//                       >
//                         {cat}
//                       </Box>
//                     ))}
//                   </Box>
//                   <Text color="gray.500" mt={2}>
//                     You can select up to 3 categories.
//                   </Text>
//                 </FormControl>
//               </>
//             )}
//             <FormControl>
//               <FormLabel>Description</FormLabel>
//               <Textarea name="description" value={formData.description} onChange={handleChange} />
//             </FormControl>
//             <Button
//               colorScheme="brand"
//               onClick={handleSubmit}
//               isLoading={isSubmitting}
//               isDisabled={isSubmitting}
//             >
//               Signup
//             </Button>
//           </VStack>
//         </Box>
//       </Box>
//       <Footer />
//     </>
//   );
// }

// export default Signup;




import React, { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Button,
  VStack,
  Text,
  HStack,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import { useAuth } from '../contexts/AuthContext.jsx';

function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    role: '',
    name: '',
    email: '',
    password: '',
    contactInfo: '',
    industry: '',
    companySize: '',
    website: '',
    socialMedia: [],
    description: '',
    categories: [],
  });

  const [error, setError] = useState('');
  const [newPlatform, setNewPlatform] = useState({ platform: '', followers: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categoriesList = ['Fashion', 'Fitness', 'Travel', 'Tech', 'Food', 'Beauty', 'Gaming', 'Lifestyle', 'Healthcare', 'Finance', 'Education', 'Entertainment'];
  const companyIndustries = ['Technology', 'Fashion', 'Beauty', 'Fitness', 'Travel', 'Food', 'Healthcare'];
  const companySizes = ['Small (1-50)', 'Medium (51-200)', 'Large (201+)'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (newCategories) => {
    if (newCategories.length <= 3) {
      setFormData((prev) => ({ ...prev, categories: newCategories }));
    }
  };

  const handleAddPlatform = () => {
    if (!newPlatform.platform || !newPlatform.followers) {
      setError('Please fill platform and followers');
      return;
    }

    setFormData((prev) => ({
      ...prev,
      socialMedia: [...prev.socialMedia, newPlatform],
    }));

    setNewPlatform({ platform: '', followers: '' });
    setError('');
  };

  const handleRemovePlatform = (index) => {
    setFormData((prev) => ({
      ...prev,
      socialMedia: prev.socialMedia.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <>
      <Navbar />

      <Box bg="gray.50" minH="100vh" px={{ base: 3, md: 6 }} py={6}>
        <Box
          maxW="md"
          mx="auto"
          bg="white"
          p={{ base: 4, md: 6 }}
          borderRadius="2xl"
          boxShadow="lg"
        >
          <VStack spacing={5} align="stretch">
            <Text fontSize="2xl" fontWeight="bold" textAlign="center">
              Create Account
            </Text>

            {error && (
              <Box bg="red.50" p={2} borderRadius="md">
                <Text color="red.500" fontSize="sm">{error}</Text>
              </Box>
            )}

            <FormControl>
              <FormLabel fontSize="sm">Role</FormLabel>
              <Select name="role" value={formData.role} onChange={handleChange}>
                <option value="">Select role</option>
                <option value="influencer">Influencer</option>
                <option value="company">Company</option>
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel fontSize="sm">Name</FormLabel>
              <Input name="name" value={formData.name} onChange={handleChange} />
            </FormControl>

            <FormControl>
              <FormLabel fontSize="sm">Email</FormLabel>
              <Input type="email" name="email" value={formData.email} onChange={handleChange} />
            </FormControl>

            <FormControl>
              <FormLabel fontSize="sm">Password</FormLabel>
              <Input type="password" name="password" value={formData.password} onChange={handleChange} />
            </FormControl>

            <FormControl>
              <FormLabel fontSize="sm">Phone</FormLabel>
              <Input type="tel" name="contactInfo" value={formData.contactInfo} onChange={handleChange} />
            </FormControl>

            {formData.role === 'influencer' && (
              <>
                <FormControl>
                  <FormLabel fontSize="sm">Social Media</FormLabel>

                  {formData.socialMedia.map((sm, i) => (
                    <HStack key={i}>
                      <Input size="sm" value={sm.platform} isReadOnly />
                      <Input size="sm" value={sm.followers} isReadOnly />
                      <Button size="sm" colorScheme="red" onClick={() => handleRemovePlatform(i)}>X</Button>
                    </HStack>
                  ))}

                  <VStack mt={2}>
                    <Select
                      size="sm"
                      value={newPlatform.platform}
                      onChange={(e) => setNewPlatform({ ...newPlatform, platform: e.target.value })}
                    >
                      <option value="">Platform</option>
                      <option>Instagram</option>
                      <option>YouTube</option>
                      <option>TikTok</option>
                    </Select>

                    <Input
                      size="sm"
                      placeholder="Followers"
                      value={newPlatform.followers}
                      onChange={(e) => setNewPlatform({ ...newPlatform, followers: e.target.value })}
                    />

                    <Button w="full" size="sm" onClick={handleAddPlatform}>
                      Add Platform
                    </Button>
                  </VStack>
                </FormControl>

                <FormControl>
                  <FormLabel fontSize="sm">Categories (max 3)</FormLabel>
                  <Box display="flex" flexWrap="wrap" gap={2}>
                    {categoriesList.map((cat) => (
                      <Box
                        key={cat}
                        px={3}
                        py={1}
                        fontSize="sm"
                        borderRadius="full"
                        bg={formData.categories.includes(cat) ? 'blue.500' : 'gray.200'}
                        color={formData.categories.includes(cat) ? 'white' : 'black'}
                        cursor="pointer"
                        onClick={() => {
                          const updated = formData.categories.includes(cat)
                            ? formData.categories.filter(c => c !== cat)
                            : [...formData.categories, cat];
                          handleCategoryChange(updated);
                        }}
                      >
                        {cat}
                      </Box>
                    ))}
                  </Box>
                </FormControl>
              </>
            )}

            <FormControl>
              <FormLabel fontSize="sm">Description</FormLabel>
              <Textarea name="description" value={formData.description} onChange={handleChange} />
            </FormControl>

            <Button
              size="lg"
              w="full"
              colorScheme="blue"
              isLoading={isSubmitting}
              onClick={handleSubmit}
              borderRadius="xl"
            >
              Create Account
            </Button>
          </VStack>
        </Box>
      </Box>

      <Footer />
    </>
  );
}

export default Signup;

