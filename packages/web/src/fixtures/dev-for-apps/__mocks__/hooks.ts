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
