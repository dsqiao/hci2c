import React, { useState } from "react"
import { Form, Input, Button, Menu } from 'antd';

// 测试页面
export default function ApplyPage() {
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