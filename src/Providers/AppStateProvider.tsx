import { createContext, PropsWithChildren, useState } from "react";

interface AppStateProps {
  path: string;
  setPath: React.Dispatch<React.SetStateAction<string>>;
}

export const AppStateContext = createContext({} as AppStateProps);
export const AppStateProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [path, setPath] = useState("/cruise2023");
  return (
    <AppStateContext.Provider value={{ path, setPath }}>
      {children}
    </AppStateContext.Provider>
  );
};
