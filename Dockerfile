# syntax=docker/dockerfile:1

FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN yarn dev:server
CMD ["yarn", "dev:ui"]
EXPOSE 3005