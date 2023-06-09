import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #1b9c85;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Deal! Free Shipping on Orders Over $100</Container>;
};

export default Announcement;
