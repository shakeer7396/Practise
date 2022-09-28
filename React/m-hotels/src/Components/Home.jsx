import React from 'react'
import { Box, Button, Flex } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'


const Home = () => {
    const navigate=useNavigate();
  return (
    
    <Flex
    w={"100vw"}
    h={"100vh"}
    justifyContent={"center"}
    alignItems={"center"}
  >
    <Button
      m={"1rem"}
      variant="solid"
      colorScheme={"blue"}
      onClick={() => navigate("/adminlogin")}
    >
      Admin
    </Button>
    <Button
      m={"1rem"}
      variant="solid"
      colorScheme={"blue"}
      onClick={() => navigate("/signup")}
    >
      User
    </Button>
  </Flex>
  )
}

export default Home