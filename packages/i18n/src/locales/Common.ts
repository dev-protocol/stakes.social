export const COMMON_NAMESPACE = 'Common'

const COMMON_TOTAL_REWARDS = 'totalRewards'

type CommonTranslation = {
  [COMMON_TOTAL_REWARDS]: string
}

export const commonTranslationKeys: {
  [K in keyof CommonTranslation]: keyof CommonTranslation
} = {
  totalRewards: COMMON_TOTAL_REWARDS
}

export const commonTranslationEN: CommonTranslation = {
  totalRewards: 'Total Reward'
}

export const commonTranslationJA: CommonTranslation = {
  totalRewards: '総報酬'
}
