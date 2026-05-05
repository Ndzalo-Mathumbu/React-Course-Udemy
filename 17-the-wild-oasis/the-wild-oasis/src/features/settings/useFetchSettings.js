import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

function useFetchSettings() {
  const {
    data: settingsData,
    error,
    isLoading: loadingSettings,
  } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });

  return { settingsData, error, loadingSettings };
}

export default useFetchSettings;
