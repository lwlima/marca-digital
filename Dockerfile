# syntax=docker/dockerfile:1

FROM node:22-alpine AS base
WORKDIR /app

FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci

FROM deps AS development
COPY . .
RUN chmod +x docker/dev-entrypoint.sh
EXPOSE 4321
CMD ["docker/dev-entrypoint.sh"]

FROM deps AS build
ARG PUBLIC_GA_MEASUREMENT_ID
ARG PUBLIC_SITE_URL=https://marcadigital.dev.br
ENV PUBLIC_GA_MEASUREMENT_ID=$PUBLIC_GA_MEASUREMENT_ID
ENV PUBLIC_SITE_URL=$PUBLIC_SITE_URL
COPY . .
RUN npm run build

FROM nginx:alpine AS production
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

FROM mcr.microsoft.com/playwright:v1.61.1-noble AS test
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
ENV CI=true
CMD ["npm", "run", "test:e2e"]
