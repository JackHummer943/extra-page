import './footer.css';
import Pointer from './../../img/Pointer.svg';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_row">
          <div className="footer_text">CONTACT US</div>
        </div>
        <div className="footer_line">
          <div className="line"> </div>
        </div>
      </div>
      <div className="footer_central">
        <div className="footer_central_left">
          <p className="central_left_text">Twitter / X</p>
          <p className="central_left_text">Instagram</p>
          <p className="central_left_text">Linkedin</p>
          <p className="central_left_mail">studio@vernissage.art</p>
          <p className="central_left_text_last">Terms and conditions</p>
          <img className="footer_pointer" src={Pointer} alt="logo" />
        </div>
        <div className="footer_central_rigth">
          <div className="row">
            {' '}
            <p className="footer_rigth_text">Leave us a message</p>
            <input className="input"></input> <br />
            <input className="input"></input> <br />
            <input className="input"></input> <br />
            <input className="input"></input> <br />
            <input type="checkbox" className="checkbox" />
          </div>
        </div>
      </div>
      <div className="footer_last_block">
        <div className="last_block_row">
          <img className="footer_logo" alt="Logo" />
          <button>Menu</button>
          <div className="footer_logo_last">
            <img alt="LogoLast" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
