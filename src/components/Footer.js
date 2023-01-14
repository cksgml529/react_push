import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #333;
  color: #ddd;
  font-weight: 500;
  font-size: 12px;
  padding: 30px 20px;
  .snsbox {
    display: flex;
    justify-content: center;
  }
  .sns {
    width: 40px;
    height: 40px;
    background-color: #777;
    border-radius: 50%;
    margin-right: 10px;
    display: grid;
    place-content: center center;
    /* transition: 0.4s; */
    &:hover {
      background-color: #999;
    }
  }
  img {
    height: 17px;
  }
  .footerDetail {
    display: flex;
    justify-content: center;
    padding-top: 20px;
    p {
      padding-right: 20px;
    }
  }
  span {
    display: block;
    padding-bottom: 20px;
    text-align: center;
  }
  .footerLast {
    display: flex;
    justify-content: center;
    a {
      display: block;
      color: #bbb;
      text-decoration: none;
      padding: 6px 10px;
      border: 1px solid #bbb;
      margin-right: 6px;

      &:hover {
        background-color: #999;
        color: #fff;
      }
    }
  }
`;
const snslist = [
  { id: 1, url: "/images/twitter.svg", alt: "트위터" },
  { id: 2, url: "/images/facebook-f.svg", alt: "페이스북" },
  { id: 3, url: "/images/instagram.svg", alt: "인스타" },
];
const footerTxt = [
  { id: 1, title: "상호", des: "DESIGN coco" },
  { id: 2, title: "주소", des: "대구광역시 수성구 범어동" },
  { id: 3, title: "TEL", des: "010-9951-9925" },
  { id: 4, title: "사업자 등록번호", des: "511-53-00340" },
];
function Footer({ path }) {
  return (
    <Container>
      <div className="snsbox">
        {snslist.map((item) => {
          return (
            <div className="sns">
              <img src={path + item.url} alt={item.alt} />
            </div>
          );
        })}
      </div>

      <div className="footerDetail">
        {footerTxt.map((item) => {
          return (
            <p key={item.id}>
              {item.title} : {item.des}
            </p>
          );
        })}
      </div>
      <span>Copyright(c) DESIGN coco.All Rights Reserved.</span>
      <div class="footerLast">
        <a href="#">회사소개</a>
        <a href="#">개인정보처리방침</a>
        <a href="#">관리자 페이지</a>
      </div>
    </Container>
  );
}

export default Footer;
