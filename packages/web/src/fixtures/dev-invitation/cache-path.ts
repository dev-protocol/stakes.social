export const BaseUrl = 'https://dev-invitation.azurewebsites.net/api'

export const SWRCachePath = {
  postInvitation: () => `${BaseUrl}/invitation`
} as const
