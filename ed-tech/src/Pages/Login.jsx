import { Box, Button, Center, FormControl, FormLabel, Heading, Input, Stack } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState, useContext } from 'react'
import { AuthContext } from '../Context/AuthContextProvider';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Login = () => {

    const {isAuth, login} = useContext(AuthContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        let {name, value} = e.target;

        setFormData({...formData, [name] : value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios({
            url : `https://teal-flag-2494-json-server.onrender.com/users`,
            method: 'get'
        })
        .then((res) => {
            console.log(res);

            let data = res.data;

            data.forEach((user) => {
                if(user.email === formData.email && user.password === formData.password){
                    login(user);
                }
            })
        })
        .catch((err) => {
            console.log(err);
        });
    }

  return (
    <div>
        <Navbar />
        <Box style={{ width: "40%", margin: "auto", marginTop: "70px" }}>
            <Heading style={{ margin: "50px 0px" }}>Login</Heading>
            <form onSubmit={handleSubmit}>
                <Stack spacing="25px">
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input type='email' name="email" value={formData.email} placeholder='Enter your email address' onChange={handleChange}/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Password</FormLabel>
                        <Input type='password' name="password" value={formData.password} placeholder='Enter your password' onChange={handleChange}/>
                    </FormControl>
                    <Center>
                        <Button type='submit' _hover={{backgroundColor: "black", color:"white"}}>Login</Button>
                    </Center>
                </Stack>
            </form>
        </Box>
    </div>
  )
}

export default Login