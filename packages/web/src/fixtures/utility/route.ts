export const getPath = (pathName: string): string[] =>
  (pathName.startsWith('/') ? pathName.replace(/^\//, '') : pathName).split('/')
