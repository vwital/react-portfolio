import './style.css';
// import vk from './../../assets/img/icons/vk.svg';
// import instagram from './../../assets/img/icons/instagram.svg';
// import twitter from './../../assets/img/icons/twitter.svg';
import linkedIn from './../../assets/img/icons/linkedIn.svg';
import gitHub from './../../assets/img/icons/gitHub.svg';
import telegram from './../../assets/img/icons/telegram.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            {/* <li className="social__item">
              <a href="#!" target="_blank" rel="noreferrer">
                <img src={vk} alt="Link" />
              </a>
            </li> */}
            <li className="social__item">
              <a href="https://t.me/wutalich" target="_blank" rel="noreferrer">
                <img src={telegram} alt="Link" />
              </a>
            </li>
            {/* <li className="social__item">
              <a href="#!" target="_blank" rel="noreferrer">
                <img src={twitter} alt="Link" />
              </a>
            </li> */}
            <li className="social__item">
              <a
                href="https://github.com/vwital/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={gitHub} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://www.linkedin.com/in/vwital/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedIn} alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
