import React from 'react';
import styled from 'styled-components';

const IntroSection = styled.section`
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

const Paragraph = styled.p`
  margin-bottom: 20px;
  line-height: 1.8;
  font-size: 1.1em;
  color: ${props => props.theme.colors.tertiary};
  padding: 15px 20px;
  background: rgba(250, 153, 55, 0.03);
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(250, 153, 55, 0.06);
    transform: translateX(10px);
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const Introduction = () => (
  <IntroSection id="introduction">
    <Title>1. Introduction</Title>
    <Paragraph>
      Le logo SECURIS incarne l'identité visuelle d'une entreprise de sécurité professionnelle de premier plan. Il représente notre engagement envers l'excellence, la fiabilité et l'innovation dans le domaine de la sécurité et des services.
    </Paragraph>
    <Paragraph>
      Ce guide technique fournit les directives essentielles pour l'utilisation correcte et cohérente du logo SECURIS dans toutes les communications internes et externes, garantissant ainsi l'intégrité de notre marque.
    </Paragraph>
  </IntroSection>
);

export default Introduction;

