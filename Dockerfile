FROM node:18-alpine

RUN mkdir -p /app

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . /app

RUN npm run build --prod

EXPOSE 4200

ENTRYPOINT [ "npm", "start" ]

