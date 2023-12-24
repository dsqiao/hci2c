import React from "react";
import "../style/footer.css";
export default function Footer() {
  return (
    <footer className="footer">
      <img
        src="https://www.nju.edu.cn/images/footer_logo.svg"
        alt="Nanjing University"
        className="xiaohui"
      />
      <div className="box">
        <h3>仙林校区</h3>
        <p>南京市栖霞区仙林大道163号</p>
        <p>(86)-25-89683186</p>
        <p>(86)-25-83302728（fax）</p>
        <p>210023</p>
      </div>
    </footer>
  );
}
