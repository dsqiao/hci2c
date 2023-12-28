import './App.css';
import { RouterProvider } from "react-router-dom";
import router from './route/router.js'
import Footer from './components/Footer.js'
import { Dropdown } from 'antd';
import { useState } from 'react';
function App() {
  const isLogin = window.localStorage.getItem('isLogin') === '1'
  let [username, setUserName] = useState(isLogin
    ? window.localStorage.getItem('username')
    : '游客');
  const onClickLogout = () => {
    window.localStorage.clear()
    setUserName('游客')
  }
  return (
    <div className="App">

      {/* 顶部导航 */}
      <div className='header'>
        <Dropdown menu={{
          items: [
            {
              key: '1',
              label: (<div>消息</div>)
            },
            {
              key: '2',
              label: (<div>帮助中心</div>)
            },
            {
              key: '3',
              label: (
                <div onClick={onClickLogout}>
                  退出登录
                </div>
              )
            }
          ]
        }}>
          <div className='nav' style={{
            marginRight: '50px',
            display: 'flex',
            alignItems: 'center',
          }}>
            <img
              src="/avator.svg"
              alt='avator'
              width={22}
              height={22}
              style={{ marginRight: '5px' }}
            />
            <span>{username}</span>
          </div>
        </Dropdown>
        <div className='nav'>EN</div>
        <div className='nav'>关于</div>
        <div className='nav'><a href='/#/login'>登陆</a></div>
        <div className='nav'>服务</div>
        <div className='nav'><a href="/">首页</a></div>
      </div>

      {/* 主内容区 */}
      <RouterProvider router={router} />

      {/* 页脚 */}
      <Footer />
    </div>
  );
}

export default App;
