import './App.css';
import { Carousel, Form, Modal, Input, Button, Menu, Checkbox, Radio, Select, Table, message } from 'antd';
import { useState } from 'react';
import {
  createBrowserRouter,
  Link,
  RouterProvider,
} from "react-router-dom";
import Footer from './components/Footer.js'
const { TextArea } = Input;
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
  },
  {
    path: "/prod/apply",
    element: <ApplyPage />
  },
  {
    path: "/login",
    element: <Login />
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
    <div style={{
      backgroundImage: `url(${require('./img/bg.png')})`,
      backgroundPosition: 'center',
      height: '59vw',
      width: '100vw',
      objectFit: 'cover',
      backgroundSize: 'cover',
      display: 'flex',
      flexDirection: 'column',
      paddingInline: '18%',
      boxSizing: 'border-box',
    }}>
      <div style={{
        backgroundColor: 'rgb(240, 248, 222)',
        height: '100%',
      }}>
        <img src={require('./img/library.jpeg')} style={{ width: '100%' }} />
        <h1 style={{
          borderLeft: 'solid 3px green',
          paddingLeft: '10px',
          marginLeft: '40px',
          marginTop: '80px',
        }}>产品研究</h1>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
          padding: '40px 60px',
        }}>
          <Link to="apply">
            <img src={require('./img/申请.jpeg')}></img>
          </Link>
          <img src={require('./img/预览.jpeg')}></img>
          <img src={require('./img/记录.jpeg')}></img>
          <img src={require('./img/报告.jpeg')}></img>
        </div>
      </div>
    </div>
  )
}

// 测试页面
function ApplyPage() {
  const [currentStep, setCurrentStep] = useState('1')
  const onClick = (e) => {
    setCurrentStep(e.key)
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'row', padding: '0 200px', gap: '50px' }}>
      <Menu onClick={onClick} selectedKeys={[currentStep]} items={[
        { label: '基本信息', key: '1' },
        { label: '产品信息', key: '2' },
        { label: '测试任务', key: '3' },
        { label: '测评服务', key: '4' }
      ]} style={{ flexBasis: '200px', flexShrink: 0 }} />
      <div style={{ flexGrow: 1 }}>
        {currentStep === '1' && <div>
          <p>如果您想要对产品进行可用性测试，请在下列表格中填写相关信息，我们将会尽快联系您。</p>
          <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }}>
            <Form.Item label="姓名"><Input /></Form.Item>
            <Form.Item label="联系方式"><Input /></Form.Item>
            <Form.Item label="公司名称"><Input /></Form.Item>
            <Button>保存</Button>
            <Button onClick={() => setCurrentStep('2')}>下一项</Button>
          </Form>
        </div>}
        {currentStep === '2' && <div>
          <p>如果您想要对产品进行可用性测试，请在下列表格中填写相关信息，我们将会尽快联系您。</p>
          <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }}>
            <Form.Item label="目标产品"><Input /></Form.Item>
          </Form>
        </div>}
      </div>
    </div>
  )
}

