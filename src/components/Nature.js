import React from "react";
import styled from "styled-components";
import intro from "../assets/images/intro_bg.jpg";

const Container = styled.div`
  padding: 70px 20px;
  text-align: center;
  color: #fff;
  h2 {
    font-size: 32px;
    padding-bottom: 18px;
  }
  p {
    font-size: 15px;
    font-weight: 500;
    padding-bottom: 30px;
  }
  a {
    color: #fff;
    text-decoration: none;
    padding: 10px 35px;
    background-color: rgba(255, 255, 255, 0.3);
    transition: 0.3s;
    &:hover {
      background-color: rgba(255, 255, 255, 0.7);
    }
  }
`;
function Nature() {
  return (
    <Container
      style={{ background: `url(${intro}) no-repeat fixed 50%/cover` }}
    >
      <h2>자연에서 온 재료와 친환경을 향한 혁신</h2>
      <p>
        사람에게 시각적인 안정을 제공하는 것 등의 실천을 통해 모두가 편안히
        호흡하며 쉴 수 있는 공간을 제공하려 합니다.
      </p>
      <a href="#">자세히보기 &gt;&gt;</a>
    </Container>
  );
}

export default Nature;
