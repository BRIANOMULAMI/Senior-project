import { useInfiniteQuery, useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { JudgeData } from "../Types/Types";
import { UseQueryProviderClientHook } from "@/Hooks/QueryClientHook";
import { HandleErrors, kyClinet } from "@/lib/utils";

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
  const query = useInfiniteQuery<JudgeData>({
    queryKey: ["get-all-judges"],
    queryFn: ({ pageParam }) =>
      kyClinet
        .get(`admin/judges/all${pageParam ? `?cursor=${pageParam}` : ""}`, {
          credentials: "include",
        })
        .json(),
    initialPageParam: null as string | null,
    getNextPageParam: (last) => last.nextCursor,
  });
  return query;
};

export const UseAdminUpdateJudge = () => {
  const { queryClient } = UseQueryProviderClientHook();
  const mutation = useMutation({
    mutationFn: async (data: Partial<JudgePayload> & { id: string }) =>
      kyClinet
        .put(`admin/judges/update/${data.id}`, {
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
