import React from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, Animated, Easing, StatusBar } from 'react-native';

import styled from 'styled-components';
import Card from '../components/Card';
import Course from '../components/Course';
import { Ionicons } from '@expo/vector-icons';
import Logo from '../components/Logo';
import Menu from '../components/Menu';
import { connect } from "react-redux";
import Avatar from '../components/Avatar';


function mapStateToProps(state) {
  return { action: state.action, name: state.name };
}

function mapDispatchToProps(dispatch) {
  return {
    openMenu: () => dispatch({
      type: "OPEN_MENU"
    })
  }
}  



class HomeScreen extends React.Component {

  static navigationOptions = {
    // title: "Home"
    header: null
  };

  state = {
    scale: new Animated.Value(1),
    opacity: new Animated.Value(1)
  };

  componentDidMount() {
    StatusBar.setBarStyle("dark-content", true);
  }

  componentDidUpdate() {
    this.toggleMenu()
  };

  toggleMenu = () => {
    if (this.props.action == "openMenu") {
      Animated.timing(this.state.scale, {
        toValue: 0.9,
        duration: 300,
        easing: Easing.in()
      }).start();
      Animated.spring(this.state.opacity, {
        toValue: 0.5
      }).start();

      StatusBar.setBarStyle("light-content", true);
    }

    if (this.props.action == "closeMenu") {
      Animated.timing(this.state.scale, {
        toValue: 1,
        duration: 300,
        easing: Easing.in()
      }).start();
      Animated.spring(this.state.opacity, {
        toValue: 1
      }).start();

      StatusBar.setBarStyle("dark-content", true);
    }
  };



  render() {
    return (
      <RootView>
        <Menu />
      <AnimatedContainer style={{ transform: [{ scale: this.state.scale,}], opacity: this.state.opacity  }}>
        
        <SafeAreaView>
          <ScrollView>

            <TitleBar>
            <TouchableOpacity onPress={this.props.openMenu} style={{ position: "absolute", top: 0, left: 0 }}>
              <Avatar />
            </TouchableOpacity>
              <Title>Welcome back,</Title>
              <Name>{this.props.name}</Name>
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
                <TouchableOpacity key={index} onPress={() => {
                  this.props.navigation.push("Section")
                }}>
                <Card
                  title={card.title}
                  image={card.image}
                  caption={card.caption}
                  logo={card.logo}
                  subtitle={card.subtitle}
                  avatar={card.avatar}
                />
                </TouchableOpacity>
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
      </AnimatedContainer>
      </RootView>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);


// Styled Components

const RootView = styled.View`
  background: black;
  flex: 1;
`;

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  overflow:hidden;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Title = styled.Text`
  font-size: 16px;
  color:#b8bece;
  font-weight: 500;
  margin-left:20px;
`;

const Name = styled.Text`
  font-size: 20px;
  color:#3c4560;
  font-weight: bold;
  margin-left:20px;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 20px;
  padding-left:60px;
`;


const SubTitle = styled.Text`
  color:#b8bece;
  font-weight:600;
  font-size: 15px;
  margin-left:20px;
  margin-top:20px;
  text-transform:uppercase;
`;


// Data


const logos = [
  {
    image: require('../assets/logo-framerx.png'),
    text: "Framer X",
  },
  {
    image: require('../assets/logo-sketch.png'),
    text: "Sketch",
  },
  {
    image: require('../assets/logo-invision.png'),
    text: "Invision",
  },
  {
    image: require('../assets/logo-figma.png'),
    text: "Figma",
  },
  {
    image: require('../assets/logo-studio.png'),
    text: "Studio X",
  },
]

const cards = [
  {
    title: "Senior Product Designer at Careem",
    image: require('../assets/background8.jpg'),
    subtitle: "React Native",
    caption: "1 of 12 sections",
    logo: require('../assets/logo-react.png'),

  },
  {
    title: "Senior Product Designer at Dubizzle",
    image: require('../assets/background6.jpg'),
    subtitle: "React Native",
    caption: "1 of 12 sections",
    logo: require('../assets/logo-react.png'),

  },
  {
    title: "Senior Product Designer at Bank of Dubai",
    image: require('../assets/background7.jpg'),
    subtitle: "React Native",
    caption: "1 of 12 sections",
    logo: require('../assets/logo-react.png'),

  },
]

const courses = [
  {
    title: "Prototype in Invision Studio",
    subtitle: "10 Sections",
    image: require('../assets/background13.jpg'),
    logo: require('../assets/logo-studio.png'),
    author: "Adam Morgan",
    avatar: require('../assets/avatar.jpg'),
    caption: "Hello and welcome to the show",

  },
  {
    title: "Prototype in Invision Studio",
    subtitle: "10 Sections",
    image: require('../assets/background1.jpg'),
    logo: require('../assets/logo-studio.png'),
    author: "Adam Morgan",
    avatar: require('../assets/avatar.jpg'),
    caption: "Hello and welcome to the show - this is three lines sdasd",

  },
  {
    title: "Prototype in Framer X",
    subtitle: "10 Sections",
    image: require('../assets/background9.jpg'),
    logo: require('../assets/logo-framerx.png'),
    author: "Adam Morgan",
    avatar: require('../assets/avatar.jpg'),
    caption: "Hello and welcome to the show",

  },
]
