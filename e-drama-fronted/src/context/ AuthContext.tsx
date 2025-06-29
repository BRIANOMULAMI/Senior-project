import { createContext, useContext } from "react";
import { UseAuthValidateToken } from "../Api/Auth";
import { UseGetUserRole } from "../Api/User";

interface UserProps {
  name: string;
  email: string;
  role: "ADMIN" | "JUDGE" | "SCHOOL";
}

interface AuthContextProps {
  IsAuthnticated: boolean | undefined;
  isLoading: boolean;
  role: "ADMIN" | "JUDGE" | "SCHOOL" | undefined;
  user: UserProps | undefined;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

type AuthProviderProps = {
  children: React.ReactNode;
};
export const AuthContextProvider = ({ children }: AuthProviderProps) => {
  const { TokenError, isLoading: tokenLoading } = UseAuthValidateToken();
  const { data, isLoading: roleLoading } = UseGetUserRole();
  const IsAuthnticated = !TokenError || roleLoading;
  const isLoading = tokenLoading;
  const role = data?.role || undefined;
  const user = data || undefined;
  return (
    <AuthContext.Provider value={{ IsAuthnticated, isLoading, role, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UseAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("UseAppContext must be used within an AppContextProvider");
  }
  return context;
};
