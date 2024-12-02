// Components
import Card from '../Card';

// Assets
import ArrowPointIcon from '../../assets/icons/arrows-point-icon.svg';
import LockIcon from '../../assets/icons/lock-icon.svg';
import ChessIcon from '../../assets/icons/chess-icon.svg';

const CardsSection = () => {
  return (
    <section className="flex justify-center w-full h-screen">
      <div className="flex flex-col gap-8 xl:w-[70%] lg:w-full">
        <Card
          link="https://docs.taxlocker.io/genesis-of-locker/quickstart"
          icon={ArrowPointIcon}
          title="Inception of Decentralized Custodianship"
          text="In the ever evolving realm of decentralized finance (DeFi), the management and allocation of collective assets have become a challenge. Locker is an innovative solution to address these challenges by introducing a trustless system for funds."
        />

        <Card
          link="https://docs.taxlocker.io/the-locker-paradigm/editor"
          icon={LockIcon}
          title="Inception of Decentralized Custodianship"
          text="In the ever evolving realm of decentralized finance (DeFi), the management and allocation of collective assets have become a challenge. Locker is an innovative solution to address these challenges by introducing a trustless system for funds."
        />

        <Card
          link="https://docs.taxlocker.io/the-locker-paradigm/integrations"
          icon={ChessIcon}
          title="Inception of Decentralized Custodianship"
          text="In the ever evolving realm of decentralized finance (DeFi), the management and allocation of collective assets have become a challenge. Locker is an innovative solution to address these challenges by introducing a trustless system for funds."
        />
      </div>
    </section>
  );
};

export default CardsSection;
