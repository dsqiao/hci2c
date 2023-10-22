import React from 'react'
import { Link } from 'react-router-dom'

// 产品研究
export default function Product() {
  return (
    <div style={{
      backgroundPosition: 'center',
      height: '59vw',
      width: '100%',
      objectFit: 'cover',
      backgroundSize: 'cover',
      display: 'flex',
      flexDirection: 'column',
      paddingInline: '15%',
      boxSizing: 'border-box',
    }}>
      <div style={{
        backgroundColor: 'rgb(240, 248, 222)',
        height: '100%',
      }}>
        <img src={require('../img/library.jpeg')} style={{ width: '100%' }} alt="" />
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
          padding: '40px 0',
        }}>
          <Link to="apply" className='prod-link'>
            <img src={require('../img/申请.jpeg')} alt="" ></img>
          </Link>
          <Link to="../test" className='prod-link'>
            <img src={require('../img/预览.jpeg')} alt=""></img>
          </Link>
          <Link to="record" className='prod-link'>
            <img src={require('../img/记录.jpeg')} alt=""></img>
          </Link>
          <Link to="report" className='prod-link'>
            <img src={require('../img/报告.jpeg')} alt=""></img>
          </Link>
        </div>
      </div>
    </div>
  )
}