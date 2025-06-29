import { HandleErrors, kyClinet } from "@/Utils";
import { useMutation, useQuery } from "@tanstack/react-query";
import ky from "ky";
import { toast } from "sonner";

const BASE_URL = import.meta.env.VITE_BACKEND_URL!;
export interface JudgeType {
  name: string;
  email: string;
  role: "ADMIN" | "JUDGE" | "SCHOOL";
}
export const UseGetUserRole = () => {
  const query = useQuery<JudgeType>({
    queryKey: ["user-role"],
    queryFn: () =>
      ky
        .get(`${BASE_URL}/api/v1/user/loggedin-user`, {
          credentials: "include",
        })
        .json(),
  });

  return query;
};

export const UseUserSendVerifyEmail = () => {
  return useMutation({
    mutationFn: async (email: string) =>
      await kyClinet.post(`v1/user/verify-email/${email}`).json(),
    onSuccess: () => {
      toast.success("Successfully sent verification email");
    },
    onError: (e) =>
      HandleErrors({ e, message: "Failed to send verification code" }),
  });
};
export const UseUserVerifyCode = () => {
  return useMutation({
    mutationFn: async (formData: { email: string; code: string }) =>
      await kyClinet
        .post(`v1/user/verify-code/${formData.email}`, {
          json: formData,
        })
        .json(),
    onSuccess: () => {
      toast.success("Successfully Verifiied your email");
    },
    onError: (e) => HandleErrors({ e, message: "failed to verify email" }),
  });
};
export const UseChangePassword = () => {
  return useMutation({
    mutationFn: async (formData: {
      email: string;
      newPassword: string;
      code: string;
    }) =>
      await kyClinet
        .post(`v1/user/change-password/${formData.email}`, {
          json: formData,
        })
        .json(),
    onSuccess: () => {
      toast.success("Successfully Changed your password");
    },
    onError: (e) => HandleErrors({ e, message: "failed to change password" }),
  });
};
