import React, { useState, createContext, useEffect, FC } from "react";

export type AuthUser = {
  name: string;
  email: string;
  token: string;
};

type UserContextProviderProps = {
  children: React.ReactNode;
};

type UserContextType = {

  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;

}



const UserContext = createContext<UserContextType | null>(null);

const UserProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    // return setUser(JSON.parse(window.localStorage.getItem("tokenLogin")));
  }, []);

  return (
    <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
  );
};

export { UserContext, UserProvider };
