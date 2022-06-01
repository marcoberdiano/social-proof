import imgBgTop from '../images/bg-pattern-top-desktop.svg';
import imgBgBottom from '../images/bg-pattern-bottom-desktop.svg';
import SocialHero from './SocialHero';
function App() {
  return (
    <main className="App">
        <img className='imgbgtop' src={imgBgTop} alt='img top'/>
        <SocialHero/>
        <img className='imgbgbottom' src={imgBgBottom} alt='img bottom'/>
    </main>
  );
}

export default App;
