FROM node:18

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./
RUN yarn install

COPY . .
RUN yarn install

RUN yarn build

EXPOSE 3000

CMD [ "yarn", "workspace", "@dev/web", "start:prod" ]
