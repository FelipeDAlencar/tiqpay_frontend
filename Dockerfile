# Etapa de build
FROM node:22.20.0 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# RUN npm run build

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
