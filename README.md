## nextjs-firebase-boilerplate

### what is this?

`This is the type-safe frontend SSR boilerplate using nextjs, preact, typescript and firebase.`

### feature

- support refreshing token on server when token is expired.
- serving on serverless platform because we use firestore as a session store.
- ~using preact for minimizing a bundle size~ // I will fix bug currently
- support monorepo and we use nest.js as backend framework
- support ionic react for PWA and native app using capacitor

### setup

1. prepare firebase project
2. save client key as `firebase.client.key.json` in packages/web and packages/web-graphql and packages/app/src/firebase
3. save admin key as `firebase.admin.key.json` in packages/web and packages/web-graphql and packages/backend

4. prepare dotenv in packages/web and packages/backend and packages/web-graphql

```bash
> cp .env.tmpl .env
```

- replace a value of `FIREBASE_CLIENT_API_KEY` to active key.

### Apps

| Package                                               | Localhost             | Prodction                 |
| :---------------------------------------------------- | :-------------------- | :------------------------ |
| **[[next.js] web](./packages/web)**                   | http://localhost:3000 | web.\*                    |
| **[[nestjs] backend](./packages/backend)**            | http://localhost:3001 | backend.\*                |
| **[[ionic] app](./packages/app)**                     | http://localhost:3002 | app.\*                    |
| **[[nestjs] gql-server](./packages/backend-graphql)** | http://localhost:3003 | backend-graphql.\*        |
| **[[electron] electron](./packages/electron)**        | http://localhost:3004 | native app                |
| **[[nextks] web-graphQL](./packages/web-graphql)**    | http://localhost:3005 | graphQL supported web app |

### how to run on local

```bash
# install npm packages
$ yarn

# build deps
$ yarn build

# run web and backend by a commnad
$ yarn start

# web run
$ yarn workspace @dev/web start:dev

# backend run
$ yarn workspace @dev/backend start:dev

# ionic run
$ yarn workspace @dev/app start:dev

# electron run
$ yarn workspace @dev/electron start:dev
```
