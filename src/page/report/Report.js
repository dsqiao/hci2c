import React, { useEffect, useState } from "react";
import { Menu, Descriptions, Button } from "antd";
import { Pie, Column, Liquid } from '@antv/g2plot';



export default function Report() {
  const [currentStep, setCurrentStep] = useState('1')
  const onClick = (e) => {
    setCurrentStep(e.key)
  }
  const renderGender = () => {
    const data = [
      { type: '男性', value: 3 },
      { type: '女性', value: 2 },
    ];
    if (document.getElementById('gender')) {
      const gender = new Pie('gender', {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 1,
        innerRadius: 0.64,
        meta: {
          value: {
            formatter: (v) => `¥ ${v}`,
          },
        },
        label: {
          type: 'inner',
          offset: '-50%',
          autoRotate: false,
          style: { textAlign: 'center' },
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
          { type: 'element-selected' },
          { type: 'element-active' },
          {
            type: 'pie-statistic-active',
            cfg: {
              start: [
                { trigger: 'element:mouseenter', action: 'pie-statistic:change' },
                { trigger: 'legend-item:mouseenter', action: 'pie-statistic:change' },
              ],
              end: [
                { trigger: 'element:mouseleave', action: 'pie-statistic:reset' },
                { trigger: 'legend-item:mouseleave', action: 'pie-statistic:reset' },
              ],
            },
          },
        ],
      });

      gender.render();
    } else {
      console.log('gender dom 未渲染完成')
    }
  }
  const renderAge = () => {
    if (document.getElementById('age')) {
      const age = new Column('age', {
        data: [{
          age: '0-19',
          perc: 0.2,
        }, {
          age: '20-39',
          perc: 0.5,
        }, {
          age: '40-59',
          perc: 0.2,
        }, {
          age: '60-79',
          perc: 0.1
        }],
        xField: 'age',
        yField: 'perc',
        label: {
          // 可手动配置 label 数据标签位置
          position: 'middle', // 'top', 'bottom', 'middle',
          // 配置样式
          style: {
            fill: '#FFFFFF',
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
            alias: '年龄',
          },
          perc: {
            alias: '比例',
          },
        },
      });

      age.render();
    } else {
      console.log('age dom 未渲染完成')
    }
  }
  const renderTask1 = () => {
    if (document.getElementById('task1')) {
      const task1 = new Liquid('task1', {
        percent: 0.40,
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
      console.log('task1 dom 未渲染完成')
    }
  }
  const renderTask2 = () => {
    if (document.getElementById('task2')) {
      const task2 = new Liquid('task2', {
        percent: 0.80,
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
      console.log('task2 dom 未渲染完成')
    }
  }
  useEffect(() => {
    const timerId = setTimeout(() => {
      renderGender()
      renderAge()
      renderTask1()
      renderTask2()
    }, 2000)
    return () => {
      clearTimeout(timerId)
    }
  }, [currentStep])
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
            <h4>性别比例</h4>
            <div id="gender"></div>
            <h4 style={{ marginTop: '150px' }}>年龄分布</h4>
            <div id="age" />
            <h3 style={{ marginTop: '150px' }}>产品使用</h3>
            <p>使用经验</p>
            <p>是否使用过该产品？</p>
          </div>
        }
        {
          currentStep === '3' &&
          <div>
            <h3>工作指标</h3>
            <h4>任务完成率</h4>
            <p style={{ color: 'grey' }}>任务完成率 = 完成任务的人数/总人数</p>
            <div style={{ flexDirection: 'row', display: 'flex' }}>
              <div id="task1" />
              <div id="task2" />
            </div>
            <h4>任务完成时间</h4>
            <p>平均完成时间最短的任务为 Task1，平均完成时间最长的任务为 Task2.</p>
            <p>任务完成总体平均时间为 298.5 秒。</p>
          </div>
        }
      </div>
    </div>
  )
}