FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install typescript @types/node rimraf

COPY . .

RUN npm run build

CMD [ "npm", "run", "start" ]