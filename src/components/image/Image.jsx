// import MainImg from './../../img/MainImg.png';
import './image.css';
const Image = (props) => {
  return (
    <section className="image">
      <img src={props.src} alt={props.alt} />
    </section>
  );
};

export default Image;
