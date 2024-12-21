import React from 'react';
import styled from 'styled-components';

const FormatsSection = styled.section`
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
  margin-bottom: 30px;
  line-height: 1.6;
  color: ${props => props.theme.colors.tertiary};
  font-size: 1.1em;
  padding: 20px;
  background: rgba(250, 153, 55, 0.03);
  border-radius: 12px;
`;

const DownloadGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 25px;
  padding: 20px 0;
`;

const DownloadButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, #FF7E1F 100%);
  color: ${props => props.theme.colors.white};
  padding: 20px 30px;
  border-radius: 16px;
  text-decoration: none;
  text-align: center;
  transition: all 0.3s ease;
  font-weight: 500;
  font-size: 1.1em;
  box-shadow: 0 4px 15px rgba(250, 153, 55, 0.2);
  position: relative;
  overflow: hidden;

  &:before {
    content: '⬇️';
    margin-right: 10px;
    font-size: 1.2em;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: 0.5s;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(250, 153, 55, 0.3);
    background: linear-gradient(135deg, #FF7E1F 0%, ${props => props.theme.colors.primary} 100%);

    &:after {
      left: 100%;
    }
  }
`;

const FileFormats = () => (
  <FormatsSection id="files">
    <Title>8. Fichiers disponibles et formats</Title>
    <Paragraph>
      Pour garantir une utilisation optimale du logo SECURIS dans tous les contextes, 
      nous mettons à disposition plusieurs formats de fichiers. Choisissez le format 
      approprié en fonction de votre utilisation.
    </Paragraph>
    <DownloadGrid>
      <DownloadButton href="/path-to-png-file.png" download>PNG (pour le web)</DownloadButton>
      <DownloadButton href="/path-to-svg-file.svg" download>SVG (vectoriel)</DownloadButton>
      <DownloadButton href="/path-to-ai-file.ai" download>AI (Adobe Illustrator)</DownloadButton>
      <DownloadButton href="/path-to-eps-file.eps" download>EPS (vectoriel)</DownloadButton>
    </DownloadGrid>
  </FormatsSection>
);

export default FileFormats;

