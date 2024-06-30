import React from "react";
import Welcomeinfo from "../../animations/animateIcons/Welcomeinfo";
import { Link } from "react-router-dom";
import FadeCard from "../../animations/collectdata/FadeCard";

const Info = () => {
  return (
    <FadeCard>
        <div className="flex flex-col items-center justify-center gap-6 p-3">
          <Welcomeinfo />
          <h1 className="text-colortext-secondary flex w-full md:w-[400px] text-center">
            <p className="text-center">
            <span className="font-bold text-lg">Welcome.  </span>
              We collect data to enhance user experience. Please read <Link to={'/policy'} className="font-bold cursor-pointer">the following
              information</Link> to understand what data we collect and how it is used.
            </p>
          </h1>
            <Link to={'/collect-data/main-info'}><button className='uppercase p-6 rounded-sm bg-btnbg-primary font-semibold hover:bg-btnbg-hover duration-200 flex items-center justify-center h-12 text-secondary'>Continue</button></Link>
        </div>
    </FadeCard>
  );
};

export default Info;
