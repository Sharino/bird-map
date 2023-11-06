FROM node:18-alpine3.17 as build
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build

FROM nginx:mainline-alpine3.18-slim
COPY --from=build /app/dist /usr/share/nginx/html
RUN mkdir /usr/share/nginx/html/data