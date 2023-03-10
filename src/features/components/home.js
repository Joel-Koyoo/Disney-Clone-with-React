import React, { Component } from "react";
import styled from "styled-components";
import ImageSlider from "./imageslider";
import Viewers from "./viewers";
import Movies from "./movies";

const Home = () => {
  return (
    <Container>
      <ImageSlider />

     
      <Viewers />
      <Movies />
    </Container>
  );
};

export default Home;

const Container = styled.main`
  min-height: 100vh;
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x:hidden;

  &:before {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
