import React from 'react';
import styled from 'styled-components';

const Course = props => (
  <Container>
    <Cover>
      <Image source={props.image} />
      <Logo source={props.logo} resizeMode="contain" />
      <Subtitle>{props.subtitle}</Subtitle>
      <Title>{props.title}</Title>
    </Cover>
    <Content>
      <Avatar source={props.avatar} />
      <Caption>{props.caption}</Caption>
      <Author>Taught by {props.author}</Author>
    </Content>
  </Container>
);


export default Course;


const Container = styled.View`
  width: 374px;
  height:335px;
  background: white;
  margin: 10px 20px;
  border-radius:14px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.15);
`;

const Cover = styled.View`
  height:260px;
  border-top-left-radius:14px;
  border-top-right-radius:14px;
  overflow: hidden;
  justify-content: flex-end;
`;

const Image = styled.Image`
width: 100%;
height: 100%
position:absolute;
`;

const Logo = styled.Image`
width: 48px;
height: 48px;
top: 90px;
left: 50%;
margin-left: -24px;
position: absolute;
`;

const Title = styled.Text`
  font-size: 24px;
  color:white;
  font-weight: 600;
  margin-top:4px;
  margin-bottom: 20px;
  margin-left:20px;
  width:170px;
`;

const Subtitle = styled.Text`
  font-size: 15px;
  color: rgba(255,255,255,0.8);
  font-weight: 500;
  margin-top:4px;
  text-transform:uppercase;
  margin-left:20px;
`;

const Content = styled.View`
padding-left: 62px;
justify-content:center;
height:75px;
`;

const Avatar = styled.Image`
  width:32px;
  height:32px;
  border-radius:16px;
  position: absolute;
  top:20px;
  left:20px;
`;

const Caption = styled.Text`
  font-size: 14px;
  color: #3c4560;
  font-weight: 500;
  padding-right:20px;
`;

const Author = styled.Text`
  font-size: 13px;
  color: #b8bece;
  font-weight: 500;
  margin-top: 4px;
`;
