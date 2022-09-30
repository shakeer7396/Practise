import React from 'react'
import { Box, Button,ButtonGroup } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate=useNavigate();
  return (
    <Box mt={'300px'}>
        <Button colorScheme='blue' onClick={()=>navigate('/tesla')}>Tesla Section</Button>
        <Button colorScheme='blue' ml={'10px'} onClick={()=>navigate('/user')}>User Section</Button>

    </Box>
  )
}

export default Home