import imgBgTop from '../images/bg-pattern-top-desktop.svg';
import imgBgBottom from '../images/bg-pattern-bottom-desktop.svg';
import SocialHero from './SocialHero';
function App() {
  return (
    <main className="App">
        <img className='imgbgtop' src={imgBgTop} />
        <SocialHero/>
        <img className='imgbgbottom' src={imgBgBottom} />
    </main>
  );
}

export default App;
