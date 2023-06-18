import { Box, Button, ButtonGroup, HStack, Image, Spacer, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
// import logo from '../images/CODE.png'

const Footer = () => {
    return (
        <div style={{backgroundColor : "black"}}>
        <div style={{ fontFamily: "Montserrat, sans-serif", color : "white" }}>
            <Box style={{ padding: "10px 30px 50px 30px", marginTop: "300px" }}>
                <HStack spacing="28px" fontWeight={600}>
                    {/* <Image src={logo} alt='geek-brains-logo' width={200} /> */}
                   
                    <p>support@Codecadmey.in</p>
                    <Spacer />
                    <ButtonGroup>
                        <Button>
                            <Image src='https://frontend-scripts.hb.bizmrg.com/unique-hf/svg/youtube-icon.svg' alt='youtube-icon' />
                        </Button>
                        <Button>
                            <Image src='https://frontend-scripts.hb.bizmrg.com/unique-hf/svg/tg-icon.svg' alt='telegram-icon' />
                        </Button>
                    </ButtonGroup>
                </HStack>
                <hr></hr>
                <HStack spacing="120px">
                    <Stack>
                        <Text style={{ fontWeight: "700", fontSize: "18px", padding: "10px 0px" }}>Studying programs</Text>
                        <HStack spacing="100px">
                            <VStack spacing="20px">
                                <p>Information Technology</p>
                                <p>Programming</p>
                                <p>Analytics</p>
                                <p>Testing</p>
                                <p>Product and Projects</p>
                                <p>IT Architecture</p>
                                <p>Machine Learning</p>
                            </VStack>
                            <VStack spacing="20px">
                                <p>Information Security</p>
                                <p>Blockchain</p>
                                <p>Marketing</p>
                                <p>Design</p>
                                <p>Games</p>
                                <p>School children</p>
                                <p>Digital Professions</p>
                            </VStack>
                        </HStack>
                    </Stack>
                    <Stack spacing="24px">
                        <Stack textAlign="top">
                            <Text style={{ fontWeight: "700", fontSize: "18px", padding: "10px 0px" }}>Testing</Text>
                            <VStack>
                                <p>All tests</p>
                                <p>Career guidance</p>
                                <p>Profession Selection</p>
                            </VStack>
                        </Stack>
                        <Stack>
                            <Text style={{ fontWeight: "700", fontSize: "18px", padding: "10px 0px" }}>Job Search</Text>
                            <VStack>
                                <p>Companies</p>
                                <p>Jobs</p>
                                <p>Work at Codecadmey</p>
                            </VStack>
                        </Stack>
                    </Stack>
                    <Stack>
                        <Box>
                            <Text style={{ fontWeight: "700", fontSize: "18px", padding: "10px 0px" }}>Magazine</Text>
                            <VStack>
                                <p>Materials</p>
                                <p>Forum</p>
                                <p>Success stories</p>
                                <p>For children and teenagers</p>
                                <p>Blog</p>
                                <p>Life at Codecadmey</p>
                            </VStack>
                        </Box>
                    </Stack>
                    <Stack>
                        <Text style={{ fontWeight: "700", fontSize: "18px", padding: "10px 0px" }}>About Company</Text>
                        <VStack>
                            <p>License</p>
                            <p>Jobs</p>
                            <p>Reviews</p>
                            <p>Referrals</p>
                            <p>Contacts</p>
                            <p>Help</p>
                        </VStack>
                    </Stack>
                </HStack>

                <Stack style={{marginTop: "70px", color: "#80807c", textAlign: "left"}}>
                    <p>Privacy Policy</p>
                    <p>Codecadmey, 125167, Moscow, Leningradsky, 39, building 79, floor 23</p>
                    <p>Copyright © 2023 Codecadmey.</p>
                </Stack>
            </Box>
        </div>
        </div>
    )
}

export default Footer