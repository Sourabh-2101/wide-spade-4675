import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, HStack, Image, Spacer, Stack, Text, useDisclosure } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import {Link} from "react-router-dom";
import logo from '../images/CODE.png'
import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContextProvider';

const Navbar = () => {

    const {isAuth, user, logout} = useContext(AuthContext);
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <div style={{backgroundColor : "#FFB266"}}>
        <div style={{fontFamily: "Montserrat, sans-serif"}}>
            <Flex minWidth='max-content' alignItems='center' gap='7' px={5}>
                <HStack>
                    <Button colorScheme='gray' onClick={onOpen}>
                        <HamburgerIcon />
                    </Button>
                    <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
                        <DrawerOverlay />
                        <DrawerContent>
                        <DrawerCloseButton />
                            <DrawerHeader fontSize="3xl" borderBottomWidth='1px' fontFamily="Montserrat, sans-serif">Programs</DrawerHeader>
                            <DrawerBody style={{fontFamily: "Montserrat, sans-serif"}}>
                                <Stack spacing="24px">
                                    <Text fontSize="xl" _hover={{color: "#9d9b9e"}}>
                                        <Link to='/ittraining'>
                                            Information Technology
                                        </Link>
                                    </Text>
                                    <Text fontSize="xl" _hover={{color: "#9d9b9e"}}>
                                        <Link to='/programming'>
                                            Programming
                                        </Link>
                                    </Text>
                                    <Text fontSize="xl" _hover={{color: "#9d9b9e"}}>
                                        <Link to='/ittraining'>
                                            Analytics
                                        </Link>
                                    </Text>
                                    <Text fontSize="xl" _hover={{color: "#9d9b9e"}}>
                                        <Link to='/ittraining'>
                                            Testing
                                        </Link>
                                    </Text>
                                   
                                </Stack>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                    <Link to='/'>
                        <Image src={logo} alt='CODE' width={125} />
                    </Link>
                </HStack>
                <Text fontSize="xl" fontWeight={700} _hover={{color: "#9d9b9e"}}  onClick={onOpen}>Courses</Text>
                {
                    isAuth ? (
                        <Link to={`/users/${user.id}`}>
                            <Text fontSize="xl" fontWeight={700} _hover={{color: "#9d9b9e"}}>Blogs</Text>
                        </Link>
                    ) : (
                        null
                    )
                }
                
                <Text fontSize="xl" fontWeight={700} _hover={{color: "#9d9b9e"}}>About</Text>
                <Spacer />
                {
                    isAuth ? (
                        <HStack>
                            <Text>Hi, {user.name}</Text>
                            <Spacer />
                            <Button colorScheme='gray' _hover={{backgroundColor: "black", color: "white"}} onClick={logout}>                
                                Logout
                            </Button>
                        </HStack>
                    ) : (
                        <HStack>
                            <Button colorScheme='gray' _hover={{backgroundColor: "black", color: "white"}}>
                                <Link to="/login" style={{textDecoration: "none"}}>
                                    Login
                                </Link>
                            </Button>
                            <Spacer />
                            <Button colorScheme='gray' _hover={{backgroundColor: "black", color: "white"}}>
                                <Link to="/register" style={{textDecoration: "none"}}>
                                    SignUp
                                </Link>
                            </Button>
                        </HStack>
                    )
                }
            </Flex>
        </div>
        </div>
    )
}

export default Navbar