function TestPage() {
  const [messageApi, contextHolder] = message.useMessage();
  const provinceData = ['浙江', '江苏']
  const cityData = {
    浙江: ['杭州', '宁波', '温州', '舟山', '湖州'],
    江苏: ['南京', '苏州', '镇江', '常州', '无锡', '扬州', '泰州', '连云港', '徐州', '淮安', '盐城', '南通', '宿迁'],
  }
  const [cities, setCities] = useState(cityData[provinceData[0]]);
  const [secondCity, setSecondCity] = useState(cityData[provinceData[0]][0]);
  const handleProvinceChange = (value) => {
    setCities(cityData[value]);
    setSecondCity(cityData[value][0]);
  };
  const onSecondCityChange = (value) => {
    setSecondCity(value);
  };
  const [currentStep, setCurrentStep] = useState('1')
  const onClick = (e) => {
    setCurrentStep(e.key)
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'row', padding: '0 200px', gap: '50px' }}>
      <Menu onClick={onClick} selectedKeys={[currentStep]} items={[
        { label: '测试与权限', key: '1' },
        { label: '用户画像', key: '2' },
        { label: '任务清单', key: '3' },
        { label: '使用反馈', key: '4' },
        { label: '量表填写', key: '5' },
      ]} style={{ flexBasis: '200px', flexShrink: 0 }} />
      <div style={{ flexGrow: 1 }}>
        {currentStep === '1' && <div>
          <p>您好，很高兴邀请您参与本次调研。</p>
          <p>我们希望通过本次调研，了解您在平常使用___时的真实情况，以便更好地优化相关___。因此，请您在调研过程中尽可能地表达和分享自己的实际想法和感受。</p>
          <p>本次调研的结果可能会用于企业研究，或者在学术期刊/书籍上发表。但是您的名字或者其他可以确认您的信息将不会在任何报告或者发表的材料中出现，除非得到您的允许。</p>
          <p>针对本次调研，我们将在您同意并授权的前提下进行录制，以便后续的整理总结，希望您可以接受。</p>
          <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
            <Form.Item>
              <Checkbox>需要相机权限，请允许访问您的相机。</Checkbox>
            </Form.Item>
            <Form.Item>
              <Checkbox>需要麦克风权限，请允许访问您的麦克风。</Checkbox>
            </Form.Item>
            <Button onClick={() => setCurrentStep('2')}>下一项</Button>
          </Form>
        </div>}
        {currentStep === '2' && <div>
          <h2>基本信息</h2>
          <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }}>
            <Form.Item label='年龄'>
              <Input type='number' />
            </Form.Item>
            <Form.Item label={'性别'}>
              <Radio.Group>
                <Radio value={'男'}>男</Radio>
                <Radio value={'女'}>女</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label={'教育程度'}>
              <Radio.Group>
                <Radio value="高中">高中</Radio>
                <Radio value="专科">专科</Radio>
                <Radio value="本科">本科</Radio>
                <Radio value="研究生">研究生</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="婚姻状况">
              <Radio.Group>
                <Radio value="未婚">未婚</Radio>
                <Radio value="已婚">已婚</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="子女状况">
              <Radio.Group>
                <Radio value="无孩">无孩</Radio>
                <Radio value="一孩">一孩</Radio>
                <Radio value="两孩">两孩</Radio>
                <Radio value="三孩或以上">三孩或以上</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="职业">
              <Input />
            </Form.Item>
            <Form.Item label="工作年限">
              <Radio.Group>
                <Radio value="3年以内">3年以内</Radio>
                <Radio value="3-5年">3-5年</Radio>
                <Radio value="5-10年">5-10年</Radio>
                <Radio value="10年以上">10年以上</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="家庭年收入">
              <Radio.Group>
                <Radio value="10万以下">10万以下</Radio>
                <Radio value="10-30万">10-30万</Radio>
                <Radio value="30-50万">30-50万</Radio>
                <Radio value="50万以上">50万以上</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="所在地区">
              <Select style={{ width: 120 }} defaultValue={provinceData[0]} onChange={handleProvinceChange}
                options={provinceData.map((province) => ({
                  label: province,
                  value: province,
                }))}
              />
              <Select style={{ width: 120 }} value={secondCity} onChange={onSecondCityChange}
                options={cities.map((city) => ({
                  label: city,
                  value: city,
                }))}
              />
            </Form.Item>
            <Form.Item label="兴趣爱好"><Input /></Form.Item>
            <Button>保存</Button>
            <Button onClick={() => setCurrentStep('3')}>下一项</Button>
          </Form>
        </div>}
        {currentStep === '3' && <div>
          <p>请仔细阅读下列任务，并在充分理解人物要求后开始操作。</p>
          <p>如果您在阅读或操作过程中存在问题，请联系工作人员进行解答。</p>
          <Table columns={[{
            title: '编号',
            key: '编号',
          }, {
            title: '使用场景',
            key: '使用场景',
          }, {
            title: '任务名称',
            key: '任务名称',
          }, {
            title: '任务描述',
            key: '任务描述',
          }, {
            title: '操作步骤',
            key: '操作步骤',
          }]} dataSource={null} />
          <Button>下一个</Button>
          {contextHolder}
          <Button onClick={() => {
            messageApi.success('恭喜您完成所有任务')
            setTimeout(() => {
              setCurrentStep('4')
            }, 1000);
          }}>完成</Button>
        </div>}
        {/* 使用反馈 */}
        {currentStep === '4' && <div>
          <p>请在下列输入框中输入您对相应题目的看法。若无法作答，则填写“无”。</p>
          <p>1.您会在未来使用/购买该产品吗？为什么？</p>
          <TextArea style={{ height: 120 }} />
          <p>2.您将可能会在什么情况下使用该产品？/您认为该产品的使用目的是什么？</p>
          <TextArea style={{ height: 120 }} />
          <p>3.您认为该产品最好的方面是什么？为什么？</p>
          <TextArea style={{ height: 120 }} />
          <p>4.您认为该产品有哪些值得改进的地方？如何改进？</p>
          <TextArea style={{ height: 120 }} />
          <p>5.如果您在操作过程中还存在其他任何问题，请告诉我们：</p>
          <TextArea style={{ height: 120 }} />
          <Button onClick={() => setCurrentStep('5')}>下一项</Button>
        </div>}
        {/* 量表填写 */}
        {currentStep === '5' && <div>
          {/* 三张量表之间有怎样的逻辑关系？ */}
          <div>通用可用性量表</div>
          <div>网站分析和测量量表</div>
          <div>软件可用性测量量表</div>
        </div>}
      </div>
    </div>
  )
}
function App() {
  return (
    <div className="App">
      <div className='header'>
        <div className='nav'>EN</div>
        <div className='nav'>关于</div>
        <div className='nav'><a href='/login'>登陆</a></div>
        <div className='nav'>服务</div>
        <div className='nav'><a href="/">首页</a></div>
      </div>
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

// 登陆页面
function Login() {
  return (
    <div style={{
      width: '100vw',
      height: '59vw',
      backgroundImage: `url(${require('./img/bg.png')})`,
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
      }}></div>
    </div>
    
  )
}

export default App;
