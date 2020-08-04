import styled from 'styled-components';

export const Teacher = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--color-primary);

  > img {
    height: 1.6rem;
  }
`;

export const TopBar = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-text-in-primary);
  padding: 1.6rem 0;

  > img {
    height: 1.6rem;
  }
`;

export const Title = styled.div``;
