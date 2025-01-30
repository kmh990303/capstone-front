FROM node:18.18.0-alpine as deps

WORKDIR /app

COPY package.json ./package.json
COPY package-lock.json ./package-lock.json

RUN npm ci


###########################################################

FROM node:18.18.0-alpine as build

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . ./

RUN npm run build


###########################################################

FROM node:18-alpine3.16 as runner

COPY --from=build /app/public ./public
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./next/static

EXPOSE 3000

ENTRYPOINT ["node", "server.js"]
