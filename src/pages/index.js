import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  color: white;

  h2.welcome {
    font-size: 32pt;
  }

  p.instruction {
    color: white;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  padding: 24px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #232933;
  min-height: calc(100vh * 40 / 100);
`;

const Index = () => (
  <Container>
    <ContentContainer>
      <h2 className="welcome">Welcome to Your kumkum App Starter</h2>
      <p className="instruction">You can modify anything here as you wish</p>
      <Link to="/generate">GO</Link>
    </ContentContainer>
  </Container>
);

export default Index;
