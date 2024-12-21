import React from 'react';
import styled from 'styled-components';

const TypographySection = styled.section`
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

const FontContainer = styled.div`
  background: ${props => props.theme.colors.background};
  border-radius: 16px;
  padding: 30px;
  margin: 20px 0;
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 20px rgba(250, 153, 55, 0.1);
    transform: translateX(10px);
  }
`;

const FontExample = styled.div<{ weight: string }>`
  font-family: 'Constantia', serif;
  font-size: 3em;
  font-weight: ${props => props.weight};
  margin-bottom: 20px;
  color: ${props => props.theme.colors.secondary};
  letter-spacing: 1px;
  
  ${props => props.weight === 'bold' && `
    background: linear-gradient(135deg, ${props.theme.colors.primary} 0%, #FF7E1F 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `}
`;

const Paragraph = styled.p`
  margin-bottom: 20px;
  line-height: 1.6;
  color: ${props => props.theme.colors.tertiary};
  font-size: 1.1em;
`;

const Label = styled.span`
  display: inline-block;
  background: ${props => props.theme.colors.primary}15;
  color: ${props => props.theme.colors.primary};
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.9em;
  margin-bottom: 15px;
  font-weight: 500;
`;

const Typography = () => (
  <TypographySection id="typography">
    <Title>4. Typographie</Title>
    <Paragraph>La police utilisée pour le logo SECURIS est Constantia, avec deux variantes :</Paragraph>
    
    <FontContainer>
      <Label>Police Principale - Bold</Label>
      <FontExample weight="bold">SECURIS</FontExample>
      <Paragraph>Constantia Bold est utilisée pour "SECURIS" dans le logo, représentant la force et la stabilité de notre marque.</Paragraph>
    </FontContainer>

    <FontContainer>
      <Label>Police Principale - Regular</Label>
      <FontExample weight="normal">SERVICES</FontExample>
      <Paragraph>Constantia Regular est utilisée pour "SERVICES", soulignant la diversité et l'adaptabilité de nos offres.</Paragraph>
    </FontContainer>

    <FontContainer>
      <Label>Police Secondaire</Label>
      <FontExample weight="normal" style={{ fontFamily: 'Roboto, sans-serif' }}>Roboto</FontExample>
      <Paragraph>Pour les communications générales et les documents, nous recommandons l'utilisation de la police Roboto comme police secondaire.</Paragraph>
    </FontContainer>
  </TypographySection>
);

export default Typography;

