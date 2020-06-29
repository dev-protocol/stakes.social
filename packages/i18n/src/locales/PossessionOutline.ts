export const POSSESSION_OUTLINE_NAMESPACE = 'PossessionOutline'

const POSSESION_OUTLINE_TOTAL_REWARDS = 'totalRewards'

type PossessionOutlineTranslation = {
  [POSSESION_OUTLINE_TOTAL_REWARDS]: string
}

export const possessionOutlineTranslationKeys: {
  [K in keyof PossessionOutlineTranslation]: keyof PossessionOutlineTranslation
} = {
  totalRewards: POSSESION_OUTLINE_TOTAL_REWARDS
}

export const possessionOutlineTranslationEN: PossessionOutlineTranslation = {
  totalRewards: 'Total Reward'
}

export const possessionOutlineTranslationJP: PossessionOutlineTranslation = {
  totalRewards: '総報酬'
}
