
import { useState } from 'react';
import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  VStack,
  Center,
  InputGroup,
  InputRightElement,
  Checkbox,
  Link
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom'
import React from 'react';
import Nav from './Nav'

const SimpleSignIn = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);


  const [firestName , gitFirestName]= React.useState("")
  const [ pass , setPass ] = React.useState<any>()
  const navigate = useNavigate()

  const getInfo = ()=>{
    let Fname = localStorage.getItem("Name")
    let Pass1= localStorage.getItem("PASS")
    if(firestName == Fname && pass.length >=3 && pass==Pass1 ){
    
    navigate("/saudiday")
    }else{
        alert("Please enter correct information")
    }
}
  return (
    <><Nav /><Container maxW="7xl" p={{ base: 5, md: 10 }}>
          <Center>
              <Stack spacing={4}>
                  <Stack align="center">
                      <Heading fontSize="2xl">Sign in to your account</Heading>
                  </Stack>
                  <VStack
                      as="form"
                      boxSize={{ base: 'xs', sm: 'sm', md: 'md' }}
                      h="max-content !important"
                      bg={useColorModeValue('white', 'gray.700')}
                      rounded="lg"
                      boxShadow="lg"
                      p={{ base: 5, sm: 10 }}
                      spacing={8}
                  >
                      <VStack spacing={4} w="100%">
                          <FormControl id="firstName">
                              <FormLabel>First Name</FormLabel>
                              <Input rounded="md" type="text" onChange={e => { gitFirestName(e.target.value); } } />
                          </FormControl>
                          <FormControl id="password">
                              <FormLabel>Password</FormLabel>
                              <InputGroup size="md">
                                  <Input rounded="md" type='text' onChange={e => { gitFirestName(e.target.value); } } />
                                  <InputRightElement width="4.5rem">
                                      <Button
                                          h="1.75rem"
                                          size="sm"
                                          rounded="md"
                                          bg={useColorModeValue('gray.300', 'gray.700')}
                                          _hover={{
                                              bg: useColorModeValue('gray.400', 'gray.800')
                                          }}
                                          onClick={handleClick}
                                      >
                                          {show ? 'Hide' : 'Show'}
                                      </Button>
                                  </InputRightElement>
                              </InputGroup>
                          </FormControl>
                      </VStack>
                      <VStack w="100%">
                          <Stack direction="row" justify="space-between" w="100%">
                              <Checkbox colorScheme="green" size="md">
                                  Remember me
                              </Checkbox>
                              <Link fontSize={{ base: 'md', sm: 'md' }}>Forgot password?</Link>
                          </Stack>
                          <Button
                              bg="green.300"
                              color="white"
                              _hover={{
                                  bg: 'green.500'
                              }}
                              rounded="md"
                              w="100%"
                              type='submit' onChange={getInfo}>
                              Sign in
                          </Button>
                      </VStack>
                  </VStack>
              </Stack>
          </Center>
      </Container></>
  );
};

export default SimpleSignIn;




// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// function LogIn() {
//     const [firestName , setFirestName]= React.useState("")
//     const [ pass , setPass ] = React.useState<any>()
// const navigate = useNavigate()

//     const getInfo = ()=>{
// if(firestName.length >=3 && pass.length >=3){
// localStorage.getItem("firestName" )
// navigate("/saudiday")
// }else{
//     alert("Please enter correct information")
// }
//     }

   


   





//   return (
//     <div className='logIn-form'>
//    <fieldset className='logIn-fieldset'>  
//        تسجيل دخول  
// <input placeholder='First Name' onChange={e =>{setFirestName(e.target.value)}} ></input>
// <input placeholder='Password' type='password' onChange={e =>{setPass(e.target.value)}}></input>
// <button type='submit' onClick={getInfo}>أهلًا وسهلًا</button>


// </fieldset> 

//     </div>
//   )
// }

// export default LogIn