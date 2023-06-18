import { Box, Flex, Grid, GridItem, Heading, Input, Radio, RadioGroup, Spacer, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';

const Programming = () => {

    const [programmingData, setProgrammingData] =  useState([]);
    const [query, setQuery] = useState("");
    const [spec, setSpec] = useState("");
    const [level, setLevel] = useState("");

    const fetchProgramsBySearch = (query) => {
        return `https://teal-flag-2494-json-server.onrender.com/programming?q=${query}`;
    }

    const fetchPrograms = (spec, level) => {
        if(spec === "" && level === ""){
            return `https://teal-flag-2494-json-server.onrender.com/programming`;
        }
        else if(spec !== "" && level === ""){
            return `https://teal-flag-2494-json-server.onrender.com/programming?specialization=${spec}`;
        }
        else if(spec === "" && level !== ""){
            return `https://teal-flag-2494-json-server.onrender.com/programming?level=${level}`;
        }
        else{
            return `https://teal-flag-2494-json-server.onrender.com/programming?specialization=${spec}&level=${level}`;
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
            setProgrammingData(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [query, spec, level]);


    return (
        <div style={{ fontFamily: "Montserrat, sans-serif" }}>
            <Navbar />
            <Heading style={{ textAlign: "left", padding: "30px 30px" }}>Programming</Heading>
            <Flex bg="gray.100" style={{ padding: "60px 30px" }}>
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
                                <Radio colorScheme='blue' value='frontend' onChange={(e) => setSpec(e.target.value)}>
                                    Frontend
                                </Radio>
                                <Radio colorScheme='blue' value='backend' onChange={(e) => setSpec(e.target.value)}>
                                    Backend
                                </Radio>
                                <Radio colorScheme='blue' value='fullstack' onChange={(e) => setSpec(e.target.value)}>
                                    FullStack
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
                        programmingData.map((program) => (
                            <Link key={program.id} to={`/programs/${program.id}`}>
                                <GridItem style={{height: "370px", borderRadius: "25px", padding: "15px", backgroundColor: "white", textAlign: "left", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", position: "relative"}}>
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

export default Programming