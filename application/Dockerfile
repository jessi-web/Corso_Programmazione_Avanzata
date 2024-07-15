FROM node:lts-stretch-slim

WORKDIR /home/node/app
COPY ./package*.json ./
COPY ./Certificates ./Certificates

# Install dependencies
RUN npm install
RUN npm install -g ts-node typescript '@types/node'

# Copy the rest of the application
COPY . .

CMD ["ts-node", "source/index.ts"]

