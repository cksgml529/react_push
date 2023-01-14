import React from "react";
import styled from "styled-components";
import { BsFillTelephoneFill } from "react-icons/bs";

const Container = styled.div`
  p {
    color: #ed5c20;
    font-size: 24px;
    padding-bottom: 10px;
    display: flex;
    align-items: center;

    span {
      padding-left: 10px;
      font-weight: bold;
    }
  }
  ul {
    font-weight: 500;
    font-size: 12px;
    color: #666;
    line-height: 1.6;
    margin: 10px 0 30px;
  }
  .csbtn {
    margin: 10px 0;
    display: flex;
    a {
      font-size: 13px;
      width: 46%;
      display: block;
      text-align: center;
      padding: 8px;
      border-radius: 3px;
      margin: 0 1%;
      background-color: #787878;
      color: #fff;
      &:hover {
        background-color: #555;
      }
    }
    a:last-child {
      background-color: #333;
      &:hover {
        background-color: #00113c;
      }
    }
  }
`;
function Cust() {
  return (
    <Container>
      <p>
        <BsFillTelephoneFill />
        <span>010-9951-9925</span>
      </p>
      <ul>
        <li>· 상담시간 : 09:00~18:00</li>
        <li>· 점심시간 : 12:00~13:00(주말, 공휴일 휴무)</li>
      </ul>

      <div className="csbtn">
        <a href="#">1:1문의하기</a>
        <a href="#">FAQ</a>
      </div>
    </Container>
  );
}

export default Cust;
