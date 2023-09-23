import { getUser } from "@/services/user"
import { useQuery } from "@tanstack/react-query"

export const useUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(),
  })
}
