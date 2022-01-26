import React, { useContext, useState, useEffect } from 'react';
import { checkAccessToken } from '../utils/Auth';

/**
 * Sources: https://github.com/kentcdodds/bookshelf/blob/main/src/context/auth-context.js
 * https://github.com/CareYourPets/frontend/blob/master/src/contexts/UserContext.jsx
 * 
 */

const defaultProps = {
    email: '',
    role: '',
    isAuth: false,
    isFetching: true,
}

const defaultContextProps = {
    ...defaultProps,
    handleUser: Function.prototype()
};

const UserContext = React.createContext(defaultContextProps);

const UserProvider = props => {
    // user is the state
    // handleUser is setState equivalent
    const [user, handleUser] = useState(defaultProps);

    const checkUserAuth = async () => {
        handleUser({ ...user, isFetching: true });
        try {
            const { email, role } = await checkAccessToken();
            handleUser({ email, role, isAuth: true, isFetching: false });
        } catch {
            handleUser({ ...user, isAuth: false, isFetching: false });
        }
    };

    // useEffect is the componentDidUpdate and componentDidMount equivalent 
    useEffect(() => {
        checkUserAuth();
    }, []);

    return (
        <UserContext.Provider value={{ user, handleUser }} {...props}/>
    )
};

const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a provider');
    }
    return context; 
}

export { UserProvider, useUser, UserContext };

