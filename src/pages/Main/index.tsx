import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import Blob from '../../assets/Blob.png';
import Button from '../../components/Button';

import { Container, Central } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <NavBar />
      <Central>
        <div>
          <h1>Bem vindo</h1>
          <p>
            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
            cillum dolor. Voluptate exercitation incididunt aliquip deserunt
            reprehenderit elit laborum.{' '}
          </p>
          <Button>
            <Link to="login">Jogar</Link>
          </Button>
          {/* <button type="button">Jogar</button> */}
        </div>
        <img src={Blob} alt="" />
      </Central>
      {/* <img src={Wave} alt="" /> */}
    </Container>
  );
};

export default Main;
