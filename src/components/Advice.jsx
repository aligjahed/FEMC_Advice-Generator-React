import dividerDesktop from "../assets/images/pattern-divider-desktop.svg";
import dividerMobile from "../assets/images/pattern-divider-mobile.svg";

const Advice = ({ data }) => {
  const adviceData = data;

  const adviceBoxData = () => {
    return (
      <>
        <p className="text-Neon-Green mb-[35px] tracking-[3px] text-[14px] ">
          ADVICE <span className="mr-[5px]"></span>
          {"#" + adviceData.slip.id}
        </p>
        <h1 className="text-Light-Cyan text-[25px]">
          "{adviceData.slip.advice}"
        </h1>
      </>
    );
  };

  const waitText = () => {
    return <h3 className="text-Light-Cyan ">Please Wait</h3>;
  };

  return (
    <>
      <div className="mb-[40px]">
        {adviceData ? adviceBoxData() : waitText()}
      </div>
      <img
        className="-mt-50"
        src={window.innerWidth > 750 ? dividerDesktop : dividerMobile}
        alt="divider"
      />
    </>
  );
};

export default Advice;
