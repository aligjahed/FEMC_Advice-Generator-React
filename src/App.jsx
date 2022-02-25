import Advice from "./components/Advice";
import { useState, useEffect } from "react";
import Button from "./components/Button";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const tempData = await res.json();
    setData(tempData);
  };

  const newAdvice = () => {
    setData();
    getData();
  };

  return (
    <div className="flex-col min-h-screen h-full   flex justify-center items-center bg-Dark-Grayish-Blue px-[15px]">
      <div className="advice-box relative shadow-2xl ">
        <Advice data={data} />
        <Button onClick={newAdvice} />
      </div>
    </div>
  );
}

export default App;
