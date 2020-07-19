export const COMMON_NAMESPACE = 'Common'

enum CommonTranslationKeys {
  totalRewards
}

type CommonTranslation = Record<keyof typeof CommonTranslationKeys, string>

export const commonTranslationKeys = Object.keys(CommonTranslationKeys).reduce(
  (allKeys, key) => ({ ...allKeys, [key]: key }),
  {} as CommonTranslation
)

export const commonTranslationEN: CommonTranslation = {
  totalRewards: 'Total Reward'
}

export const commonTranslationJA: CommonTranslation = {
  totalRewards: '総報酬'
}
