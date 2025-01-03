import React, { ReactNode } from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
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

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 1.05em;
    padding: 12px 16px;
    line-height: 1.7;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1em;
    padding: 10px 14px;
    line-height: 1.6;
    margin-bottom: 15px;

    &:hover {
      transform: translateX(5px);
    }
  }
`;

const ContactInfo = styled.div`
  background: linear-gradient(135deg, rgba(250, 153, 55, 0.1) 0%, rgba(255, 126, 31, 0.1) 100%);
  padding: 30px;
  border-radius: 16px;
  margin: 30px 0;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(250, 153, 55, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(250, 153, 55, 0.15);
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 25px;
    margin: 25px 0;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 20px;
    margin: 20px 0;
    border-radius: 12px;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 20px rgba(250, 153, 55, 0.12);
    }
  }
`;

const StyledLink = styled.a`
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  transition: color 0.3s ease;
  word-break: break-all;

  &:hover {
    color: #FF7E1F;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 0.95em;
  }
`;

interface ContactItemProps {
  children: ReactNode;
  type: 'email' | 'phone';
}

const ContactItem = styled.p<ContactItemProps>`
  margin-bottom: 15px;
  padding: 12px 20px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
  font-size: 1.1em;
  word-break: break-word;
  flex-wrap: wrap;

  &:before {
    content: ${props => props.type === 'email' ? '"📧"' : '"📞"'};
    flex-shrink: 0;
  }

  &:hover {
    transform: translateX(10px);
    background: white;
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 10px 16px;
    font-size: 1.05em;
    gap: 8px;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 8px 14px;
    font-size: 0.95em;
    border-radius: 8px;
    margin-bottom: 12px;
    gap: 6px;

    &:hover {
      transform: translateX(5px);
    }
  }
`;

const Contact = () => (
  <ContactSection id="contact">
    <Title>9. Contacts et support</Title>
    <Paragraph>
      Pour toute question ou demande d'assistance concernant l'utilisation du logo SECURIS, 
      veuillez contacter notre équipe de communication :
    </Paragraph>
    <ContactInfo>
      <ContactItem type="email">
        Email : <StyledLink href="mailto:contact@securis-services.com">contact@securis-services.com</StyledLink>
      </ContactItem>
      <ContactItem type="phone">
        Téléphone : +221 78 688 80 19
      </ContactItem>
    </ContactInfo>
    <Paragraph>
      Notre équipe se fera un plaisir de vous aider pour toute question relative à l'utilisation 
      de notre identité visuelle ou pour obtenir des fichiers supplémentaires si nécessaire.
    </Paragraph>
  </ContactSection>
);

export default Contact;

