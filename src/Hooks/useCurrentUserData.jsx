import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../Authentication/AuthProvider/AuthProvider';
import useAxiosInstance from './useAxiosInstance';

const useCurrentUserData = () => {
    let { user } = useContext(AuthContext);
    let currentUserEmail = user?.email;
    let axiosInstance = useAxiosInstance();

    const { data: userData, isLoading: isUserLoading } = useQuery({
        queryKey: ['userData', currentUserEmail],
        queryFn: async () => {
            const response = await axiosInstance.get(`/userData/${currentUserEmail}`);
            return response.data;
        },
        enabled: !!currentUserEmail,
    });

    return { userData, isUserLoading };
};

export default useCurrentUserData;