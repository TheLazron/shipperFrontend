import { useEffect, useState, useContext } from "react";
import { Text, TextInput, Checkbox, Button, Group, Box, PasswordInput } from "@mantine/core";
import { useForm } from '@mantine/form';
import axios from 'axios';

import constants from "../../constants";
import TokenContext from "../contexts/tokenContext";

const  SignUp=()=> {   
    const { token, setTokenValue } = useContext(TokenContext);


  const form = useForm({
    initialValues: {
      // email: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });
  return (
    <div className="App">
      <Text className="text-2xl pt-5" >
        Sign Up Your Business{" "}
      </Text>
      <Box sx={{ maxWidth: 500 }} mx="auto" className="p-10">
      <form onSubmit={form.onSubmit((values) => {
        console.log("sending request")
        axios.post(constants.hostUrl+"/businesses", {
            "business":
            {
            "email": values.email,
            "password": values.password
          }
          })
          .then(response=>{
                sessionStorage.setItem('accessToken', response.headers.authorization);
              console.log(token);
          })
          .catch(error=>{
            console.log(error);
          })
      })
    }>
        <TextInput
          label="Username"
          placeholder="Username"
          {...form.getInputProps('email')}
          />
        <PasswordInput
      placeholder="Password"
      label="Password"
      {...form.getInputProps('password')}
    />
    <Group position="center" className="pt-3">
     <Button type="submit" className="">Submit</Button>
     </Group>
        
      </form>
    </Box>
    </div>
  );
}

export default SignUp;