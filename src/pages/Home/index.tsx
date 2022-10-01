import logo from '../../assets/icons/weather-logo.svg';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import style from './style.module.css';

export const Home: React.FC = () => {
  const title = 'Pronóstico del Tiempo';
  const footerCopyrightText = 'copyright all rights reserved';
  return (
    <>
      <Header logo={logo} title={title} />
      <main className={style.module}>
        <Footer footerCopyrightText={footerCopyrightText} />
      </main>
    </>
  );
};
