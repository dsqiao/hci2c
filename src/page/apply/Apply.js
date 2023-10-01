import React, { useState } from "react"
import '../../style/apply.css'
import { testService1, testService2 } from "./testService"
import { Form, Input, Button, Menu, Checkbox, Tooltip } from 'antd'
const { TextArea } = Input

// 测试页面
export default function ApplyPage() {
  const [currentStep, setCurrentStep] = useState('1')
  const onClick = (e) => {
    setCurrentStep(e.key)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row', padding: '0 200px 100px 200px', gap: '50px' }}>
      <Menu onClick={onClick} selectedKeys={[currentStep]} items={[
        { label: '基本信息', key: '1' },
        { label: '产品信息', key: '2' },
        { label: '测试任务', key: '3' },
        { label: '测评服务', key: '4' }
      ]} style={{ flexBasis: '200px', flexShrink: 0 }} />
      <div style={{ flexGrow: 1 }}>
        {/* 基本信息 */}
        {
          currentStep === '1' &&
          <div>
            <p>如果您想要对产品进行可用性测试，请在下列表格中填写相关信息，我们将会尽快联系您。</p>
            <br />
            <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }}>
              <Form.Item label="姓名"><Input /></Form.Item>
              <Form.Item label="联系方式"><Input /></Form.Item>
              <Form.Item label="公司名称"><Input /></Form.Item>
              <Form.Item wrapperCol={{
                offset: 4,
                span: 14,
              }}>
                <Button>保存</Button>
                <Button onClick={() => setCurrentStep('2')} style={{ marginLeft: '20px' }} type="primary">下一项</Button>
              </Form.Item>
            </Form>
          </div>
        }
        {/* 产品信息 */}
        {
          currentStep === '2' && <div>
            <p>如果您想要对产品进行可用性测试，请在下列表格中填写相关信息，我们将会尽快联系您。</p>
            <br />
            <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }}>
              <Form.Item label="目标产品"><Input /></Form.Item>
              <Form.Item label="体验版本/型号"><Input /></Form.Item>
              <Form.Item label="体验时间"><Input /></Form.Item>
              <Form.Item label="产品类型"><Input /></Form.Item>
              <Form.Item label="产品描述">
                <TextArea rows={4} />
              </Form.Item>
              <Form.Item label="产品定位">
                <TextArea rows={4} />
              </Form.Item>
              <Form.Item label="产品特征">
                <TextArea rows={4} />
              </Form.Item>
              <Form.Item label="产品功能">
                <TextArea rows={4} />
              </Form.Item>
              <Form.Item wrapperCol={{
                offset: 4,
                span: 14
              }}>
                <Button>保存</Button>
                <Button type="primary" onClick={() => setCurrentStep('3')} style={{ marginLeft: '20px' }}>下一项</Button>
              </Form.Item>
            </Form>
          </div>
        }
        {/* 测试任务 */}
        {
          currentStep === '3' &&
          <div>
            测试任务
            <Button onClick={() => setCurrentStep('4')} type="primary">下一项</Button>
          </div>
        }
        {
          currentStep === '4' &&
          <div>
            <p>产品可用性测试：请根据您的产品类型，选择对应的可用性测试问卷<span className="gray-text">（将鼠标移动至问卷名称处，即可阅读相关简介，可多选）</span></p>
            {
              testService1.map((element, index) => (
                <Tooltip placement="right" title={element.tooltip} key={index}>
                  <span className="checkbox-wrapper">
                    <Checkbox>{element.checkbox}</Checkbox>
                  </span>
                </Tooltip>
              ))
            }
            <p className="sec-p">维度针对性测试：如您还想了解，请选择<span className="gray-text">（将鼠标移动至问卷名称处，即可阅读相关简介，可多选）</span></p>
            {
              testService2.map((element, index) => (
                <Tooltip placement="right" title={element.tooltip} key={index}>
                  <span className="checkbox-wrapper">
                    <Checkbox>{element.checkbox}</Checkbox>
                  </span>
                </Tooltip>
              ))
            }
          </div>
        }
      </div>
    </div >
  )
}