import React from 'react';
import styled from 'styled-components';

const VersionsSection = styled.section`
  margin-bottom: 60px;
  background: ${props => props.theme.colors.white};
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Title = styled.h2`
  color: ${props => props.theme.colors.primary};
  border-bottom: 2px solid ${props => props.theme.colors.primary};
  padding-bottom: 15px;
  margin-bottom: 30px;
  font-size: 2.2em;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, ${props => props.theme.colors.primary}, #FF7E1F);
    border-radius: 2px;
  }
`;

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 40px;
  margin: 20px auto;
  max-width: 1200px;
`;

const LogoBox = styled.div<{ bgColor: string }>`
  background: ${props => props.bgColor};
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
  <VersionsSection id="versions">
    <Title>5. Versions du logo</Title>
    <LogoGrid>
      <LogoBox bgColor="#FA9937">
        <LogoImage 
          src="/assets/Logo fond orange.png" 
          alt="Logo SECURIS sur fond orange" 
        />
        <Caption>Version principale sur fond orange</Caption>
      </LogoBox>
      <LogoBox bgColor="#4F4F4F">
        <LogoImage 
          src="/assets/Logo fond gris.png" 
          alt="Logo SECURIS sur fond gris" 
        />
        <Caption>Version sur fond gris foncé</Caption>
      </LogoBox>
      <LogoBox bgColor="#FFFFFF">
        <LogoImage 
          src="/assets/Logo fond blanc.png" 
          alt="Logo SECURIS sur fond blanc" 
        />
        <Caption style={{ color: '#4F4F4F' }}>Version sur fond blanc</Caption>
      </LogoBox>
    </LogoGrid>
  </VersionsSection>
);

export default LogoVersions;

