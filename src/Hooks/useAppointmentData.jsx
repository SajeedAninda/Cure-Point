import React, { useContext } from 'react'
import { AuthContext } from '../Authentication/AuthProvider/AuthProvider'
import useAxiosInstance from './useAxiosInstance'
import { useQuery } from '@tanstack/react-query'

const useAppointmentData = () => {
  let { user } = useContext(AuthContext)
  let axiosInstance = useAxiosInstance()

  const { data: appointmentData, refetch } = useQuery({
    queryKey: ['appointments'],
    queryFn: async () => {
      const response = await axiosInstance.get(`/userAppointments`)
      return response.data
    }
  })

  return {
    appointmentData,
    refetch
  }
}

export default useAppointmentData
