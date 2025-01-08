import { useContext } from "react";
import { AuthContext } from "../context/auth-context/auth-context";

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("AuthContext must be within AuthProvider");
  }

  return context;
};
