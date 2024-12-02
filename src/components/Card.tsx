import Button from './Button';

interface CardProps {
  icon: string;
  title: string;
  text: string;
  link: string;
}

const Card = ({ icon, title, text, link }: CardProps) => {
  return (
    <div className="rounded-xl border-[1.5px] border-white border-opacity-20 bg-gradient-card px-12 py-12 z-30">
      <div className="lg:grid lg:items-start lg:gap-0 grid-cols-12 flex flex-col items-center gap-8">
        <div className="flex lg:justify-normal justify-center col-span-6 lg:ml-10 ml-0">
          <img src={icon} className="w-[60%]" />
        </div>
        <div className="flex flex-col gap-2 col-span-6">
          <span className="md:text-3xl text-2xl font-semibold">{title}</span>
          <span className="font-extralight">{text}</span>
        </div>
      </div>

      <div className="lg:grid grid-cols-12 mt-4">
        <div className="col-span-6"></div>
        <Button value="Learn More" className="col-span-6" href={link} />
      </div>
    </div>
  );
};

export default Card;
