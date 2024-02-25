import css from './styles.module.scss';
import { guideData } from './data';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

function Content() {
  const ref = useRef([]);
  ref.current = [];

  useEffect(() => {
    ref.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          autoAlpha: 0,
          x: (index + 1) % 2 === 0 ? '-70' : '70'
        },
        {
          autoAlpha: 1,
          x: '0',
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse',
            scrub: 0.2
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
    <section className={css.content} id='content'>
      {guideData.map((step, index) => {
        return (
          <div className={css.card} key={step.id} ref={addtoRefs}>
            <div className={`${css.left} ${css.block}${index}`}>
              <div className={css.numbers}>0{index + 1}</div>
              <div className={css.name}>
                <span className={css.decoration}></span>
                {step.name}
              </div>
              <h2 className={css.title}>{step.title}</h2>
              <p className={css.text}>{step.text}</p>
            </div>

            <div className={css.photo}>
              <img src={step.image} alt={step.title} />
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Content;
