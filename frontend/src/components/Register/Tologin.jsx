import React from 'react'
import style from './Register.module.css';

function Tologin(props) {
  console.log(props.title1);
  return (
    <div style={{ width: "100px", height: "100px", borderRadius: "50%", backgroundColor: "#ffffff", boxShadow: "0px 10px 36px rgba(0, 0, 0, 0.18),0px 0px 0px 0px rgba(0, 0, 0, 0.06)" }}>
      <div class={style.arrow2}>
      </div>
      <div className={style.login_btn_text}>{props.title1}</div>

    </div>
  )
}

export default Tologin