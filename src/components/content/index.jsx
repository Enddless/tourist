import { guideData } from './data';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';

gsap.registerPlugin(ScrollTrigger);

const Container = styled.div`
  max-width: calc(var(--container-width) + var(--container-padding-x) * 2);
  margin-inline: auto;
  padding-inline: var(--container-padding-x);
`;
const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 100px;
  padding: 100px 0 200px;
`;

const Card = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;

  &:nth-child(odd) {
    .left {
      order: 2;
    }
    .photo {
      order: 1;
    }
  }
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 27px;
  width: 60%;
  will-change: transform;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

const Photo = styled.div`
  width: 40%;

  @media (max-width: 767px) {
    width: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media (max-width: 767px) {
      height: 500px;
      object-fit: contain;
    }
    @media (max-width: 380px) {
      height: 300px;
    }
  }
`;

const Name = styled.div`
  font-weight: 800;
  font-size: clamp(1rem, 0.975rem + 0.13vw, 1.125rem);
  letter-spacing: 0.33em;
  text-transform: uppercase;
  color: var(--color-accent);
  position: relative;
  display: flex;
  align-items: center;
  column-gap: 32px;
`;
const DecorationLine = styled.span`
  content: '';
  display: block;
  width: 72px;
  height: 2px;
  background: var(--color-accent);
`;
const Numbers = styled.div`
  position: absolute;
  top: -93px;
  right: 9px;
  font-weight: 700;
  font-size: clamp(2.5rem, 1.788rem + 3.56vw, 6.063rem);
  line-height: 100%;
  opacity: 0.1;

  @media (max-width: 767px) {
    top: -20px;
  }
`;

const Title = styled.h2`
  font-size: clamp(1.125rem, 0.975rem + 0.75vw, 1.875rem);
`;

const Text = styled.p`
  line-height: 32px;
`;

function Content() {
  const ref = useRef([]);
  ref.current = [];

  useEffect(() => {
    ref.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          autoAlpha: 0,
          x: (index + 1) % 2 !== 0 ? '-70' : '70'
        },
        {
          autoAlpha: 1,
          x: '0',
          duration: 0.5,
          scrollTrigger: {
            trigger: el,
            start: 'top bottom-=50', // Начинаем анимацию за 50 пикселей до старта элемента
            end: 'bottom 90%', // Заканчиваем анимацию за 50 пикселей до конца элемента

            toggleActions: 'play none none reverse',
            scrub: 0.2
            // markers: true
          }
        }
      );
    });
  }, []);

  const addtoRefs = (el) => {
    if (el && !ref.current.includes(el)) {
      ref.current.push(el);
    }
  };

  return (
    <Container id='content'>
      <ContentWrapper>
        {guideData.map((step, index) => (
          <Card key={step.id} ref={addtoRefs}>
            <LeftBlock className='left'>
              <Name>
                <DecorationLine />
                {step.name}
                <Numbers>0{index + 1}</Numbers>
              </Name>
              <Title>{step.title}</Title>
              <Text>{step.text}</Text>
            </LeftBlock>
            <Photo className='photo'>
              <img src={step.image} alt={step.title} loading='lazy' width={566} />
            </Photo>
          </Card>
        ))}
      </ContentWrapper>
    </Container>
  );
}

export default Content;
