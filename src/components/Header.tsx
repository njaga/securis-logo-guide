import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { 
    opacity: 0;
    transform: translateY(-20px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
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
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
    pointer-events: none;
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 70px 20px;
    margin-bottom: 30px;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 50px 15px;
    margin-bottom: 25px;
    border-radius: 15px;
  }
`;

const Title = styled.h1`
  font-size: 3.5em;
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 700;
  position: relative;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 2.8em;
    letter-spacing: 1.5px;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 2em;
    letter-spacing: 1px;
    margin-bottom: 10px;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2em;
  opacity: 0.8;
  font-weight: 500;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 1;
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 1.1em;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1em;
  }
`;

const Header = () => (
  <HeaderWrapper>
    <Title>Guide Technique du Logo SECURIS</Title>
    <Subtitle>Version 2.0 - 2024</Subtitle>
  </HeaderWrapper>
);

export default Header;

