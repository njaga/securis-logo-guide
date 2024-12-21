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

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    gap: 15px;
  }
`;

const Box = styled.div<{ $borderColor: string }>`
  border: none;
  padding: 35px;
  border-radius: 16px;
  background: ${props => props.$borderColor === '#FA9937' ? 
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
    background: ${props => props.$borderColor};
    border-radius: 4px;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px ${props => 
      props.$borderColor === '#FA9937' ? 
      'rgba(250, 153, 55, 0.15)' : 
      'rgba(231, 76, 60, 0.15)'
    };
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 25px;
    border-radius: 14px;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 20px;
    border-radius: 12px;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 20px ${props => 
        props.$borderColor === '#FA9937' ? 
        'rgba(250, 153, 55, 0.12)' : 
        'rgba(231, 76, 60, 0.12)'
      };
    }
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

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 1.6em;
    margin-bottom: 20px;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1.4em;
    margin-bottom: 15px;
    gap: 8px;
  }
`;

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li<{ $icon: string }>`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  padding: 15px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 12px;
  transition: all 0.3s ease;
  font-size: 1.1em;

  &:before {
    content: ${props => props.$icon};
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

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 12px;
    margin-bottom: 15px;
    font-size: 1.05em;

    &:before {
      font-size: 1.3em;
      margin-right: 12px;
      min-width: 20px;
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 10px;
    margin-bottom: 12px;
    font-size: 1em;
    border-radius: 8px;

    &:before {
      font-size: 1.2em;
      margin-right: 10px;
      min-width: 18px;
    }

    &:hover {
      transform: translateX(5px);
    }
  }
`;

const Usage = () => {
  return (
    <UsageSection id="usage">
      <Title>6. Utilisations correctes et incorrectes</Title>
      <Grid>
        <Box $borderColor="#FA9937">
          <BoxTitle color="#FA9937">À faire</BoxTitle>
          <List>
            <ListItem $icon="'✅'">Utiliser les couleurs officielles</ListItem>
            <ListItem $icon="'✅'">Respecter les proportions du logo</ListItem>
            <ListItem $icon="'✅'">Maintenir un espace de protection autour du logo</ListItem>
            <ListItem $icon="'✅'">Utiliser sur des fonds qui assurent un bon contraste</ListItem>
          </List>
        </Box>
        <Box $borderColor="#E74C3C">
          <BoxTitle color="#E74C3C">À ne pas faire</BoxTitle>
          <List>
            <ListItem $icon="'❌'">Déformer ou étirer le logo</ListItem>
            <ListItem $icon="'❌'">Modifier les couleurs du logo</ListItem>
            <ListItem $icon="'❌'">Ajouter des effets (ombres, contours, etc.)</ListItem>
            <ListItem $icon="'❌'">Utiliser sur des fonds complexes qui nuisent à la lisibilité</ListItem>
          </List>
        </Box>
      </Grid>
    </UsageSection>
  );
};

export default Usage;

