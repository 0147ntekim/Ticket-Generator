import React from "react";
import { useLocation } from "react-router-dom";


/**
 * components
 */
import Top from "../components/Top";
import Bottom from "../components/Bottom";
import Line from "../components/Line";
import Circle from "../components/Circle";
import Logo from "../components/Logo";
import TicketContent from "../components/TicketContent";

const Ticket = () => {
  const location = useLocation();
  const formData = location.state?.formData || {};

  return (
    <>
      <div className="App relative w-full min-h-[100vh]  flex flex-col pt-[35px] lg:pt-[70px] pb-[100px] px-[30px] xs:px-[60px] sm:px-[130px] md:px-[150px] mid:px-[200px] custom:px-[220px] lg:px-[300px] xl:px-[400px]">
        <Top/>
        <Line />
        <Circle />
        <div className="max-w-[800px] w-full mx-auto z-10">
            <Logo />

            <div className="mt-8">
              <h1 className="text-[23px] md:text-[35px] text-neutral-100 capitalize font-bold text-center tracking-[1px]">
                Congrats, <span className="text-[#F96161]">{formData.fullName}!</span> Your ticket is ready.              
              </h1>
              <p className="text-center text-neutral-500 mt-6 md:mt-9 text-[18px] md:text-[25px] font-[500]">
                We've emailed your ticket to{" "}
                <span className="text-[#F96161]">{formData.email}</span> and will send updates in the run-up to the event.
              </p>
          </div>

          <TicketContent />
        </div>
        <Bottom />
      </div>
    </>
  );
};

export default Ticket;
