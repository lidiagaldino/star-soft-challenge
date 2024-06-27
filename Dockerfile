FROM node:21-slim

WORKDIR /home/node/app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .

RUN npm run build

CMD [ "npm", "run", "start" ]
