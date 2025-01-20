import React, { useContext } from 'react';
import { AuthContext } from '../Authentication/AuthProvider/AuthProvider';
import useAxiosInstance from './useAxiosInstance';
import { useQuery } from '@tanstack/react-query';

const useAppointmentData = () => {
  let { user } = useContext(AuthContext);
  let axiosInstance = useAxiosInstance();
  let userEmail = user?.email

  const { data: appointmentData, refetch } = useQuery({
    queryKey: ['appointments', user?.email],
    queryFn: async () => {
      const response = await axiosInstance.get(`/userAppointments?email=${userEmail}`);
      return response.data;
    },
    enabled: !!user?.email,  
  });

  return {
    appointmentData,
    refetch
  };
};

export default useAppointmentData;
