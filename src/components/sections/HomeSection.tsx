// Components
import Button from '../Button';

// Assets
import Lock from '../../assets/videos/Untitled.webm';
import ArrowDown from '../../assets/icons/white-arrow.svg';

const HomeSection = () => {
  return (
    <section className="flex flex-col xl:justify-start justify-center w-full h-[80vh]">
      <div className="flex lg:flex-row-reverse flex-col justify-between items-center z-30">
        <div className="lg:w-1/2 w-2/3 z-30">
          <video src={Lock} autoPlay muted loop />
        </div>
        <div className="flex flex-col gap-4 lg:w-1/2 w-full">
          <h1 className="text-[5rem] leading-none font-semibold">Locker</h1>
          <span>
            Welcome to Locker, a platform for decentralized governance and
            secure, community-driven fund management.
          </span>
          <span className="font-extralight">
            Locker empowers token holders to shape their project’s future,
            manage shared assets, and collaborate transparently on any possible
            proposal. It enables better engagement, giving each project direct
            control over decisions within its community.
          </span>
          <div className="flex flex-row gap-4 mt-4">
            <Button value="Enter dapp" href="" />
            <Button value="$Locker" variant href="" />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <img src={ArrowDown} className="z-30" />
      </div>
    </section>
  );
};

export default HomeSection;
