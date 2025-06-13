import { HandleErrors, kyClinet } from "@/lib/utils";
import {
  CreateCompetitonsPayload,
  DeleteJudge,
  UpdateCompetitionPayload,
} from "@/Types/Types";
import { useQuery, useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const UseAdminCreateCompetiton = () => {
  const mutation = useMutation({
    mutationFn: async (formData: CreateCompetitonsPayload) => {
      kyClinet
        .post(`admin/competitions/create`, {
          credentials: "include",
          json: formData,
        })
        .json<{ message: string }>();
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
  const query = useQuery({
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
        .put(`/admin/competitions/update`, {
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
        .put(`/admin/competitions/remove-judge`, {
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
    mutationFn: (formData: DeleteJudge) =>
      kyClinet
        .put(`/admin/competitions/remove-judge`, {
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

export const AdminDeleteCompetition = () => {
  const mutation = useMutation({
    mutationFn: (id: string) =>
      kyClinet
        .delete(`admin/competitions/delete/${id}`, {
          credentials: "include",
        })
        .json<{ message: string }>(),
    onSuccess: () => {
      toast.success("Successfully deleted competition");
    },
    onError: (e) =>
      HandleErrors({ e, message: "Failed to delete competition" }),
  });
  return mutation;
};
