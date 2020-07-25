import { promises as fs } from 'fs'
import Prettier from 'prettier'
import { commonTranslationEN, commonTranslationJA } from './Common'

const basePath = `${__dirname}/../../../web/public/locales`

export const makeLocaleJson = async (filePath: string, data: any) =>
  fs.writeFile(`${basePath}/${filePath}`, Prettier.format(JSON.stringify(data), { parser: 'json' }))

const run = async () => {
  await makeLocaleJson('en/Common.json', commonTranslationEN)
  await makeLocaleJson('ja/Common.json', commonTranslationJA)
}

run()
