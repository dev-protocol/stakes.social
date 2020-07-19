export const COMMON_NAMESPACE = 'Common'

enum CommonTranslationKeys {
  totalRewards
}

export const commonTranslationKeys = Object.keys(CommonTranslationKeys).reduce(
  (allKeys, key) => ({ ...allKeys, [key]: key }),
  {}
)

type CommonTranslation = Record<keyof typeof CommonTranslationKeys, string>

export const commonTranslationEN: CommonTranslation = {
  totalRewards: 'Total Reward'
}

export const commonTranslationJA: CommonTranslation = {
  totalRewards: '総報酬'
}
