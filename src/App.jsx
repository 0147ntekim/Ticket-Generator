/**
 * Node Modulus
*/

/**
 * components
 */
import Logo from "./components/Logo"
import TicketForm from "./components/TicketForm"
import Circle from "./components/Circle"
import Line from "./components/Line"
import Top from "./components/Top"
import Bottom from "./components/Bottom"


const App = () => {

  return (
    <>
      <div className="App relative min-h-[100vh] flex flex-col pt-[35px] lg:pt-[70px] pb-[100px] px-[30px] xs:px-[60px] sm:px-[130px] md:px-[150px] mid:px-[200px] custom:px-[220px] lg:px-[300px] xl:px-[400px]">
        <Circle />
        <Line />
        <Top/>
        {/* Centered content wrapper with max-width */}
        <div className="max-w-[800px] w-full mx-auto z-10">
          <Logo />

          <div className="mt-8">
            <h1 className="text-[23px] md:text-[35px] text-neutral-100 capitalize font-bold text-center tracking-[1px]">
              your journey to coding conf 2025 starts here!
            </h1>
            <p className="text-center text-neutral-500 mt-6 md:mt-9 text-[18px] md:text-[25px] font-[500]">
              Secure your spot at next year's biggest coding conference.
            </p>
          </div>

          <TicketForm />
        </div>
        <Bottom />
      </div>
    </>
    
  )
}

export default App
