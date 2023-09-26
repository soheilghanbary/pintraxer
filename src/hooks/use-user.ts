import { useCallback } from "react"
import { getUser, updateUser, uploadFiles } from "@services/user"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useDropzone, type FileWithPath } from "react-dropzone"
import { toast } from "sonner"

export const useUser = (initialUser: TUser) => {
  return useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    initialData: initialUser,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })
}

export const useUpdateUserForm = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (values: TUserForm) => updateUser(values),
    onMutate(data) {
      queryClient.setQueryData(["user"], (oldUser: any) => ({
        ...oldUser,
        ...data,
      }))
      toast.success("User Details has been Updated!")
    },
  })
}

export const useUploadImage = () => {
  // const prevImage = new URL(initialUser.image!).pathname.split("/").pop()!
  const queryClient = useQueryClient()
  const formData = new FormData()

  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    formData.set("files", acceptedFiles[0])
    uploadMutation.mutate(formData)
  }, [])

  const { getRootProps } = useDropzone({
    onDrop,
    multiple: false,
    accept: {},
  })

  const uploadMutation = useMutation({
    mutationFn: (formData: FormData) => uploadFiles(formData),
    onMutate(data) {
      const newImageURL = URL.createObjectURL(data.getAll("files")[0] as File)
      queryClient.setQueryData(["user"], (oldUser: any) => ({
        ...oldUser,
        image: newImageURL,
      }))
    },
    onSettled() {
      toast.success("User Details has been Updated!")
    },
  })

  return { getRootProps, isLoading: uploadMutation.isLoading }
}
