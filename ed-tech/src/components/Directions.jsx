import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Button, Center, Grid, GridItem, Heading,  Stack ,Image} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import page2 from '../images/page2.png'
import page1 from '../images/page1.png'


const Directions = () => {
  return (
    <div>
      {/* ------------------------------------------ FIRST SECTION ---------------------------------------- */}
      <Stack style={{ textAlign: "left", fontFamily: "Montserrat, sans-serif", margin: "0px 0px 20px 60px" }}>
        {/* <Heading fontSize="5xl">Directions</Heading> */}
        <Image src={page2} alt='page2-design' width="1200px" />

        {/* <Text style={{ fontSize: "21px" }}>8 popular areas, as well as programs for schoolchildren and entire companies</Text> */}
      </Stack>
   

      {/* ------------------------------------------ SECOND SECTION ---------------------------------------- */}

      <div style={{backgroundColor : "black"}}>
      <Stack style={{ textAlign: "Centre", fontFamily: "Montserrat, sans-serif", margin: "0px 0px 20px 60px", marginTop: "100px" , color: "white"}}>
        <Heading fontSize="5xl">Popular Courses</Heading>
        
      </Stack>
      <Grid
       width="90%"
       margin="auto"
       marginTop={50}
       templateColumns='repeat(3, 1fr)'
       gap={10}
       fontFamily="Montserrat, sans-serif"
      >
        <GridItem bg="#FFE5CC"   style={{borderRadius:"35px", padding: "20px 30px"}}>
          <Stack textAlign="left" color="blackAlpha.800">
           
            <p style={{fontSize: "40px",  fontWeight:"700"}}>Information Technology</p>
            <Box lineHeight={10} fontWeight={600}>
              <p>Analytics</p>
              <p>Testing</p>
              <p>Product Management in IT</p>
              <p>Project Management in IT</p>
              <p>Programming</p>
              <p>Architecture</p>
            </Box>
            <Link to='/ittraining'>
              <Center p="15px 0px">
                  <Button width="60%" fontSize="18px" bg="black" padding="25px 0px" color="whiteAlpha.800" _hover={{color: "black", backgroundColor: "whiteAlpha.800"}} rightIcon={<ChevronRightIcon />}>View Courses</Button>
              </Center>
            </Link>
          </Stack>
        </GridItem>

        <GridItem bg="#FFE5CC"  style={{borderRadius:"35px", padding: "20px 30px"}}>
          <Stack textAlign="left" color="blackAlpha.800">
        
            <p style={{fontSize: "40px",  fontWeight:"700"}}>Testing</p>
            <Box lineHeight={10} fontWeight={600}>
              <p>Internet marketing</p>
              <p>Product marketing</p>
              <p>Brand management</p>
            </Box>
            <Link to='/ittraining'>
              <Center p="15px 0px">
                  <Button width="60%" fontSize="18px" bg="black" color="whiteAlpha.800" _hover={{color: "black", backgroundColor: "whiteAlpha.800"}} mt={170} padding="25px 0px" rightIcon={<ChevronRightIcon />}>View Courses</Button>
              </Center>
            </Link>
          </Stack>
        </GridItem>

        <GridItem bg="#FFE5CC"   style={{borderRadius:"35px", padding: "20px 30px"}}>
          <Stack textAlign="left" color="blackAlpha.800">
          
            <p style={{fontSize: "40px",  fontWeight:"700"}}>Design</p>
            <Box lineHeight={10} fontWeight={600}>
              <p>Environment design</p>
              <p>Graphic design</p>
              <p>Object design</p>
              <p>Digital design</p>
            </Box>
            <Link to='/design'>
              <Center p="15px 0px">
                  <Button width="60%" fontSize="18px" bg="black" color="whiteAlpha.800" _hover={{color: "black", backgroundColor: "whiteAlpha.800"}} mt={135} padding="25px 0px" rightIcon={<ChevronRightIcon />}>View Courses</Button>
              </Center>
            </Link>
          </Stack>
        </GridItem>
        
      </Grid>

      </div>
      <Image src={page1} alt='page1-design' width="1700px" margin={'auto'} />
    </div>
  )
}

export default Directions