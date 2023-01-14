import React from "react";

import styled from "styled-components";
const Container = styled.div`
  padding: 100px 0;
  margin: 0 auto;
  h2 {
    text-align: center;
    margin-bottom: 30px;
    font-size: 32px;
    font-weight: bold;
    text-transform: capitalize;
  }
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 62.5vw;
    margin: 0 auto;
  }
  li {
    width: 31.25vw;
    height: 280px;
    position: relative;
    overflow: hidden;
    img {
      transition: 0.6s;
    }
    &:hover {
      background-color: rgba(0, 0, 0, 0.5);
    }
    &:hover img {
      transform: scale(1.1);
    }
    &:hover .border {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
    &:hover .bgcolor {
      opacity: 1;
      background-color: rgba(0, 0, 0, 0.5);
    }
    &:hover .wedotxt {
      transform: translateX(10px);
    }
    &:hover a {
      transform: translateX(10px);
      opacity: 1;
    }
  }

  .bgcolor {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    transition: 0.5s;
  }
  .border {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-52%, -50%);
    width: 92%;
    height: 85%;
    padding: 1%;
    border: 1px solid #fff;
    opacity: 0;
    transition: 0.5s;
  }
  .wedotxt {
    position: absolute;
    top: 0;
    color: #fff;
    padding: 30px;
    transition: 0.5s;
  }
  h4 {
    font-weight: bold;
    font-size: 24px;
    padding-bottom: 10px;
  }
  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.5;
  }
  a {
    padding: 7px 20px;
    text-decoration: none;
    border: 1px solid #fff;
    color: #fff;
    position: absolute;
    top: 43%;
    left: 0;
    margin-left: 30px;
    opacity: 0;
    transition: 0.5s;
  }
`;
const text =
  "주변환경을 생각하는 개발 소비자의 품격있는 삶을 위한 주거문화 창달에 노력하고 있습니다.";

const wedoList = [
  { id: 1, bgImg: "/images/what1.jpg", alt: "wedoImg1", title: "Company" },
  { id: 2, bgImg: "/images/what2.jpg", alt: "wedoImg2", title: "Service" },
  { id: 3, bgImg: "/images/what3.jpg", alt: "wedoImg3", title: "Platform" },
  { id: 4, bgImg: "/images/what4.jpg", alt: "wedoImg4", title: "Solution" },
];

function Wedo({ path }) {
  return (
    <Container>
      <h2>what we do</h2>
      <ul>
        {wedoList.map((item) => {
          return (
            <li key={item.id}>
              <img src={path + item.bgImg} alt={item.alt} />
              <div className="bgcolor"></div>
              <div className="border"> </div>
              <div className="wedotxt">
                <h4>{item.title}</h4>
                <p>
                  주변환경을 생각하는 개발 소비자의 품격있는 삶을 위한
                  <br /> 주거문화 창달에 노력하고 있습니다
                </p>
              </div>
              <a href="#">자세히보기</a>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}

export default Wedo;
