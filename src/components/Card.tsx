import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "lib";

import styled from "@emotion/styled";
import Unions from "lib/unions";

type CardProps = {
  data: Product;
};
const ProductCard = memo(({ data }: CardProps) => {
  const navigate = useNavigate();
  const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    cursor: default;
    transition: color 0.3s;

    :hover {
      cursor: pointer;
      & span {
        color: blue;
      }
    }
  `;
  const ImageContainer = styled.div`
    width: 40%;
  `;
  const ImageBox = styled.img`
    width: 100%;
    height: 150px;
    margin: auto;
    display: block;

    object-fit: cover;
    object-position: center;

    background-color: red;
  `;

  const InfoContainer = styled.div`
    padding: 10px;

    display: flex;
    flex: 0 0 60%;
    flex-direction: column;
    justify-content: center;

    & > h3 {
      font-size: ${Unions.font_size.large};
    }

    & > span {
      font-size: ${Unions.font_size.mid};
    }

    & > h3:hover {
      color: green;
    }
  `;

  const handleNaviagte = () => {
    const { id, thumbnail, brand, title, price, description, images } = data;
    navigate(`/detail/${id}`, {
      state: {
        thumbnail,
        brand,
        title,
        price,
        description,
        images,
      },
    });
  };
  const { title, thumbnail, brand, price } = data;
  return (
    <CardContainer onClick={handleNaviagte}>
      <ImageContainer>
        {" "}
        <ImageBox src={thumbnail} />
      </ImageContainer>

      <InfoContainer>
        <h3>{title}</h3>
        <span>
          <b>Brand</b>: {brand} | <b>Price</b>: {price}
        </span>
        <span></span>
      </InfoContainer>
    </CardContainer>
  );
});
export default ProductCard;
