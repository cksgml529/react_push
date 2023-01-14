import React, { useReducer } from "react";
import styled from "styled-components";
import { AiTwotoneLock, AiFillHome } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";

const Container = styled.div`
  background-color: #f3f3f3;
  color: #999;
  font-weight: 500;
  display: grid;
  place-content: center;
  ul {
    display: flex;
    justify-content: flex-end;
    width: 75vw;
    li {
      padding: 0 15px;
      font-size: 12px;
      display: flex;
      align-items: center;
      height: 2vw;
      line-height: 2vw;
      cursor: pointer;
      border-left: 1px solid #e3e3e3;
      &:hover {
        color: #dbb075;
      }
    }
    &:last-child {
      border-right: 1px solid #e3e3e3;
    }
  }
`;
const User = [
  { id: 1, icon: <AiFillHome />, title: "HOME" },
  { id: 2, icon: <AiTwotoneLock />, title: "로그인" },
  { id: 3, icon: <BiLogIn />, title: "회원가입" },
];

function Top() {
  return (
    <Container>
      <ul>
        {User.map((item) => {
          return (
            <li key={item.id}>
              {item.icon}
              {item.title}
            </li>
          );
        })}
      </ul>
    </Container>
  );
}

export default Top;
