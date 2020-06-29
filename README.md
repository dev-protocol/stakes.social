## stakes.social

### how to run on local

```bash
# install npm packages
$ yarn

# build deps
$ yarn build

# web run
$ yarn workspace @dev/web start:dev
```

### how to update locale files

1. you add some files and codes in `packages/i18n/src/locales/xxxx`

2. run next commnad

```bash
> yarn workspace @dev/i18n build
```

When you run this command, somefiles such as `packages/web/public/locales/{en|jp}/xxxx.json` will be generated automatically.
