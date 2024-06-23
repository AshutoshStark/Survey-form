import React, { createContext, ReactNode, useContext, useState } from 'react';

interface User{
  name:string;
  email:string;
  topic:string;
}

interface UserContextType{
  user:User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

const defaultUser: User={name:"Guest",email:"nan",topic:"nan"}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider : React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User>(defaultUser);
  
    return (
      <UserContext.Provider value={{ user, setUser }}>
      {children}
      </UserContext.Provider>
    );
  };
  

  export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
      throw new Error('useUser must be used within a UserProvider');
    }
    return context;
  };