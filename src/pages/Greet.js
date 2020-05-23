// @flow
import React from 'react';
import styled from 'styled-components';
import {useParams} from 'react-router-dom';

const Container = styled.div`
  flex: 1;
  color: white;
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  display: flex;
  height: 100vh;
  max-width: 850px;
  margin: auto;
  font-size: 22px;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    padding: 0 24px;
    font-size: 20px;
  }
`;

const Greet = () => {
  const {name} = useParams<{name: string}>();
  return (
    <Container>
      <ContentContainer>
        <p>{`Assalamu'alaikum, ${atob(name)}`}</p>
        <p>Semoga kamu sehat selalu dan selalu dalam lindungan-Nya.</p>
        <p>
          Mohon maaf lahir dan batin ya kalo aku ada salah selama ini. <br />
          Maaf belum bisa ngasih apa-apa dulu ya hehe 😁. <br />
          Maaf juga kalo sering ngerepotin 🙏
        </p>
        <p>Selamat Hari Raya Idul Fitri 1441 H</p>
        <p>{`Wassalamu'alaikum Wr. Wb.`}</p>
        <p>Salam, Igar</p>
      </ContentContainer>
    </Container>
  );
};

export default Greet;
