import './ten.css';
import Pointer from './../../img/Pointer.svg';
const TenBlock = () => {
  return (
    <section className="ten">
      <div className="container">
        <div className="ten_row">
          <div className="ten_title">MEDIA PUBLICATIONS</div>
          <div className="ten_description">
            <div className="ten_text_row">
              <div className="pointer">
                {' '}
                <p className="ten_text">NewsBTC</p>{' '}
                <img src={Pointer} alt="Pointer" className="pict" />
              </div>

              <div className="pointer">
                {' '}
                <p className="ten_text">Porterium Magazine</p>{' '}
                <img src={Pointer} alt="Pointer" className="pict" />
              </div>

              <div className="pointer">
                {' '}
                <p className="ten_text">Dubai Horizons</p>{' '}
                <img src={Pointer} alt="Pointer" className="pict" />
              </div>

              <div className="pointer">
                {' '}
                <p className="ten_text">Artocratia</p>{' '}
                <img src={Pointer} alt="Pointer" className="pict" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TenBlock;
