import './style.css';
import certificates from '../../helpers/certificateList';

function Certificates() {
  return certificates.map((certificate, index) => {
    return (
      <>
        <a
          key={index}
          href={certificate.certificate}
          target="_blank"
          rel="noreferrer"
        >
          <li className="certificate">
            <img
              src={certificate.certificateImg}
              alt={certificate.title}
              className="certificate__img"
            />
            <h3 className="certificate__title">{certificate.title}</h3>
          </li>
        </a>
      </>
    );
  });
}

export default Certificates;
