import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import TableOfContents from './components/TableOfContents';
import Introduction from './components/Introduction';
import LogoElements from './components/LogoElements';
import ColorPalette from './components/ColorPalette';
import Typography from './components/Typography';
import LogoVersions from './components/LogoVersions';
import Usage from './components/Usage';
import Applications from './components/Applications';
import FileFormats from './components/FileFormats';
import Contact from './components/Contact';
import Footer from './components/Footer';

const theme = {
  colors: {
    primary: '#FA9937',
    secondary: '#4F4F4F',
    tertiary: '#6B6D74',
    background: '#F8FAFC',
    white: '#FFFFFF',
    gradient: 'linear-gradient(135deg, #FA9937 0%, #FF7E1F 100%)',
  },
  fonts: {
    main: "'Poppins', sans-serif",
    secondary: "'Inter', sans-serif",
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
  },
  shadows: {
    small: '0 2px 8px rgba(0, 0, 0, 0.1)',
    medium: '0 8px 20px rgba(0, 0, 0, 0.1)',
    large: '0 12px 30px rgba(0, 0, 0, 0.15)',
  }
};

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${props => props.theme.fonts.main};
    line-height: 1.6;
    color: ${props => props.theme.colors.secondary};
    background-color: ${props => props.theme.colors.background};
  }
` as any;

const AppWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Section = styled.section`
  background: ${props => props.theme.colors.white};
  padding: 40px;
  margin-bottom: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppWrapper>
        <Header />
        <TableOfContents />
        <Section>
          <Introduction />
        </Section>
        <Section>
          <LogoElements />
        </Section>
        <Section>
          <ColorPalette />
        </Section>
        <Section>
          <Typography />
        </Section>
        <Section>
          <LogoVersions />
        </Section>
        <Section>
          <Usage />
        </Section>
        <Section>
          <Applications />
        </Section>
        <Section>
          <FileFormats />
        </Section>
        <Section>
          <Contact />
        </Section>
        <Footer />
      </AppWrapper>
    </ThemeProvider>
  );
};

export default App;

