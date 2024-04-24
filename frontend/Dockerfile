FROM node:lts-alpine as base
WORKDIR /app
COPY package*.json .
RUN npm ci --omit=dev
COPY . .
RUN npm run build

FROM nginx:alpine as final
COPY --from=base /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]