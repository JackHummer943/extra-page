import './footer.css';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="container">
          <div className="footer_row">
            <div className="footer_text">TECHNOLOGY AND HUMANITY CANVAS</div>
            <div className="footer_filter">
              <button className="button">
                <span>Offline</span>
              </button>
              <button className="button">
                <span>Exhibition</span>
              </button>
            </div>
          </div>
          <div className="footer_line">
            {/* <img src={Line} alt="Line" /> */}
            <div className="line"> </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
