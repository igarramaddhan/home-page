import React from 'react';
import styled from 'styled-components';
import Helm from '../components/Helm';

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
    <Helm title="Igar's Page" description="What?" />
    <ContentContainer>nyari apa?</ContentContainer>
  </Container>
);

export default Index;
