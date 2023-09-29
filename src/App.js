import './App.css';
import { RouterProvider } from "react-router-dom";
import router from './route/router.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <div className="App">

      {/* 顶部导航 */}
      <div className='header'>
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
