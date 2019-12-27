import React from 'react';
import { Text, SafeAreaView, ScrollView } from 'react-native';

import styled from 'styled-components';
import Card from './components/Card';
import Course from './components/Course';
import { Ionicons } from '@expo/vector-icons';
import Logo from './components/Logo';
import Menu from './components/Menu';

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Menu />
        <SafeAreaView>
          <ScrollView>

            <TitleBar>
            <Avatar source={require('./assets/avatar.jpg')}></Avatar>
              <Title>Welcome back,</Title>
              <Name>Adam Morgan</Name>
              <Ionicons
                name="ios-notifications"
                size={28}
                color="#4775f2"
                style={{ position: "absolute", right: 20, top: 15}}
              />
            </TitleBar>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ padding: 20, paddingLeft: 16, paddingTop:30, flexDirection: 'row'}}>

              {logos.map((logo, index) => (
                <Logo key={index} image={logo.image} text={logo.text} />
              ))}

            </ScrollView>

            <SubTitle>
              Continue Learning
            </SubTitle>

            <ScrollView horizontal={true} style={{ paddingBottom: 30}} showsHorizontalScrollIndicator={false}>
              {cards.map((card, index) => (
                <Card
                  key={index}
                  title={card.title}
                  image={card.image}
                  caption={card.caption}
                  logo={card.logo}
                  subtitle={card.subtitle}
                  avatar={card.avatar}
                />
              ))}
            </ScrollView>

            <SubTitle>
              Popular Courses
            </SubTitle>

            <ScrollView >
              {courses.map((course, index) => (
                <Course
                  key={index}
                  image={course.image}
                  title={course.title}
                  subtitle={course.subtitle}
                  logo={course.logo}
                  caption={course.caption}
                  avatar={course.avatar}
                  subtitle={course.subtitle}
                  author={course.author}
                />
              ))}
            </ScrollView>


          </ScrollView>
        </SafeAreaView>
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
`;

const Title = styled.Text`
  font-size: 16px;
  color:#b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color:#3c4560;
  font-weight: bold;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 20px;
  padding-left:80px;
`;

const Avatar = styled.Image`
  width:44px;
  height:44px;
  border-radius:22px;
  margin-left:20px;
  position: absolute;
  left:0;
  top:0;
`;

const SubTitle = styled.Text`
  color:#b8bece;
  font-weight:600;
  font-size: 15px;
  margin-left:20px;
  margin-top:20px;
  text-transform:uppercase;
`;



const logos = [
  {
    image: require('./assets/logo-framerx.png'),
    text: "Framer X",
  },
  {
    image: require('./assets/logo-sketch.png'),
    text: "Sketch",
  },
  {
    image: require('./assets/logo-invision.png'),
    text: "Invision",
  },
  {
    image: require('./assets/logo-figma.png'),
    text: "Figma",
  },
  {
    image: require('./assets/logo-studio.png'),
    text: "Studio X",
  },
]

const cards = [
  {
    title: "Senior Product Designer at Careem",
    image: require('./assets/background8.jpg'),
    subtitle: "React Native",
    caption: "1 of 12 sections",
    logo: require('./assets/logo-react.png'),

  },
  {
    title: "Senior Product Designer at Dubizzle",
    image: require('./assets/background6.jpg'),
    subtitle: "React Native",
    caption: "1 of 12 sections",
    logo: require('./assets/logo-react.png'),

  },
  {
    title: "Senior Product Designer at Bank of Dubai",
    image: require('./assets/background7.jpg'),
    subtitle: "React Native",
    caption: "1 of 12 sections",
    logo: require('./assets/logo-react.png'),

  },
]

const courses = [
  {
    title: "Prototype in Invision Studio",
    subtitle: "10 Sections",
    image: require('./assets/background13.jpg'),
    logo: require('./assets/logo-studio.png'),
    author: "Adam Morgan",
    avatar: require('./assets/avatar.jpg'),
    caption: "Hello and welcome to the show",

  },
  {
    title: "Prototype in Invision Studio",
    subtitle: "10 Sections",
    image: require('./assets/background1.jpg'),
    logo: require('./assets/logo-studio.png'),
    author: "Adam Morgan",
    avatar: require('./assets/avatar.jpg'),
    caption: "Hello and welcome to the show - this is three lines sdasd",

  },
  {
    title: "Prototype in Framer X",
    subtitle: "10 Sections",
    image: require('./assets/background9.jpg'),
    logo: require('./assets/logo-framerx.png'),
    author: "Adam Morgan",
    avatar: require('./assets/avatar.jpg'),
    caption: "Hello and welcome to the show",

  },
]
