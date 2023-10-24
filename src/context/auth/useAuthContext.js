import { useContext } from 'react';

import { AuthContext } from './authProvider'

export const useAuthContext = () => useContext(AuthContext)