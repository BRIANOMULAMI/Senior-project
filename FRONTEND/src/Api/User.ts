import { useQuery } from "@tanstack/react-query";
import ky from "ky";

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
    staleTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
    retry: false,
  });

  return query;
};
