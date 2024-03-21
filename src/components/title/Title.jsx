import './title.css';
// import Line from './../../img/Line.svg';
const Title = () => {
  return (
    <section className="title">
      <div className="container">
        <div className="title_row">
          <div className="title_text">TECHNOLOGY AND HUMANITY CANVAS</div>
          <div className="title_filter">
            <button className="button">
              <div className="button_one">Offline</div>
            </button>
            <button className="button">
              <div className="button_two">Exhibition</div>
            </button>
          </div>
        </div>
        <div className="title_line"></div>
      </div>
    </section>
  );
};

export default Title;
