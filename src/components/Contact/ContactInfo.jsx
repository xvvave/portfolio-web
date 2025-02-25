// ContactInfo.jsx
import React from 'react';

const ContactInfo = () => {
  return (
    <div className="mt-6 space-y-4">
      <ContactItem icon="" text="latta.romero@gmail.com" />
      <ContactItem icon="" text="Let's connect on LinkedIn" />
      <ContactItem icon="" text="xvvave #0000" />
    </div>
  );
};

// ContactItem.tsx
const ContactItem = ({ icon, text }) => {
  return (
    <div className="flex items-center space-x-4">
      <span className="text-xl">{icon}</span>
      <p className="text-gray-300">{text}</p>
    </div>
  );
};

export default ContactInfo;