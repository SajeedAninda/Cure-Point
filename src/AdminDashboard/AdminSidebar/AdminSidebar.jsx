import React from 'react'
import { FaHome } from 'react-icons/fa'
import { ImUsers } from 'react-icons/im'
import { MdManageAccounts} from 'react-icons/md'
import { RiUserAddFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const AdminSidebar = () => {
  return (
    <div className='bg-white h-full w-[25%] flex flex-col items-center'>
      <Link
        to={'/adminDashboard'}
        className='text-[#898989] font-semibold text-[20px] hover:bg-[#F1F5F9] hover:text-[#191919] transition-all duration-150 w-full py-6 flex justify-center items-center gap-2'
      >
        All Users
        <ImUsers />
      </Link>
      <Link
        to={'/admin/addDoctos'}
        className='text-[#898989] font-semibold text-[20px] hover:bg-[#F1F5F9] hover:text-[#191919] transition-all duration-150 w-full py-6 flex justify-center items-center gap-2'
      >
        Add Doctors
        <RiUserAddFill />
      </Link>

      <Link
        to={'/admin/manageDoctors'}
        className='text-[#898989] font-semibold text-[20px] hover:bg-[#F1F5F9] hover:text-[#191919] transition-all duration-150 w-full py-6 flex justify-center items-center gap-2'
      >
        Manage Doctors
        <MdManageAccounts />
      </Link>

      <Link
        to={'/'}
        className='text-[#898989] font-semibold text-[20px] hover:bg-[#F1F5F9] hover:text-[#191919] transition-all duration-150 w-full py-6 flex justify-center items-center gap-2'
      >
        Home
        <FaHome />
      </Link>
    </div>
  )
}

export default AdminSidebar
