import React from "react";

// 登陆页面
export default function Login() {
  return (
    <div style={{
      width: '100vw',
      height: '59vw',
      backgroundImage: `url(${require('../img/bg.png')})`,
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