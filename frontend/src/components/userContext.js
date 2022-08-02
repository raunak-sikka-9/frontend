import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({children, currentUser}) => {

    const [loggedIn, setLoggedIn] = useState(currentUser !== null);

    return (
        <UserContext.Provider value={{loggedIn, setLoggedIn}}>
            {children}
        </UserContext.Provider>
    )
};