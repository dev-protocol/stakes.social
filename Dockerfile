FROM node:12

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./
RUN yarn install

COPY . .
RUN yarn install

ENV END_POINT https://api.devprtcl.com/v1/graphql
RUN yarn build

EXPOSE 3000

CMD [ "yarn", "workspace", "@dev/web", "start:prod" ]
