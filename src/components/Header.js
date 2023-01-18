import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.png";

const Container = styled.div`
  background-color: #fff;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 20px 0;
  position: sticky;
  top: 0;
  z-index: 9;

  h1 {
    margin: 5px 200px 5px 400px;
    cursor: pointer;
  }
  .gnb {
    width: 40vw;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 17px;
    position: relative;
  }
  .gnb > li {
    width: 8vw;
    font-weight: 500;
    text-align: center;
    cursor: pointer;

    &:hover {
      color: #00529b;
      
    }

    &:hover .subMenu {
      opacity: 1;
      transform: translateY(0); 
      pointer-events: all;

    }

  }
  .subMenu {
    display: flex;
    flex-flow: column;
    width: 6.5vw;
    color: #fff;
    position: absolute;
    top: 45px;
    opacity: 0;
    transition: 0.4s;
    transform: translateY(-15px);
    pointer-events: none;
   
  }
  .gnb > li > ul > li {
    padding: 15px;
    width: 100%;
    background-color: #666;
    border-bottom: 1px solid #e3e3e3;
    transition: 0.3s;
    z-index: 9999;
    &:hover {
      background-color: #00529b;
      
    }
  }
  .gnb > li > ul > li:last-child {
    border-bottom: none;
  }
`;
const dataCom = [
  { id: 1, sub: "회사소개" },
  { id: 2, sub: "CEO 인사말" },
  { id: 3, sub: "회사연혁" },
  { id: 4, sub: "오시는길" },
];
const dataBus = [
  { id: 1, sub: "사업분야" },
  { id: 2, sub: "사업분야2" },
  { id: 3, sub: "인증서" },
  { id: 4, sub: "파트너" },
];
const dataPro = [
  { id: 1, sub: "제품01" },
  { id: 2, sub: "제품02" },
  { id: 3, sub: "제품03" },
];
const dataCS = [
  { id: 1, sub: "고객상담" },
  { id: 2, sub: "문의게시판" },
  { id: 3, sub: "공지사항" },
];
const dataComu = [
  { id: 1, sub: "FAQ" },
  { id: 2, sub: "이벤트" },
];
function Header() {
  return (
    <Container className="container">
      <h1>
        <img src={logo} alt="logo" />
      </h1>
      <ul className="gnb">
        <li>
          회사소개
          <ul className="subMenu">
            {dataCom.map((li) => (
              <li key={li.id}>{li.sub}</li>
            ))}
          </ul>
        </li>
        <li>
          사업소개
          <ul className="subMenu">
            {dataBus.map((li) => (
              <li key={li.id}>{li.sub}</li>
            ))}
          </ul>
        </li>
        <li>
          제품소개
          <ul className="subMenu">
            {dataPro.map((li) => (
              <li key={li.id}>{li.sub}</li>
            ))}
          </ul>
        </li>
        <li>
          고객센터
          <ul className="subMenu">
            {dataCS.map((li) => (
              <li key={li.id}>{li.sub}</li>
            ))}
          </ul>
        </li>
        <li>
          커뮤니티
          <ul className="subMenu">
            {dataComu.map((li) => (
              <li key={li.id}>{li.sub}</li>
            ))}
          </ul>
        </li>
      </ul>
    </Container>
  );
}

export default Header;
