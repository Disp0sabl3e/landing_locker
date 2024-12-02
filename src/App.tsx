// Assets
import HeaderGradient from './assets/images/header-gradient.png';
import BgGradient from './assets/images/bg-gradient.png';

// Components
import Header from './components/Header';
import HomeSection from './components/sections/HomeSection';
import CardsSection from './components/sections/CardsSection';

const App = () => {
  return (
    <main className="w-full h-screen relative py-12 md:px-28 px-16">
      <img src={HeaderGradient} className="fixed top-0 left-0 w-full z-50" />
      <img src={BgGradient} className="absolute top-0 right-0 w-full z-0" />
      <div className="flex flex-col gap-10">
        <Header />
        <HomeSection />
        <CardsSection />
      </div>
    </main>
  );
};

export default App;
