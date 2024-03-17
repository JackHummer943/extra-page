import './footer.css';
import Pointer from './../../img/Pointer.svg';
import Burger from './../../img/burger.svg';
import footerLogo from './../../img/footerLogo.svg';
import LogoLast from './../../img/logoLast.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_row">
          <div className="footer_title">
            <strong>CONTACT US</strong>
          </div>
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
          {/* <img className="footer_pointer" src={Pointer} alt="logo" /> */}
        </div>
        <div className="footer_central_rigth">
          <div className="row">
            {' '}
            <p className="footer_rigth_text">
              <strong>Leave us a message</strong>
            </p>
            <input className="input" value="Your name"></input> <br />
            <input className="input" value="Your Email"></input> <br />
            <input className="input" value="Phone"></input> <br />
            <input className="input" value="Message"></input> <br />
            <div className="footer_rigth_container">
              {' '}
              <div className="row_checkbox">
                {' '}
                <input type="checkbox" className="checkbox" />{' '}
                <p className="checkbox_description">I want to receive news and events</p>
                <button className="button_submit">
                  <p className="button_menu_submit">Submit</p>
                  <img className="button_menu_pointer" src={Pointer} alt="logo" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_last_block">
        <div className="last_block_col_one">
          <img className="footer_logo" src={footerLogo} alt="Logo" />
        </div>
        <div className="last_block_col_two">
          {' '}
          <button className="button_menu">
            <img src={Burger} className="burger" alt="burger" />
            <p className="button_menu_text">Menu</p>
          </button>
        </div>
        <div className="last_block_col_three">
          <img className="logo_last" src={LogoLast} alt="LogoLast" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
