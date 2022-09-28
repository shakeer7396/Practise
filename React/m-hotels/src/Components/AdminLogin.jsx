import React, { useState } from 'react'
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    FormHelperText,
    useToast,
  } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
  
  export default function AdminLogin() {
    const toast=useToast();
    const navigate=useNavigate();

    const [adminForm,setAdminForm]=useState({
        email:"",
        password:"",
    });
    const handleChange=(e)=>{
        setAdminForm({...adminForm,[e.target.id]: e.target.value})
    }

    const handleSignIn=(e)=>{
        e.preventDefault();
        // if(adminForm.email ==="admin@gmail.com" && adminForm.password==="masai")
    }
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Admin Login</Heading>
            
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
                
                <FormLabel>Email address</FormLabel>
                <Input type="email" placeholder='Enter email' id="email" onChange={handleChange} />
            
                <FormLabel>Password</FormLabel>
                <Input type="password" placeholder='Enter password' id="password" onChange={handleChange} />
             
                <Button type="submit" onClick={handleSignIn}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }