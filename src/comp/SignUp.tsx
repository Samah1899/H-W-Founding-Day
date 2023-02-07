import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import { useNavigate } from 'react-router-dom'
import React from 'react';
import Nav from './Nav'
  
  export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [firestName , setFirestName]= React.useState("")
    const [ pass , setPass ] = React.useState<any>()
    const navigate = useNavigate()

    const getInfo = ()=>{
        if(firestName.length >=3 && pass.length >=3){
        localStorage.setItem("firestName" ,firestName)
        navigate("/saudiday")
        }else{
            alert("Please enter correct information")
        }
            }
  
    return (
        <><Nav /><Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'} textAlign={'center'}>
                        Sign up
                    </Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        to enjoy all of our cool features ✌️
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <HStack>
                            <Box>
                                <FormControl id="firstName" isRequired>
                                    <FormLabel>First Name</FormLabel>
                                    <Input type="text" onChange={e => { setFirestName(e.target.value); } } />
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl id="lastName">
                                    <FormLabel>Last Name</FormLabel>
                                    <Input type="text" />
                                </FormControl>
                            </Box>
                        </HStack>
                        <FormControl id="email" isRequired>
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" />
                        </FormControl>
                        <FormControl id="password" isRequired>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input type={showPassword ? 'text' : 'password'} onChange={e => { setPass(e.target.value); } } />
                                <InputRightElement h={'full'}>
                                    <Button
                                        variant={'ghost'}
                                        onClick={() => setShowPassword((showPassword) => !showPassword)}>
                                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <Stack spacing={10} pt={2}>
                            <Button
                                loadingText="Submitting"
                                size="lg"
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}
                                type='submit' onClick={getInfo}>
                                Sign up
                            </Button>
                        </Stack>
                        <Stack pt={6}>
                            <Text align={'center'}>
                                Already a user? <Link color={'blue.400'}>Login</Link>
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex></>

      
    );
  }









// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// function SignUp() {
//     const [firestName , setFirestName]= React.useState("")
//     const [ pass , setPass ] = React.useState<any>()
// const navigate = useNavigate()

//     const getNwe = ()=>{
// if(firestName.length >=3 && pass.length >=3){
// localStorage.setItem("firestName" , (firestName) )
// navigate("/saudiday")
// }else{
//     alert("Please enter correct information")
// }
//     }

//     return (
//         <div className='logIn-form'>
//        <fieldset className='logIn-fieldset'>  
//            تسجيل دخول  
//     <input placeholder='First Name' onChange={e =>{setFirestName(e.target.value)}} ></input>
//     <input placeholder='Password' type='password' onChange={e =>{setPass(e.target.value)}}></input>
//     <button type='submit' onClick={getNwe}>أهلًا وسهلًا</button>
    
    
//     </fieldset> 
    
//         </div>
//       )
//     }
    
//     export default SignUp