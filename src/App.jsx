import Header from './components/header/Header';
import './App.css';
import Title from './components/title/Title';
import Image from './components/image/Image';
import FourBlock from './components/fourBlock/FourBlock';
import SixBlock from './components/sixBlock/SixBlock';
import EightBlock from './components/eightBlock/EightBlock';

import TenBlock from './components/tenBlock/TenBlock';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Title />
      {/* <Image sectionClassName="section_image_one" imgClassName="image_one" alt="image 1" /> */}
      {/* <FirstImage /> */}
      <Image className="imageFirst" />
      <FourBlock />
      {/* <Image src={twoImage} alt="image 2" /> */}
      {/* <SecondImage /> */}
      <Image className="imageSecond" />
      <SixBlock />
      {/* <Image src={thirdImage} alt="Image 3" /> */}
      {/* <ThirdImage /> */}
      <video>
        <source src="https://vimeo.com/895719838" type="video"></source>
      </video>
      <Image className="imageThird" />
      <EightBlock />
      {/* <Image src={fourthImage} alt="Image 4" /> */}
      <Image className="imageFourth" />
      <TenBlock />
      <Footer />
    </div>
  );
}

export default App;
