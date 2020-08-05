import React from 'react';

import { TeacherItemComponent } from './styles';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

const TeacherItem: React.FC = () => {
  return (
    <TeacherItemComponent>
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/37560590?s=460&u=cd98db7f6a0c78349b7b8ce1f29ce1fc573e0db2&v=4"
          alt="Lucas"
        />
        <div>
          <strong>Lucas</strong>
          <span>Investimentos</span>
        </div>
      </header>

      <p>
        Entusiasta dos melhores investimentos.
        <br />
        <br />
        Apaixonado por renda variável e por mudar a vida das pessoas através dos
        investimentos.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </TeacherItemComponent>
  );
};

export default TeacherItem;
