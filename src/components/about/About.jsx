import { Link } from 'react-router-dom';

import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <img
        className="about-container__image"
        src="https://icongr.am/devicon/cakephp-original.svg?size=128&color=currentColor"
        alt="author"
      />
      <div className="about-container__caption">
        <p className="about-container__caption--title">
          RODRIGO CESAR CALLE CASTILLO
        </p>
        <p className="about-container__caption--description">
          Hola, soy Rodrigo Calle. Soy estudiante universitario de la carrera de
          Ingeniería de Sistemas y he trabajado con lenguajes como Ruby, Java y
          Java Script todos a nivel académico. No llevo mucho tiempo programando
          pero desde que lo hago hasta hoy fue creciendo mis ganas de trabajar
          profesionalemente como desarrollador. Actualmente pertenezco a un
          grupo de estudio dentro de Make It Real Camp y mi espectativa
          principal es que a partir del conocimiento adquirido pueda encontrar
          mi primer trabajo como desarrollador y cumplir mis funciones de buena
          manera. Me gusta mucho ayudar a las personas que quieran aprender a
          programar. Asi como tambien realizar páginas web y aplicaciones Web en
          mis horas libres.
        </p>
        <p className="about-container__caption--learned">Learned list:</p>
        <li>React Router</li>
        <li>BEM</li>
        <li>Context</li>
        <p className="about-container__caption--social">Contact and Social:</p>
        <a
          href="https://github.com/rodrigo-calle"
          className="about-container__caption--email"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://icongr.am/devicon/github-original.svg?size=128&color=currentColor"
            alt="githubicon"
            className="social-icon"
          />{' '}
          https://github.com/rodrigo-calle
        </a>
        <a
          href="mailto: rodrigoc_0@hotmail.com"
          className="about-container__caption--github"
        >
          <img
            src="https://icongr.am/fontawesome/envelope.svg?size=128&color=currentColor"
            alt="emailicon"
            className="social-icon"
          />{' '}
          rodrigoc_0@hotmail.com
        </a>
        <Link to="/" className="btn-back">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default About;
