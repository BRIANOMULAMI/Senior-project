export const BASE_URL = import.meta.env.VITE_BACKEND_URL!;
import { useMutation, useQuery } from "@tanstack/react-query";
import { RegisterType } from "../components/Auth/SignIn/Register";
import { toast } from "sonner";
import { LoginType } from "../components/Auth/SignUp/Login";
import { UseQueryProviderClientHook } from "../Hooks/QueryClientHook";

// const BASE_URL = "http://localhost:3000";

export const UseAuthRegister = () => {
  const AuthRegister = async (formData: RegisterType) => {
    console.log({ BASE_URL });
    const response = await fetch(`${BASE_URL}/api/v1/auth/register`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Failed to create user");
    }
    return data;
  };
  const { mutateAsync: RegisterUser, isPending: isLoading } = useMutation({
    mutationFn: AuthRegister,

    onSuccess: (data) => {
      toast.success(data.message || "Successfully created user");
    },
    onError: (error: Error) => {
      toast.error(error.message || "Failed to create user");
    },
  });
  return { RegisterUser, isLoading };
};

export const UseAuthLogin = () => {
  const { queryClient } = UseQueryProviderClientHook();
  const AuthUserLogin = async (formData: LoginType) => {
    const response = await fetch(`${BASE_URL}/api/v1/auth/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Failed to login user");
    }
    return data;
  };
  const { mutateAsync: LoginUser, isPending: isLoading } = useMutation({
    mutationFn: AuthUserLogin,
    onSuccess: async (data) => {
      await queryClient.invalidateQueries({
        queryKey: ["validate-token"],
      });
      toast.success(data.message || "Successfully logged in user");
    },
    onError: (error: Error) => {
      toast.error(error.message || "Failed to login user");
    },
  });
  return { LoginUser, isLoading };
};

export const UseAuthSignOut = () => {
  const { queryClient } = UseQueryProviderClientHook();
  const AutLogout = async () => {
    const response = await fetch(`${BASE_URL}/api/v1/auth/logout`, {
      method: "POST",
      credentials: "include",
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Failed to logout user");
    }
    return data;
  };
  const { isPending: isLoading, mutateAsync: LogoutUser } = useMutation({
    mutationFn: AutLogout,
    onSuccess: async (data) => {
      await queryClient.invalidateQueries({
        queryKey: ["validate-token"],
      });
      toast.success(data.message || "Successfully logged out user");
    },
    onError: (error: Error) => {
      toast.error(error.message || "Failed to logout user");
    },
  });
  return {
    LogoutUser,
    isLoading,
  };
};

export const UseAuthValidateToken = () => {
  const ValidateToken = async () => {
    const response = await fetch(`${BASE_URL}/api/v1/auth/verify-token`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Failed to logout user");
    }
    return data;
  };
  const { isError: TokenError, isLoading } = useQuery({
    queryKey: ["validate-token"],
    queryFn: ValidateToken,
  });
  return {
    TokenError,
    isLoading,
  };
};
