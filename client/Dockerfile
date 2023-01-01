FROM node:lts-alpine

RUN mkdir /app
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY tsconfig.json ./
COPY public public
COPY src src

RUN npm run build && \
    npm install -g serve
    
CMD serve -s build
