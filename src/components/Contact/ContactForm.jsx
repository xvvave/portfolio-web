// ContactForm.jsx
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full flex flex-col items-center">
      <input 
        type="text" 
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="Full Name" 
        className="w-full p-3 border border-neutral-700 bg-transparent rounded-full text-[16px] font-satoshi-bolditalic tracking-[1%] text-[#E6DADA] placeholder-gray-400" 
      />
      
      <input 
        type="email" 
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email" 
        className="w-full p-3 border border-neutral-700 bg-transparent rounded-full text-[16px] font-satoshi-bolditalic tracking-[1%] text-[#E6DADA] placeholder-gray-400" 
      />
      
      <textarea 
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
        className="w-full p-3 border border-neutral-700 bg-transparent rounded-[20px] h-32 text-[16px] font-satoshi-bolditalic tracking-[1%] text-[#E6DADA] placeholder-gray-400"
      ></textarea>
      
      <button className="w-full bg-gradient-to-r from-[#FF4B1F] from-[72%] to-[#FF9068] to-[100%] text-[#E6DADA] py-3 rounded-full text-[18px] font-satoshi-black tracking-[1%]">
        Send
      </button>
    </form>
  );
};

export default ContactForm;