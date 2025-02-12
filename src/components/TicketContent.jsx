import { useLocation } from "react-router-dom";

/**
 * custom modules
 */
import github from '../assets/images/icon-github.svg'

/**
 * components
 */
import Logos from "./Logos";


const TicketContent = () => {
    const location = useLocation();
    const formData = location.state?.formData || {};

    
  return (
    <>
        {/* Ticket Card */}
        <div className="ticket-card mt-12 mx-auto bg-[#1A162F] py-5 px-5 rounded-lg shadow-lg w-full max-w-md relative">
            {/* Event Details */}
            <div className="">
                <Logos />
                <p className="text-neutral-0 text-[16px] pl-10">Jan 31, 2025 / Austin, TX</p>
            </div>
            

            {/* User Info */}
            <div className="mt-8 flex items-center space-x-4">
                {/* Avatar */}
                {formData.avatar ? (
                    <img
                    src={URL.createObjectURL(formData.avatar)}
                    alt="Avatar"
                    className="w-14 h-16 rounded-[9px] border-transparent"
                    />
                ) : (
                    <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center">
                    📷
                    </div>
                )}

                {/* Name & GitHub */}
                <div>
                    <h3 className="text-[22px] tracking-[1px] text-neutral-50  font-semibold">{formData.fullName}</h3>
                    <p className="text-[14px] flex items-center text-neutral-400"><img src={github} alt=""  className="mr-2"/>@{formData.githubUsername}</p>
                </div>
            </div>

            {/* Ticket Number */}
            <span className="absolute top-1/2 right-5 text-gray-500 text-sm transform translate-x-6 -translate-y-1/2 rotate-90">#60910</span>
        </div>
    </>
  )
}

export default TicketContent
