import { BaseUrl } from './cache-path'

export interface InvitationResult {
  success: boolean
}

export const postInvitation = ({
  asset,
  email,
  discord,
  signMessage,
  market,
  name,
  role,
  url,
  useCase,
  ask,
  newsletter,
  signature
}: {
  asset: string
  email: string
  discord: string
  signMessage: string
  market: string
  name: string
  role: string
  url: string
  useCase: string
  ask: string
  newsletter?: boolean
  signature?: string
}): Promise<InvitationResult> =>
  fetch(`${BaseUrl}/invitation`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({
      asset,
      email,
      discord,
      signature,
      name,
      role,
      url,
      useCase,
      ask,
      market,
      newsletter,
      message: signMessage
    })
  }).then(res => res.json())
