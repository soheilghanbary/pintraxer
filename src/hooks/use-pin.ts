import { createPin, getPin } from "@services/pin"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"

export const useCreatePin = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ data, files }: { data: any; files: File[] }) => {
      const formData = new FormData()
      for (const key of Object.keys(data)) {
        formData.append(key, (data as Record<string, Blob | string>)[key])
      }
      formData.append("files", files[0])
      return createPin(formData)
    },
    onSettled(data) {
      console.log(data)
      toast.success("Pin has been Created!")
    },
  })
}

export const usePin = (id: string) => {
  return useQuery({
    queryKey: ["pin"],
    queryFn: () => getPin(id),
  })
}
