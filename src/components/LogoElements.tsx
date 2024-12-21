import React from 'react';
import styled from 'styled-components';

const ElementsSection = styled.section`
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

const ElementContainer = styled.div`
  background: rgba(250, 153, 55, 0.03);
  border-radius: 16px;
  padding: 25px;
  margin-bottom: 25px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(10px);
    background: rgba(250, 153, 55, 0.06);
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 20px;
    margin-bottom: 20px;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 15px;
    margin-bottom: 15px;
    border-radius: 12px;

    &:hover {
      transform: translateX(5px);
    }
  }
`;

const Subtitle = styled.h3`
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 20px;
  font-size: 1.4em;
  display: flex;
  align-items: center;
  gap: 10px;

  &:before {
    content: ${props => props.children?.toString().includes('2.1') ? '"🔍"' : '"💡"'};
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 1.3em;
    margin-bottom: 15px;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1.2em;
    margin-bottom: 12px;
    gap: 8px;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 15px;
  padding: 15px 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.02);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.1em;

  &:before {
    content: '•';
    color: ${props => props.theme.colors.primary};
    font-size: 1.5em;
    flex-shrink: 0;
  }

  &:hover {
    transform: translateX(10px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 12px 16px;
    margin-bottom: 12px;
    font-size: 1.05em;
    gap: 10px;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 10px 14px;
    margin-bottom: 10px;
    font-size: 1em;
    gap: 8px;
    border-radius: 8px;

    &:hover {
      transform: translateX(5px);
    }

    &:before {
      font-size: 1.3em;
    }
  }
`;

const LogoElements = () => (
  <ElementsSection id="elements">
    <Title>2. Éléments constitutifs du logo</Title>
    
    <ElementContainer>
      <Subtitle>2.1 Composition</Subtitle>
      <List>
        <ListItem>Texte principal : "SECURIS" en lettres capitales et en gras</ListItem>
        <ListItem>Baseline : "SERVICES" en lettres capitales et en regular</ListItem>
        <ListItem>Couleurs : Orange (primaire), gris foncé, gris clair, blanc</ListItem>
      </List>
    </ElementContainer>
    
    <ElementContainer>
      <Subtitle>2.2 Symbolique</Subtitle>
      <List>
        <ListItem>La typographie en gras pour "SECURIS" : Représente la force, la stabilité et la fiabilité de nos services</ListItem>
        <ListItem>La typographie regular pour "SERVICES" : Souligne la diversité et l'adaptabilité de nos offres</ListItem>
        <ListItem>L'orange : Évoque la vigilance, l'énergie et l'action, essentielles dans le domaine de la sécurité</ListItem>
        <ListItem>Les tons de gris : Symbolisent le professionnalisme, la neutralité et la sophistication</ListItem>
        <ListItem>La simplicité du design : Reflète notre approche directe et efficace des services de sécurité</ListItem>
      </List>
    </ElementContainer>
  </ElementsSection>
);

export default LogoElements;

