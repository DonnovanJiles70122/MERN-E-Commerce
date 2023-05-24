import styled from "styled-components";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { Footer } from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { cell } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${cell({ padding: "10px", flexDirection: "column" })}
`;

const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 75%;
  object-fit: cover;
  ${cell({ height: "45%" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  margin-top: 50px;
  padding: 0px 50px;
  ${cell({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${cell({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.div`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${cell({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #6d9886;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 10px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid #393e46;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f7f7f7;
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <ImageContainer>
          <Image src="https://cdn-images.farfetch-contents.com/14/16/46/74/14164674_21073032_1000.jpg" />
        </ImageContainer>
        <InfoContainer>
          <Title>Air Mag "Back To The Future" sneakers</Title>
          <Desc>
            Nearly fifty years after its conception in 1971, Nike’s iconic
            Swoosh logo remains unchanged, showcasing a prevalent and pioneering
            symbol for the brand. Perhaps the most sought-after sneaker of all
            time, the Nike Mag from Back to the Future Part II was released in
            2011 via limited eBay auctions to support the Michael J. Fox
            Foundation. The pair feature a round toe, a flat rubber sole, a
            signature Nike swoosh, a mid-calf length, a branded ankle strap and
            light-up detailing.
          </Desc>
          <Price>$ 36,750</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>8</FilterSizeOption>
                <FilterSizeOption>9</FilterSizeOption>
                <FilterSizeOption>10</FilterSizeOption>
                <FilterSizeOption>11</FilterSizeOption>
                <FilterSizeOption>12</FilterSizeOption>
                <FilterSizeOption>13</FilterSizeOption>
                <FilterSizeOption>14</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO BAG</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
