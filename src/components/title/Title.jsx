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
              <span>Offline</span>
            </button>
            <button className="button">
              <span>Exhibition</span>
            </button>
          </div>
        </div>
        <div className="title_line"></div>
      </div>
    </section>
  );
};

export default Title;
