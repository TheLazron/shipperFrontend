import { useForm } from "@mantine/form";
import axios from "axios";

import {
  Box,
  TextInput,
  PasswordInput,
  Group,
  Button,
  Card,
  Title,
} from "@mantine/core";

const LoginPage = () => {
  const login = async (body) => {
    const data = await axios
      .post("http://143.244.136.61:3000/admins/sign_in", body)
      .then((response) => {
        sessionStorage.setItem("accessToken", response.headers.authorization);
        // console.log(token);
        console.log(response.headers.authorization);
      });
  };
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <div className="flex justify-center flex-col items-center h-1/2">
      <Title order={1} className="mb-12">
        Admin Login
      </Title>
      <Card
        radius="lg"
        shadow="md"
        className="w-1/2 flex justify-around mt-1/3 flex-col items-center"
      >
        <form
          onSubmit={form.onSubmit((values) => {
            let body = {
              admin: {
                email: values.email,
                password: values.password,
              },
            };
            login(body);

            console.log(values);
          })}
          className="flex flex-col gap-8 w-2/3"
        >
          <TextInput
            withAsterisk
            placeholder="Enter Admin Email"
            {...form.getInputProps("email")}
          />

          <PasswordInput
            placeholder="Enter Email Password"
            withAsterisk
            {...form.getInputProps("password")}
          />

          <Group position="right" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Card>
    </div>
  );
};

export default LoginPage;
