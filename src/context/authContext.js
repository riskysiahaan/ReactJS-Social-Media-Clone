import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {
    //TO DO
    setCurrentUser({
      id: 1,
      name: "Yoriichi Tsugikuni",
      profilePicture:
            "https://pict.sindonews.net/webp/480/pena/news/2023/04/18/700/1076201/8-kekuatan-yoriichi-tsugikuni-di-demon-slayer-kimetsu-no-yaiba-ade.webp"
    });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};