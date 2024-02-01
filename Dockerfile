FROM node:18-alpine

WORKDIR /site/

COPY . ./

RUN npm install

CMD [ "npm", "start" ]