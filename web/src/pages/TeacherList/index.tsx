import React from 'react';

import { Link } from 'react-router-dom';

import { Teacher, Header, Title, TopBar } from './styles';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

const TeacherList: React.FC = () => {
  return (
    <Teacher>
      <Header>
        <TopBar>
          <Link to="/">
            <img src={backIcon} alt="voltar" />
            <img src={logoImg} alt="proffy" />
          </Link>
        </TopBar>
      </Header>

      <Title>
        <strong>Estes são os proffy disponíveis</strong>
      </Title>
    </Teacher>
  );
};

export default TeacherList;
