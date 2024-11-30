import styled from 'styled-components';
import backImage from 'public/images/back.jpg';
import bgHeroImage from 'public/images/bg-hero.png';

import Header from '../../components/header';
import Content from '../../components/content';

const Wrapper = styled.div`
  background: url(${backImage}) no-repeat;
  background-position: top center;
  background-size: cover;
  height: 100svh;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${bgHeroImage}) no-repeat;
    opacity: 0.5;
    background-size: cover;
    z-index: 1;
  }
`;

function Main() {
  return (
    <>
      <Wrapper>
        <Header />
      </Wrapper>
      <Content />
    </>
  );
}

export default Main;
