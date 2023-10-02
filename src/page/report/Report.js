import React, { useState } from "react";
import { Menu, Descriptions, Button } from "antd";


export default function Report() {
  const [currentStep, setCurrentStep] = useState('1')
  const onClick = (e) => {
    setCurrentStep(e.key)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row', padding: '0 200px 100px 200px', gap: '50px' }}>
      <Menu onClick={onClick} selectedKeys={[currentStep]} items={[
        { label: '测试概览', key: '1' },
        { label: '用户画像', key: '2' },
        { label: '任务分析', key: '3' },
        { label: '使用反馈', key: '4' },
        { label: '量表结果', key: '5' },
      ]} style={{ flexBasis: '200px', flexShrink: 0 }} />
      <div style={{ flexGrow: 1 }}>
        {
          currentStep === '1' &&
          <div>
            <Descriptions title="某APP可用性测试项目" bordered column={1}>
              <Descriptions.Item label="企业名称">某科技公司</Descriptions.Item>
              <Descriptions.Item label="测试产品">某APP</Descriptions.Item>
              <Descriptions.Item label="版本/型号">A211</Descriptions.Item>
              <Descriptions.Item label="测试内容">
                <p>APP高保真原型测试，用户需要自行探索完成2个指定任务</p>
                <p>任务1: 浏览首页</p>
                <p>任务2: 注册会员</p>
              </Descriptions.Item>
              <Descriptions.Item label="测试周期">
                2023/09/12 - 2023/09/25
              </Descriptions.Item>
              <Descriptions.Item label="测试用户">5人</Descriptions.Item>
            </Descriptions>
            <div style={{ height: '30px' }} />
            <Button type="primary" onClick={() => setCurrentStep('2')}>下一项</Button>
          </div>
        }
        {/* 用户画像 */}
        {
          currentStep === '2' &&
          <div>
            <h3>基本信息</h3>
            <div id="container"></div>
          </div>
        }
      </div>
    </div>
  )
}