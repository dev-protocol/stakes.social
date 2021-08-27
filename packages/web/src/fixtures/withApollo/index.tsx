/* eslint-disable react/display-name */
import React from 'react'
import withApollo from 'next-with-apollo'
import { NextPageContext } from 'next'
import { ApolloClient, InMemoryCache, ApolloLink, NormalizedCacheObject, ApolloProvider } from '@apollo/client'
import { createHttpLink } from '@apollo/client/link/http'
import { onError, ErrorHandler } from '@apollo/client/link/error'

export const errorHandler =
  (_?: NextPageContext): ErrorHandler =>
  ({ graphQLErrors }) => {
    if (graphQLErrors) {
      graphQLErrors.some(({ extensions }) => {
        console.error(extensions)
      })
    }
  }

const isBrowser = typeof window !== 'undefined'

// DUPULICATED
export default withApollo<NormalizedCacheObject>(
  ({ ctx, headers }) => {
    const withHttp = createHttpLink({
      uri: 'https://api.devprotocol.xyz/v1/graphql', // Server URL (must be absolute),
      ...(!isBrowser && { fetch }),
      headers
    })

    return new ApolloClient({
      connectToDevTools: isBrowser,
      link: ApolloLink.from([onError(errorHandler(ctx)), withHttp]),
      cache: new InMemoryCache()
    })
  },
  {
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} />
        </ApolloProvider>
      )
    }
  }
)
