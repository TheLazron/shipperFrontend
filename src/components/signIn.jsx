import { useState } from "react";
import {
  Text,
  TextInput,
  Checkbox,
  Button,
  Group,
  Box,
  PasswordInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import axios from "axios";

import constants from "../../constants";

const SignIn = () => {
  const form = useForm({
    initialValues: {
      // email: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });
  return (
    <div className="App">
      <Text className="text-2xl">Sign In to Continue </Text>
      <Box sx={{ maxWidth: 500 }} mx="auto" className="p-10">
        <form
          onSubmit={form.onSubmit((values) => {
            axios
              .post(constants.hostUrl + "/businesses/sign_in", {
                business: {
                  email: values.email,
                  password: values.password,
                },
              })
              .then((response) => {
                sessionStorage.setItem(
                  "accessToken",
                  response.headers.authorization
                );
              })
              .catch((error) => {
                console.log(error);
              });
          })}
        >
          <TextInput
            label="Username"
            placeholder="Username"
            {...form.getInputProps("email")}
          />
          <PasswordInput
            placeholder="Password"
            label="Password"
            {...form.getInputProps("password")}
          />
          <Group position="center" className="pt-3">
            <Button type="submit" className="">
              Submit
            </Button>
          </Group>
        </form>
      </Box>
    </div>
  );
};

export default SignIn;
