FROM node:lts AS builder

ENV NODE_ENV production

WORKDIR /app 

COPY package.json /app/package.json
RUN npm install

COPY . /app

RUN yarn run build
ENV CI=true
ENV PORT=3000
EXPOSE 3000

CMD [ "npm", "start"]