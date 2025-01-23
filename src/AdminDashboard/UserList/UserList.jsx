import React from 'react'
import useAxiosInstance from '../../Hooks/useAxiosInstance'
import { useQuery } from '@tanstack/react-query'
import Swal from 'sweetalert2'

const UserList = () => {
  let axiosInstance = useAxiosInstance()

  const { data: users, isLoading: isUserLoading, refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await axiosInstance.get(`/allUsers`)
      return response.data
    }
  })

  let handleDelete = id => {
      Swal.fire({
        title: 'Do you want to Delete this User?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(result => {
        if (result.isConfirmed) {
          axiosInstance.delete(`/deleteUser/${id}`).then(res => {
            if (res.data.deletedCount) {
              refetch()
              Swal.fire({
                title: 'Deleted!',
                text: 'The User has been deleted.',
                icon: 'success'
              })
            }
          })
        }
      })
    }

  if (isUserLoading) {
    return (
      <div className='text-left text-6xl text-[#191919] font-bold'>
        Loading...
      </div>
    )
  }

  return (
    <div className='w-[75%] text-[22px] px-10 py-6'>
      <h3 className='text-[#191919] text-[22px] font-bold'>
        Total Users: {users?.length}
      </h3>
      {users?.length === 0 ? (
        <div className='text-center text-lg font-semibold text-gray-500'>
          No Users found
        </div>
      ) : (
        <div className='table w-full mt-4'>
          <div className='w-full py-3 grid grid-cols-12 items-center bg-[#E6E6E6] rounded-t-xl text-[#191919] text-[14px] font-bold'>
            <div className='col-span-1 flex justify-center'>#SL</div>
            <div className='col-span-3 flex justify-center'>Name</div>
            <div className='col-span-2 flex justify-center'>Email</div>
            <div className='col-span-2 flex justify-center'>Role</div>
            <div className='col-span-2'>Action</div>
            <div className='col-span-2'>Delete</div>
          </div>

          {users?.map((data, index) => (
            <div
              key={data._id}
              className='w-full py-3 grid grid-cols-12 items-center bg-white text-[#898989] text-[14px] font-semibold'
            >
              <div className='col-span-1 flex justify-center'>{index + 1}</div>
              <div className='col-span-3 flex justify-center'>{data?.name}</div>
              <div className='col-span-2 flex justify-center'>
                {data?.email}
              </div>
              <div className='col-span-2 flex justify-center uppercase'>
                {data?.role}
              </div>
              <div className='col-span-2'>
                <button
                  onClick={() => handleMakeAdmin(data?._id)}
                  className={`px-4 py-3 rounded-lg transition-all duration-150 ${
                    data?.role === 'admin'
                      ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                      : 'bg-[#07332F] text-white hover:bg-opacity-50'
                  }`}
                  disabled={data?.role === 'admin'}
                >
                  Make Admin
                </button>
              </div>
              <div className='col-span-2'>
                <button
                  onClick={() => handleDelete(data?._id)}
                  className={`px-4 py-3 rounded-lg transition-all duration-150 ${
                    data?.role === 'admin'
                      ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                      : 'bg-red-600 text-white hover:bg-opacity-50'
                  }`}
                  disabled={data?.role === 'admin'}
                >
                  Remove User
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default UserList
