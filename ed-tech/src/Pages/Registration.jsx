import { Box, Button, Center, FormControl, FormLabel, Heading, Input, Stack, useToast } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar';

const Registration = () => {

    const [formData, setFormData] = useState({
        name : "",
        email : "",
        password : "",
        learning : []
    });
    const [usersData, setUsersData] = useState([]);

    const toast = useToast();

    const handleChange = (e) => {
        let {name, value} = e.target;

        setFormData({...formData, [name] : value});
    }

    const fetchUsersData = () => {
        axios({
            url : `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/users`,
            method: 'get'
        })
        .then((res) => {
            setUsersData(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    useEffect(() => {
        fetchUsersData();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        let userExist = usersData.find((user) => user.email === formData.email);

        if(userExist){
            toast({
                title: `User already exists`,
                status: 'error',
                isClosable: true,
            })
        }
        else{
            axios({
                url : `https://teal-flag-2494-json-server.onrender.com/users`,
                method: 'post',
                data : formData
            })
            .then((res) => {
                toast({
                    title: `User registered successfully`,
                    status: 'success',
                    isClosable: true,
                });

                setFormData({
                    name : "",
                    email : "",
                    password : ""
                })
            });
        }

    }

    return (
        <div style={{ fontFamily: "Montserrat, sans-serif" }}>
            <Navbar />
            <Box style={{ width: "40%", margin: "auto", marginTop: "70px" }}>
                <Heading style={{ margin: "50px 0px" }}>Register</Heading>
                <form onSubmit={handleSubmit}>
                    <Stack spacing="25px">
                        <FormControl>
                            <FormLabel>Full Name</FormLabel>
                            <Input type='text' name="name" value={formData.name} placeholder='Enter your Full Name' onChange={handleChange}/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Email</FormLabel>
                            <Input type='email' name="email" value={formData.email} placeholder='Enter your email address' onChange={handleChange}/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Password</FormLabel>
                            <Input type='password' name="password" value={formData.password} placeholder='Enter your password' onChange={handleChange}/>
                        </FormControl>
                        <Center>
                            <Button type='submit' _hover={{backgroundColor: "black", color:"white"}}>Register</Button>
                        </Center>
                    </Stack>
                </form>
            </Box>
        </div>
    )
}

export default Registration