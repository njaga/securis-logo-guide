import React from 'react';
import styled from 'styled-components';

const TOCWrapper = styled.nav`
  background: ${props => props.theme.colors.white};
  padding: 40px;
  border-radius: 20px;
  margin-bottom: 60px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Title = styled.h2`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 30px;
  font-size: 2.2em;
  position: relative;
  padding-bottom: 15px;
  border-bottom: 2px solid ${props => props.theme.colors.primary};

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

const TOCList = styled.ul`
  list-style-type: none;
  columns: 2;
  column-gap: 40px;
  margin-top: 20px;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    columns: 1;
  }
`;

const TOCItem = styled.li`
  margin-bottom: 15px;
  break-inside: avoid;
`;

const TOCLink = styled.a`
  color: ${props => props.theme.colors.secondary};
  text-decoration: none;
  transition: all 0.3s ease;
  display: block;
  padding: 12px 20px;
  border-radius: 10px;
  background: rgba(250, 153, 55, 0.03);
  font-size: 1.1em;

  &:hover {
    color: ${props => props.theme.colors.primary};
    background: rgba(250, 153, 55, 0.08);
    transform: translateX(10px);
  }
`;

const TableOfContents = () => (
  <TOCWrapper>
    <Title>Table des matières</Title>
    <TOCList>
      <TOCItem><TOCLink href="#introduction">1. Introduction</TOCLink></TOCItem>
      <TOCItem><TOCLink href="#elements">2. Éléments constitutifs du logo</TOCLink></TOCItem>
      <TOCItem><TOCLink href="#colors">3. Palette de couleurs</TOCLink></TOCItem>
      <TOCItem><TOCLink href="#typography">4. Typographie</TOCLink></TOCItem>
      <TOCItem><TOCLink href="#versions">5. Versions du logo</TOCLink></TOCItem>
      <TOCItem><TOCLink href="#usage">6. Utilisations correctes et incorrectes</TOCLink></TOCItem>
      <TOCItem><TOCLink href="#applications">7. Applications</TOCLink></TOCItem>
      <TOCItem><TOCLink href="#files">8. Fichiers disponibles et formats</TOCLink></TOCItem>
      <TOCItem><TOCLink href="#contact">9. Contacts et support</TOCLink></TOCItem>
    </TOCList>
  </TOCWrapper>
);

export default TableOfContents;

