import Header from '../components/header/Header';
import Certificates from '../components/certificate/Certificate';

function Home() {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>
                HTML, CSS, NPM, JavaScript, TypeScript, ReactJS, Webpack, Vite,
                SCSS/SASS, Git, Postman
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Other</h2>
              <p>MS Office, Adobe Photoshop, Figma, Jira, VegasPro </p>
            </li>
            <li className="content-list__item ">
              <h2 className="title-2">Certificates</h2>
              <ul
                className="
              certificates"
              >
                <Certificates />
              </ul>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}

export default Home;
