import {
  EmailOutlined,
  Facebook,
  Instagram,
  MyLocationOutlined,
  PhoneIphoneOutlined,
  Pinterest,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { cell } from "../responsive";

const Container = styled.div`
  display: flex;
  background-color: #f2e7d5;
  ${cell({ flexDirection: "column", backgroundColor: "lightgrey" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: #393e46;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #f2e7d5;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  color: #393e46;
  ${cell({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  color: #393e46;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

export const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Sneaker Legends</Logo>
        <Desc>
          Sneaker Legends is not your typical e-commerce website. We are a live
          marketplace for buying and selling limited edition sneakers.
        </Desc>
        <SocialContainer>
          <SocialIcon color="6D9886">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="6D9886">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="6D9886">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="6D9886">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Sneaker</ListItem>
          <ListItem>Boots</ListItem>
          <ListItem>Casual Shoes</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <MyLocationOutlined style={{ marginRight: "10px" }} />
          622 Dixie Way, San Francisco
        </ContactItem>
        <ContactItem>
          <PhoneIphoneOutlined style={{ marginRight: "10px" }} /> +1 555 555
          5555
        </ContactItem>
        <ContactItem>
          <EmailOutlined style={{ marginRight: "10px" }} /> djiles@mail.sfsu.edu
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};
