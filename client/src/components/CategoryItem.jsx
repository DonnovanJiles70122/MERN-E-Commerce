import styled from "styled-components";
import { cell } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  //height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  //height: 100%;
  //object-fit: cover;
  ${cell({ height: "75%", width: "75%" })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  //width: 100%;
  //height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;
const Title = styled.h1`
  margin-bottom: 20px;
  ${cell({ fontSize: "15px" })}
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  width: 100px;
  color: gray;
  cursor: pointer;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
      <Hr />
    </Container>
  );
};

export default CategoryItem;
