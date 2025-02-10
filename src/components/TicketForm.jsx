import React, { useState } from "react";
import download from "../assets/images/icon-upload.svg"
import info from '../assets/images/icon-info.svg'
import { useNavigate } from "react-router-dom";

const TicketForm = () => {
  const [formData, setFormData] = useState({
    avatar: null,
    fullName: "",
    email: "",
    githubUsername: "",
  });

  const [preview, setPreview] = useState(null);
  const [error, setError] = useState("");
  const fileInputRef = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    validateAndSetFile(file);
  }

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    validateAndSetFile(file);
  }

  const validateAndSetFile = (file) => {
    if (file) {
      if (!["image/jpeg", "image/png"].includes(file.type)) {
        setError("Only JPG and PNG formats are allowed.");
        return;
      }
      if (file.size > 500 * 1024) {
        setError("File size must be less than 500KB.");
        return;
      }
      setFormData({ ...formData, avatar: file });
      setPreview(URL.createObjectURL(file));
      setError("");
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/ticket", { state: { formData } });
  };


  return (
    <form onSubmit={handleSubmit} className="mt-10 lg:mt-14">
        <div className="group group1">
          <label htmlFor="" className="block text-[20px] font-medium text-gray-300 mb-2
          ">
              Upload Avatar
          </label>
          
          <div 
            className="border border-dashed border-gray-400 rounded-lg p-8 flex flex-col items-center justify-center text-center cursor-pointer bg-neutral-900 "
            onClick={() => fileInputRef.current.click()}
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
          >
            {preview ? (
              <img src={preview} alt="avatar preview" className="w-16 h-16 rounded-[10px]" />
            ) : (
              <>
                <img src={download} alt="" className="w-14 h-13 bg-gray-600 rounded-[10px] flex items-center justify-center p-2" />
                <p className="text-sm text-gray-300 mt-2">Drag and drop or click to upload</p>
              </>
            )}
            
          </div>

          <p className="flex flex-row items-center mt-3"><img src={info} alt="" className="" /><span className="text-[12px] ml-2 text-neutral-500">Upload your photo (JPG OR PNG, max size: 500kb).</span></p>

          {/* Hidden File Input */}
          <input
            type="file"
            accept="image/jpeg, image/png"
            className="hidden"
            ref={fileInputRef}
            onChange={handleFileChange}
          />
          {error && <p className="text-red-500 text-xs">{error}</p>}
        </div>

        <div className="group groups">
          <label htmlFor="" className="block text-[18px] md:text-[22px] font-[300] text-gray-300 mb-3 mt-7 lg:mt-10">Full Name</label>
          <input 
            type="text" 
            name="fullName"
            value={formData.fullName}
            className="w-full text-sm text-white bg-neutral-900 border border-neutral-300 rounded-[12px] p-4"
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          />
        </div>
        <div className="group groups">
          <label htmlFor="" className="block text-[18px] md:text-[22px] font-[300] text-gray-300 mb-3 mt-7 lg:mt-10">Email Address</label>
          <input 
            type="text" 
            name="email"
            placeholder="example@email.com"
            value={formData.email}
            className="w-full text-sm text-white bg-neutral-900 border border-neutral-300 rounded-[12px] p-4"
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div className="group groups">
          <label htmlFor="" className="block text-[18px] md:text-[22px] font-[300] text-gray-300 mb-3 mt-7 lg:mt-10">Github Username</label>
          <input 
            type="text" 
            name="githubUsername"
            placeholder="@yourusername"
            value={formData.githubUsername}
            className="w-full text-sm text-white bg-neutral-900 border border-neutral-300 rounded-[12px] p-4"
            onChange={(e) => setFormData({ ...formData, githubUsername: e.target.value })}
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 mt-8 md:mt-12 bg-[#F96161] text-neutral-900 md:text-[22px] font-semibold rounded-[10px] hover:bg-[#e15050]"
        >
          Generate My Ticket
        </button>
    </form>
  )
}

export default TicketForm;
