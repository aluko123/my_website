# Stage 1: Build the app
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY vite.config.* ./
COPY tsconfig*.json ./
COPY . .

RUN npm ci
RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy built assets from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx config (for SPA routing)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"] 