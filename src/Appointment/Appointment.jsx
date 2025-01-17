import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import pillImg from '../assets/bg-pill2.png';
import vectorImg from '../assets/Vector.png';
import appointmentChair from '../assets/appointment-chair.png';
import appointmentBg from '../assets/appointment-bg.png';
import orthodonticsImg from '../assets/orthodontics.png';
import cosmeticImg from '../assets/cosmetic1.png';
import cleaningImg from '../assets/cleaning.png';
import cavityImg from '../assets/cavity.png';
import pediatricImg from '../assets/pediatric.png';
import oralImg from '../assets/oral.png';
import "./CalendarStyles.css"

const services = [
  { id: 1, name: 'Teeth Orthodontics', icon: orthodonticsImg },
  { id: 2, name: 'Cosmetic Dentistry', icon: cosmeticImg },
  { id: 3, name: 'Teeth Cleaning', icon: cleaningImg },
  { id: 4, name: 'Cavity Protection', icon: cavityImg },
  { id: 5, name: 'Pediatric Dental', icon: pediatricImg },
  { id: 6, name: 'Oral Surgery', icon: oralImg },
];

const Appointment = () => {
  const [value, onChange] = useState(new Date());
  const [selectedService, setSelectedService] = useState(null);
  const [bookingSlots, setBookingSlots] = useState([]);

  const generateRandomSlots = () => {
    const numSlots = Math.floor(Math.random() * 6) + 1; 
    const slots = [];
    for (let i = 0; i < numSlots; i++) {
      const hour = Math.floor(Math.random() * (22 - 9 + 1)) + 9; 
      const minute = Math.random() > 0.5 ? '00' : '30'; 
      const period = hour >= 12 ? 'PM' : 'AM';
      const displayHour = hour > 12 ? hour - 12 : hour;
      slots.push(`${displayHour}:${minute} ${period}`);
    }
    return slots;
  };

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setBookingSlots(generateRandomSlots());
  };

  return (
    <div>
      {/* Header Section */}
      <div className="headerDiv bg-[#07332F] h-[50vh] w-full">
        <div className="w-[95%] lg:w-[1150px] h-full mx-auto flex flex-col justify-center items-start relative">
          <img
            className="absolute bottom-0 left-0 rotate-180 w-[200px]"
            src={vectorImg}
            alt=""
          />
          <p className="text-white text-[16px]">Home / Appointment</p>
          <p className="text-white text-[30px] font-bold mt-3">Appointment</p>
          <img
            className="absolute -right-20 w-[200px] top-16"
            src={pillImg}
            alt=""
          />
        </div>
      </div>

      {/* Appointment Date Section */}
      <div
        className="appointmentDateDiv bg-cover bg-center bg-no-repeat h-screen w-full flex justify-center items-center"
        style={{ backgroundImage: `url(${appointmentBg})` }}
      >
        <div className="w-[95%] lg:w-[1150px] h-full mx-auto flex justify-between items-center">
          <div className="w-[40%] flex items-center justify-center bg-white p-4 rounded-lg shadow-lg">
            <Calendar onChange={onChange} value={value} />
          </div>
          <div className="w-[60%] flex justify-center items-center">
            <img
              className="w-full max-w-[500px] object-cover"
              src={appointmentChair}
              alt="Appointment Chair"
            />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="w-[95%] lg:w-[1150px] h-full mx-auto pb-32">
        <p className="text-[20px] text-[#F7A582] text-center">
          Available Services on{' '}
          {new Intl.DateTimeFormat('en-US', {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          }).format(value)}
        </p>
        <h1 className="text-[32px] text-[#1e1e1e] font-bold py-5 text-center">
          Please Select a Service
        </h1>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {services.map((service) => (
            <div
              key={service.id}
              className={`rounded-xl px-12 py-6 flex items-center gap-4 cursor-pointer hover:scale-105 transition-all duration-200 ease-in bg-white gridShadows ${
                selectedService?.id === service.id ? 'border-2 border-[#F7A582]' : ''
              }`}
              onClick={() => handleServiceClick(service)}
            >
              <img className="w-[20%]" src={service.icon} alt={service.name} />
              <h3 className="text-[#1e1e1e] w-[60%] font-bold text-[22px]">
                {service.name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Section */}
      {selectedService && (
        <div className="w-[95%] lg:w-[1150px] h-full mx-auto pb-32">
          <h1 className="text-[32px] text-[#1e1e1e] font-bold py-5 text-center">
            Available Slots for {selectedService.name}
          </h1>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
            {bookingSlots.map((slot, index) => (
              <div
                key={index}
                className="rounded-xl px-12 py-6 flex flex-col justify-center items-center gap-4 cursor-pointer transition-all duration-200 ease-in bg-white gridShadows"
              >
                <img
                  className="w-[20%]"
                  src={selectedService.icon}
                  alt={selectedService.name}
                />
                <h3 className="text-[#1e1e1e] font-bold text-[22px] text-center">
                  {selectedService.name}
                </h3>
                <p className="text-[#1e1e1e] font-bold text-[16px] text-center mt-2">
                  {slot}
                </p>

                <button className="text-white text-[16px] font-bold bg-[#F7A582] px-6 py-3 hover:opacity-70 transition-opacity duration-300 ease-in-out rounded-lg mt-4 w-full">
                  Book Appointment
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Appointment;
