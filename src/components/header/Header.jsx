import './style.css';

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
        <a
          target="_blank"
          href="./../src/assets/pdf/resume.pdf"
          className="btn"
        >
          Download CV
        </a>
      </div>
    </header>
  );
}

export default Header;
