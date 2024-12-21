import styled from 'styled-components';

export const Section = styled.section`
  margin-bottom: 60px;
  background: ${props => props.theme.colors.white};
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    padding: 20px;
    margin-bottom: 30px;
  }
`;

export const Title = styled.h2`
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

  @media (max-width: 768px) {
    font-size: 1.8em;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    font-size: 1.6em;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`; 