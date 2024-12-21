import React from 'react';
import styled from 'styled-components';

const ColorSection = styled.section`
  margin-bottom: 60px;
  background: ${props => props.theme.colors.white};
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 30px;
    margin-bottom: 40px;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 20px;
    margin-bottom: 30px;
    
    &:hover {
      transform: translateY(-3px);
    }
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

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 2em;
    margin-bottom: 25px;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1.8em;
    margin-bottom: 20px;
    padding-bottom: 12px;
  }
`;

const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 30px;
  padding: 20px 0;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    padding: 15px 0;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 15px;
    padding: 10px 0;
  }
`;

const ColorBox = styled.div<{ $bgColor: string; $textColor: string }>`
  background: ${props => props.$bgColor};
  color: ${props => props.$textColor};
  padding: 35px;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
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
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 25px;
    border-radius: 15px;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 20px;
    border-radius: 12px;

    &:hover {
      transform: translateY(-5px) scale(1.01);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
    }
  }
`;

const ColorName = styled.h3`
  margin-bottom: 15px;
  font-size: 1.4em;
  font-weight: 600;
  position: relative;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 1.3em;
    margin-bottom: 12px;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1.2em;
    margin-bottom: 10px;
  }
`;

const ColorInfo = styled.p`
  margin: 8px 0;
  font-family: ${props => props.theme.fonts.secondary};
  font-size: 1.1em;
  opacity: 0.9;
  backdrop-filter: blur(5px);
  padding: 8px 12px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
    transform: translateX(5px);
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 1.05em;
    padding: 6px 10px;
    margin: 6px 0;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1em;
    padding: 5px 8px;
    margin: 5px 0;
    border-radius: 6px;

    &:hover {
      transform: translateX(3px);
    }
  }
`;

const ColorPalette = () => (
  <ColorSection id="colors">
    <Title>3. Palette de couleurs</Title>
    <ColorGrid>
      <ColorBox $bgColor="#FA9937" $textColor="white">
        <ColorName>Orange SECURIS</ColorName>
        <ColorInfo>#FA9937</ColorInfo>
        <ColorInfo>RGB: 250, 153, 55</ColorInfo>
        <ColorInfo>CMYK: 0, 45, 85, 0</ColorInfo>
      </ColorBox>
      <ColorBox $bgColor="#4F4F4F" $textColor="white">
        <ColorName>Gris foncé SECURIS</ColorName>
        <ColorInfo>#4F4F4F</ColorInfo>
        <ColorInfo>RGB: 79, 79, 79</ColorInfo>
        <ColorInfo>CMYK: 0, 0, 0, 80</ColorInfo>
      </ColorBox>
      <ColorBox $bgColor="#6B6D74" $textColor="white">
        <ColorName>Gris clair SECURIS</ColorName>
        <ColorInfo>#6B6D74</ColorInfo>
        <ColorInfo>RGB: 107, 109, 116</ColorInfo>
        <ColorInfo>CMYK: 8, 5, 0, 55</ColorInfo>
      </ColorBox>
      <ColorBox $bgColor="#FFFFFF" $textColor="black">
        <ColorName>Blanc</ColorName>
        <ColorInfo>#FFFFFF</ColorInfo>
        <ColorInfo>RGB: 255, 255, 255</ColorInfo>
        <ColorInfo>CMYK: 0, 0, 0, 0</ColorInfo>
      </ColorBox>
    </ColorGrid>
  </ColorSection>
);

export default ColorPalette;

