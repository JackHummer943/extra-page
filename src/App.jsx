import Header from './components/header/Header';
import './App.css';
import Title from './components/title/Title';
import Image from './components/image/Image';
import FourBlock from './components/fourBlock/FourBlock';
import SixBlock from './components/sixBlock/SixBlock';
import EightBlock from './components/EightBlock/EightBlock';

import TenBlock from './components/tenBlock/TenBlock';
import Footer from './components/footer/Footer';
import Video from './components/video/Video';

function App() {
  return (
    <div className="App">
      <Title />
      <Image className="imageFirst" />
      <FourBlock />
      <Image className="imageSecond" />
      <SixBlock />
      <Video />
      <EightBlock />
      <Image className="imageFourth" />
      <TenBlock />
    </div>
  );
}
export default App;
