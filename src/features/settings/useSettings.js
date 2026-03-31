import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

export function useSettings() {
  const {
    data: settings,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["settings"], // Name of the table in supabase
    queryFn: getSettings,
  });

  return { settings, isLoading, error };
}
