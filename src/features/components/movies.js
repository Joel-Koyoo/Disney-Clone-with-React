import React, { Component } from "react";
import styled from "styled-components";

const Movies = () => {
  return (
    <Container>
      <h4> Recommended for you</h4>
      <Content>
        <Wrap>
          <img src="https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW92aWUlMjBwb3N0ZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60" />
        </Wrap>
        <Wrap>
          <img src="https://images.unsplash.com/photo-1590179068383-b9c69aacebd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bW92aWUlMjBwb3N0ZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60" />
        </Wrap>
        <Wrap>
          <img src="https://images.unsplash.com/photo-1619164816991-22d393238d8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bW92aWUlMjBwb3N0ZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60" />
        </Wrap>
        <Wrap>
          <img src="https://images.unsplash.com/photo-1613679074971-91fc27180061?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vdmllJTIwcG9zdGVyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60" />
        </Wrap>
        <Wrap>
          <img src="https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW92aWUlMjBwb3N0ZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60" />
        </Wrap>
      </Content>
    </Container>
  );
};

export default Movies;

const Container = styled.div``;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 25px;
`;

const Wrap = styled.div`
  cursor:pointer;
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 40px 58px -16px,
    rgb(0 0 0 / 73%) 0px 30px 22px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;


  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    tranform: sale(1.05);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    border-color: rgba(249, 249, 249, 0.5);
  }
`;
