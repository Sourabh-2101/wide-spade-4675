import { Box, Flex, Grid, GridItem, Heading, Input, Radio, RadioGroup, Spacer, Stack, Text, VStack } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';

const ITTraining = () => {

    const [itData, setITData] = useState([]);
    const [query, setQuery] = useState("");
    const [spec, setSpec] = useState("");
    const [level, setLevel] = useState("");

    const fetchProgramsBySearch = (query) => {
        return `https://teal-flag-2494-json-server.onrender.com/IT?q=${query}`;
    }

    const fetchPrograms = (spec, level) => {
        if(spec === "" && level === ""){
            return `https://teal-flag-2494-json-server.onrender.com/IT`;
        }
        else if(spec !== "" && level === ""){
            return `https://teal-flag-2494-json-server.onrender.com/IT?specialization=${spec}`;
        }
        else if(spec === "" && level !== ""){
            return `https://teal-flag-2494-json-server.onrender.com/IT?level=${level}`;
        }
        else{
            return `https://teal-flag-2494-json-server.onrender.com/IT?specialization=${spec}&level=${level}`;
        }
    }

    useEffect(() => {

        let fetchURL;
        if(query !== ""){
            fetchURL = fetchProgramsBySearch(query); 
        }
        else{
            fetchURL = fetchPrograms(spec, level);
        }

        axios({
            url : fetchURL,
            method : 'get'
        })
        .then((res) => {
            setITData(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [query, spec, level]);


    return (
        <div style={{ fontFamily: "Montserrat, sans-serif" }}>
            <Navbar />
            <Heading style={{ textAlign: "left", padding: "30px 40px" }}>IT Training</Heading>
            <Flex bg="gray.100" style={{ padding: "60px 40px"}}>
                <VStack w="25%" spacing="30px">
                    <Box w="100%" style={{ borderRadius: "25px", background: "white", padding: "20px 20px" }}>
                        <Text style={{ fontWeight: "700", fontSize: "20px", paddingBottom: "15px" }}>Program Search</Text>
                        <Input type="text" placeholder="The name of the program ..." onChange={(e) => setQuery(e.target.value)}/>
                    </Box>
                    <Box w="100%" style={{ borderRadius: "25px", background: "white", padding: "20px 20px" }}>
                        <Text style={{ fontWeight: "700", fontSize: "20px", paddingBottom: "15px" }}>Specializations</Text>
                        <RadioGroup value={spec}>
                            <Stack spacing={5} direction='column'>
                                <Radio colorScheme='blue' value='' onChange={(e) => setSpec(e.target.value)}>
                                    All
                                </Radio>
                                <Radio colorScheme='blue' value='testing' onChange={(e) => setSpec(e.target.value)}>
                                    Testing
                                </Radio>
                                <Radio colorScheme='blue' value='analytics' onChange={(e) => setSpec(e.target.value)}>
                                    Analytics
                                </Radio>
                                <Radio colorScheme='blue' value='programing' onChange={(e) => setSpec(e.target.value)}>
                                    Programming
                                </Radio>
                                <Radio colorScheme='blue' value='project management' onChange={(e) => setSpec(e.target.value)}>
                                    Project Management
                                </Radio>
                                <Radio colorScheme='blue' value='architecture' onChange={(e) => setSpec(e.target.value)}>
                                    Architecture
                                </Radio>
                            </Stack>
                        </RadioGroup>
                    </Box>
                    <Box w="100%" style={{ borderRadius: "25px", background: "white", padding: "20px 20px" }}>
                        <Text style={{ fontWeight: "700", fontSize: "20px", paddingBottom: "15px" }}>Level</Text>
                        <RadioGroup value={level}>
                            <Stack spacing={5} direction='column'>
                                <Radio colorScheme='blue' value='' onChange={(e) => setLevel(e.target.value)}>
                                    All
                                </Radio>
                                <Radio colorScheme='blue' value='advanced' onChange={(e) => setLevel(e.target.value)}>
                                    Advanced
                                </Radio>
                                <Radio colorScheme='blue' value='intermediate' onChange={(e) => setLevel(e.target.value)}>
                                    Intermediate
                                </Radio>
                                <Radio colorScheme='blue' value='beginner' onChange={(e) => setLevel(e.target.value)}>
                                    Beginner
                                </Radio>
                            </Stack>
                        </RadioGroup>
                    </Box>
                </VStack>
                <Spacer />
                <Grid
                    w="70%"
                    margin="auto"
                    templateColumns='repeat(2, 1fr)'
                    gap={20}
                >
                    {
                        itData.map((program) => (
                            <Link key={program.id} to={`/programs/${program.id}`}>
                                <GridItem style={{height: "310px", borderRadius: "25px", padding: "15px", backgroundColor: "white", textAlign: "left", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", position: "relative"}}>
                                    <Heading style={{ textAlign: "left" }}>{program.title}</Heading>
                                    <Box my={6}>
                                        <p style={{ textAlign: "left" }}>{program.description}</p>
                                    </Box>
                                    <Box style={{position : "absolute", bottom: "20px"}}>
                                        <p><span style={{fontWeight: "600"}}>Specialization : </span>{program.specialization}</p>
                                        <p><span style={{fontWeight: "600"}}>Duration : </span>{program.duration}</p>
                                        <p><span style={{fontWeight: "600"}}>Level : </span>{program.level}</p>
                                    </Box>
                                </GridItem>
                            </Link>
                        ))
                    }
                </Grid>
            </Flex>
        </div>
    )
}

export default ITTraining