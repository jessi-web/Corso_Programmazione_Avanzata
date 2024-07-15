FROM node:lts-stretch-slim

#WORKDIR /home/node/app
WORKDIR /home/ubuntu/Corso_Programmazione_Avanzata/application
COPY ./Package*.json ./
COPY ./Certificates ./Certificates

#RUN npm install --global nodemon
RUN npm install
RUN npm install -g ts-node typescript '@types/node'

CMD ["ts-node","source/index.ts"]
