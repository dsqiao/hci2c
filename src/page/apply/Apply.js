import React, { useState, useContext, useEffect, useRef } from "react"
import '../../style/apply.css'
import { testService1, testService2 } from "./testService"
import { Form, Input, Button, Menu, Checkbox, Tooltip, Popconfirm, Table, message } from 'antd'
import { useNavigate } from 'react-router-dom';
const { TextArea } = Input

// 测试页面
export default function ApplyPage() {
  const [currentStep, setCurrentStep] = useState('1')
  const [messageApi, contextHolder] = message.useMessage()
  const onClick = (e) => {
    setCurrentStep(e.key)
  }
  const success = () => {
    messageApi.success('提交成功')
    setTimeout(() => {
      navigate('/prod')
    }, 3000)
  }
  const navigate = useNavigate()
  const EditableContext = React.createContext(null);
  const EditableRow = ({ index, ...props }) => {
    const [form] = Form.useForm();
    return (
      <Form form={form} component={false}>
        <EditableContext.Provider value={form}>
          <tr {...props} />
        </EditableContext.Provider>
      </Form>
    );
  };
  const EditableCell = ({
    title,
    editable,
    children,
    dataIndex,
    record,
    handleSave,
    ...restProps
  }) => {
    const [editing, setEditing] = useState(false);
    const inputRef = useRef(null);
    const form = useContext(EditableContext);
    useEffect(() => {
      if (editing) {
        inputRef.current.focus();
      }
    }, [editing]);
    const toggleEdit = () => {
      setEditing(!editing);
      form.setFieldsValue({
        [dataIndex]: record[dataIndex],
      });
    };
    const save = async () => {
      try {
        const values = await form.validateFields();
        toggleEdit();
        handleSave({
          ...record,
          ...values,
        });
      } catch (errInfo) {
        console.log('Save failed:', errInfo);
      }
    };
    let childNode = children;
    if (editable) {
      childNode = editing ? (
        <Form.Item
          style={{
            margin: 0,
          }}
          name={dataIndex}
          rules={[
            {
              required: true,
              message: `${title} is required.`,
            },
          ]}
        >
          <Input ref={inputRef} onPressEnter={save} onBlur={save} />
        </Form.Item>
      ) : (
        <div
          className="editable-cell-value-wrap"
          style={{
            paddingRight: 24,
          }}
          onClick={toggleEdit}
        >
          {children}
        </div>
      );
    }
    return <td {...restProps}>{childNode}</td>;
  };
  const [dataSource, setDataSource] = useState([
    {
      key: '0',
      scene: '使用场景 0',
      name: '任务名称',
      desc: '任务描述 0',
    },
    {
      key: '1',
      scene: '使用场景 1',
      name: '任务名称',
      desc: '任务描述 1',
    },
  ]);
  const [count, setCount] = useState(2);
  const handleDelete = (key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
  };
  const defaultColumns = [
    {
      title: '编号',
      dataIndex: 'key',
    },
    {
      title: '使用场景',
      dataIndex: 'scene',
      width: '30%',
      editable: true,
    },
    {
      title: '任务名称',
      dataIndex: 'name',
      editable: true,
    },
    {
      title: '任务描述',
      dataIndex: 'desc',
      editable: true
    },
    {
      title: '操作',
      dataIndex: 'operation',
      render: (_, record) =>
        dataSource.length >= 1 ? (
          <Popconfirm title="确认删除？" onConfirm={() => handleDelete(record.key)}>
            <Button>删除</Button>
          </Popconfirm>
        ) : null,
    },
  ];
  const handleAdd = () => {
    const newData = {
      key: count,
      scene: `使用场景 ${count}`,
      name: '任务名称',
      desc: `任务描述 ${count}`,
    };
    setDataSource([...dataSource, newData]);
    setCount(count + 1);
  };
  const handleSave = (row) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    setDataSource(newData);
  };
  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };
  const columns = defaultColumns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });
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
            <p>测试任务</p>
            <Button
              onClick={handleAdd}
              type="primary"
              style={{
                marginBottom: 16,
              }}
            >
              +
            </Button>
            <Table
              components={components}
              rowClassName={() => 'editable-row'}
              bordered
              dataSource={dataSource}
              columns={columns}
            />
            <Button onClick={() => setCurrentStep('4')} type="primary">下一项</Button>
          </div>
        }
        {
          currentStep === '4' &&
          <div>
            {contextHolder}
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
            <div style={{ marginTop: '40px' }}>
              <Button>保存</Button>
              <Button type="primary" style={{ marginLeft: '50px' }} onClick={success}>提交</Button>
            </div>
          </div>
        }
      </div>
    </div >
  )
}