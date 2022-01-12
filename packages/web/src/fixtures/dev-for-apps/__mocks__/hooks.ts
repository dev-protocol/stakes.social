export const useGetPropertyTags = () => {
  return {
    data: { tags: ['dummy', 'tag'] }
  }
}

export const usePostPropertyTags = () => {
  return {
    usePostPropertyTags: async () => {
      return { tags: ['dummy', 'post', 'tag'] }
    }
  }
}

export const useGetAccount = () => {
  return { name: 'dummy name', biography: 'dummy biography' }
}

export const useCreateAccount = () => {
  return {
    usePostCreateAccount: async () => {
      return { id: 1, name: 'dummy name', biography: 'dummy biography' }
    }
  }
}

export const useUpdateAccount = () => {
  return {
    usePostUpdateAccount: async () => {
      return { id: 1, name: 'dummy name', biography: 'dummy biography' }
    }
  }
}

export const useUploadFile = () => {
  return {
    usePostUploadFile: async () => {
      return { id: 1 }
    }
  }
}

export const useUploadAccountAvatar = () => {
  return {
    upload: async () => {
      return { id: 1 }
    }
  }
}

export const useGetProperty = () => {
  return {
    id: 'id',
    name: 'name',
    description: 'description',
    cover_image: 'cover_image'
  }
}
