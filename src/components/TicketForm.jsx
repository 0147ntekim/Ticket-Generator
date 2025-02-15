import React, { useState, useRef } from "react";
import download from "../assets/images/icon-upload.svg";
import info from "../assets/images/icon-info.svg";
import { useNavigate } from "react-router-dom";

const TicketForm = () => {
  const [formData, setFormData] = useState({
    avatar: null,
    fullName: "",
    email: "",
    githubUsername: "",
  });

  const [preview, setPreview] = useState(null);
  const [errors, setErrors] = useState({
    avatar: "",
    fullName: "",
    email: "",
    githubUsername: "",
  });

  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  // Validate form
  const validateForm = () => {
    let newErrors = {};

    if (!formData.avatar) {
      newErrors.avatar = "Please upload a photo.";
    }

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!formData.githubUsername.trim()) {
      newErrors.githubUsername = "GitHub username is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  // Handle file change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    validateAndSetFile(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    validateAndSetFile(file);
  };

  const validateAndSetFile = (file) => {
    if (file) {
      if (!["image/jpeg", "image/png"].includes(file.type)) {
        setErrors((prev) => ({ ...prev, avatar: "Only JPG and PNG formats are allowed." }));
        return;
      }
      if (file.size > 500 * 1024) {
        setErrors((prev) => ({ ...prev, avatar: "File size must be less than 500KB." }));
        return;
      }
      setFormData((prev) => ({ ...prev, avatar: file }));
      setPreview(URL.createObjectURL(file));
      setErrors((prev) => ({ ...prev, avatar: "" })); // Clear avatar error when valid file is uploaded
    }
  };

  // Handle input change and clear error if valid
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    setErrors((prev) => ({
      ...prev,
      [name]: value.trim() ? "" : prev[name], // Clear error if input is valid
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      navigate("/ticket", { state: { formData } });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-10 lg:mt-14">
      {/* Avatar Upload */}
      <div className="group group1">
        <label className="block text-[20px] font-medium text-gray-300 mb-2">Upload Avatar</label>

        <div
          className="border border-dashed border-gray-400 rounded-lg p-8 flex flex-col items-center justify-center text-center cursor-pointer bg-neutral-900"
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

        <p className="flex flex-row items-center mt-3">
          <img src={info} alt="" />
          <span className="text-[12px] ml-2 text-neutral-500">Upload your photo (JPG OR PNG, max size: 500kb).</span>
        </p>

        <input type="file" accept="image/jpeg, image/png" className="hidden" ref={fileInputRef} onChange={handleFileChange} />
        {errors.avatar && <p className="text-red-500 text-xs">{errors.avatar}</p>}
      </div>

      {/* Full Name */}
      <div className="group groups">
        <label className="block text-[18px] md:text-[22px] font-[300] text-gray-300 mb-3 mt-7 lg:mt-10">Full Name</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          className="w-full text-sm text-white bg-neutral-900 border border-neutral-300 rounded-[12px] p-4"
          onChange={handleChange}
        />
        {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName}</p>}
      </div>

      {/* Email */}
      <div className="group groups">
        <label className="block text-[18px] md:text-[22px] font-[300] text-gray-300 mb-3 mt-7 lg:mt-10">Email Address</label>
        <input
          type="text"
          name="email"
          placeholder="example@email.com"
          value={formData.email}
          className="w-full text-sm text-white bg-neutral-900 border border-neutral-300 rounded-[12px] p-4"
          onChange={handleChange}
        />
        {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
      </div>

      {/* GitHub Username */}
      <div className="group groups">
        <label className="block text-[18px] md:text-[22px] font-[300] text-gray-300 mb-3 mt-7 lg:mt-10">GitHub Username</label>
        <input
          type="text"
          name="githubUsername"
          placeholder="@yourusername"
          value={formData.githubUsername}
          className="w-full text-sm text-white bg-neutral-900 border border-neutral-300 rounded-[12px] p-4"
          onChange={handleChange}
        />
        {errors.githubUsername && <p className="text-red-500 text-xs">{errors.githubUsername}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-3 mt-8 md:mt-12 bg-[#F96161] text-neutral-900 md:text-[22px] font-semibold rounded-[10px] hover:bg-[#e15050]"
      >
        Generate My Ticket
      </button>
    </form>
  );
};

export default TicketForm;
