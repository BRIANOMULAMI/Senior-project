import {
  type CompetitionRequest,
  type CreateCompetitonsPayload,
  type DeleteJudge,
  type FestivalEvent,
  type PerfomersResponse,
  type UpdateCompetitionPayload,
} from "../Types/types";
import { useQuery, useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { HandleErrors, kyClinet } from "../Utils";
import { UseQueryProviderClientHook } from "../Utils/QueryClientHook";

export const UseAdminCreateCompetiton = () => {
  const mutation = useMutation({
    mutationFn: async (formData: CreateCompetitonsPayload) => {
      await kyClinet
        .post(`admin/competitions/create`, {
          credentials: "include",
          json: formData,
        })
        .json();
    },
    onSuccess: async () => {
      toast.success("Successfully created competition");
    },
    onError: (e) =>
      HandleErrors({ e, message: "Failed to create competition" }),
  });
  return mutation;
};

export const UseAdminGetAllCompetitions = () => {
  const query = useQuery<FestivalEvent[]>({
    queryKey: ["get-all-competitions"],
    queryFn: () =>
      kyClinet
        .get(`admin/competitions/all`, {
          credentials: "include",
        })
        .json(),
    retry: false,
  });
  return query;
};

export const UseAdminUpdateCompetition = () => {
  const mutation = useMutation({
    mutationFn: (formData: UpdateCompetitionPayload) =>
      kyClinet
        .put(`admin/competitions/update/${formData.id}`, {
          json: formData,
          credentials: "include",
        })
        .json<{ message: string }>(),
    onSuccess: () => {
      toast.success("Successfully updated competition");
    },
    onError: (e) =>
      HandleErrors({ e, message: "Failed to update competition" }),
  });
  return mutation;
};

export const UseAdminRemoveJudge = () => {
  const mutation = useMutation({
    mutationFn: (formData: DeleteJudge) =>
      kyClinet
        .put(`admin/competitions/remove-judge`, {
          json: formData,
          credentials: "include",
        })
        .json<{ message: string }>(),
    onSuccess: () => {
      toast.success("Successfully removed judge");
    },
    onError: (e) =>
      HandleErrors({
        e,
        message: "Failed to remove judge",
      }),
  });
  return mutation;
};
export const UseAdminAddJudge = () => {
  const mutation = useMutation({
    mutationFn: (formData: { competitionId: string; judgeId: string }) =>
      kyClinet
        .put(`admin/competitions/add-judge`, {
          json: formData,
          credentials: "include",
        })
        .json<{ message: string }>(),
    onSuccess: () => {
      toast.success("Judge added Successfully");
    },
    onError: (e) =>
      HandleErrors({
        e,
        message: "Failed to add judge",
      }),
  });
  return mutation;
};

export const UseAdminDeleteCompetition = () => {
  const { queryClient } = UseQueryProviderClientHook();
  const mutation = useMutation({
    mutationFn: (id: string) =>
      kyClinet
        .delete(`admin/competitions/delete/${id}`, {
          credentials: "include",
        })
        .json<{ message: string }>(),
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: ["get-all-competitions"],
        }),
      ]);
      toast.success("Successfully deleted competition");
    },
    onError: (e) =>
      HandleErrors({ e, message: "Failed to delete competition" }),
  });
  return mutation;
};

export const UseAdminGetCompetitionApplicationRequests = () => {
  return useQuery<CompetitionRequest[]>({
    queryKey: ["get-competition-application-requests"],
    queryFn: async () =>
      await kyClinet
        .get("schools/competitions/all-requests", {
          credentials: "include",
        })
        .json(),
  });
};

export const UseAdminChangeParticipationStatus = () => {
  return useMutation({
    mutationFn: async (formData: {
      id: string;
      status: "APPROVED" | "DENIED" | "PENDING";
    }) =>
      await kyClinet.put(`schools/competitions/approve-school/${formData.id}`, {
        credentials: "include",
        json: { status: formData.status },
      }),
    onSuccess: () => {
      toast.success("Successfully updated competition");
    },
    onError: (e) =>
      HandleErrors({
        e,
        message: "Failed to update request status",
      }),
  });
};

export const UseAdminDeleteCompetitionParticipant = () => {
  return useMutation({
    mutationFn: async (id: string) =>
      kyClinet
        .delete(`schools/competitions/delete-participant/${id}`, {
          credentials: "include",
        })
        .json(),
    onSuccess: () => {
      toast.success("Participant Deleted Succecifully");
    },
    onError: (e) =>
      HandleErrors({
        e,
        message: "Failed to delete participant",
      }),
  });
};

export const UseJudgeGetCompetitonPerfomers = (id: string) => {
  return useQuery<PerfomersResponse[]>({
    queryKey: ["get-perfomers", id],
    queryFn: async () =>
      await kyClinet
        .get(`v1/judge/get-school-competitions/${id}`, {
          credentials: "include",
        })
        .json(),
    enabled: !!id,
  });
};
