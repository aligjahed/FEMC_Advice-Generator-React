import dice from "../assets/images/icon-dice.svg";

const Button = ({ onClick }) => {
  return (
    <div className="absolute bottom-[-35px] lg:hover:shadow-3xl  hover:cursor-pointer rounded-[50%] h-[65px] w-[65px]">
      <button
        onClick={onClick}
        className="bg-Neon-Green rounded-[50%] h-[65px] w-[65px] "
      ></button>
      <img
        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] "
        src={dice}
        alt="dice"
      />
    </div>
  );
};

export default Button;
