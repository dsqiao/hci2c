import React, { useState } from 'react'
import { Menu, Descriptions, Button, Input, message } from 'antd'
import { useNavigate } from 'react-router-dom';
import '../../style/record.css'
export default function Record() {
  const [messageApi, contextHolder] = message.useMessage()
  const [currentStep, setCurrentStep] = useState('1')
  const onClick = (e) => {
    setCurrentStep(e.key)
  }
  const labels = [
    '序号',
    '时间点',
    '任务详情',
    '产生问题',
    '问题等级',
    '界面位置',
    '所属功能模块',
    '问题耗时',
    '用户行为（语言、动作、神态的反馈）',
    '问题产生原因'
  ];
  const navigate = useNavigate()
  const success = () => {
    messageApi.success('提交成功')
    setTimeout(() => {
      navigate('/')
    }, 3000)
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'row', padding: '0 200px 100px 200px', gap: '50px' }}>
      <Menu onClick={onClick} selectedKeys={[currentStep]} items={[
        { label: '信息', key: '1' },
        { label: '观察', key: '2' },
        { label: '访谈', key: '3' },
      ]} style={{ flexBasis: '200px', flexShrink: 0 }} />
      <div style={{ flexGrow: 1 }}>
        {
          currentStep === '1' &&
          <div>
            <Descriptions title="参试者" column={1} bordered labelStyle={{ width: '120px' }}>
              <Descriptions.Item label="编号">01</Descriptions.Item>
              <Descriptions.Item label="年龄">22</Descriptions.Item>
              <Descriptions.Item label="性别">女</Descriptions.Item>
            </Descriptions>
            <div style={{ height: '80px' }} />
            <Descriptions title="当前任务" column={1} bordered labelStyle={{ width: '120px' }}>
              <Descriptions.Item label="编号">01</Descriptions.Item>
              <Descriptions.Item label="使用场景">用户在安静环境中打开APP</Descriptions.Item>
              <Descriptions.Item label="任务名称">浏览首页</Descriptions.Item>
              <Descriptions.Item label="任务描述">通过浏览首页，用户能够了解本APP的基本功能</Descriptions.Item>
              <Descriptions.Item label="操作步骤">点击查看操作步骤问卷</Descriptions.Item>
            </Descriptions>
            <div style={{ height: '40px' }} />
            <Button type='primary' onClick={() => setCurrentStep('2')}>下一项</Button>
          </div>
        }
        {
          currentStep === '2' &&
          <div>
            <h3>当用户使用产品完成任务时，您可以在此表格中记录观察到的问题</h3>
            <div className='grey-text'>
              <p>问题等级：</p>
              <p>1级：影响产品细节体验，优先级低</p>
              <p>2级：影响产品相关功能使用或用户体验不佳，优先级高</p>
              <p>3级：严重影响产品主要功能使用或用户体验较差，必须解决</p>
              <Descriptions column={1} bordered labelStyle={{ width: '200px' }}>
                {
                  labels.map((ele, index) => (
                    <Descriptions.Item label={ele} key={index}>
                      <Input style={{ border: 'none' }} />
                    </Descriptions.Item>
                  ))
                }
              </Descriptions>
              <div style={{ height: '40px' }}></div>
              <Button type='primary' onClick={() => setCurrentStep('3')}>提交</Button>
            </div>
          </div>
        }
        {
          currentStep === '3' &&
          <div>
            {contextHolder}
            <h3>您可以在此记录测试过程中，对用户的提问以及用户的回答。</h3>
            <Button type='primary' onClick={success}>提交</Button>
          </div>
        }
      </div>
    </div >
  )
}