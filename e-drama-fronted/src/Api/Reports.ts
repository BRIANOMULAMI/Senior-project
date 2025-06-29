import type {
  AdminStatisticsResponse,
  JudgeWithCompetitionsResponse,
} from "@/Types/types";
import { kyClinet } from "@/Utils";
import { useQuery } from "@tanstack/react-query";

export const UseAdminGetCountReports = () => {
  return useQuery<AdminStatisticsResponse>({
    queryKey: ["admin-count-reports"],
    queryFn: async () =>
      kyClinet
        .get("v1/reports/count-stats", {
          credentials: "include",
        })
        .json(),
  });
};

export const UseAdminGetJudgesWithCompetitions = () => {
  return useQuery<JudgeWithCompetitionsResponse[]>({
    queryKey: ["admin-judges-with-competitions"],
    queryFn: async () =>
      kyClinet
        .get("v1/reports/judges-assigned-competitions", {
          credentials: "include",
        })
        .json(),
  });
};
