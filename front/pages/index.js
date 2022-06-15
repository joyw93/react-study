import AppLayout from "../components/AppLayout";
import { Form, Input, Checkbox, Button } from "antd";
import { useState } from "react";
import axios from "axios";

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = () => {
    axios.get("http://127.0.0.1:3000")
  };

  return (
    <AppLayout>
      <Form onFinish={onSubmit}>
        <div>
          <label htmlFor="email">이메일</label>
          <br />
          <Input type="email" value={email} onChange={onChangeEmail} />
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <br />
          <Input type="password" value={password} onChange={onChangePassword} />
        </div>
        <div>
          <Button htmlType="submit">로그인</Button>
        </div>
      </Form>
    </AppLayout>
  );
};

export default Home;
