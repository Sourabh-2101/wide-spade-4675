import { Box, Flex, Grid, GridItem, Image, Spacer, Stack, Text , Button} from '@chakra-ui/react'
import React from 'react'
import cartoons from '../images/cartoons.png'


const IntroSection = () => {
  return (
    <div style={{backgroundColor : "#FFB266"}}>
    <div style={{fontFamily: "Montserrat, sans-serif"}}>
        <Flex >
            <Stack textAlign="centre" >
                
                <Box style={{fontWeight: "1000", fontSize: "45px", paddingLeft : "50px"}}>
                    <Text _hover={{color: "#FFFFFF"}}>Improve Your </Text>
                    <Text _hover={{color: "#FFFFFF"}}>Skills Faster</Text>
                  
                    <Image src={cartoons} alt='cartoons-design' width="1400px" />
                </Box>
                
                
               
            </Stack>
            <Spacer />
            <Grid
                    width="100%"
                    pt={50}
                    templateColumns='repeat(3, 1fr)'
                    gap={10}
                    fontWeight={500}
                >
                    
                    <GridItem>
                        
                    </GridItem>
                    <GridItem>
                       Speed up the Skills Acquisition Process By Finding Unlimited Courses that Matches your Niches.
    
                       <Button colorScheme='gray' _hover={{backgroundColor: "black", color: "white"}} >                
                                Enroll Now
                            </Button>
                    </GridItem>
                

                </Grid>
        </Flex>
    </div>
    </div>
  )
}

export default IntroSection