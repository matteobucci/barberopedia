FROM node:18-alpine AS deps

RUN npm install

FROM node:18-alpine AS builder
ARG APP_ENV=dev
WORKDIR /app
COPY . .
COPY .env.$APP_ENV .env
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /usr/app
ARG APP_ENV=dev
COPY --from=builder /app/build ./build
COPY package.json ./
COPY .env.$APP_ENV .env
RUN npm install -g pnpm
RUN pnpm install --prod
USER node
ENV NODE_ENV="production"
CMD ["npm", "start"]
