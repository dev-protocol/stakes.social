export const useGetTags = () => {
  return {
    data: [
      { id: 1, name: 'dummy' },
      { id: 2, name: 'tag' }
    ]
  }
}

export const usePostTag = () => {
  return {
    postTag: async () => {
      return { name: 'dummy' }
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
    data: {
      id: 'id',
      name: 'name',
      description: 'description',
      cover_image: 'cover_image',
      tags: [
        {
          id: 1,
          name: 'tag'
        }
      ]
    }
  }
}

export const useUpdateProperty = () => {
  return {
    putPropertyHandler: async () => {
      return { name: 'dummy-property' }
    }
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
