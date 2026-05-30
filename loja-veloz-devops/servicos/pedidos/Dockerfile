# --- ESTÁGIO 1: BUILDER ---
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .

# --- ESTÁGIO 2: RUNNER ---
FROM node:18-alpine
WORKDIR /app
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/app.js .
USER appuser
EXPOSE 3000
CMD ["node", "app.js"]