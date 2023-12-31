import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Menu,
  Checkbox,
  Radio,
  Select,
  Table,
  message,
  Modal,
  FloatButton,
} from "antd";
import { FormOutlined } from '@ant-design/icons';
const { TextArea } = Input;

// 测试页面
export default function TestPage() {
  const [messageApi, contextHolder] = message.useMessage();
  const provinceData = ["浙江", "江苏"];
  const cityData = {
    浙江: ["杭州", "宁波", "温州", "舟山", "湖州"],
    江苏: [
      "南京",
      "苏州",
      "镇江",
      "常州",
      "无锡",
      "扬州",
      "泰州",
      "连云港",
      "徐州",
      "淮安",
      "盐城",
      "南通",
      "宿迁",
    ],
  };
  const [cities, setCities] = useState(cityData[provinceData[0]]);
  const [secondCity, setSecondCity] = useState(cityData[provinceData[0]][0]);
  const handleProvinceChange = (value) => {
    setCities(cityData[value]);
    setSecondCity(cityData[value][0]);
  };
  const onSecondCityChange = (value) => {
    setSecondCity(value);
  };
  const [currentStep, setCurrentStep] = useState("1");
  const [table1page, setTable1Page] = useState("1");
  const onClick = (e) => {
    setCurrentStep(e.key);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const Rate = () => {
    const [value, setValue] = useState();
    return (
      <div
        style={{
          paddingInline: "50px",
        }}
      >
        <Radio.Group
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
          style={{
            width: "70%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Radio value={1}>1</Radio>
          <Radio value={2}>2</Radio>
          <Radio value={3}>3</Radio>
          <Radio value={4}>4</Radio>
          <Radio value={5}>5</Radio>
          <Radio value={6}>6</Radio>
          <Radio value={7}>7</Radio>
        </Radio.Group>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "80%",
          }}
        >
          <span>非常不同意</span>
          <span>非常同意</span>
        </div>
      </div>
    );
  };
  const Question = (props) => {
    return (
      <div
        style={{
          marginTop: "30px",
        }}
      >
        <div>{props.q}</div>
        <Rate />
      </div>
    );
  };

  const [showComment, setShowComment] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        padding: "0 200px",
        gap: "50px",
      }}
    >
      <Menu
        onClick={onClick}
        selectedKeys={[currentStep]}
        items={[
          { label: "测试与权限", key: "1" },
          { label: "用户画像", key: "2" },
          { label: "任务清单", key: "3" },
          { label: "使用反馈", key: "4" },
          { label: "量表填写", key: "5" },
        ]}
        style={{ flexBasis: "200px", flexShrink: 0 }}
      />
      <div style={{
        flexGrow: 1,
        flexBasis: "80vh",
        paddingBottom: "80px",
        position: 'relative',
      }}>
        {/* 测试与权限 */}
        {currentStep === "1" && (
          <div>
            <p>您好，很高兴邀请您参与本次调研。</p>
            <p>
              我们希望通过本次调研，了解您在平常使用___时的真实情况，以便更好地优化相关___。
              因此，请您在调研过程中尽可能地表达和分享自己的实际想法和感受。
            </p>
            <p>
              本次调研的结果可能会用于企业研究，或者在学术期刊/书籍上发表。
              但是您的名字或者其他可以确认您的信息将不会在任何报告或者发表的材料中出现，除非得到您的允许。
            </p>
            <p>
              针对本次调研，我们将在您同意并授权的前提下进行录制，以便后续的整理总结，希望您可以接受。
            </p>
            <Form
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
            >
              <Form.Item>
                <Checkbox>需要相机权限，请允许访问您的相机。</Checkbox>
              </Form.Item>
              <Form.Item>
                <Checkbox>需要麦克风权限，请允许访问您的麦克风。</Checkbox>
              </Form.Item>
              <Button onClick={() => setCurrentStep("2")}>
                下一项
              </Button>
            </Form>
          </div>
        )}
        {/* 用户画像 */}
        {currentStep === "2" && (
          <div>
            <h2>基本信息</h2>
            <Form
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 14 }}
            >
              <Form.Item label="年龄">
                <Input type="number" />
              </Form.Item>
              <Form.Item label={"性别"}>
                <Radio.Group>
                  <Radio value={"男"}>男</Radio>
                  <Radio value={"女"}>女</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label={"教育程度"}>
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
                <Select
                  style={{ width: 120 }}
                  defaultValue={provinceData[0]}
                  onChange={handleProvinceChange}
                  options={provinceData.map((province) => ({
                    label: province,
                    value: province,
                  }))}
                />
                <Select
                  style={{ width: 120 }}
                  value={secondCity}
                  onChange={onSecondCityChange}
                  options={cities.map((city) => ({
                    label: city,
                    value: city,
                  }))}
                />
              </Form.Item>
              <Form.Item label="兴趣爱好">
                <Input />
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  offset: 4,
                  span: 14,
                }}
              >
                <Button>保存</Button>
                <Button
                  onClick={() => setCurrentStep("3")}
                  type="primary"
                  style={{
                    marginLeft: "20px",
                  }}
                >
                  下一项
                </Button>
              </Form.Item>
            </Form>
            {
              showComment && (
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: '-200px',
                    width: '350px',
                    padding: '80px 30px',
                  }}
                >
                  <h3>评论</h3>
                  <TextArea
                    rows={8}
                    placeholder="请输入内容" />
                  <div style={{
                    marginTop: '40px',
                    display: 'flex',
                    justifyContent: 'space-around',
                  }}>
                    <Button onClick={() => setShowComment(false)}>
                      返回
                    </Button>
                    <Button
                      onClick={() => setShowComment(false)}
                      type="primary"
                    >
                      保存
                    </Button>
                  </div>
                </div>
              )
            }
            {
              !showComment && (
                <FloatButton
                  icon={<FormOutlined />}
                  style={{ top: '200px' }}
                  onClick={() => setShowComment(true)}
                  type="primary"
                />
              )
            }
          </div>
        )}
        {/* 任务清单 */}
        {currentStep === "3" && (
          <div>
            {contextHolder}
            <p>请仔细阅读下列任务，并在充分理解人物要求后开始操作。</p>
            <p>如果您在阅读或操作过程中存在问题，请联系工作人员进行解答。</p>
            <Table
              columns={[
                {
                  title: "编号",
                  key: "编号",
                },
                {
                  title: "使用场景",
                  key: "使用场景",
                },
                {
                  title: "任务名称",
                  key: "任务名称",
                },
                {
                  title: "任务描述",
                  key: "任务描述",
                },
                {
                  title: "操作步骤",
                  key: "操作步骤",
                },
              ]}
              dataSource={null}
            />
            <div style={{ marginTop: "30px" }}>
              <Button>
                下一个
              </Button>
              <Button
                onClick={() => {
                  messageApi.success("恭喜您完成所有任务");
                  setTimeout(() => {
                    setCurrentStep("4");
                  }, 1000);
                }}
                style={{ marginLeft: "20px" }}
                type="primary"
              >
                完成
              </Button>
            </div>
          </div>
        )}
        {/* 使用反馈 */}
        {currentStep === "4" && (
          <div>
            <p>
              请在下列输入框中输入您对相应题目的看法。若无法作答，则填写“无”。
            </p>
            <p>
              1.您会在未来使用/购买该产品吗？为什么？
            </p>
            <TextArea style={{ height: 120 }} />
            <p>
              2.您将可能会在什么情况下使用该产品？/您认为该产品的使用目的是什么？
            </p>
            <TextArea style={{ height: 120 }} />
            <p>
              3.您认为该产品最好的方面是什么？为什么？
            </p>
            <TextArea style={{ height: 120 }} />
            <p>
              4.您认为该产品有哪些值得改进的地方？如何改进？
            </p>
            <TextArea style={{ height: 120 }} />
            <p>
              5.如果您在操作过程中还存在其他任何问题，请告诉我们：
            </p>
            <TextArea style={{ height: 120 }} />
            <Button
              onClick={() => setCurrentStep("5")}
              style={{ marginTop: "30px" }}
            >
              下一项
            </Button>
          </div>
        )}
        {/* 量表填写 */}
        {currentStep === "5" && (
          <div>
            <h3>通用可用性量表</h3>
            <div>
              请逐一评价下列关于之前使用该产品/系统的描述，并选择符合您感受的数字
            </div>
            {
              table1page === "1" && (
                <div>
                  <Question q="1. 我认为该产品容易使用" />
                  <Question q="2. 该产品使用简单" />
                  <Question q="3. 该产品是为所有水平的用户所设计的" />
                  <Question q="4. 我认为我会需要技术人员的支持才能使用" />
                  <Question q="5. 在使用该产品的过程中，我没有发现不一致" />
                  <Question q="6. 无论何时，我在使用该产品时犯了错误，我都可以轻松、快速地恢复。" />
                  <Button
                    onClick={() => setTable1Page("2")}
                    style={{ marginTop: "30px" }}
                  >
                    下一页
                  </Button>
                </div>
              )
            }
            {
              table1page === "2" && (
                <div>
                  <Question q="7. 每次我都可以成功使用该产品" />
                  <Question q="8. 对于我需要完成的事情，该产品需要的步骤尽可能的最少" />
                  <Question q="9. 这个产品是有用的" />
                  <Question q="10. 这个产品的功能可以满足我的需求" />
                  <Question q="11. 我相信这个产品能提高产出" />
                  <Question q="12. 我能够使用这个产品快速完成任务和场景" />
                  <div style={{ marginTop: "30px" }}>
                    <Button onClick={() => setTable1Page("1")}>上一页</Button>
                    <Button
                      onClick={() => setTable1Page("3")}
                      style={{ marginLeft: "30px" }}
                    >
                      下一页
                    </Button>
                  </div>
                </div>
              )
            }
            {
              table1page === "3" && (
                <div>
                  <Question q="13. 我必须花很多时间来纠正这个产品的事情" />
                  <Question q="14. 这个产品使我的工作更有效" />
                  <Question q="15. 这个产品可以执行我期望它做的所有事情" />
                  <Question q="16. 使用时，这个产品节省了我的时间" />
                  <Question q="17. 我认为大部分人会很快学会使用这个产品" />
                  <Question q="18. 在我可以使用该产品之前，我需要学习很多东西" />
                  <div style={{ marginTop: "30px" }}>
                    <Button
                      onClick={() => {
                        setTable1Page("2");
                      }}
                    >
                      上一页
                    </Button>
                    <Button
                      onClick={() => {
                        setTable1Page("4");
                      }}
                      style={{ marginLeft: "30px" }}
                    >
                      下一页
                    </Button>
                  </div>
                </div>
              )
            }
            {
              table1page === "4" && (
                <div>
                  <Question q="19. 学习使用这个产品很容易" />
                  <Question q="20. 我容易记住如何使用这个产品" />
                  <Question q="21. 很快我就可以熟练使用这个产品了" />
                  <Question q="22. 整体上，我对这个产品很满意" />
                  <Question q="23. 我会把这个产品推荐给朋友" />
                  <Question q="24. 我认为我会愿意经常使用此产品" />
                  <div style={{ marginTop: "30px" }}>
                    <Button
                      onClick={() => {
                        setTable1Page("3");
                      }}
                    >
                      上一页
                    </Button>
                    <Button
                      onClick={() => {
                        setTable1Page("5");
                      }}
                      style={{ marginLeft: "30px" }}
                    >
                      下一页
                    </Button>
                  </div>
                </div>
              )
            }
            {
              table1page === "5" && (
                <div>
                  <Question q="25. 我觉得使用这个产品很舒服" />
                  <Question q="26. 这个产品使用起来令人愉悦" />
                  <div style={{ marginTop: "30px" }}>
                    <Button
                      onClick={() => {
                        setTable1Page("4");
                      }}
                    >
                      上一页
                    </Button>
                    <Button
                      onClick={() => {
                        setIsModalOpen(true);
                      }}
                      style={{ marginLeft: "30px" }}
                    >
                      提交
                    </Button>
                  </div>
                  <Modal
                    title=""
                    open={isModalOpen}
                    onCancel={() => {
                      setIsModalOpen(false);
                    }}
                    onOk={() => {
                      setIsModalOpen(false);
                    }}
                  >
                    <p>全部测试环境到此结束</p>
                    <p>再次感谢您抽出时间参与本次测试</p>
                  </Modal>
                </div>
              )
            }
          </div>
        )}
      </div>
    </div>
  );
}
