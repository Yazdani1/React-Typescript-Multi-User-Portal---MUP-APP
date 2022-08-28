
import React, { useState, createContext, useEffect } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [state, setState] = useState({
    user: {},
    token: "",
  });

  useEffect(() => {
    setState(JSON.parse(window.localStorage.getItem("tokenLogin")));
  }, []);

  return (
    <UserContext.Provider value={[state, setState]}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };


// import React, { useState, createContext, useEffect, FC } from "react";
// import axios from "axios";
// import { API_URL } from "./config";

// export type AuthUser = {
//   name: string;
//   email: string;
//   token: string;
// };

// type UserContextType = {
//   user: AuthUser | null;
//   setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
// };

// type UserContextProviderProps = {
//   children: React.ReactNode;
// };

// // const UserContext = createContext<UserContextType | null>(null);

// const UserContext = createContext({} as UserContextType);

// const UserProvider = ({ children }: UserContextProviderProps) => {
//   // const localToken = JSON.parse(window.localStorage.getItem("tokenLogin"));
//   const [user, setUser] = useState<AuthUser | null>(null);

//   // const [logedinuser, setLogedUser] = useState<React.Dispatch<React.SetStateAction<AuthUser | null>>>();

//   // const getSingleuser = async () => {
//   //   const res = await axios.get(API_URL + "/loged-inuser", {
//   //     headers: {
//   //       Authorization: `Bearer ${localStorage.getItem("tokenLogin")}`,
//   //     },
//   //   });
//   //   setLogedUser(res.data);
//   // };

//   useEffect(() => {
//     const loggedInUser = localStorage.getItem("tokenLogin");
//     if (loggedInUser) {
//       const foundUser = JSON.parse(loggedInUser);
//       setUser(foundUser);
//     }
//   }, []);

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export { UserContext, UserProvider };
