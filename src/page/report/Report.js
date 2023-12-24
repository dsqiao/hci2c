import React, { useEffect, useState } from "react";
import { Menu, Descriptions, Button, Table } from "antd";
import { Pie, Column, Liquid } from "@antv/g2plot";
import { DatabaseOutlined, VideoCameraOutlined } from '@ant-design/icons'
import "../../style/report.css";

export default function Report() {
  const [currentStep, setCurrentStep] = useState("1");
  const [resultPage, setResultPage] = useState(0);
  const onClick = (e) => {
    setCurrentStep(e.key);
  };
  const [btn1Hover, setBtn1Hover] = useState(false);
  const [btn2Hover, setBtn2Hover] = useState(false);
  const handleOnBtn1MouseEnter = () => {
    setBtn1Hover(true);
  }
  const handleOnBtn1MouseLeave = () => {
    setBtn1Hover(false);
  }
  const handleOnBtn2MouseEnter = () => {
    setBtn2Hover(true);
  }
  const handleOnBtn2MouseLeave = () => {
    setBtn2Hover(false);
  }
  const renderGender = () => {
    const data = [
      { type: "男性", value: 3 },
      { type: "女性", value: 2 },
    ];
    if (document.getElementById("gender")) {
      const gender = new Pie("gender", {
        appendPadding: 10,
        data,
        angleField: "value",
        colorField: "type",
        radius: 1,
        innerRadius: 0.64,
        meta: {
          value: {
            formatter: (v) => `¥ ${v}`,
          },
        },
        label: {
          type: "inner",
          offset: "-50%",
          autoRotate: false,
          style: { textAlign: "center" },
          formatter: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
        },
        statistic: {
          title: {
            offsetY: -8,
          },
          content: {
            offsetY: -4,
          },
        },
        // 添加 中心统计文本 交互
        interactions: [
          { type: "element-selected" },
          { type: "element-active" },
          {
            type: "pie-statistic-active",
            cfg: {
              start: [
                {
                  trigger: "element:mouseenter",
                  action: "pie-statistic:change",
                },
                {
                  trigger: "legend-item:mouseenter",
                  action: "pie-statistic:change",
                },
              ],
              end: [
                {
                  trigger: "element:mouseleave",
                  action: "pie-statistic:reset",
                },
                {
                  trigger: "legend-item:mouseleave",
                  action: "pie-statistic:reset",
                },
              ],
            },
          },
        ],
      });

      gender.render();
    } else {
      console.log("gender dom 未渲染完成");
    }
  };
  const renderAge = () => {
    if (document.getElementById("age")) {
      const age = new Column("age", {
        data: [
          {
            age: "0-19",
            perc: 0.2,
          },
          {
            age: "20-39",
            perc: 0.5,
          },
          {
            age: "40-59",
            perc: 0.2,
          },
          {
            age: "60-79",
            perc: 0.1,
          },
        ],
        xField: "age",
        yField: "perc",
        label: {
          // 可手动配置 label 数据标签位置
          position: "middle", // 'top', 'bottom', 'middle',
          // 配置样式
          style: {
            fill: "#FFFFFF",
            opacity: 0.6,
          },
        },
        xAxis: {
          label: {
            autoHide: true,
            autoRotate: false,
          },
        },
        meta: {
          age: {
            alias: "年龄",
          },
          perc: {
            alias: "比例",
          },
        },
      });

      age.render();
    } else {
      console.log("age dom 未渲染完成");
    }
  };
  const renderTask1 = () => {
    if (document.getElementById("task1")) {
      const task1 = new Liquid("task1", {
        percent: 0.4,
        outline: {
          border: 4,
          distance: 8,
        },
        wave: {
          length: 128,
        },
      });
      task1.render();
    } else {
      console.log("task1 dom 未渲染完成");
    }
  };
  const renderTask2 = () => {
    if (document.getElementById("task2")) {
      const task2 = new Liquid("task2", {
        percent: 0.8,
        outline: {
          border: 4,
          distance: 8,
        },
        wave: {
          length: 128,
        },
      });
      task2.render();
    } else {
      console.log("task2 dom 未渲染完成");
    }
  };
  const renderRes = () => {
    if (document.getElementById("res")) {
      const res = new Column("res", {
        data: [
          {
            title: "易用性",
            score: 67.5,
          },
          {
            title: "有效性",
            score: 57.9,
          },
          {
            title: "易学性",
            score: 67.2,
          },
          {
            title: "满意度",
            score: 64.2,
          },
          {
            title: "系统质量",
            score: 56.7,
          },
          {
            title: "信息质量",
            score: 62.3,
          },
          {
            title: "界面质量",
            score: 65.6,
          },
          {
            title: "总体可用性",
            score: 63.1,
          },
        ],
        xField: "title",
        yField: "score",
        label: {
          position: "middle",
          style: {
            fill: "#FFFFFF",
            opacity: 0.6,
          },
        },
        xAxis: {
          label: {
            autoHide: true,
            autoRotate: false,
          },
        },
        meta: {
          title: {
            alias: "维度",
          },
          score: {
            alias: "得分",
          },
        },
      });
      res.render();
    } else {
      console.log("res dom 未渲染完成");
    }
  };
  useEffect(() => {
    const timerId = setTimeout(() => {
      renderGender();
      renderAge();
      renderTask1();
      renderTask2();
      renderRes();
    }, 2000);
    return () => {
      clearTimeout(timerId);
    };
  }, [currentStep]);
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "index",
    },
    {
      title: "评论",
      dataIndex: "comment",
      key: "comment",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        padding: "100px 200px 100px 200px",
        gap: "50px",
      }}
    >
      <Menu
        onClick={onClick}
        selectedKeys={[currentStep]}
        items={[
          { label: "测试概览", key: "1" },
          { label: "用户画像", key: "2" },
          { label: "任务分析", key: "3" },
          { label: "使用反馈", key: "4" },
          { label: "量表结果", key: "5" },
        ]}
        style={{ flexBasis: "200px", flexShrink: 0 }}
      />
      <div style={{ flexGrow: 1 }}>
        {currentStep === "1" && (
          <div>
            <Descriptions
              title="某APP可用性测试项目"
              bordered
              column={1}
            >
              <Descriptions.Item label="企业名称">
                某科技公司
              </Descriptions.Item>
              <Descriptions.Item label="测试产品">
                某APP
              </Descriptions.Item>
              <Descriptions.Item label="版本/型号">
                A211
              </Descriptions.Item>
              <Descriptions.Item label="测试内容">
                <p>APP高保真原型测试，用户需要自行探索完成2个指定任务</p>
                <p>任务1: 浏览首页</p>
                <p>任务2: 注册会员</p>
              </Descriptions.Item>
              <Descriptions.Item label="测试周期">
                2023/09/12 - 2023/09/25
              </Descriptions.Item>
              <Descriptions.Item label="测试用户">
                5人
              </Descriptions.Item>
            </Descriptions>
            <div style={{ height: "30px" }} />
            <Button
              type="primary"
              onClick={() => setCurrentStep("2")}
            >
              下一项
            </Button>
          </div>
        )}
        {/* 用户画像 */}
        {currentStep === "2" && (
          <div>
            <h3>基本信息</h3>
            <h4>性别比例</h4>
            <div id="gender"></div>
            <h4 style={{ marginTop: "150px" }}>
              年龄分布
            </h4>
            <div id="age" />
            <h3 style={{ marginTop: "150px" }}>
              产品使用
            </h3>
            <p>使用经验</p>
            <p>是否使用过该产品？</p>
          </div>
        )}
        {currentStep === "3" && (
          <div>
            <h3>工作指标</h3>
            <h4>任务完成率</h4>
            <p style={{ color: "grey" }}>
              任务完成率 = 完成任务的人数/总人数
            </p>
            <div style={{ flexDirection: "row", display: "flex" }}>
              <div style={{ flexBasis: "300px" }}>
                <div id="task1" />
                <p style={{ textAlign: "center" }}>
                  Task1
                </p>
              </div>
              <div style={{ flexBasis: "300px" }}>
                <div id="task2" />
                <p style={{ textAlign: "center" }}>
                  Task2
                </p>
              </div>
            </div>
            <h4>任务完成时间</h4>
            <p>
              平均完成时间最短的任务为 Task1，平均完成时间最长的任务为 Task2.
            </p>
            <p>
              任务完成总体平均时间为 298.5 秒。
            </p>
          </div>
        )}
        {currentStep === "4" && (
          <div>
            <p className="feedback-p">
              1. 您会在未来使用/购买该产品吗？为什么？
            </p>
            <Table
              columns={columns}
              dataSource={[]}
            />
            <p className="feedback-p">
              2.
              您将可能会在什么情况下使用该产品？您认为该产品的使用目的是什么？
            </p>
            <Table
              columns={columns}
              dataSource={[]}
            />
            <p className="feedback-p">
              3. 您认为该产品最好的方面是什么？为什么？
            </p>
            <Table
              columns={columns}
              dataSource={[]}
            />
            <p className="feedback-p">
              4. 如果您在操作过程中还存在其他任何问题，请告诉我们：
            </p>
            <Table
              columns={columns}
              dataSource={[]}
            />
          </div>
        )}
        {currentStep === "5" && resultPage === 0 && (
          <div>
            <h3>图表摘要</h3>
            <p>通用可用性量表：平均值</p>
            <p>这是本APP在通用可用性量表上得分的平均值。</p>
            <div id="res"></div>
            <p>
              从用户感受方面看，易用性维度的评价得分为 67.5
              分，有效性维度的平均得分为 57.9 分，易学性维度的评价得分为 67.2
              分，满意度维度的平均得分为64.2 分。
            </p>
            <p>
              从产品质量方面看，系统质量维度的平均得分为 56.7
              分，信息质量维度的平均得分为 62.3 分，界面质量维度的平均得分为
              65.6 分。
            </p>
            <p>对于本量表，平均值的参考值为 60 分。</p>
            <p style={{ fontWeight: 800 }}>
              这说明，测试用户在
              <span style={{ color: 'blue' }}>易用性、易学性和界面质量</span>
              等维度上认可您的产品，但认为您的产品在
              <span style={{ color: 'blue' }}>有效性和系统质量</span>
              上存在不足。
            </p>
            <Button onClick={() => setResultPage(1)}>
              下一页
            </Button>
          </div>
        )}
        {currentStep === '5' && resultPage === 1 && (
          <div>
            <h3>项目分析</h3>
            <h4>优势项目</h4>
            <p>测试用户认为以下三个条目最优，这说明您的产品在下列方面做得很好。</p>
            <ul>
              <li>该产品的操作简单</li>
              <li>我容易记住如何使用这个产品</li>
              <li>系统对于用户所输入信息的呈现是非常清楚的</li>
            </ul>

            <h4>劣势项目</h4>
            <p>测试用户认为以下三个条目最差，说明您应该对此采取行动以改进您的产品</p>
            <ul>
              <li>这个产品的功能可以满足我的需求。</li>
              <li>这个产品使我的工作更高效</li>
              <li>我认为系统存在太多不一致之处</li>
            </ul>
            <Button onClick={() => setResultPage(0)}>
              上一页
            </Button>
            <Button
              type="primary"
              onClick={() => setResultPage(2)}
              style={{ marginLeft: '30px' }}
            >
              下一页
            </Button>
          </div>
        )}
        {
          currentStep === '5' && resultPage === 2 &&
          (
            <div>
              <h3>用户记录</h3>
              <p>如果您希望针对每一名参与者进行更细致的分析</p>
              <p>请点击以下按钮下载数据文件（.csv）与任务录像（.mp4）</p>
              <Button
                type="primary"
                style={{ marginTop: '30px' }}
                icon={<DatabaseOutlined />}
              />
              <span style={{ marginLeft: '20px' }}>
                <span
                  style={{
                    textDecoration: 'underline',
                    color: 'blue',
                    cursor: btn1Hover ? 'pointer' : 'default'
                  }}
                  onMouseEnter={handleOnBtn1MouseEnter}
                  onMouseLeave={handleOnBtn1MouseLeave}
                >
                  点击此处
                </span>
                下载参与者的数据文件
              </span>
              <br />
              <Button
                type="primary"
                style={{ marginTop: '30px' }}
                icon={<VideoCameraOutlined />} />
              <span style={{ marginLeft: '20px' }}>
                <span
                  style={{
                    textDecoration: 'underline',
                    color: 'blue',
                    cursor: btn2Hover ? 'pointer' : 'default',
                  }}
                  onMouseEnter={handleOnBtn2MouseEnter}
                  onMouseLeave={handleOnBtn2MouseLeave}
                >
                  点击此处
                </span>
                下载参与者的任务录像
              </span>
            </div>
          )
        }
      </div>
    </div>
  );
}
