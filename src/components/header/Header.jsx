import './header.css';
import logoImg from './../../img/Logo.svg';
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header_row">
          <div className="header_logo">
            <img src={logoImg} alt="Logo" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
