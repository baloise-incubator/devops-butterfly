FROM node:12.8-alpine AS builder

COPY package.json package-lock.json ./
RUN npm i && mkdir /app && mv ./node_modules ./app
WORKDIR /app
COPY . .

RUN npm run build

FROM bitnami/nginx:1.16
COPY --from=builder /app/dist /app/