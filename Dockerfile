FROM node:18.12.1


LABEL author = "Ryan Pedersen"


WORKDIR /app


COPY package*.json ./


RUN npm install


COPY . ./

CMD ["npm","start"]

ENV NODE_ENV=production

EXPOSE 3001