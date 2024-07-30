import React, { createContext } from "react"

const defaultlogOut = () => {
    console.log('log out');
}


const defaultUser = {
    email: '',
    password: '',
    isLoggedIn: ''
};

const UserContext = createContext({
    user: defaultUser,
    logoOut: defaultlogOut
});

export default UserContext;