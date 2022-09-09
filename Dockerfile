FROM node:14-alpine
WORKDIR /app
COPY ./app/ /app
RUN mkdir /node_modules
RUN yarn install
EXPOSE 9000
