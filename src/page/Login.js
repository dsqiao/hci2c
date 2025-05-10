import React, { useState } from "react";
import { Input, Form, Button, Tabs, Select } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

// 登录页面
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
  const [activeTab, setActiveTab] = useState("passwordLogin");

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  const handleQuickLogin = (values) => {
    const { phone, code } = values;
    if (phone.length === 11 && phone.startsWith('1') && code) {
      toast.success("登录成功", { position: "top-center", autoClose: 2000 });
      window.localStorage.setItem('isLogin', '1');
      navigate('/');
    } else {
      toast.error("请输入正确的手机号和验证码", { position: "top-center", autoClose: 2000 });
    }
  };

  const handlePasswordLogin = (values) => {
    const { phone, pwd } = values;
    if (phone.length === 11 && phone.startsWith('1') && pwd) {
      toast.success("登录成功", { position: "top-center", autoClose: 2000 });
      window.localStorage.setItem('isLogin', '1');
      navigate('/');
    } else {
      toast.error("请输入正确的手机号和密码", { position: "top-center", autoClose: 2000 });
    }
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
          height: "500px",
          backgroundColor: "white",
          opacity: 0.7,
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {isLogIn && (
          <Tabs activeKey={activeTab} onChange={handleTabChange} centered>
            <Tabs.TabPane tab="快捷登录" key="quickLogin">
              <Form
                wrapperCol={{ span: 24 }}
                onFinish={handleQuickLogin}
              >
                <Form.Item
                  name="phone"
                  rules={[
                    { required: true, message: "请输入手机号" },
                  ]}
                >
                  <Input.Group compact>
                    <Select defaultValue="+86" style={{ width: "25%" }}>
                      <Select.Option value="+86">+86</Select.Option>
                      <Select.Option value="+1">+1</Select.Option>
                      <Select.Option value="+44">+44</Select.Option>
                      {/* 可以添加更多地区区号 */}
                    </Select>
                    <Input style={{ width: "75%" }} placeholder="请输入手机号" />
                  </Input.Group>
                </Form.Item>
                <Form.Item
                  name="code"
                  rules={[
                    { required: true, message: "请输入验证码" },
                  ]}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <Input placeholder="请输入验证码" style={{ flex: 1 }} />
                    <Button>获取验证码</Button>
                  </div>
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
                    登录
                  </Button>
                  <div style={{ textAlign: "center", marginTop: "10px", color: "gray" }}>
                    没有账号？
                    <span
                      onClick={goSignUp}
                      style={{ color: "#1890ff", cursor: "pointer", textDecoration: "underline", marginLeft: "5px" }}
                    >
                      立即注册
                    </span>
                  </div>
                </Form.Item>
              </Form>
            </Tabs.TabPane>
            <Tabs.TabPane tab="密码登录" key="passwordLogin">
              <Form
                wrapperCol={{ span: 24 }}
                onFinish={handlePasswordLogin}
              >
                <Form.Item
                  name="phone"
                  rules={[
                    { required: true, message: "请输入帐号" },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="请输入帐号"
                  />
                </Form.Item>
                <Form.Item
                  name="pwd"
                  rules={[
                    { required: true, message: "请输入密码" },
                  ]}
                >
                  <Input.Password
                    prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="请输入密码"
                  />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
                    登录
                  </Button>
                </Form.Item>
                <div style={{ textAlign: "center", marginTop: "10px", color: "gray" }}>
                  没有账号？
                  <span
                    onClick={goSignUp}
                    style={{ color: "#1890ff", cursor: "pointer", textDecoration: "underline", marginLeft: "5px" }}
                  >
                    立即注册
                  </span>
                </div>
              </Form>
            </Tabs.TabPane>
          </Tabs>
        )}
        {!isLogIn && (
          <Form
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 17 }}
            onFinish={register}
          >
            <h3>欢迎注册</h3>
            <Form.Item
              wrapperCol={{ offset: 2, span: 16 }}
              style={{ color: "gray" }}
            >
              已有账号?
              <span>
                点击
                <span
                  onClick={goLogIn}
                  style={{ textDecoration: 'underline' }}
                >
                  登录
                </span>
              </span>
            </Form.Item>
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
            <Form.Item>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", paddingLeft: "20px" }}>
                <Input placeholder="请输入短信验证码" style={{ width: '250px' }} />
                <Button>
                  获取短信验证码
                </Button>
              </div>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
              <Button type="primary" htmlType="submit" style={{ width: '250px' }}>
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
