import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const HeaderWrapper = styled.header`
  background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, #FF7E1F 100%);
  color: ${props => props.theme.colors.white};
  text-align: center;
  padding: 100px 20px;
  margin-bottom: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(250, 153, 55, 0.2);
  animation: ${fadeIn} 1.2s ease-out;
`;

const Title = styled.h1`
  font-size: 3.5em;
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 700;
`;

const Subtitle = styled.p`
  font-size: 1.2em;
  opacity: 0.8;
`;

const HeaderLogo = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 30px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
  }
`;

const Header = () => (
  <HeaderWrapper>
    <Title>Guide Technique du Logo SECURIS</Title>
    <Subtitle>Version 2.0 - 2024</Subtitle>
  </HeaderWrapper>
);

export default Header;

