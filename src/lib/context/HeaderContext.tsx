"use client";

import { createContext, useState } from "react";

export const HeaderContext = createContext({
  isActive: false,
  setIsActive: (value: boolean) => {},
});

export const HeaderProvider = ({ children }: { children: React.ReactNode }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <HeaderContext.Provider value={{ isActive, setIsActive }}>
      {children}
    </HeaderContext.Provider>
  );
};
