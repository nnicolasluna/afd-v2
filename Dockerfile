#### Build
FROM node:20.11.1-alpine3.19 AS build

WORKDIR /app

COPY . .

RUN npm install && npm run build

#### RUN
FROM nginxinc/nginx-unprivileged:stable-alpine

COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist/adf-v2 /usr/share/nginx/html

EXPOSE 4200

CMD ["nginx", "-g", "daemon off;"]