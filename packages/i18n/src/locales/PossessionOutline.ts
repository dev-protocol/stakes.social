import { makeLocaleJson } from './utility'

type PossessionOutlineTranslation = {
  totalRewards: string
}

export const possessionOutlineTranslationKeys: {
  [K in keyof PossessionOutlineTranslation]: keyof PossessionOutlineTranslation
} = {
  totalRewards: 'totalRewards'
}

const possessionOutlineTranslationEN: PossessionOutlineTranslation = {
  totalRewards: 'Total Reward'
}

const possessionOutlineTranslationJP: PossessionOutlineTranslation = {
  totalRewards: '総報酬'
}

export const makePossessionOutlineLocale = async () => {
  await makeLocaleJson('en/PossessionOutline.json', possessionOutlineTranslationEN)
  await makeLocaleJson('jp/PossessionOutline.json', possessionOutlineTranslationJP)
}
