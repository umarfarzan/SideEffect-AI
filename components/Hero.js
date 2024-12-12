import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../images/podcast-studio.jpg';

const HeroSection = styled.section`
  height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to right, rgba(0,0,0,0.2), rgba(0,0,0,0.4));
  }
`;

const HeroContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%);
  text-align: right;
  color: white;
`;

const Title = styled.div`
  font-size: 4.5rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 1.5rem;

  span {
    display: block;
    &:last-child {
      margin-right: -0.5rem; /* Adjust the last line slightly more to the right */
    }
  }
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  line-height: 1.5;
  max-width: 500px;
  margin-left: auto;
  text-align: center;
  margin-bottom: 2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const Button = styled.a`
  background-color: ${props => props.primary ? '#9333ea' : 'rgba(0, 0, 0, 0.3)'};
  color: white;
  padding: ${props => props.primary ? '0.75rem 2rem' : '0.5rem 1.5rem'};
  border-radius: ${props => props.primary ? '4px' : '9999px'};
  text-decoration: none;
  font-size: 0.9rem;
  backdrop-filter: blur(10px);
  transition: background-color 0.2s;
  
  &:hover {
    background-color: ${props => props.primary ? '#7e22ce' : 'rgba(0, 0, 0, 0.5)'};
  }
`;

function Hero() {
  return (
    <HeroSection>
      <HeroContent>
        <TextContainer>
          <Title>
            <span>Clip, Cut a</span>
            <span>Share while you</span>
            <span>stream.</span>
          </Title>
          <Subtitle>
            Effortlessly captur, fine-tune, and share your best moments with ease. Your creative toolkit for smart
            clipping, quick edits, and powerful sharing.
          </Subtitle>
          <ButtonContainer>
            <ButtonGroup>
              <Button href="#podcasts">Podcasts</Button>
              <Button href="#category">Talking Category</Button>
            </ButtonGroup>
            <Button primary href="#get-started">Get Started</Button>
          </ButtonContainer>
        </TextContainer>
      </HeroContent>
    </HeroSection>
  );
}

export default Hero;

