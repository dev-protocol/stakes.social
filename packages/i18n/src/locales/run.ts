import { promises as fs } from 'fs'
import { possessionOutlineTranslationEN, possessionOutlineTranslationJP } from './PossessionOutline'

const basePath = `${__dirname}/../../../web/public/locales`

export const makeLocaleJson = async (filePath: string, data: any) =>
  fs.writeFile(`${basePath}/${filePath}`, JSON.stringify(data))

const run = async () => {
  await makeLocaleJson('en/PossessionOutline.json', possessionOutlineTranslationEN)
  await makeLocaleJson('jp/PossessionOutline.json', possessionOutlineTranslationJP)
}

run()
