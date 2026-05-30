import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRow from "../../ui/FormRow";
import { useLogin } from "../authentication/useLogin.js";
import SpinnerMini from "../../ui/SpinnerMini";

function LoginForm() {
  const [email, setEmail] = useState("ndzaloken25@gmail.com");
  const [password, setPassword] = useState("12345");

  const { login, isSigningIn } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!password || !email) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      },
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Email address">
        <Input
          disabled={isSigningIn}
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormRow>
      <FormRow label="Password">
        <Input
          disabled={isSigningIn}
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRow>
      <FormRow>
        <Button size="large" disabled={isSigningIn}>
          {isSigningIn ? <SpinnerMini /> : "Login"} &rarr;
        </Button>
      </FormRow>
    </Form>
  );
}

export default LoginForm;
