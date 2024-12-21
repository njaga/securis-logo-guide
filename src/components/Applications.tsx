import React from 'react';
import styled from 'styled-components';

const ApplicationsSection = styled.section`
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

const CategoryContainer = styled.div`
  background: rgba(250, 153, 55, 0.03);
  border-radius: 16px;
  padding: 25px;
  margin-bottom: 25px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(10px);
    background: rgba(250, 153, 55, 0.06);
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
    content: '📌';
  }
`;

const List = styled.ul`
  list-style-type: none;
  margin: 0;
`;

const ListItem = styled.li`
  margin-bottom: 15px;
  padding: 12px 20px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;

  &:before {
    content: '•';
    color: ${props => props.theme.colors.primary};
    font-size: 1.5em;
    margin-right: 10px;
  }

  &:hover {
    background: white;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    transform: translateX(5px);
  }
`;

const Applications = () => (
  <ApplicationsSection id="applications">
    <Title>7. Applications</Title>
    
    <CategoryContainer>
      <Subtitle>7.1 Papeterie</Subtitle>
      <List>
        <ListItem>En-têtes de lettre : Placer le logo en haut à gauche</ListItem>
        <ListItem>Cartes de visite : Centrer le logo sur le recto</ListItem>
        <ListItem>Enveloppes : Placer le logo en haut à gauche</ListItem>
        <ListItem>Factures et devis : Intégrer le logo dans l'en-tête du document</ListItem>
      </List>
    </CategoryContainer>
    
    <CategoryContainer>
      <Subtitle>7.2 Supports marketing</Subtitle>
      <List>
        <ListItem>Brochures : Utiliser le logo sur la couverture et en pied de page</ListItem>
        <ListItem>Affiches : Placer le logo de manière visible, généralement en bas</ListItem>
        <ListItem>Stands d'exposition : Intégrer le logo de manière proéminente dans le design</ListItem>
      </List>
    </CategoryContainer>
    
    <CategoryContainer>
      <Subtitle>7.3 Digital</Subtitle>
      <List>
        <ListItem>Site web : Utiliser le logo dans l'en-tête et le pied de page</ListItem>
        <ListItem>Réseaux sociaux : Adapter le logo aux formats requis pour les profils</ListItem>
        <ListItem>Signatures email : Intégrer une version réduite du logo</ListItem>
        <ListItem>Présentations : Placer le logo sur la première et la dernière diapositive</ListItem>
      </List>
    </CategoryContainer>
    
    <CategoryContainer>
      <Subtitle>7.4 Véhicules et uniformes</Subtitle>
      <List>
        <ListItem>Véhicules de service : Appliquer le logo sur les portes et à l'arrière</ListItem>
        <ListItem>Uniformes : Broder ou imprimer le logo sur la poitrine ou la manche</ListItem>
      </List>
    </CategoryContainer>
  </ApplicationsSection>
);

export default Applications;

