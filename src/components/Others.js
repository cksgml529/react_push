import React from "react";
import styled from "styled-components";
import Check from "./Check";
import Cust from "./Cust";
import Youtube from "./Youtube";

const Container = styled.div`
  width: 62.5vw;
  display: flex;
  justify-content: space-between;
  padding: 30px 20px;
  margin: 0 auto;
  .notice {
    width: 30%;
    border-right: 1px solid #ccc;
    .title {
      display: flex;
      justify-content: space-between;
      padding-right: 35px;
      h3 {
        font-weight: bold;
        font-size: 16px;
      }
    }
    a {
      color: #ccc;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  a {
    text-decoration: none;
  }

  .cs {
    padding: 0 40px;
    width: 30%;
    border-right: 1px solid #ccc;
    h3 {
      font-weight: bold;
      font-size: 16px;
      margin-bottom: 15px;
    }
  }
`;
function Others() {
  return (
    <Container>
      <div className="notice">
        <div className="title">
          <h3>공지사항</h3>
          <a href="#">more &gt;</a>
        </div>
        <Check />
      </div>
      <div className="cs">
        <h3>고객센터</h3>
        <Cust />
      </div>
      <Youtube />
    </Container>
  );
}

export default Others;
