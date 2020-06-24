import { promises as fs } from 'fs'

const basePath = `${__dirname}/../../../web/public/locales`

export const makeLocaleJson = async (filePath: string, data: any) =>
  fs.writeFile(`${basePath}/${filePath}`, JSON.stringify(data))
