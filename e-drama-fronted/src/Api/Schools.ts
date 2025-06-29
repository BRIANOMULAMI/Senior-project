import { HandleErrors, kyClinet } from "../Utils/index";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import type {
  CompetitionData,
  CompetitionRankingResponse,
  SchoolCompetitionResultsResponse,
  SchoolStatisticsReport,
} from "../Types/types";

export const UseSchoolRegisterForCompetitions = () => {
  const mutation = useMutation({
    mutationFn: (competitionId: string) =>
      kyClinet.post(`schools/competitions/create`, {
        json: { competitionId },
        credentials: "include",
      }),

    onSuccess: () => {
      toast.success("Successfully registered for competition");
    },
    onError: (e) =>
      HandleErrors({ e, message: "Failed to register for competition" }),
  });
  return mutation;
};

export const UseSchoolsViewTheirCompetitions = () => {
  const query = useQuery<CompetitionData[]>({
    queryKey: ["get-school-competitions/all"],
    queryFn: () =>
      kyClinet
        .get(`schools/competitions/all`, {
          credentials: "include",
        })
        .json(),
    retry: false,
  });

  return query;
};

export const UseSchoolsGetParticipationResults = () => {
  return useQuery<SchoolCompetitionResultsResponse[]>({
    queryKey: ["schools-get-participation-results"],
    queryFn: async () =>
      kyClinet
        .get("schools/competitions/competition-results", {
          credentials: "include",
        })
        .json(),
  });
};

export const UseSchoolGetStatistics = () => {
  return useQuery<SchoolStatisticsReport>({
    queryKey: ["schools-get-statistics"],
    queryFn: async () =>
      await kyClinet
        .get("schools/competitions/school-reports", {
          credentials: "include",
        })
        .json(),
  });
};

export const UseSchoolsGetCompetitionRankings = (id: string) => {
  return useQuery<CompetitionRankingResponse[]>({
    queryKey: ["schools-get-competition-rankings"],
    queryFn: async () =>
      await kyClinet
        .get(`schools/competitions/school-competition-rankings/${id}`, {
          credentials: "include",
        })
        .json(),
    enabled: !!id,
  });
};
