import './style.css';
import demo from './demo.png';

function BtnDemo({ link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-demo">
      <img src={demo} alt="demo" />
      Project Demo
    </a>
  );
}

export default BtnDemo;
