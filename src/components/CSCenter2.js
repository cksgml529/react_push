import React from "react";
import styled from "styled-components";

const infoData = [
  {
    id: 1,
    title: "주소",
    des: "대구광역시 수성구 범어동 / daegu metropolitan city",
  },
  { id: 2, title: "이메일", des: "designcoco_c@naver.com" },
  { id: 3, title: "전화", des: "010-9951-9925" },
];
const snslist = [
  { id: 1, url: "/images/twitter.svg", alt: "트위터" },
  { id: 2, url: "/images/facebook-f.svg", alt: "페이스북" },
  { id: 3, url: "/images/instagram.svg", alt: "인스타" },
  { id: 4, url: "/images/linkedin-in.svg", alt: "공유" },
];
const Container = styled.div`
  width: 22.5vw;
  height: 295px;
  font-weight: 500;
  border-radius: 5px;
  padding: 20px;
  color: #fff;
  background-color: #555;
  li {
    padding: 10px 10px 20px;
  }
  h4 {
    margin-bottom: 5px;
  }
  span {
    font-weight: normal;
    color: #ccc;
  }
  .snsbox {
    display: flex;
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
`;

function CSCenter2({ path }) {
  return (
    <Container>
      <ul>
        {infoData.map((item) => {
          return (
            <li key={item.id}>
              <h4>{item.title}</h4>
              <span>{item.des}</span>
            </li>
          );
        })}
        <li>
          <h4>SNS</h4>
          <div className="snsbox">
            {snslist.map((item) => {
              return (
                <div className="sns">
                  <img src={path + item.url} alt={item.alt} />
                </div>
              );
            })}
          </div>
        </li>
      </ul>
    </Container>
  );
}

export default CSCenter2;
