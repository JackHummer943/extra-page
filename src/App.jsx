import Header from './components/header/Header';
import './App.css';
import Title from './components/title/Title';
import Image from './components/image/Image';
import FourBlock from './components/fourBlock/FourBlock';
import SixBlock from './components/sixBlock/SixBlock';
import EightBlock from './components/EightBlock/EightBlock';

import MainImg from './../src/img/MainImg.png';
import twoImage from './../src/img/twoImage.png';
import thirdImage from './../src/img/thirdImage.png';
import fourthImage from './../src/img/fourthImage.png';
import TenBlock from './components/tenBlock/TenBlock';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Title />
      <Image src={MainImg} alt="image 1" />
      <FourBlock />
      <Image src={twoImage} alt="image 2" />
      <SixBlock />
      <Image src={thirdImage} alt="Image 3" />
      <EightBlock />
      <Image src={fourthImage} alt="Image 4" />
      <TenBlock />
      <Footer />
    </div>
  );
}

export default App;
