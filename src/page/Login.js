import React, { useState } from "react";
import { Input, Form, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

// 登陆页面
export default function Login() {
  const [isLogIn, setIsLogIn] = useState(true);
  const goLogIn = () => {
    setIsLogIn(true);
  };
  const navigate = useNavigate()

  const phone = window.localStorage.getItem('phone') || ''

  const register = (values) => {
    const pwd = values.pwd;
    const repwd = values.repwd;
    const username = values.username
    if (username.length > 8) {
      toast.fail('用户名长度过长，仅支持8未字符以内', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: true,
      })
    }
    if (pwd !== repwd) {
      toast.warn("两次密码输入不一致", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      })
    } else {
      toast.success('注册成功，为您跳转至登录页面', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: true,
      })
      window.localStorage.setItem('username', values.username);
      window.localStorage.setItem('phone', values.phone)
      window.localStorage.setItem('isLogin', '1')
      setTimeout(() => {
        setIsLogIn(true)
      }, 2000)
    }
  }
  const login = (values) => {
    const pwd = values.pwd;
    const phone = values.phone;
    if (phone.length === 11 && phone.startsWith('1')) {
      window.localStorage.setItem('isLogin', '1')
    }
    navigate('/')
    setTimeout(() => {
      setIsLogIn(true)
    })
  }
  const goSignUp = () => {
    setIsLogIn(false);
  };
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
          <Form
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 17 }}
            initialValues={{
              phone,
            }}
            onFinish={login}
          >
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
              <Button type="primary" htmlType="submit">
                登录
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
