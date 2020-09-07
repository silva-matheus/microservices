FROM node:latest AS builder
WORKDIR /order
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build


FROM node:latest
WORKDIR /order
COPY --from=builder /order ./
CMD ["npm", "run", "start:prod"]