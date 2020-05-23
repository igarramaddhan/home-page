import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  color: white;
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  display: flex;
  padding: 0 24px;
  height: 100vh;
  font-size: 22px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Index = () => (
  <Container>
    <ContentContainer>nyari apa?</ContentContainer>
  </Container>
);

export default Index;
