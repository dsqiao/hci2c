import './App.css';
import { Carousel, Form, Modal, Input, Button } from 'antd';
import { useState } from 'react';
import {
  createBrowserRouter,
  Link,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/test",
    element: <TestPage />
  },
  {
    path: "/prod",
    element: <Product />
  }
]);

// 主页部分
function Home() {
  const [isLinkModalOpen, setIsLinkModalOpen] = useState(false)
  const showModal = () => setIsLinkModalOpen(true)
  return (
    <div>
      <Carousel autoplay>
        <img alt="用户体验" className='car-img' src={require('./img/用户体验.png')}></img>
        <img alt="用户痛点" className='car-img' src={require('./img/用户痛点.png')}></img>
        <img alt="用户需求" className='car-img' src={require('./img/用户需求.png')}></img>
        <img alt="用户行为" className='car-img' src={require('./img/用户行为.png')}></img>
        <img alt="用户态度" className='car-img' src={require('./img/用户态度.png')}></img>
      </Carousel>
      <h2 className='header-2'>服 务</h2>
      <div className='line-img-wrapper'>
        <Link to="prod">
          <img alt="产品研究" src={require('./img/产品研究.png')} className='square-img'></img>
        </Link>
        <img alt="用户研究" src={require('./img/用户研究.png')} className='square-img'></img>
        <img onClick={showModal} alt="测试链接" src={require('./img/测试链接.png')} className='square-img'></img>
      </div>
      <h2 className='header-2'>关 于</h2>
      <div className='line-img-wrapper'>
        <img alt="产品研究与用户研究" src={require('./img/产品研究与用户研究.png')} className='square-img'></img>
        <img alt="测试手段与报告解读" src={require('./img/测试手段与报告解读.png')} className='square-img'></img>
        <img alt="帮助中心" src={require('./img/帮助中心.png')} className='square-img'></img>
      </div>
      {/* 测试链接 modal */}
      <Modal open={isLinkModalOpen} footer={null} onCancel={() => setIsLinkModalOpen(false)}>
        <Form labelCol={{ span: 6 }} wrapperCol={{ span: 16 }} style={{ marginTop: 40 }}>
          <Form.Item label="测试链接">
            <Input placeholder='请输入属于你的测试链接' />
          </Form.Item>
          <Form.Item label="被试编号">
            <Input placeholder='请输入你的被试编号' />
          </Form.Item>
          <Form.Item wrapperCol={{
            offset: 6,
            span: 16,
          }}>
            <Button type="primary" htmlType="submit">
              <Link to="test">跳转至测试页面</Link>
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

// 产品研究
function Product() {
  return (
    <div>产品研究</div>
  )
}

// 测试页面
function TestPage() {
  return (
    <div>测试页面</div>
  )
}
function App() {
  return (
    <div className="App">
      <div className='header'>
        <div className='nav'>EN</div>
        <div className='nav'>关于</div>
        <div className='nav'>登陆</div>
        <div className='nav'>服务</div>
        <div className='nav'><a href="/">首页</a></div>
      </div>
      <RouterProvider router={router} />
      <footer className='footer'></footer>
    </div>
  );
}

export default App;
