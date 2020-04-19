export const truncate = (str: string, len: number) => (str.length <= len ? str : str.substr(0, len) + '...')
