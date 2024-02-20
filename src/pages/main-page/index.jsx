import Content from '../../components/content';
import Header from '../../components/header';
import css from './styles.module.scss';

function Main() {
  return (
    <>
      <div className={css.wrapper}>
        <Header />
      </div>
      <Content />
    </>
  );
}

export default Main;
