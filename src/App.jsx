import Header from './components/header/Header';
import './App.css';
import Title from './components/title/Title';
import Image from './components/image/Image';
import FourBlock from './components/fourBlock/FourBlock';
import FiveBlock from './components/fiveBlock/Five';
import SixBlock from './components/sixBlock/SixBlock';
// import SevenBlock from './components/SevenBlock';
import EightBlock from './components/eightBlock/EightBlock';

import MainImg from './../src/img/MainImg.png';
import twoImage from './../src/img/twoImage.png';
import thirdImage from './../src/img/thirdImage.png';
import fourthImage from './../src/img/fourthImage.png';
import TenBlock from './components/tenBlock/TenBlock';

function App() {
  return (
    <div className="App">
      <Header />
      <Title />
      <Image src={MainImg} alt="image 1" />
      <FourBlock />
      <Image src={twoImage} alt="image 2" />
      {/* <FiveBlock /> */}
      <SixBlock />
      <Image src={thirdImage} alt="Image 3" />
      {/* <SevenBlock /> */}
      <EightBlock />
      {/* <NineBlock/> */}
      <Image src={fourthImage} alt="Image 4" />
      <TenBlock />
    </div>
  );
}

export default App;
