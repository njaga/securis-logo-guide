import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  text-align: center;
  padding: 30px;
  background: linear-gradient(135deg, ${props => props.theme.colors.secondary} 0%, #3D3D3D 100%);
  color: ${props => props.theme.colors.white};
  border-radius: 20px;
  margin-top: 60px;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%);
  }
`;

const DesignCredit = styled.p`
  margin-bottom: 15px;
  font-size: 1.1em;
  opacity: 0.9;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

const Link = styled.a`
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 5px 10px;
  border-radius: 20px;
  background: rgba(250, 153, 55, 0.1);

  &:hover {
    color: #FF7E1F;
    background: rgba(250, 153, 55, 0.2);
    transform: translateY(-2px);
  }
`;

const Copyright = styled.p`
  font-size: 1em;
  opacity: 0.8;
`;

const Footer = () => (
  <FooterWrapper>
    <DesignCredit>
      Design par <Link href="https://kamit.tech" target="_blank" rel="noopener noreferrer">Kamit</Link>
    </DesignCredit>
    <Copyright>&copy; 2024 SECURIS SERVICES. Tous droits réservés.</Copyright>
  </FooterWrapper>
);

export default Footer;

