export const BASE_URL = import.meta.env.VITE_BACKEND_URL!;
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { UseQueryProviderClientHook } from "@/Utils/QueryClientHook";
import { HandleErrors, kyClinet } from "../Utils";
import type { UserProps } from "../pages/SignupPage";

export const UseAuthRegister = () => {
  const mutation = useMutation({
    mutationFn: (formData: UserProps) =>
      kyClinet
        .post(`v1/auth/register`, {
          json: formData,
        })
        .json(),
    onSuccess: () => {
      toast.success("Account created user");
    },
    onError: (error) =>
      HandleErrors({
        e: error,
        message: "Unable to create user account",
      }),
  });
  return mutation;
};

export const UseAuthLogin = () => {
  const { queryClient } = UseQueryProviderClientHook();
  const mutation = useMutation({
    mutationFn: (formData: Pick<UserProps, "email" | "password">) =>
      kyClinet
        .post("v1/auth/login", {
          credentials: "include",
          json: formData,
        })
        .json(),
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: ["validate-token"],
        }),
        queryClient.invalidateQueries({
          queryKey: ["user-role"],
        }),
      ]);
      toast.success("Login Success");
    },

    onError: (e) =>
      HandleErrors({
        e,
        message: "Failed to authenticate user",
      }),
  });

  return mutation;
};

export const UseAuthSignOut = () => {
  const { queryClient } = UseQueryProviderClientHook();
  const AuthLogout = async () => {
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
    mutationFn: AuthLogout,
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
