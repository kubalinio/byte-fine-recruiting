import { createContext } from "react";

import { AuthContextValue } from "./auth-context.types";

export const AuthContext = createContext<AuthContextValue | undefined>(
  undefined
);
