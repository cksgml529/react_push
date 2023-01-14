import React from "react";
import styled from "styled-components";

const txt = "· 공지사항 테스트 글 입니다.";
const date = "2018-01-15";
const Check = [{ id: 1, title: txt, date: date }];

const Container = styled.div`
  margin-top: 15px;
  padding-right: 35px;

  ul {
    list-style: disc;
    list-style-position: outside;
  }
  li:last-child {
    margin-bottom: 10px;
  }
  li {
    border-bottom: 1px solid #ccc;
    padding: 5px;
    font-size: 13px;
    font-weight: 500;
    color: #666;
    display: flex;
    justify-content: space-between;
  }
`;
function Checkitem() {
  return (
    <Container>
      <ul>
        {Check.map((li) => {
          return (
            <li key={li.id}>
              {li.title}
              <span>{li.date}</span>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}

export default Checkitem;
