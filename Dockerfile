# Dockerfile

FROM node:18-alpine AS builder

WORKDIR /usr/src

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

ARG ENV_FILE

COPY $ENV_FILE ./.env

EXPOSE 3000

CMD ["npm", "run", "start"]
