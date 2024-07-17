import './style.css';
import loupe from './loupe.png';

function BtnDeploy({ link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-deploy">
      <img src={loupe} alt="loupe" />
      Project Deploy
    </a>
  );
}

export default BtnDeploy;
