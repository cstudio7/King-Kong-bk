FROM node:16

#create app dir
WORKDIR /usr/src/app

COPY package*.json ./


RUN yarn install

#Bundle Source Code 
COPY . .

COPY .env.example .env


CMD [ "yarn", "run",  "docker:start"]