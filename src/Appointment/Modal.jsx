import React from 'react';

const Modal = ({ isOpen, onClose, selectedService, selectedDate, selectedTime }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg w-[90%] max-w-[400px] p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">{selectedService.name}</h2>
          <button
            onClick={onClose}
            className="text-white py-1 px-3 hover:bg-opacity-70 rounded-full bg-[#07332F] text-[20px] font-bold hover:text-gray-800"
          >
            &times;
          </button>
        </div>

        {/* Modal Content */}
        <div className="space-y-4">
          <div className="bg-gray-100 rounded-lg px-4 py-2">
          {new Intl.DateTimeFormat('en-US', {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          }).format(selectedDate)}
          </div>
          <div className="bg-gray-100 rounded-lg px-4 py-2">
            {selectedTime}
          </div>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <button className="bg-[#07332F] text-white font-bold w-full py-2 rounded-lg mt-4 hover:opacity-90">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Modal;
