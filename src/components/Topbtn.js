import React from "react";
import styled from "styled-components";

const Btn = styled.div`
  width: 45px;
  height: 45px;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  border-radius: 5px;
  position: fixed;
  right: 20px;
  bottom: 20px;
  text-align: center;
  cursor: pointer;

  span {
    display: block;
    font-weight: bold;
  }
`;
const screenTop = (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
function Topbtn({ path }) {
  return (
    <Btn onClick={screenTop}>
      <img src={path + "/images/top-bg.png"} alt="topbtn" />
      <span>Top</span>
    </Btn>
  );
}

export default Topbtn;
