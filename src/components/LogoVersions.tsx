import React from 'react';
import styled from 'styled-components';
import { Section, Title, Grid } from './shared/styles';

const LogoGrid = styled(Grid)`
  max-width: 1200px;
  margin: 20px auto;
`;

const LogoBox = styled.div<{ $bgColor: string }>`
  background: ${props => props.$bgColor};
  padding: 40px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 30px;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

const LogoImage = styled.img`
  width: 100%;
  max-width: 280px;
  height: auto;
  margin-bottom: 25px;
  transition: all 0.4s ease;
  filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.1));

  &:hover {
    transform: scale(1.05) rotate(1deg);
  }
`;

const Caption = styled.p`
  font-size: 1.2em;
  text-align: center;
  color: ${props => props.theme.colors.white};
  font-weight: 500;
  padding: 12px 20px;
  border-radius: 30px;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
`;

const LogoVersions = () => (
  <Section id="versions">
    <Title>5. Versions du logo</Title>
    <LogoGrid>
      <LogoBox $bgColor="#FA9937">
        <LogoImage 
          src="/assets/Logo fond orange.png" 
          alt="Logo SECURIS sur fond orange" 
        />
        <Caption>Version principale sur fond orange</Caption>
      </LogoBox>
      <LogoBox $bgColor="#4F4F4F">
        <LogoImage 
          src="/assets/Logo fond gris.png" 
          alt="Logo SECURIS sur fond gris" 
        />
        <Caption>Version sur fond gris foncé</Caption>
      </LogoBox>
      <LogoBox $bgColor="#FFFFFF">
        <LogoImage 
          src="/assets/Logo fond blanc.png" 
          alt="Logo SECURIS sur fond blanc" 
        />
        <Caption style={{ color: '#4F4F4F' }}>Version sur fond blanc</Caption>
      </LogoBox>
    </LogoGrid>
  </Section>
);

export default LogoVersions;

