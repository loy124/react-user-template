import React, { useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { request } from "../../../utils/axios";
function LandingPage(props) {
  useEffect(() => {}, []);

  const onClickHandler = () => {
    request("post", "/api/user/logout").then((res) => {
      console.log(res);
      if (res.success) {
        props.history.push("/login");
      } else {
        alert("로그아웃에 실패하였습니다");
      }
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}>
      <h2>시작 페이지</h2>
      <button onClick={onClickHandler}>로그아웃</button>
    </div>
  );
}

export default withRouter(LandingPage);
