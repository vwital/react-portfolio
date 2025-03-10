import './style.css';
import resume from './../../assets/pdf/resume.pdf';

function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Vital</em>
          </strong>
          <br />I am a frontend developer
        </h1>
        <div className="header__text">
          <p></p>
        </div>
        <a target="_blank" href={resume} className="btn">
          Download CV
        </a>
      </div>
    </header>
  );
}

export default Header;
