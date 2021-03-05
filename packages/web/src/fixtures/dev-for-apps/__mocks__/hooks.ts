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

export const useGetIncubators = () => {
  return {
    data: [
      {
        id: 1,
        name: 'IPFS',
        verifier_id: 'ipfs/go-ipfs',
        property: {
          id: 69,
          address: '0x0',
          name: 'IPFS',
          description: 'A peer-to-peer hypermedia protocol to make the web faster, safer, and more open.',
          links: {
            id: 62,
            github: 'https://github.com/ipfs/ipfs',
            website: 'https://ipfs.io/',
            twitter: null
          },
          cover_image: null,
          avatar: null
        }
      },
      {
        id: 2,
        name: 'IPFS',
        verifier_id: 'ipfs/go-ipfs',
        property: {
          id: 69,
          address: '0x0',
          name: 'IPFS',
          description: 'A peer-to-peer hypermedia protocol to make the web faster, safer, and more open.',
          links: {
            id: 62,
            github: 'https://github.com/ipfs/ipfs',
            website: 'https://ipfs.io/',
            twitter: null
          },
          cover_image: null,
          avatar: null
        }
      },
      {
        id: 3,
        name: 'IPFS',
        verifier_id: 'ipfs/go-ipfs',
        property: {
          id: 69,
          address: '0x0',
          name: 'IPFS',
          description: 'A peer-to-peer hypermedia protocol to make the web faster, safer, and more open.',
          links: {
            id: 62,
            github: 'https://github.com/ipfs/ipfs',
            website: 'https://ipfs.io/',
            twitter: null
          },
          cover_image: null,
          avatar: null
        }
      }
    ]
  }
}
