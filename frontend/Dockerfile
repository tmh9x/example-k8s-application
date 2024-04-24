FROM node:lts-alpine as base
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build:prod

FROM nginx:alpine as final
COPY --from=base /app/dist/frontend/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]