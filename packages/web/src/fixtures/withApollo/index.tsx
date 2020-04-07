/* eslint-disable react/display-name */
import React from 'react'
import withApollo from 'next-with-apollo'
import { NextPageContext } from 'next'
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory'
import { ApolloLink } from 'apollo-link'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { onError, ErrorHandler } from 'apollo-link-error'
import { ApolloProvider } from 'react-apollo'

export const errorHandler = (_?: NextPageContext): ErrorHandler => ({ graphQLErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.some(({ extensions }) => {
      console.error(extensions)
    })
  }
}

const isBrowser = typeof window !== 'undefined'

export default withApollo<NormalizedCacheObject>(
  ({ ctx, headers }) => {
    const withHttp = createHttpLink({
      uri: `${process.env.API_ORIGIN}/graphql`, // Server URL (must be absolute),
      ...(!isBrowser && { fetch }),
      headers,
      credentials: 'same-origin'
    })

    return new ApolloClient({
      connectToDevTools: isBrowser,
      ssrMode: false,
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
