import React from 'react';
import styled from 'styled-components';

const TrustWrapper = styled.section`
  background-color: #18181b;
  padding: 4rem 0;
  text-align: center;
`;

const TrustContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const TrustText = styled.p`
  color: #a1a1aa;
  margin-bottom: 2rem;
`;

const Rating = styled.div`
  display: inline-flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  margin-bottom: 2rem;
`;

const RatingNumber = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  margin-right: 0.5rem;
`;

const Stars = styled.div`
  color: #fbbf24;
`;

const ReviewCount = styled.p`
  color: #71717a;
  margin-bottom: 3rem;
`;

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 2rem;
  align-items: center;
  justify-items: center;
`;

const Logo = styled.img`
  max-width: 120px;
  filter: grayscale(100%) brightness(70%);
`;

function TrustSection() {
  return (
    <TrustWrapper>
      <TrustContent>
        <TrustText>Trusted by individuals & businesses</TrustText>
        <Rating>
          <RatingNumber>4.8</RatingNumber>
          <Stars>★★★★★</Stars>
        </Rating>
        <ReviewCount>On G2 with 881 reviews</ReviewCount>
        <LogoGrid>
          <Logo src="/npr-logo.png" alt="NPR" />
          <Logo src="/ted-logo.png" alt="TED" />
          <Logo src="/verizon-logo.png" alt="Verizon Media" />
          <Logo src="/microsoft-logo.png" alt="Microsoft" />
          <Logo src="/iheart-logo.png" alt="iHeart MEDIA" />
          <Logo src="/nyt-logo.png" alt="The New York Times" />
        </LogoGrid>
      </TrustContent>
    </TrustWrapper>
  );
}

export default TrustSection;

