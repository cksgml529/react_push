import React from "react";
import styled from "styled-components";

const Container = styled.div`
  color: #666;
  .event {
    cursor: pointer;
    font-size: 15px;
    &:hover {
      text-decoration: underline;
    }
  }
  span {
    font-size: 14px;
  }
`;
function Noticeitem() {
  return (
    <Container>
      <ul>
        <li>
          <span className="event">공지사항 테스트 글입니다.</span>
          <span>2018-01-15</span>
        </li>
      </ul>
    </Container>
  );
}

export default Noticeitem;
