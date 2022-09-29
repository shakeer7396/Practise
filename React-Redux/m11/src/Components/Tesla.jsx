import React, { useState } from 'react'
import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Select,
  } from '@chakra-ui/react'
import { useAlert } from 'react-alert'
const Tesla = () => {
    const alert=useAlert();

    const [input,setInput] = useState()

    const handleChange=()=>{
        const {id,value} =
    }

    const handleSubmit=()=>{

    }
  return (
    <FormControl w={"30%"} boxShadow={"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"} m={"auto"} mt={"100px"} padding={"15px"}>

  <FormLabel textAlign={"center"} mt={"10px"}>Name</FormLabel>
  <Input type='text' placeholder='Enter Name' onChange={handleChange} id='name' />

  <FormLabel textAlign={"center"} mt={"10px"}>Age</FormLabel>
  <Input type='text' placeholder='Enter Age' onChange={handleChange} id='age' />

  <FormLabel textAlign={"center"} mt={"10px"}>State</FormLabel>
  <Select placeholder='Select State' id='state' onChange={handleChange} >
  <option value='Andhra'>Andhra</option>
   <option value='Karnataka'>Karnataka</option>
  <option value='Telangana'>Telangana</option>
  <option value='Tamilnadu'>Tamilnadu</option>
  <option value='Maharastra'>Maharastra</option>
  </Select>

  <FormLabel textAlign={"center"} mt={"10px"}>Year</FormLabel>
  <Select placeholder='Select Year' id='year' onChange={handleChange} >
  <option value='2023'>2023</option>
  <option value='2024'>2024</option>
   <option value='2025'>2025</option>
  <option value='2026'>2026</option>
  <option value='2027'>2027</option>
</Select>

<Button colorScheme='blue' type='submit' mt={"10px"} onClick={handleSubmit}>Add</Button>
</FormControl>
  )
}

export default Tesla