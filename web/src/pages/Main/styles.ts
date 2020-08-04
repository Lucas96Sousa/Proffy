import styled from 'styled-components';

export const PageLanding = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: color, background 1s ease 0s, transform 1s ease 0s;
  color: var(--color-text-in-primary);
  background: var(--color-primary);
`;

export const PageLandingContent = styled.div`
  width: 90vw;
  max-width: 700px;
  @media (min-width: 1100px) {
    max-width: 1100px;
    display: grid;
    grid-template-rows: 350px 1fr;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas:
      'logo hero hero'
      'buttons buttons total';
  }
`;

export const LogoContainer = styled.div`
  img {
    height: 10rem;
  }
  text-align: center;
  margin-bottom: 3.2rem;
  h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;
  }
  @media (min-width: 1100px) {
    grid-area: logo;
    align-self: center;
    text-align: left;
    margin: 0;
    h2 {
      text-align: initial;
      font-size: 3.6rem;
    }
    img {
      height: 100%;
    }
  }
`;

export const HeroImage = styled.img`
  width: 100%;
  @media (min-width: 1100px) {
    grid-area: hero;
    justify-self: end;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;
  a {
    width: 30rem;
    height: 10.4rem;
    border-radius: 0.8rem;
    font: 700 2rem Archivo;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: var(--color-button-text);
    transition: background-color 0.2s;
    img {
      width: 4rem;
    }
    &:first-child {
      margin-right: 1.6rem;
    }
    transition: all 0.2s ease 0s, transform 0.2s ease 0s;
    &:hover {
      transform: translate3d(21px, -31px, -67.5px);
    }
  }
  .study {
    background: var(--color-primary-lighter);
  }
  .give-classes {
    background: var(--color-secundary);
  }
  .study:hover {
    background: var(--color-primary-light);
  }
  .give-classes:hover {
    background: var(--color-secondary-dark);
  }
  @media (min-width: 1100px) {
    grid-area: buttons;
    justify-content: flex-start;
    a {
      font-size: 2.4rem;
    }
  }
`;

export const TotalConnections = styled.span`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    margin-left: 0.8rem;
  }
  @media (min-width: 1100px) {
    grid-area: total;
    justify-self: end;
    a {
      img {
        margin-right: 2.4rem;
      }
    }
  }
`;
