import React from 'react';
import styled from 'styled-components';

const UsageSection = styled.section`
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const Box = styled.div<{ borderColor: string }>`
  border: none;
  padding: 35px;
  border-radius: 16px;
  background: ${props => props.borderColor === '#FA9937' ? 
    'linear-gradient(135deg, rgba(250, 153, 55, 0.1) 0%, rgba(255, 126, 31, 0.1) 100%)' : 
    'linear-gradient(135deg, rgba(231, 76, 60, 0.1) 0%, rgba(192, 57, 43, 0.1) 100%)'
  };
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: ${props => props.borderColor};
    border-radius: 4px;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px ${props => 
      props.borderColor === '#FA9937' ? 
      'rgba(250, 153, 55, 0.15)' : 
      'rgba(231, 76, 60, 0.15)'
    };
  }
`;

const BoxTitle = styled.h3<{ color: string }>`
  color: ${props => props.color};
  margin-bottom: 25px;
  font-size: 1.8em;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;

  &:before {
    content: ${props => props.color === '#FA9937' ? '"👍"' : '"⚠️"'};
    font-size: 1.2em;
  }
`;

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li<{ icon: string }>`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  padding: 15px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 12px;
  transition: all 0.3s ease;

  &:before {
    content: ${props => props.icon};
    margin-right: 15px;
    font-size: 1.4em;
    min-width: 24px;
  }

  &:hover {
    transform: translateX(10px);
    background: rgba(255, 255, 255, 0.9);
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const Usage = () => {
  return (
    <UsageSection id="usage">
      <Title>6. Utilisations correctes et incorrectes</Title>
      <Grid>
        <Box borderColor="#FA9937">
          <BoxTitle color="#FA9937">À faire</BoxTitle>
          <List>
            <ListItem icon="'✅'">Utiliser les couleurs officielles</ListItem>
            <ListItem icon="'✅'">Respecter les proportions du logo</ListItem>
            <ListItem icon="'✅'">Maintenir un espace de protection autour du logo</ListItem>
            <ListItem icon="'✅'">Utiliser sur des fonds qui assurent un bon contraste</ListItem>
          </List>
        </Box>
        <Box borderColor="#E74C3C">
          <BoxTitle color="#E74C3C">À ne pas faire</BoxTitle>
          <List>
            <ListItem icon="'❌'">Déformer ou étirer le logo</ListItem>
            <ListItem icon="'❌'">Modifier les couleurs du logo</ListItem>
            <ListItem icon="'❌'">Ajouter des effets (ombres, contours, etc.)</ListItem>
            <ListItem icon="'❌'">Utiliser sur des fonds complexes qui nuisent à la lisibilité</ListItem>
          </List>
        </Box>
      </Grid>
    </UsageSection>
  );
};

export default Usage;

