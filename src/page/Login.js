import React, { useState } from "react";
import { Input, Form, Button } from "antd";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'

// 登陆页面
export default function Login() {
  const [isLogIn, setIsLogIn] = useState(true);
  const navigate = useNavigate();
  const goLogIn = () => {
    setIsLogIn(true);
  };
  const register = (values) => {
    const pwd = values.pwd;
    const repwd = values.repwd;
    if (pwd !== repwd) {
      toast.warn("两次密码输入不一致", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      })
    } else {
      window.localStorage.setItem('username', values.username);
      navigate('/')
    }
  }
  const goSignUp = () => {
    setIsLogIn(false);
  };
  const handleLoginClick = () => { };
  return (
    <div
      style={{
        width: "100%",
        height: "59vw",
        backgroundImage: `url(${require("../img/bg.png")})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          position: "relative",
          left: "55vw",
          right: "20vw",
          top: "15vw",
          width: "450px",
          height: "400px",
          backgroundColor: "white",
          opacity: 0.7,
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {isLogIn && (
          <Form labelCol={{ span: 6 }} wrapperCol={{ span: 17 }}>
            <Form.Item
              label="手机号"
              name="phone"
              rules={[
                {
                  required: true,
                  message: "请输入手机号",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="密码"
              name="pwd"
              rules={[
                {
                  required: true,
                  message: "请输入密码",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              wrapperCol={{ offset: 6, span: 16 }}
              style={{ color: "gray" }}
            >
              没有账号？
              <div>
                立即
                <span
                  onClick={goSignUp}
                  style={{ textDecoration: 'underline' }}
                >
                  注册
                </span>
              </div>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
              <Button
                type="primary"
                htmlType="submit"
                onClick={handleLoginClick}
              >
                <Link to="/">登录</Link>
              </Button>
            </Form.Item>
          </Form>
        )}
        {!isLogIn && (
          <Form
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 17 }}
            onFinish={register}
          >
            <Form.Item
              label="用户名"
              name="username"
              rules={[
                {
                  required: true,
                  message: "请输入用户名",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="手机号"
              name="phone"
              rules={[
                {
                  required: true,
                  message: "请输入手机号",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="密码"
              name="pwd"
              rules={[
                {
                  required: true,
                  message: "请输入密码",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="确认密码"
              name="repwd"
              rules={[
                {
                  required: true,
                  message: "请再次输入密码",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              wrapperCol={{ offset: 6, span: 16 }}
              style={{ color: "gray" }}
            >
              已有账号?
              <div>
                点击
                <span
                  onClick={goLogIn}
                  style={{ textDecoration: 'underline' }}
                >
                  登录
                </span>
              </div>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
              <Button type="primary" htmlType="submit">
                注册
              </Button>
            </Form.Item>
          </Form>
        )}
      </div>
      <ToastContainer />
    </div >
  );
}
