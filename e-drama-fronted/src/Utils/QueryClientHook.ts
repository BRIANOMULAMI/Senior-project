import { useQueryClient } from "@tanstack/react-query";

export const UseQueryProviderClientHook = () => {
  const queryClient = useQueryClient();
  return { queryClient };
};
