![Stakes.socials logo](https://user-images.githubusercontent.com/73097560/126628639-b6756dd8-453e-4ab6-9d72-09ac4e9f16b0.png)

Stakes.social is the first official Dapp built on the Dev Protocol, released in June 2020. Stakes.social is a new sponsor platform where both developers and sponsors are rewarded with tokens if they support their favorite projects by staking DEV tokens.

![image](https://user-images.githubusercontent.com/73097560/132281122-64310cca-f8b6-40ba-8a4d-1327e415bcff.png)

[Live View](https://stakes.social/)

## Contributing guidelines

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. Be sure to check our [contributing guidelines](https://github.com/dev-protocol/stakes.social/blob/main/.github/CONTRIBUTING.md)

## Installation / Requirements

```bash
# install npm packages
$ yarn

# build deps
$ yarn build

# web run
$ yarn workspace @dev/web start:dev
```

### How to set environment variables

Use [direnv](https://direnv.net/) to set environment variables.

1. **Install direnv**: Install direnv on your local by referring to the [direnv guide](https://direnv.net/docs/installation.html)

```bash
# Example for Ubuntu
sudo apt update
sudo apt install direnv
```

2. **Add hooks**: Add direnv hooks to your shell by following the [direnv guide](https://direnv.net/docs/hook.html)
3. Create `.envrc` file to define environment variables

```bash
# Example .envrc
MY_EMOJI="🎎"
```

#### Do you see "direnv: error /path/to/.envrc is blocked. Run\` direnv allow\` to approve its content "?

Run direnv as the following:

```bash
direnv allow all
```

## License

<a href="https://github.com/dev-protocol/stakes.social/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg" width="13%"></a>
