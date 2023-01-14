import React from "react";
import styled from "styled-components";
import CSCenter1 from "./CSCenter1";
import CSCenter2 from "./CSCenter2";

const Container = styled.div`
  background-color: #efefef;
  font-weight: bold;
  padding: 100px 0;

  h2 {
    font-size: 32px;
    padding-bottom: 15px;
    text-align: center;
  }
  p {
    color: #666;
    padding-bottom: 40px;
    font-size: 14px;
    text-align: center;
    font-weight: 500;
  }
`;
const CSCom = styled.div`
  display: flex;
  justify-content: center;
`;
function CSCenter({ path }) {
  return (
    <Container>
      <h2>CS Center</h2>
      <p>
        궁금하신 사항에 대해 문의를 해주시면 빠른 시간 내에 답변해 드리겠습니다.
      </p>
      <CSCom>
        <CSCenter1 />
        <CSCenter2 path={path} />
      </CSCom>
    </Container>
  );
}

export default CSCenter;
