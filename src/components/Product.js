import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 80px 20px;
  text-align: center;
  h2 {
    font-size: 32px;
    font-weight: bold;
    padding-bottom: 15px;
  }
  ul {
    width: 62.5vw;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 40px auto;
  }
  figure {
    width: calc(62.5vw / 3);
    margin: 10px;
    border: 1px solid #d5d5d5;
  }
  img {
    width: calc(62.5vw / 3);
    cursor: pointer;
    transition: 0.5s;
    &:hover {
      filter: brightness(110%);
    }
  }
  h3 {
    padding: 20px;
    font-size: 17px;
    font-weight: bold;
  }
  p {
    padding: 0 25px 25px;
    font-size: 14px;
    color: #666;
    font-weight: 500;
  }
`;

const productTxt =
  "고객과의 약속을 최우선으로 생각하고, 양질의 서비스를 제공하고자 힘쓰며 경쟁력 있는 기업으로 도약하고..";
const product = [
  { id: 1, url: "/images/product7.jpg", title: "제품07", txt: productTxt },
  { id: 2, url: "/images/product8.jpg", title: "제품08", txt: productTxt },
  { id: 3, url: "/images/product6.jpg", title: "제품06", txt: productTxt },
  { id: 4, url: "/images/product5.jpg", title: "제품05", txt: productTxt },
  { id: 5, url: "/images/product4.jpg", title: "제품04", txt: productTxt },
  { id: 6, url: "/images/product3.jpg", title: "제품03", txt: productTxt },
];
function Product({ path }) {
  return (
    <Container>
      <h2>Product</h2>
      <p>
        최고의 prestige와 공간가치를 창조하는 global partner, 건축물과
        주변환경을 생각하는 개발 소비자의 품격 있는 삶을 위한 주거문화 창달에
        노력하고 있습니다.
      </p>
      <ul>
        {product.map((item) => {
          return (
            <li key={item.id}>
              <figure>
                <img src={path + item.url} alt={item.title} />

                <figcaption>
                  <h3>{item.title}</h3>
                  <p>{item.txt}</p>
                </figcaption>
              </figure>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}

export default Product;
