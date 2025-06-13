import { HandleErrors, kyClinet } from "@/lib/utils";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

export const UseSchoolRegisterForCompetitions = () => {
  const mutation = useMutation({
    mutationFn: (competitionId: string) =>
      kyClinet.post(`/schools/competitions/create`, {
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
  const query = useQuery({
    queryKey: ["get-school-competitions/all"],
    queryFn: () =>
      kyClinet
        .get(`/schools/competitions`, {
          credentials: "include",
        })
        .json(),
    retry: false,
  });

  return query;
};
