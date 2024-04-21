import { useLocation } from "react-router-dom";
import MainContainer from "styles/MainContainer";
import { PrdLists, PrdSection } from "styles/PrdSectionLists";

const DetailPage = () => {
  const location = useLocation();
  const { thumbnail, brand, title, price, description, images } =
    location.state;

  return (
    <MainContainer>
      <h1>{title}</h1>
      <img src={thumbnail} alt="thumbnail" />
      <h2>{brand}</h2>
      <p>$ {price}</p>
      <p>{description}</p>
      <PrdSection>
        <PrdLists>
          {images.map((image: string, index: number) => (
            <img key={index} src={image} alt={`${title}:${index}`} />
          ))}
        </PrdLists>
      </PrdSection>
    </MainContainer>
  );
};
export default DetailPage;
