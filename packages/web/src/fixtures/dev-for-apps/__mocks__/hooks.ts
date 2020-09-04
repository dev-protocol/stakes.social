export const useGetUser = () => {
  return {
    displayName: 'Get Your Display Name'
  }
}

export const usePostUser = () => {
  return {
    usePostUser: async () => {
      return { displayName: 'Post Your Display Name' }
    }
  }
}

export const useGetPropertyTags = () => {
  return {
    tags: ['dummy', 'tag']
  }
}

export const usePostPropertyTags = () => {
  return {
    usePostPropertyTags: async () => {
      return { tags: ['dummy', 'post', 'tag'] }
    }
  }
}
