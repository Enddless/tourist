import css from './styles.module.scss';
import { guideData } from './data';

function Content() {
  return (
    <section className={css.content} id='content'>
      {guideData.map((step, index) => {
        return (
          <div className={css.card} key={step.id}>
            <div className={css.left}>
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
