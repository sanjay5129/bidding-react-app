FROM node:18-alpine
RUN apk add yarn
WORKDIR /usr/src/app

COPY ./package.json .
COPY ./lerna.json .
COPY ./yarn.lock .
COPY ./.env .

COPY ./packages/server/package.json ./packages/server/package.json

RUN yarn install

COPY ./packages/server ./packages/server

CMD ["yarn", "workspace", "server", "start:dev"]