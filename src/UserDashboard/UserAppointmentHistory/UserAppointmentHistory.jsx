import React from 'react'
import { FaTrash } from 'react-icons/fa'
import useAppointmentData from '../../Hooks/useAppointmentData'
import useAxiosInstance from '../../Hooks/useAxiosInstance'
import Swal from 'sweetalert2'

const UserAppointmentHistory = () => {
    return (
        <div className='w-[75%] text-[22px] font-bold'>
             History
        </div>
    );
};

export default UserAppointmentHistory;