# Stage 1
FROM node:21 AS backend-builder

# setup the working dir
WORKDIR /app

# code
COPY . .

# packages install
RUN npm i --verbose

# tests

# Stage 2
FROM node:21-slim

# setup the working dir
WORKDIR /app

# copy the above stage as compressed
COPY --from=backend-builder /app .

COPY .env.docker .env

# Port
EXPOSE 31100

# App
CMD ["npm", "start"]
