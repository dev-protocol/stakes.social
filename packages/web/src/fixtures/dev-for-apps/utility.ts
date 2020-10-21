import { BaseUrl, StrapiBaseUrl } from './cache-path'

export interface UserInformation {
  displayName: string
}

export interface PropertyTags {
  tags: Array<string>
}

export interface Account {
  id: number
  name: string
  biography: string
}

export const getUser = (walletAddress: string): Promise<UserInformation> =>
  fetch(`${BaseUrl}/mainnet/user/${walletAddress}`)
    .then(res => res.json())
    .catch(() => '')

export const postUser = (
  name: string,
  signMessage: string,
  signature: string,
  walletAddress: string
): Promise<UserInformation> =>
  fetch(`${BaseUrl}/mainnet/user/${walletAddress}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({
      signature: signature,
      displayName: name,
      message: signMessage
    })
  }).then(res => res.json())

export const getPropertyTags = (propertyAddress: string): Promise<PropertyTags> =>
  fetch(`${BaseUrl}/mainnet/property/${propertyAddress}/tags`)
    .then(res => res.json())
    .catch(() => '')

export const postPropertyTags = (
  propertyAddress: string,
  tags: string,
  signMessage: string,
  signature: string,
  walletAddress: string
): Promise<PropertyTags> =>
  fetch(`${BaseUrl}/mainnet/property/${propertyAddress}/tags`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({
      tags,
      signature,
      message: signMessage,
      account: walletAddress
    })
  }).then(res => res.json())

export const getAccount = (walletAddress: string): Promise<Array<Account>> =>
  fetch(`${StrapiBaseUrl}/accounts?address=${walletAddress}`)
    .then(res => res.json())
    .catch(() => [])

export const postAccount = (
  signMessage: string,
  signature: string,
  address: string,
  name?: string,
  biography?: string
): Promise<Account> =>
  fetch(`${StrapiBaseUrl}/accounts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({
      name,
      biography,
      address,
      signature,
      signMessage
    })
  }).then(res => res.json())

export const putAccount = (
  signMessage: string,
  signature: string,
  address: string,
  id: number,
  name?: string,
  biography?: string
): Promise<Account> =>
  fetch(`${StrapiBaseUrl}/accounts/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({
      name,
      biography,
      address,
      signature,
      signMessage
    })
  }).then(res => res.json())
