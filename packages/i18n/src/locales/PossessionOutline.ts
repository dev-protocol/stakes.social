type PossessionOutlineTranslation = {
  totalRewards: string
}

export const possessionOutlineTranslationNamespace = 'PossessionOutline'

export const possessionOutlineTranslationKeys: {
  [K in keyof PossessionOutlineTranslation]: keyof PossessionOutlineTranslation
} = {
  totalRewards: 'totalRewards'
}

export const possessionOutlineTranslationEN: PossessionOutlineTranslation = {
  totalRewards: 'Total Reward'
}

export const possessionOutlineTranslationJP: PossessionOutlineTranslation = {
  totalRewards: '総報酬'
}
