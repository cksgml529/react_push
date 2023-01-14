import React from "react";
import styled from "styled-components";
const Form = styled.form`
  width: 30vw;
  height: 409px;
  margin-right: 20px;
  label {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-weight: 500;
  }

  span {
    text-align: right;
    width: 60px;
    margin: 10px;
    padding-right: 5px;
  }
  input {
    outline: none;
    border: none;
    border-radius: 5px;
    width: 500px;
    padding: 10px 5px;
  }
  textarea {
    outline: none;
    border: none;
    border-radius: 5px;
    width: 500px;
    height: 120px;

    padding: 10px 0;
  }
  button {
    border: none;
    border-radius: 5px;
    padding: 10px 25px;
    background-color: #333;
    cursor: pointer;
    color: #fff;
    margin-top: 10px;
    margin-left: 50%;
    font-weight: 600;
    &:hover {
      background-color: #888;
    }
  }
`;

function CSCenter1({ path }) {
  return (
    <Form>
      <label>
        <span>이름</span>
        <input type="text" />
      </label>
      <label>
        <span>전화번호</span>
        <input type="text" />
      </label>
      <label>
        <span>이메일</span>
        <input type="text" />
      </label>
      <label>
        <span>제목</span>
        <input type="text" />
      </label>
      <label>
        <span>내용</span>
        <textarea type="text" />
      </label>
      <button>문의하기</button>
    </Form>
  );
}

export default CSCenter1;
