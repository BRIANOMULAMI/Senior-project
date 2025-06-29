import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import {
  type AvailableJudge,
  type AwardedMarksResponse,
  type AwardMarksProps,
  type CompetitionJudgesResponse,
  type JudgeCompetitionRespone,
  type JudgeStaticsReport,
  type JudgeUser,
} from "../Types/types";
import { UseQueryProviderClientHook } from "../Utils/QueryClientHook";
import { HandleErrors, kyClinet } from "../Utils/index";

interface JudgePayload {
  name: string;
  email: string;
  password: string;
  nationalId: string;
}
export const UseAdminCreateJudge = () => {
  const { queryClient } = UseQueryProviderClientHook();
  const mutation = useMutation({
    mutationFn: async (data: JudgePayload) =>
      kyClinet
        .post(`admin/judges/create`, {
          json: data,
          credentials: "include",
        })
        .json<{ message: string }>(),

    onSuccess: async (data) => {
      await queryClient.invalidateQueries({
        queryKey: ["get-all-judges"],
      });
      toast.success(data.message || "Successfully created judge");
    },

    onError: (e) => HandleErrors({ e, message: "Failed to create judge" }),
  });

  return mutation;
};

export const UseAdminGetAllJudges = () => {
  const query = useQuery<JudgeUser[]>({
    queryKey: ["get-all-judges"],
    queryFn: () =>
      kyClinet
        .get(`admin/judges/all`, {
          credentials: "include",
        })
        .json(),
  });
  return query;
};
export const UseGetAllJudges = () => {
  const query = useQuery<AvailableJudge[]>({
    queryKey: ["get-available-judges"],
    queryFn: () =>
      kyClinet
        .get("admin/competitions/all-for-judges", {
          credentials: "include",
        })
        .json(),
  });
  return query;
};

export const UseAdminUpdateJudge = () => {
  const { queryClient } = UseQueryProviderClientHook();
  const mutation = useMutation({
    mutationFn: async (data: Partial<JudgePayload>) =>
      kyClinet
        .put(`admin/judges/update`, {
          json: data,
          credentials: "include",
        })
        .json<{ message: string }>(),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["get-all-judges"],
      });
      toast.success("Successfully updated judge");
    },
    onError: (e) => HandleErrors({ e, message: "Failed to update judge" }),
  });
  return mutation;
};

export const UseAdminDeleteJudge = () => {
  const { queryClient } = UseQueryProviderClientHook();
  const mutation = useMutation({
    mutationFn: async (id: string) =>
      kyClinet
        .delete(`admin/judges/delete/${id}`, {
          credentials: "include",
        })
        .json<{ message: string }>(),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["get-all-judges"],
      });
      toast.success("Successfully deleted judge");
    },
    onError: (e) => HandleErrors({ e, message: "Failed to delete judge" }),
  });
  return mutation;
};

export const UseJudgeGetAllCompetitons = () => {
  const query = useQuery<JudgeCompetitionRespone[]>({
    queryKey: ["judge-Get-all-competitions"],
    queryFn: () =>
      kyClinet
        .get(`v1/judge/judge-competitions`, {
          credentials: "include",
        })
        .json(),
    retry: false,
  });

  return query;
};

export const UseJudgeAwardMarks = () => {
  return useMutation({
    mutationFn: async (formData: AwardMarksProps) =>
      kyClinet
        .post(`v1/judge/award-marks/${formData.id}`, {
          credentials: "include",
          json: formData,
        })
        .json(),
    onSuccess: () => toast.success("Successfully awarded marks"),
    onError: (e) => HandleErrors({ e, message: "Failed to award marks" }),
  });
};

export const UseJudgeGetAwardedMarks = () => {
  return useQuery<AwardedMarksResponse[]>({
    queryKey: ["judge-awarded-marks"],
    queryFn: async () =>
      await kyClinet
        .get("v1/judge/awarded-marks", {
          credentials: "include",
        })
        .json(),
  });
};

export const UseAdminGetCompetitionJudges = (id: string) => {
  return useQuery<CompetitionJudgesResponse[]>({
    queryKey: ["competition-judges"],
    queryFn: async () =>
      await kyClinet
        .get(`admin/competitions/all-judges-competitions/${id}`, {
          credentials: "include",
        })
        .json(),
  });
};

export const UseJudgeGetStatisticReports = () => {
  return useQuery<JudgeStaticsReport>({
    queryKey: ["judge-statistic-reports"],
    queryFn: async () =>
      await kyClinet
        .get("v1/judge/judges-reports", {
          credentials: "include",
        })
        .json(),
  });
};
