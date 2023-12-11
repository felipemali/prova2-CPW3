import { ReactNode, createContext, useState } from "react";

type User = {
  email: string | null;
  photoURL: string | null;
  displayName: string | null;
};
type SetUserFunction = (newValue: User) => void;
type UserType = {
  authTime: number;
  exp: number;
  setAuthTime: (newState: number) => void;
  setExp: (newState: number) => void;
  isSessionValid: () => boolean;
  userr: User;
  setUserr: (newValue: User) => void;
};

const initialValue: UserType = {
  authTime: 0,
  exp: 0,
  setAuthTime: () => {},
  setExp: () => {},
  isSessionValid: () => false,
  userr: { email: "", photoURL: "", displayName: "" },
  setUserr: () => {},
};

export const UserContext = createContext(initialValue);

type UserContextProps = {
  children: ReactNode;
};

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [authTime, setAuthTime] = useState(initialValue.authTime);
  const [exp, setExp] = useState(initialValue.exp);
  const [userr, setUserr] = useState({
    email: "",
    photoURL: "",
    displayName: "",
  });

  return (
    <UserContext.Provider
      value={{
        authTime,
        exp,
        setAuthTime,
        setExp,
        isSessionValid: () => {
          const timestamp = new Date().getTime();
          const diff = exp * 1000 - timestamp;
          return diff > 0;
        },
        userr,
        setUserr: setUserr as SetUserFunction,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
