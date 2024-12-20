FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install typescript @types/node
RUN npm install prettier eslint-config-prettier eslint-plugin-prettier tsx tsc-alias rimraf nodemon

COPY . .

RUN npm run build

CMD [ "npm", "run", "start" ]