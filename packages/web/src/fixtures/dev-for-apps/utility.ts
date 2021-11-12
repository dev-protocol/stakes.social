import { always } from 'ramda'
import { BaseUrl, StrapiBaseUrl } from './cache-path'

export interface UserInformation {
  displayName: string
}

export interface PropertyTags {
  tags: Array<string>
}

export type ProfileLinks = {
  github?: string
  website?: string
}

export type NullableProfileLinks = ProfileLinks | null

export interface Account {
  id: number
  name: string
  biography: string
  portrait: Image
  links: NullableProfileLinks
  cover_images: Image[]
}

export type ImageFormat = {
  url: string
  width: number
  height: number
  hash: string
  name: string
  mime: string
  size: number
}

export type Image = ImageFormat & {
  id: number
  formats?: {
    thumbnail: ImageFormat
    small: ImageFormat
    medium: ImageFormat
    large: ImageFormat
  }
}

export type NullableImage = Image | null

export type PropertyLinks = {
  github?: string
  twitter?: string
  website?: string
}

export interface Property {
  id: number
  address: string
  name: string
  description: string
  cover_image: NullableImage
  avatar: NullableImage
  links?: PropertyLinks
  error?: string
}

export interface UploadFile {
  id: number
  formats: any
  error?: string
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
    .catch(always([]))

export const postAccount = (
  signMessage: string,
  signature: string,
  address: string,
  name?: string,
  biography?: string,
  links?: ProfileLinks
): Promise<Account> =>
  fetch(`${StrapiBaseUrl}/accounts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({
      name,
      biography,
      links,
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
  biography?: string,
  links?: ProfileLinks
): Promise<Account> =>
  fetch(`${StrapiBaseUrl}/accounts/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({
      name,
      biography,
      links,
      address,
      signature,
      signMessage
    })
  }).then(res => res.json())

export const postUploadFile = (
  signMessage: string,
  signature: string,
  address: string,
  refId: number,
  ref: string,
  field: string,
  file: any,
  path?: string
): Promise<UploadFile> => {
  const formData = new FormData()
  formData.append('signMessage', signMessage)
  formData.append('signature', signature)
  formData.append('address', address)
  formData.append('files', file)
  formData.append('refId', `${refId}`)
  formData.append('ref', ref)
  formData.append('field', field)
  if (path) {
    formData.append('path', path)
  }

  return fetch(`${StrapiBaseUrl}/upload`, {
    method: 'POST',
    body: formData
  }).then(res => res.json())
}

export const deleteUploadFile = (signMessage: string, signature: string, address: string, id: number) => {
  const authToken = `${address};${signature};${signMessage}`
  return fetch(`${StrapiBaseUrl}/upload/files/${id}`, {
    method: 'DELETE',
    headers: {
      'X-Dev-Auth': authToken
    }
  }).then(res => res.json())
}

export const getProperty = (propertyAddress: string): Promise<Array<Property>> =>
  fetch(`${StrapiBaseUrl}/properties?address=${propertyAddress}`)
    .then(res => res.json())
    .catch(() => [])

export const postProperty = (
  signMessage: string,
  signature: string,
  address: string,
  propertyAddress: string,
  name?: string,
  description?: string,
  links?: PropertyLinks
): Promise<Property> =>
  fetch(`${StrapiBaseUrl}/properties`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({
      name,
      description,
      links,
      account_address: address,
      address: propertyAddress,
      signature,
      signMessage
    })
  }).then(res => res.json())

export const putProperty = (
  signMessage: string,
  signature: string,
  address: string,
  propertyAddress: string,
  id: number,
  name?: string,
  description?: string,
  links?: PropertyLinks
): Promise<Property> =>
  fetch(`${StrapiBaseUrl}/properties/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({
      name,
      description,
      links,
      account_address: address,
      address: propertyAddress,
      signature,
      signMessage
    })
  }).then(res => res.json())
