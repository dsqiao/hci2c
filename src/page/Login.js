import React, { useState } from "react";
import { Input, Form, Button } from 'antd';
import { Link } from "react-router-dom";

// 登陆页面
export default function Login() {
  const [isLogIn, setIsLogIn] = useState(true)
  const goLogIn = () => {
    setIsLogIn(true)
  }
  const goSignUp = () => {
    setIsLogIn(false)
  }
  const handleLoginClick = () => {

  }
  return (
    <div style={{
      width: '100%',
      height: '59vw',
      backgroundImage: `url(${require('../img/bg.png')})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}>
      <div style={{
        position: 'relative',
        left: '55vw',
        right: '20vw',
        top: '15vw',
        width: '450px',
        height: '400px',
        backgroundColor: 'white',
        opacity: 0.7,
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {isLogIn && (
          <Form
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 17 }}
          >
            <Form.Item
              label="手机号"
              name="phone"
              rules={[{
                required: true
              }]}>
              <Input />
            </Form.Item>
            <Form.Item
              label="密码"
              name="pwd"
              rules={[{
                required: true
              }]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              wrapperCol={{ offset: 6, span: 16 }}
              style={{ color: "gray" }}
            >
              没有账号？<a onClick={goSignUp}>立即注册</a>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
              <Button
                type="primary"
                htmlType="submit"
                onClick={handleLoginClick}>
                <Link to="/">登录</Link>
              </Button>
            </Form.Item>
          </Form>
        )}
        {!isLogIn && (
          <Form
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 17 }}
          >
            <Form.Item
              label="用户名"
              name="username"
              rules={[{
                required: true,
                message: '请输入用户名'
              }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="手机号"
              name="phone"
              rules={[{
                required: true
              }]}>
              <Input />
            </Form.Item>
            <Form.Item
              label="密码"
              name="pwd"
              rules={[{
                required: true
              }]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="确认密码"
              name="repwd"
              rules={[{
                required: true
              }]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              wrapperCol={{ offset: 6, span: 16 }}
              style={{ color: "gray" }}
            >
              已有账号，<a onClick={goLogIn}>点击登录</a>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
              <Button type="primary" htmlType="submit">
                <Link to="/">注册</Link>
              </Button>
            </Form.Item>
          </Form>)}
      </div>
    </div>
  )
}