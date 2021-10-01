import Express from 'express'
import { NextPageContext } from 'next'
import { DocumentContext } from 'next/document'
import { Store } from 'redux'
import { ReduxStore } from 'src/modules/reducer'

declare module 'next' {
  type ExNextPageContext = Omit<NextPageContext, 'store'> & {
    req?: Express.Request
    res?: Express.Response
    store: Store<ReduxStore>
  }
}

declare module 'next/document' {
  type ExDocumentContext = DocumentContext & {
    req?: Express.Request
    res?: Express.Response
  }
}

declare module '*.svg'
