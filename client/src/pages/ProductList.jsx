import styled from "styled-components";
import Navbar from "../components/Navbar";
import { Announcement } from "@material-ui/icons";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import { Footer } from "../components/Footer";
import { cell } from "../responsive";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;

const Filter = styled.div`
  margin: 20px;
  ${cell({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 10px;
  ${cell({ marginRight: "0px" })}
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${cell({ margin: "10px 0px" })}
`;

const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Title>Sneaker</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Shoes
            </Option>
            <Option>Sneakers</Option>
            <Option>Boots</Option>
            <Option>Casual Shoes</Option>
            <Option>Sandals</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>8</Option>
            <Option>8.5</Option>
            <Option>9</Option>
            <Option>9.5</Option>
            <Option>10</Option>
            <Option>10.5</Option>
            <Option>11</Option>
            <Option>11.5</Option>
            <Option>12</Option>
            <Option>13</Option>
            <Option>14</Option>
            <Option>15</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
