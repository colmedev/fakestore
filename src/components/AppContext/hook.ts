import { useContext } from "react";
import { AppContext, DEFAULT_CONTEXT } from "./Context";

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    console.warn("useAppContext must be used within a AppProvider");
  }
  return context ?? DEFAULT_CONTEXT;
};
