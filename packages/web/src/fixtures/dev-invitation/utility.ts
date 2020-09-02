import { BaseUrl } from './cache-path'

export interface InvitationResult {
  success: boolean
}

export const postInvitation = (
  asset: string,
  email: string,
  discord: string,
  signMessage: string,
  marketAddress: string,
  signature?: string
): Promise<InvitationResult> =>
  fetch(`${BaseUrl}/invitation`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({
      asset: asset,
      email: email,
      discord: discord,
      signature: signature,
      message: signMessage,
      market: marketAddress
    })
  }).then(res => res.json())
